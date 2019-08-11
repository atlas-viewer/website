import * as React from 'react';
import { Header } from '../src/components/Header/Header';
import { Card } from '../src/components/Card/Card';
import { CardGrid } from '../src/components/CardGrid/CardGrid';
import { PaintDiagram } from '../src/components/PaintDiagram/PaintDiagram';

const Importers: React.FC = () => {
  return (
    <div>
      <Header diagram={() => <PaintDiagram />}>
        <h1>Renderers</h1>
        <p>
          Take your world and paint it somewhere. An HTML5 Canvas element, plain HTML or embedded on a 2D plane in a 3D
          world. Atlas keeps track of the positions of your content, and what’s visible.
        </p>
      </Header>

      <CardGrid>
        <Card logo="/static/images/html.png" status="development" title="HTML5 canvas">
          The most common renderer for output a smooth and performance deep zoom experience.
        </Card>

        <Card logo="/static/images/html.png" status="development" title="HTML image">
          A simple, static or interactive option using only HTML image tags. Perfect for server-side rendering options
          or layouts for pages.
        </Card>

        <Card logo="/static/images/debug.png" status="development" title="Debug renderer">
          A renderer for development that shows all of the information under the hood. Great for debugging issues or
          just seeing how Atlas is understanding your content.
        </Card>

        <Card logo="/static/images/react.png" status="roadMap" title="React renderer">
          A complete solution for using Atlas in React, a custom renderer exposing React components that can be composed
          together, passed a world and allows for declarative population of the world.
        </Card>

        <Card logo="/static/images/a-frame.png" status="roadMap" title="A-Frame renderer">
          Render your deep zoom experience on a 2D plane embedded in a 3D A-Frame world, allowing VR experiences to take
          advantage of Atlas.
        </Card>

        <Card logo="/static/images/web-gl.png" status="roadMap" title="WebGL renderer">
          A complex, but fast option for rendering. With the added performance of WebGL and a variety of custom shaders
          to create a unique and visually stunning presentation of images.
        </Card>

        <Card logo="/static/images/vue.png" status="roadMap" title="VueJS renderer">
          A complete solution for using Atlas with Vue. A component based system with deep integration with the Vue
          framework.
        </Card>
      </CardGrid>
    </div>
  );
};

export default Importers;
