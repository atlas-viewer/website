import * as React from 'react';
import { Container } from '../../src/components/Container/Container';
import { Header } from '../../src/components/Header/Header';
import { Banner } from '../../src/components/Banner/Banner';
import { PaintDiagram } from '../../src/components/PaintDiagram/PaintDiagram';

const Internals: React.FC = () => (
  <div>
    <Header />
    <Container>
      <h1>Internals</h1>
      <p>
        Atlas has a few core components that glue the various modules together. These components work together to
        calculate what items in the World should be visible each and every frame and where they should be drawn. This is
        no small task, with a 16ms frame time to work with, the hot paths of the runtime, scheduler and dispatcher need
        to be optimised as much as possible.
      </p>

      <section>
        <h2>Runtime</h2>
        <p>
          The Runtime is the orchestrator of all of Atlas' moving parts. The primary responsibilities of the Runtime
          are:
        </p>
        <ol>
          <li>Holding the current viewport</li>
          <li>Event loop lifecycle</li>
          <li>Deciding if a frame needs to be rendered</li>
          <li>Frame drawing</li>
        </ol>
        <p>
          This may seem like a lot for a single component to do, and as it stands it is, but the code contained in the
          runtime is the hottest path when you exclude paint calls on the GPU. For this reason, keeping all of the code
          close together helps to identify areas where extra performance can be squeezed out.
        </p>
        <article>
          <h3>Holding the current viewport.</h3>
          <p>
            The main public API of the runtime is to hold 5 individual Float32 values in an Float32Array. This array is
            a raw memory buffer and is intended to be mutated at any time. The 5 values are:
          </p>
          <ol>
            <li>Smallest X position of the viewport (x1)</li>
            <li>Smallest Y position of the viewport (y1)</li>
            <li>Largest X position of the viewport (x2)</li>
            <li>Largest Y position of the viewport (y2)</li>
            <li>1 or 0 depending on visibility</li>
          </ol>
          <p>
            Every frame, the runtime will kick off a frame render. The position of the viewport will be used to
            determine if the frame has changed. If it has changed since the last frame, the frame is rendered. The
            runtime uses a 2 buffers to track the viewport changes, allowing a delta between frames to be calculated.
            This may be used in the future to enable transitions between viewport states at the runtime level.
          </p>
          <p>The runtime adds some helper methods to make working with the raw Float32Array easier.</p>
          <ul>
            <li>viewport.x</li>
            <li>viewport.y</li>
            <li>viewport.width</li>
            <li>viewport.height</li>
            <li>viewport.x1</li>
            <li>viewport.y1</li>
            <li>viewport.x2</li>
            <li>viewport.y2</li>
          </ul>
          <p>Each of these properties can be get or set, triggering the next frame to update the position.</p>
          <p>In addition to getters and setters, the runtime also calculates viewport-specific values.</p>
          <ul>
            <li>
              <strong>Bounds</strong> - This will return the maximum and minimum bounds of the viewport at the current
              zoom level. This takes into account the aspect ratio of the viewport, adding extra space in the smaller
              direction.
            </li>
            <li>
              <strong>Viewer to world</strong> - This simple abstraction will convert viewer co-ordinates to in-world
              co-ordinates. This is useful for transforming mouse-events in the DOM.
            </li>
          </ul>
          <p>
            One of the more challenging aspects of the viewport is the scale factor. This is because there is no
            variable tracking what the current scale is. The runtime knows what area of the World is being rendered, but
            it does not track what resolution that section is being rendered at. During the render, the runtime will
            query the renderer to get the current scale.
          </p>
          <p>
            As a result of this limitation, the runtime contains a helper to <strong>setScale()</strong> at a specific
            origin. This scale factor is the factor in which the scale has increased or decreased. This allows it to
            work independently of the resolution being drawn at.
          </p>
        </article>
        <article>
          <h3>Event loop lifecycle</h3>
          <p>
            The runtime offers one more API for starting and stopping an event loop. When you construct a runtime it
            will automatically start an event loop. The event loop won't render anything until the renderer is ready.
            When the event loop is running, you can stop it with the stop() method. This will completely stop the event
            loop, and make the renderer completely static. The stop() method returns another function that when called
            will restart the event loop.
          </p>
        </article>

        <article>
          <h3>Deciding if a frame needs to be rendered</h3>
          <p>
            In order to maintain performance, the runtime will try not to render a frame if it is not needed. There is a
            balance that needs to be struck between checking if a frame doesn't need to be rendered and simply rendering
            it. If it takes 2ms to check if a frame needs to be rendered, then its probably worth rendering more frames
            and gaining an extra 2ms budget. The following checks are made each frame
          </p>
          <ol>
            <li>The very first render</li>
            <li>When a pending update flag is detected</li>
            <li>When a pending update flag is detected on the renderer</li>
            <li>Last target buffer's value does not match previous buffer</li>
          </ol>
          <p>
            When all of these are statements are false, the frame is skipped. This idle mode is extremely efficient,
            checking only a handful of boolean values and a few jump statements.
          </p>
        </article>

        <article>
          <h3>Frame drawing</h3>
          <p>
            With the viewport state managed, the next most important job of the runtime is to organise the components of
            Atlas and call their methods during the lifecycle of a frame render. The lifecycle is roughly the following
          </p>
          <ol>
            <li>Check if frame can be rendered</li>
            <li>Call beforeFrame on the renderer</li>
            <li>Request the scaleFactor from the renderer</li>
            <li>Pass the World, target and scale to the renderer to get back the points to render</li>
            <li>
              Loop the points
              <ol>
                <li>Extract the layer, point and position transformation</li>
                <li>Pass the layer to the renderer in the prepareLayer step</li>
                <li>Transform the position</li>
                <li>Count the amount of tiles that make up the image</li>
                <li>
                  Loop the tiles
                  <ol>
                    <li>Skip the tile if its marked as off-screen</li>
                    <li>
                      Call paint on the renderer, passing the layer and position (<strong>hottest path</strong>)
                    </li>
                  </ol>
                </li>
                <li>Call afterPaintLayer on the renderer, passing the layer</li>
              </ol>
            </li>
            <li>Call afterFrame on the renderer</li>
            <li>Set the last frame position to the second buffer</li>
            <li>Check if there are pending updates, triggering a guaranteed next frame</li>
          </ol>
        </article>
      </section>

      <section>
        <h2>Scheduler</h2>
        <p>
          The scheduler is a new component being built for Atlas that will operate in the short time between frame
          renders. This time will be fully utilised by the scheduler, with small units of functionality being called
          until the time runs out. Each task has a priority, ensuring critical events are handled. The advantage of
          funnelling tasks through a single scheduler is perceived performance.
        </p>
        <p>
          If Atlas is still managing to run at 60 frames per second, but is loading HTTP requests a little slower than
          normal, that is preferable to having a choppy frame stuttering.
        </p>
        <p>
          User input and events will generally be bumped to the top of the priority, with rendering related items being
          next and finally background tasks, image service predictions or eager loading tasks being done during idle
          times at the lowest priority.
        </p>
      </section>

      <section>
        <h2>Dispatcher</h2>
        <p>
          The synthetic event dispatcher is another new addition to Atlas. It is a synthetic event system, inspired by
          both the Browser and React event systems. When an event is triggered at a position, or on a target it first
          starts at the root node (in Atlas, this is the World) and makes it's way down the tree to the target (World ->
          World Item -> Spacial Content -> Layer -> Tile). At each level, a capture event is dispatched. At this point,
          the event may be handled and it will stop propagating down the tree. These events won't hold all of the data
          for the event, since it has not yet reached it's target.
        </p>
        <p>
          Once it reaches the target of the event, the main event is dispatched with all of the parameters. The event is
          handled, and if it's not been instructed not to, it will bubble back up the event, dispatching a bubble event
          at each layer, this time containing all of the event information, including events. This is where events can
          be delegated. For example, a tiled image may have delegated events attached for each individual tile, treating
          the image a single large plane.
        </p>
        <p>
          The dispatcher will be used throughout all of Atlas, especially in the controller. This will be used to create
          generic controller that work off of synthetic events. The controllers for different environments will become
          bridges or adapter from one event system (e.g. the DOM) to the Atlas event system.
        </p>
        <p>
          The event system is a means to an end. The primary focus is, as always, performance. Traversing trees is slow.
          The event code needs to be able to scale, and only start running more expensive operations when it detects an
          event handler.
        </p>
      </section>
    </Container>
    <Banner title="Documentation" subtitle="Learn more about Atlas" link="/docs">
      <PaintDiagram />
    </Banner>
  </div>
);

export default Internals;
