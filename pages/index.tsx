import * as React from 'react';
import { GridBox } from '../src/components/GridBox/GridBox';
import { ImportDiagram } from '../src/components/ImportDiagram/ImportDiagram';
import { BuildDiagram } from '../src/components/BuildDiagram/BuildDiagram';
import { PaintDiagram } from '../src/components/PaintDiagram/PaintDiagram';
import { ControllerDiagram } from '../src/components/ControllerDiagram/ControllerDiagram';
import { HomepageDiagram } from '../src/components/HomepageDiagram/HomepageDiagram';
import { Header } from '../src/components/Header/Header';

const IndexPage = () => {
  return (
    <div>
      <Header diagram={() => <HomepageDiagram />} homepage={true}>
        <h2>Lightweight modular deep zoom viewer.</h2>
      </Header>
      <GridBox
        buttonText="View content importers"
        buttonLink="/importers"
        title="Import your content."
        description="Take your static images, IIIF content and import them into Atlas. Keep your codebase light with only the import process you need to match your content."
      >
        <ImportDiagram />
      </GridBox>
      <GridBox
        buttonText="View builders"
        title="Build your world."
        buttonLink="/builders"
        reverse={true}
        description="In Atlas your content occupies a space in a 2D world. Grab a builder to take your content and arrange it in a world, or do it yourself and position your content exactly where you need it."
      >
        <BuildDiagram />
      </GridBox>
      <GridBox
        buttonText="View renderers"
        title="Paint your content."
        buttonLink="/renderers"
        description="In Atlas your content occupies a space in a 2D world. Grab a builder to take your content and arrange it in a world, or do it yourself and position your content exactly where you need it."
      >
        <PaintDiagram />
      </GridBox>
      <GridBox
        buttonText="View controllers"
        buttonLink="/controllers"
        title="Make it interactive."
        reverse={true}
        description="Add a controller to your world to transform user input into a changes to the world and viewport, enabling panning and zooming through mouse, keyboard, touch or even an XBox Controller."
      >
        <ControllerDiagram />
      </GridBox>
    </div>
  );
};

export default IndexPage;
