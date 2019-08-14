import * as React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

export const translate = (x: number, y: number) => new Float32Array([1, 0, x, 0, 1, y, 0, 0, 1]);
export const scale = (factor: number) => new Float32Array([factor, 0, 0, 0, factor, 0, 0, 0, 1]);

export const TransformationDiagram: React.FC = () => {
  const inputDna = [1, 11, 24, 35, 43];
  const [transformIdx, setTransform] = useState(0);

  const transforms = [
    { name: 'translateX( 10px )', points: [1, 0, 10, 0, 1, 0, 0, 0, 1] },
    { name: 'translateY( 15px )', points: [1, 0, 0, 0, 1, 15, 0, 0, 1] },
    { name: 'translate( 47px, 39px )', points: [1, 0, 47, 0, 1, 39, 0, 0, 1] },
    { name: 'scale by factor of 2', points: [2, 0, 0, 0, 2, 0, 0, 0, 1] },
  ];

  const transform = transforms[transformIdx].points;

  const outputDna = [
    inputDna[0],
    transform[0] * inputDna[1] + transform[1] * inputDna[2] + transform[2],
    transform[3] * inputDna[1] + transform[4] * inputDna[2] + transform[5],
    transform[0] * inputDna[3] + transform[1] * inputDna[4] + transform[2],
    transform[3] * inputDna[3] + transform[4] * inputDna[4] + transform[5],
  ];

  const [hoveredItem, setHoveredItem] = useState('');

  const setActiveProps = useCallback(
    str => ({
      onMouseEnter: () => setHoveredItem(str),
      onMouseLeave: () => setHoveredItem(''),
      style: { cursor: 'pointer', fill: hoveredItem === str ? '#FF007A' : '#000' },
    }),
    [hoveredItem]
  );

  return (
    <div style={{ background: '#eee', maxWidth: 700, padding: 40, border: '2px solid #ccc' }}>
      <svg width="482px" height="298px" viewBox="0 0 482 298" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-11.000000, -421.000000)">
            <g transform="translate(11.000000, 421.000000)">
              <rect x="0.5" y="0.5" width="481" height="297" />
              <g transform="translate(207.000000, 31.000000)">
                <rect x="0" y="0" width="121" height="22" />
                <rect stroke="#000000" strokeWidth="2" x="1" y="1" width="23" height="20" />
                <rect stroke="#000000" strokeWidth="2" fill="#D1FECF" x="25" y="1" width="23" height="20" />
                <rect stroke="#000000" strokeWidth="2" fill="#D1FECF" x="49" y="1" width="23" height="20" />
                <rect stroke="#000000" strokeWidth="2" fill="#D6D0FF" x="73" y="1" width="23" height="20" />
                <rect stroke="#000000" strokeWidth="2" fill="#D6D0FF" x="97" y="1" width="23" height="20" />
                <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                  <tspan x="28" y="16" {...setActiveProps('inputDna[1]')}>
                    {inputDna[1]}
                  </tspan>
                </text>
                <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                  <tspan x="8" y="17">
                    1
                  </tspan>
                </text>
                <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                  <tspan x="53" y="16" {...setActiveProps('inputDna[2]')}>
                    {inputDna[2]}
                  </tspan>
                </text>
                <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                  <tspan x="76" y="16" {...setActiveProps('inputDna[3]')}>
                    {inputDna[3]}
                  </tspan>
                </text>
                <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                  <tspan x="100" y="16" {...setActiveProps('inputDna[4]')}>
                    {inputDna[4]}
                  </tspan>
                </text>
              </g>
              <g transform="translate(206.000000, 242.000000)">
                <rect x="0" y="0" width="121" height="22" />
                <rect stroke="#000000" strokeWidth="2" x="1" y="1" width="23" height="20" />
                <rect stroke="#000000" strokeWidth="2" fill="#D1FECF" x="25" y="1" width="23" height="20" />
                <rect stroke="#000000" strokeWidth="2" fill="#D1FECF" x="49" y="1" width="23" height="20" />
                <rect stroke="#000000" strokeWidth="2" fill="#D6D0FF" x="73" y="1" width="23" height="20" />
                <rect stroke="#000000" strokeWidth="2" fill="#D6D0FF" x="97" y="1" width="23" height="20" />
                <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                  <tspan x="28" y="16">
                    {outputDna[1]}
                  </tspan>
                </text>
                <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                  <tspan x="8" y="17">
                    1
                  </tspan>
                </text>
                <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                  <tspan x="53" y="16">
                    {outputDna[2]}
                  </tspan>
                </text>
                <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                  <tspan x="76" y="16">
                    {outputDna[3]}
                  </tspan>
                </text>
                <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                  <tspan x="100" y="16">
                    {outputDna[4]}
                  </tspan>
                </text>
              </g>
              <text fontFamily="Monaco" fontSize="23" fontWeight="normal" fill="#000000">
                <tspan x="98" y="117" {...setActiveProps('transform[0]')}>
                  {transform[0]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="23" fontWeight="normal" fill="#000000">
                <tspan x="98" y="152" {...setActiveProps('transform[3]')}>
                  {transform[3]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="23" fontWeight="normal" fill="#000000">
                <tspan x="98" y="187" {...setActiveProps('transform[6]')}>
                  {transform[6]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="23" fontWeight="normal" fill="#000000">
                <tspan x="142" y="117" {...setActiveProps('transform[1]')}>
                  {transform[1]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="23" fontWeight="normal" fill="#000000">
                <tspan x="142" y="152" {...setActiveProps('transform[4]')}>
                  {transform[4]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="23" fontWeight="normal" fill="#000000">
                <tspan x="142" y="187" {...setActiveProps('transform[7]')}>
                  {transform[7]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="23" fontWeight="normal" fill="#000000">
                <tspan x="175" y="117" {...setActiveProps('transform[2]')}>
                  {transform[2]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="23" fontWeight="normal" fill="#000000">
                <tspan x="175" y="152" {...setActiveProps('transform[5]')}>
                  {transform[5]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="23" fontWeight="normal" fill="#000000">
                <tspan x="175" y="187" {...setActiveProps('transform[8]')}>
                  {transform[8]}
                </tspan>
              </text>
              <rect stroke="#000000" strokeWidth="2" fill="#D1FECF" x="263" y="116" width="199" height="19" />
              <rect stroke="#000000" strokeWidth="2" fill="#FFFFFF" x="263" y="97" width="24" height="19" />
              <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                <tspan x="268" y="112">
                  1
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="29" fontWeight="normal" fill="#000000">
                <tspan x="17" y="157">
                  t =
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                <tspan x="268" y="130" {...setActiveProps('transform[0]')}>
                  {transform[0]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                <tspan x="346" y="130" {...setActiveProps('transform[1]')}>
                  {transform[1]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                <tspan x="424" y="130" {...setActiveProps('transform[2]')}>
                  {transform[2]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#676767">
                <tspan x="290" y="132">
                  *
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#676767">
                <tspan x="370" y="132">
                  *
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#676767">
                <tspan x="335" y="129">
                  +
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#676767">
                <tspan x="413" y="129">
                  +
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#000000">
                <tspan x="305" y="129" {...setActiveProps('inputDna[1]')}>
                  {inputDna[1]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#000000">
                <tspan x="385" y="129" {...setActiveProps('inputDna[2]')}>
                  {inputDna[2]}
                </tspan>
              </text>
              <rect stroke="#000000" strokeWidth="2" fill="#D1FECF" x="263" y="135" width="199" height="19" />
              <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                <tspan x="268" y="149" {...setActiveProps('transform[3]')}>
                  {transform[3]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                <tspan x="346" y="149" {...setActiveProps('transform[4]')}>
                  {transform[4]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                <tspan x="424" y="149" {...setActiveProps('transform[5]')}>
                  {transform[5]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#676767">
                <tspan x="290" y="151">
                  *
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#676767">
                <tspan x="370" y="151">
                  *
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#676767">
                <tspan x="335" y="148">
                  +
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#676767">
                <tspan x="413" y="148">
                  +
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#000000">
                <tspan x="305" y="148" {...setActiveProps('inputDna[1]')}>
                  {inputDna[1]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#000000">
                <tspan x="385" y="148" {...setActiveProps('inputDna[2]')}>
                  {inputDna[2]}
                </tspan>
              </text>
              <rect stroke="#000000" strokeWidth="2" fill="#D6D0FF" x="263" y="154" width="199" height="19" />
              <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                <tspan x="268" y="168" {...setActiveProps('transform[0]')}>
                  {transform[0]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                <tspan x="346" y="168" {...setActiveProps('transform[1]')}>
                  {transform[1]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                <tspan x="424" y="168" {...setActiveProps('transform[2]')}>
                  {transform[2]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#676767">
                <tspan x="290" y="170">
                  *
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#676767">
                <tspan x="370" y="170">
                  *
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#676767">
                <tspan x="335" y="167">
                  +
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#676767">
                <tspan x="413" y="167">
                  +
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#000000">
                <tspan x="305" y="167" {...setActiveProps('inputDna[3]')}>
                  {inputDna[3]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#000000">
                <tspan x="385" y="167" {...setActiveProps('inputDna[4]')}>
                  {inputDna[4]}
                </tspan>
              </text>
              <rect stroke="#000000" strokeWidth="2" fill="#D6D0FF" x="263" y="173" width="199" height="19" />
              <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                <tspan x="268" y="187" {...setActiveProps('transform[3]')}>
                  {transform[3]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                <tspan x="346" y="187" {...setActiveProps('transform[4]')}>
                  {transform[4]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#000000">
                <tspan x="424" y="187" {...setActiveProps('transform[5]')}>
                  {transform[5]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#676767">
                <tspan x="290" y="189">
                  *
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#676767">
                <tspan x="370" y="189">
                  *
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#676767">
                <tspan x="335" y="186">
                  +
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#676767">
                <tspan x="413" y="186">
                  +
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#000000">
                <tspan x="305" y="186" {...setActiveProps('inputDna[3]')}>
                  {inputDna[3]}
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#000000">
                <tspan x="385" y="186" {...setActiveProps('inputDna[4]')}>
                  {inputDna[4]}
                </tspan>
              </text>
              <g transform="translate(84.000000, 91.000000)" fill="#000000">
                <rect x="121" y="0" width="9" height="3" />
                <rect x="121" y="105" width="9" height="3" />
                <rect x="0" y="105" width="9" height="3" />
                <rect x="127" y="0" width="3" height="108" />
                <rect x="0" y="0" width="9" height="3" />
                <rect x="0" y="0" width="3" height="108" />
              </g>
              <text fontFamily="Monaco" fontSize="12" fill="#000000">
                <tspan x="156" y="45">
                  input
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#000000">
                <tspan x="155" y="257">
                  output
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#000000">
                <tspan x="234" y="111">
                  vis
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#000000">
                <tspan x="237" y="130">
                  x1
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#000000">
                <tspan x="237" y="148">
                  y1
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#000000">
                <tspan x="237" y="167">
                  x2
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="12" fill="#000000">
                <tspan x="237" y="186">
                  y2
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </svg>
      <div style={{ display: 'flex' }}>
        <ul style={{ fontFamily: 'Monaco' }}>
          {transforms.map((single, idx) => (
            <li
              key={idx}
              style={{ color: idx === transformIdx ? '#FF007A' : '#000', cursor: 'pointer' }}
              onClick={() => setTransform(idx)}
            >
              {single.name}
            </li>
          ))}
        </ul>
        <div
          style={{
            position: 'relative',
            width: 100,
            height: 100,
            border: '1px solid #000',
            background: '#fff',
            margin: 5,
            marginLeft: 40,
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: inputDna[1],
              top: inputDna[2],
              width: inputDna[3] - inputDna[1],
              height: inputDna[4] - inputDna[2],
              background: '#ddd',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: outputDna[1],
              top: outputDna[2],
              width: outputDna[3] - outputDna[1],
              height: outputDna[4] - outputDna[2],
              background: '#FF007A',
            }}
          />
        </div>
      </div>
    </div>
  );
};
