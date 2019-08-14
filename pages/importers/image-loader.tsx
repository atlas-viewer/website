import * as React from 'react';
import { Header } from '../../src/components/Header/Header';
import { Container } from '../../src/components/Container/Container';
import { Highlight } from 'react-fast-highlight';
import './_code.scss';

const installCode = `
  yarn add @atlas-viewer/image-loader
`;

const usage = `
import { ImageLoader } from '@atlas-viewer/image-loader';
  
const loader = new ImageLoader();
  
loader.add('http://.../image.jpg');
`;

const ImageLoader: React.FC = () => (
  <div>
    <Header />
    <Container>
      <h1>Image loader</h1>
      <p>
        Simple loader for importing images of various formats into the world. Supports multiple qualities for the same
        image.
        <h4>Installation</h4>
        <Highlight languages={['bash']}>{installCode.trim()}</Highlight>
        <h4>Usage</h4>
        <Highlight languages={['js']}>{usage.trim()}</Highlight>
      </p>
    </Container>
  </div>
);

export default ImageLoader;
