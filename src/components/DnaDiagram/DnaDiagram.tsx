import * as React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';

export const DnaDiagram: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState('');

  const whenActive = useCallback(
    (str, fall = '#1B205E') => {
      return hoveredItem === str ? '#FF007A' : fall;
    },
    [hoveredItem]
  );

  const setActiveProps = useCallback(
    str => ({
      onMouseEnter: () => setHoveredItem(str),
      onMouseLeave: () => setHoveredItem(''),
      style: { cursor: 'pointer' },
    }),
    []
  );
  return (
    <div style={{ background: '#eee', maxWidth: 700, padding: 40, border: '2px solid #ccc' }}>
      <svg width="314px" height="207px" viewBox="0 0 314 207" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-34.000000, -103.000000)">
            <g transform="translate(34.000000, 101.000000)">
              <rect stroke="#A5A5A5" fill="#fff" strokeWidth="2" x="6" y="21" width="248" height="167" />
              <path d="M104.5,97 L5,20" stroke={whenActive('x1', '#EBEBEB')} strokeWidth="2" strokeLinecap="square" />
              <path d="M130,97 L254,21" stroke={whenActive('y1', '#EBEBEB')} strokeWidth="2" strokeLinecap="square" />
              <path d="M130.5,97 L5,20" stroke={whenActive('y1', '#EBEBEB')} strokeWidth="2" strokeLinecap="square" />
              <path d="M107.5,119 L5,189" stroke={whenActive('x1', '#EBEBEB')} strokeWidth="2" strokeLinecap="square" />
              <path d="M179,119 L5,189" stroke={whenActive('y2', '#EBEBEB')} strokeWidth="2" strokeLinecap="square" />
              <path d="M154.5,97 L254,21" stroke={whenActive('x2', '#EBEBEB')} strokeWidth="2" strokeLinecap="square" />
              <path
                d="M179.5,119 L255,189"
                stroke={whenActive('y2', '#EBEBEB')}
                strokeWidth="2"
                strokeLinecap="square"
              />
              <path
                d="M154.5,119 L255,189"
                stroke={whenActive('x2', '#EBEBEB')}
                strokeWidth="2"
                strokeLinecap="square"
              />
              <g transform="translate(70.000000, 97.000000)">
                <rect fill="#4D469A" x="0" y="0" width="121" height="22" />
                <rect stroke={whenActive('vis')} strokeWidth="2" x="1" y="1" width="23" height="20" />
                <rect stroke={whenActive('x1')} strokeWidth="2" x="25" y="1" width="23" height="20" />
                <rect stroke={whenActive('y1')} strokeWidth="2" x="49" y="1" width="23" height="20" />
                <rect stroke={whenActive('x2')} strokeWidth="2" x="73" y="1" width="23" height="20" />
                <rect stroke={whenActive('y2')} strokeWidth="2" x="97" y="1" width="23" height="20" />
              </g>
              <circle stroke="#FFFFFF" fill="#FF007A" cx="5.5" cy="20.5" r="4.5" />
              <circle stroke="#FFFFFF" fill="#FF007A" cx="253.5" cy="20.5" r="4.5" />
              <circle stroke="#FFFFFF" fill="#FF007A" cx="5.5" cy="188.5" r="4.5" />
              <circle stroke="#FFFFFF" fill="#FF007A" cx="253.5" cy="188.5" r="4.5" />
              <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#fff" {...setActiveProps('vis')}>
                <tspan x="79" y="113">
                  1
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#fff" {...setActiveProps('x1')}>
                <tspan x="103" y="113">
                  0
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#fff" {...setActiveProps('y1')}>
                <tspan x="126" y="113">
                  5
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#fff" {...setActiveProps('x2')}>
                <tspan x="146" y="113">
                  25
                </tspan>
              </text>
              <text fontFamily="Monaco" fontSize="14" fontWeight="normal" fill="#fff" {...setActiveProps('y2')}>
                <tspan x="171" y="113">
                  17
                </tspan>
              </text>
              <text
                fontFamily="Monaco"
                fontSize="12"
                fill={hoveredItem === 'x1' || hoveredItem === 'y1' ? '#FF007A' : '#000'}
              >
                <tspan x="3" y="12">
                  (0, 5)
                </tspan>
              </text>
              <text
                fontFamily="Monaco"
                fontSize="12"
                fontWeight="normal"
                fill={hoveredItem === 'x1' || hoveredItem === 'y2' ? '#FF007A' : '#000'}
              >
                <tspan x="0" y="206">
                  (0, 17)
                </tspan>
              </text>
              <text
                fontFamily="Monaco"
                fontSize="12"
                fontWeight="normal"
                fill={hoveredItem === 'x2' || hoveredItem === 'y1' ? '#FF007A' : '#000'}
              >
                <tspan x="253" y="12">
                  (25, 5)
                </tspan>
              </text>
              <text
                fontFamily="Monaco"
                fontSize="12"
                fontWeight="normal"
                fill={hoveredItem === 'x2' || hoveredItem === 'y2' ? '#FF007A' : '#000'}
              >
                <tspan x="257" y="203">
                  (25, 17)
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </svg>
      <ul style={{ paddingLeft: 10, marginBottom: 0, marginTop: 40 }}>
        <li {...setActiveProps('vis')}>0 or 1 denoting visibility</li>
        <li {...setActiveProps('x1')}>x1 - x co-ordinate of the top-left-most point</li>
        <li {...setActiveProps('y1')}>y1 - y co-ordinate of the top-left-most point</li>
        <li {...setActiveProps('x2')}>x2 - x co-ordinate of the bottom-right-most point</li>
        <li {...setActiveProps('y2')}>y2 - y co-ordinate of the bottom-right-most point</li>
      </ul>
    </div>
  );
};
