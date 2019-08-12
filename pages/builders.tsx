import * as React from 'react';
import { Header } from '../src/components/Header/Header';
import { CardGrid } from '../src/components/CardGrid/CardGrid';
import { Card } from '../src/components/Card/Card';
import { BuildDiagram } from '../src/components/BuildDiagram/BuildDiagram';

const Builders: React.FC = () => (
  <div>
    <Header diagram={() => <BuildDiagram />}>
      <h1>World builders</h1>
      <p>
        In Atlas your content occupies a space in a 2D world. Grab a builder to take your content and arrange it in a
        world, or do it yourself and position your content exactly where you need it.
      </p>
    </Header>

    <CardGrid>
      <Card logo="/static/images/book-builder.png" status="roadMap" title="Book builder">
        Use what poweres the Universal Viewer to import IIIF content into Atlas. Manifesto supports a large amount of
        IIIF content from all of the largest institutions.
      </Card>

      <Card logo="/static/images/grid-builder.png" status="development" title="Grid builder">
        A new framework in development implementing the IIIF Presentation 3 specification only, upgrading Presentation 2
        resources.
      </Card>

      <Card logo="/static/images/minimap-builder.png" status="roadMap" title="Mini-map Builder">
        A built in loader for image services, using a method for learning the format of image services, and predicting
        the properties of future requests, drastically reducing the number of service requests.
      </Card>

      <Card logo="/static/images/scroll-builder.png" status="roadMap" title="Scroll builder">
        A built in loader for image services, using a method for learning the format of image services, and predicting
        the properties of future requests, drastically reducing the number of service requests.
      </Card>

      <Card logo="/static/images/flexbox-builder.png" status="roadMap" title="Flexbox builder">
        Powered by Facebook's{' '}
        <a href="https://yogalayout.com" target="_blank">
          Yoga library
        </a>{' '}
        this builder allows you to use the full flex-box specification for laying out your items, using CSS-like
        properties to control the flow, direction and size of your items.
      </Card>
    </CardGrid>
  </div>
);

export default Builders;
