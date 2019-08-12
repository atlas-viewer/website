import * as React from 'react';
import { Header } from '../src/components/Header/Header';
import { ImportDiagram } from '../src/components/ImportDiagram/ImportDiagram';
import { Card } from '../src/components/Card/Card';
import { CardGrid } from '../src/components/CardGrid/CardGrid';

const Importers: React.FC = () => {
  return (
    <div>
      <Header diagram={() => <ImportDiagram />}>
        <h1>Content Importers</h1>
        <p>
          Take your static images or IIIF content and import them into Atlas. Keep your codebase light with only the
          import process you need to match your content.
        </p>
      </Header>

      <CardGrid>
        <Card logo="/static/images/uv-logo.png" status="roadMap" title="Manifesto">
          Use what powers the Universal Viewer to import IIIF content into Atlas. Manifesto supports a large amount of
          IIIF content from all of the largest institutions.
        </Card>

        <Card logo="/static/images/hyperion-logo.png" status="development" title="Hyperion">
          A new framework in development implementing the IIIF Presentation 3 specification only, upgrading Presentation
          2 resources.
        </Card>

        <Card logo="/static/images/image-service.png" status="development" title="Image service">
          A built in loader for image services, using a method for learning the format of image services, and predicting
          the properties of future requests, drastically reducing the number of service requests.
        </Card>

        <Card logo="/static/images/image-loader.png" status="development" title="Image loader">
          Simple loader for importing images of various formats into the world. Supports multiple qualities for the same 
          image.
        </Card>
      </CardGrid>
    </div>
  );
};

export default Importers;
