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
      <Card logo="/static/images/minimap-builder.png" buttonLink="/docs/internals" title="Atlas internals" status="documentation">
        Dive into the details of how the Atlas runtime works.
      </Card>

      <Card logo="/static/images/image-service.png" buttonLink="/docs/dna" title="DNA" status="documentation">
        See how the performant DNA works in Atlas.
      </Card>
    </CardGrid>
  </div>
);

export default Documentation;
