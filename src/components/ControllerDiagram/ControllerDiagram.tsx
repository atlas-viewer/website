import * as React from 'react';

export const ControllerDiagram: React.FC = () => (
  <svg width="100%" viewBox="0 0 580 323" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <polygon id="path-1" points="156 127.5 290.5 60 425 127.5 290.5 195" />
      <filter x="-32.0%" y="-48.1%" width="163.9%" height="292.6%" filterUnits="objectBoundingBox" id="filter-2">
        <feOffset dx="0" dy="109" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation="10.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.190586757 0"
          type="matrix"
          in="shadowBlurOuter1"
        />
      </filter>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-624.000000, -1876.000000)">
        <g transform="translate(624.000000, 1876.000000)">
          <polygon opacity={0.8} fill="#3737B2" points="290 149 155 81.2608696 155 67 290 134.73913" />
          <polygon opacity={0.8} fill="#7171F5" points="290 149 425 81.2608696 425 67 290 134.73913" />
          <polygon opacity={0.8} fill="#4B4BD2" points="156 67.5 290.5 0 425 67.5 290.5 135" />
          <polygon opacity={0.8} fill="#3737B2" points="445 226 310 158.26087 310 144 445 211.73913" />
          <polygon opacity={0.8} fill="#161650" points="445 226 580 158.26087 580 144 445 211.73913" />
          <polygon opacity={0.8} fill="#4B4BD2" points="311 144.5 445.5 77 580 144.5 445.5 212" />
          <polygon opacity={0.8} fill="#3737B2" points="135 229 0 161.26087 0 147 135 214.73913" />
          <polygon opacity={0.8} fill="#7171F5" points="135 229 270 161.26087 270 147 135 214.73913" />
          <polygon opacity={0.8} fill="#4B4BD2" points="0 147.5 134.5 80 269 147.5 134.5 215" />
          <polygon opacity={0.8} fill="#3737B2" points="290 209 155 141.26087 155 127 290 194.73913" />
          <polygon opacity={0.8} fill="#7171F5" points="290 209 425 141.26087 425 127 290 194.73913" />
          <g opacity={0.8}>
            <use fill="black" fillOpacity="1" filter="url(#filter-2)" xlinkHref="#path-1" />
            <use fill="#4B4BD2" fillRule="evenodd" xlinkHref="#path-1" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
