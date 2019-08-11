import * as React from 'react';
import { Header } from '../../src/components/Header/Header';
import { PaintDiagram } from '../../src/components/PaintDiagram/PaintDiagram';
import { CardGrid } from '../../src/components/CardGrid/CardGrid';
import { Card } from '../../src/components/Card/Card';

const Documentation: React.FC = () => (
  <div>
    <Header diagram={() => <PaintDiagram />}>
      <h1>Documentation</h1>
      <p>Learn how to compose Atlas components and bring a deep zoom viewing experience to your own application.</p>
    </Header>
    <CardGrid>
      <Card logo="/static/images/grid-builder.png" title="Getting started" status="documentation">
        Get Atlas installed and create a simple view and introduce the concepts required for the rest of the library.
      </Card>
    </CardGrid>
  </div>
);

export default Documentation;
