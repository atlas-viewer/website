import * as React from 'react';
import { Header } from '../../src/components/Header/Header';
import { Container } from '../../src/components/Container/Container';
import { DnaDiagram } from '../../src/components/DnaDiagram/DnaDiagram';
import { TransformationDiagram } from '../../src/components/TransformationDiagram/TransformationDiagram';

const DnaPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Container>
        <h1>DNA + Performant positioning</h1>
        <p>
          Atlas uses JavaScript Array buffers in order to get the highest performance possible. Array buffers are used
          to store values that change often, such as the viewport position, to caching for temporary variables during
          the hot path, reducing the amount of memory garbage collected each frame.
        </p>

        <section>
          <h2>What is "DNA"?</h2>
          <p>
            DNA is a strand of 32-bit floating point numbers. The values associated in each strand repeat every 5 units,
            so the length of any stand is a multiple of 5. Below is an interactive diagram explaining what each value
            represents and how it describes a rectangular region in 2D space.
          </p>
          <DnaDiagram />
          <p>
            This pattern repeats. To get the true "length" of the DNA you need to take the Buffer, frame it in a
            Float32Array and divide its length by 5.
          </p>
          <h3>Multiple sets of 5 numbers</h3>
          <p>
            Each strand of DNA describes an area in 2D space, either a single box (5 elements) or in a tiled grid of 2d
            boxes, or "5 x width x height" elements. It is also possible to represent points, with the 2nd and 4th
            elements being equal and the 3rd and 5th elements being equal.
          </p>
        </section>
        <section>
          <h2>What can you do to DNA?</h2>
          <p>
            Since the values are stored as flat Array Buffers, there is a lot that can be done to these values. In
            Atlas, there is a full set of instructions that can be performed on these "DNA strands" to transform them in
            2D space. These roughly follow 2d matrix transformations, with the exception that there is 2 points
            associated with each item, and the first float is ignored.
          </p>
          <TransformationDiagram />
          <p>
            A transformation is a simple 3x3 matrix, which is then used for the transformation. They follow the same
            rules as matrix transformations, with the addition of multiple points.
          </p>
          <ul>
            <li>
              <strong>translate</strong> - moves a box using the x, y values.
            </li>
            <li>
              <strong>scale</strong> - scales the size of the box, with an origin of 0
            </li>
            <li>
              <strong>scaleAtOrigin</strong> - scales the size of the box, at the provided origin
            </li>
            <li>
              <strong>hidePointsOutsideRegion</strong> - takes in 2 strands, a buffer of boxes (any length) and a target
              size (must be length 5), and returns any boxes that are intersected by the target.
            </li>
            <li>
              <strong>filterPoints</strong> - filter points that have been marked as off-screen
            </li>
            <li>
              <strong>compose</strong> - compose two transformations into a single transformation.
            </li>
          </ul>
        </section>
      </Container>
    </div>
  );
};

export default DnaPage;
