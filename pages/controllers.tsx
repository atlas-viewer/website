import * as React from 'react';
import { Header } from '../src/components/Header/Header';
import { Card } from '../src/components/Card/Card';
import { CardGrid } from '../src/components/CardGrid/CardGrid';
import { ControllerDiagram } from '../src/components/ControllerDiagram/ControllerDiagram';
import {BuildDiagram} from "../src/components/BuildDiagram/BuildDiagram";
import {Banner} from "../src/components/Banner/Banner";

const Controllers: React.FC = () => {
  return (
    <div>
      <Header diagram={() => <ControllerDiagram />}>
        <h1>Renderers</h1>
        <p>
          Take your world and paint it somewhere. An HTML5 Canvas element, plain HTML or embedded on a 2D plane in a 3D
          world. Atlas keeps track of the positions of your content, and what’s visible.
        </p>
      </Header>

      <CardGrid>
        <Card logo="/static/images/popmotion.png" status="development" title="Popmotion">
          The reference implementation of the controller specification, using Popmotion to enable a smooth pan, zoom and
          navigation for an HTML based renderer.
        </Card>
        <Card logo="/static/images/a-frame.png" status="roadMap" title="A-Frame controller">
          Paired with the A-Frame renderer this allows a user to control Atlas from inside a 3D or VR world.
        </Card>

        <Card logo="/static/images/gamepad.png" status="roadMap" title="Gamepad controller">
          Using the new browser GamePad APIs you can control your Atlas world using an XBox controller or other
          compatible game pad.
        </Card>

        <Card logo="/static/images/keyboard.png" status="roadMap" title="Keyboard controller">
          Focused on configuration, bind custom keyboard keys to perform various Atlas actions.
        </Card>
      </CardGrid>
      <Banner title="Roadmap" subtitle="See when this is all happening" link="/roadmap">
        <BuildDiagram />
      </Banner>
    </div>
  );
};

export default Controllers;
