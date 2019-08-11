import * as React from 'react';
import { Header } from '../src/components/Header/Header';
import { CardGrid } from '../src/components/CardGrid/CardGrid';
import { Card } from '../src/components/Card/Card';
import { BuildDiagram } from '../src/components/BuildDiagram/BuildDiagram';

const RoadMap: React.FC = () => (
  <div>
    <Header diagram={() => <BuildDiagram />}>
      <h1>Roadmap</h1>
      <p>
        Atlas is a long way from being feature complete and is constantly growing. Explore the roadmap to see what's
        coming up or jump in and contribute on Github. Below is the initial order of operations.
      </p>
    </Header>

    <div style={{ maxWidth: 1100, margin: 'auto', padding: 10, marginTop: 20 }}>
      <h2 style={{ color: '#F11367' }}>Phase 1</h2>
      <p>The components required to get Atlas into a production state, with IIIF and image support.</p>
    </div>

    <CardGrid>
      <Card hideLink={true} logo="/static/images/grid-builder.png" status="development" title="Grid builder">
        A new framework in development implementing the IIIF Presentation 3 specification only, upgrading Presentation 2
        resources.
      </Card>
      <Card hideLink={true} logo="/static/images/scroll-builder.png" status="roadMap" title="Image loader">
        A built in loader for image services, using a method for learning the format of image services, and predicting
        the properties of future requests, drastically reducing the number of service requests.
      </Card>
      <Card hideLink={true} logo="/static/images/popmotion.png" status="development" title="Popmotion">
        The reference implementation of the controller specification, using Popmotion to enable a smooth pan, zoom and
        navigation for an HTML based renderer.
      </Card>
      <Card hideLink={true} logo="/static/images/hyperion-logo.png" status="development" title="Hyperion">
        A new framework in development implementing the IIIF Presentation 3 specification only, upgrading Presentation 2
        resources.
      </Card>

      <Card hideLink={true} logo="/static/images/image-service.png" status="development" title="Image service">
        A built in loader for image services, using a method for learning the format of image services, and predicting
        the properties of future requests, drastically reducing the number of service requests.
      </Card>

      <Card hideLink={true} logo="/static/images/html.png" status="development" title="HTML5 canvas">
        The most common renderer for output a smooth and performance deep zoom experience.
      </Card>
    </CardGrid>

    <div style={{ maxWidth: 1080, margin: 'auto', padding: 10, marginTop: 20 }}>
      <h2 style={{ color: '#F11367' }}>Phase 2</h2>
      <p>The IIIF phase, getting all of the pieces needed to display a wide variety of IIIF.</p>
    </div>
    <CardGrid>
      <Card hideLink={true} logo="/static/images/uv-logo.png" status="roadMap" title="Manifesto">
        Use what powers the Universal Viewer to import IIIF content into Atlas. Manifesto supports a large amount of
        IIIF content from all of the largest institutions.
      </Card>

      <Card hideLink={true} logo="/static/images/book-builder.png" status="roadMap" title="Book builder">
        Use what poweres the Universal Viewer to import IIIF content into Atlas. Manifesto supports a large amount of
        IIIF content from all of the largest institutions.
      </Card>

      <Card hideLink={true} logo="/static/images/scroll-builder.png" status="roadMap" title="Image loader">
        A built in loader for image services, using a method for learning the format of image services, and predicting
        the properties of future requests, drastically reducing the number of service requests.
      </Card>
    </CardGrid>

    <div style={{ maxWidth: 1080, margin: 'auto', padding: 10, marginTop: 20 }}>
      <h2 style={{ color: '#F11367' }}>Phase 3</h2>
      <p>The Frameworks</p>
    </div>
    <CardGrid>
      <Card hideLink={true} logo="/static/images/react.png" status="roadMap" title="React renderer">
        A complete solution for using Atlas in React, a custom renderer exposing React components that can be composed
        together, passed a world and allows for declarative population of the world.
      </Card>

      <Card hideLink={true} logo="/static/images/a-frame.png" status="roadMap" title="A-Frame renderer">
        Render your deep zoom experience on a 2D plane embedded in a 3D A-Frame world, allowing VR experiences to take
        advantage of Atlas.
      </Card>

      <Card hideLink={true} logo="/static/images/vue.png" status="roadMap" title="VueJS renderer">
        A complete solution for using Atlas with Vue. A component based system with deep integration with the Vue
        framework.
      </Card>

      <Card hideLink={true} logo="/static/images/a-frame.png" status="roadMap" title="A-Frame controller">
        Paired with the A-Frame renderer this allows a user to control Atlas from inside a 3D or VR world.
      </Card>

      <Card hideLink={true} logo="/static/images/flexbox-builder.png" status="roadMap" title="Image loader">
        Powered by Facebook's{' '}
        <a href="https://yogalayout.com" target="_blank">
          Yoga library
        </a>{' '}
        this builder allows you to use the full flex-box specification for laying out your items, using CSS-like
        properties to control the flow, direction and size of your items.
      </Card>
    </CardGrid>

    <div style={{ maxWidth: 1080, margin: 'auto', padding: 10, marginTop: 20 }}>
      <h2 style={{ color: '#F11367' }}>Future Phase</h2>
      <p>Everything else.</p>
    </div>
    <CardGrid>
      <Card hideLink={true} logo="/static/images/minimap-builder.png" status="roadMap" title="Mini-map Builder">
        A built in loader for image services, using a method for learning the format of image services, and predicting
        the properties of future requests, drastically reducing the number of service requests.
      </Card>
      <Card hideLink={true} logo="/static/images/html.png" status="development" title="HTML image">
        A simple, static or interactive option using only HTML image tags. Perfect for server-side rendering options or
        layouts for pages.
      </Card>
      <Card hideLink={true} logo="/static/images/debug.png" status="development" title="Debug renderer">
        A renderer for development that shows all of the information under the hood. Great for debugging issues or just
        seeing how Atlas is understanding your content.
      </Card>
      <Card hideLink={true} logo="/static/images/web-gl.png" status="roadMap" title="WebGL renderer">
        A complex, but fast option for rendering. With the added performance of WebGL and a variety of custom shaders to
        create a unique and visually stunning presentation of images.
      </Card>
      <Card hideLink={true} logo="/static/images/gamepad.png" status="roadMap" title="Gamepad controller">
        Using the new browser GamePad APIs you can control your Atlas world using an XBox controller or other compatible
        game pad.
      </Card>

      <Card hideLink={true} logo="/static/images/keyboard.png" status="roadMap" title="Keyboard controller">
        Focused on configuration, bind custom keyboard keys to perform various Atlas actions.
      </Card>
    </CardGrid>
  </div>
);

export default RoadMap;
