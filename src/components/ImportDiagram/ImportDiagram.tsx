import * as React from 'react';

export const ImportDiagram: React.FC = () => (
  <svg width="100%" viewBox="0 0 401 305" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter x="-40.7%" y="-75.3%" width="181.5%" height="250.6%" filterUnits="objectBoundingBox" id="filter-1">
        <feOffset dx="0" dy="33" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation="18.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.363335883 0"
          type="matrix"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-76.000000, -724.000000)">
        <g transform="translate(112.000000, 724.000000)">
          <g opacity={0.8} filter="url(#filter-1)" transform="translate(0.000000, 60.000000)">
            <polygon fill="#3737B2" points="169 178 0 92.9801325 0 80 169 165.019868" />
            <polygon fill="#7171F5" points="169 178 329 97.9616725 329 85 169 165.038328" />
            <polygon fill="#4B4BD2" points="0 80.0687623 159.652259 0 329 84.9312377 169.347741 165" />
          </g>
          <g opacity={0.8} transform="translate(0.000000, 32.000000)">
            <polygon fill="#3737B2" points="169 176 0 91.8476821 0 79 169 163.152318" />
            <polygon fill="#7171F5" points="169 176 329 96.8222997 329 84 169 163.1777" />
            <polygon fill="#4B4BD2" points="0 79.5834971 159.652259 0 329 84.4165029 169.347741 164" />
          </g>
          <g opacity={0.8}>
            <polygon fill="#3737B2" points="169 178 0 92.9801325 0 80 169 165.019868" />
            <polygon fill="#7171F5" points="169 178 329 97.9616725 329 85 169 165.038328" />
            <polygon fill="#4B4BD2" points="0 80.0687623 159.652259 0 329 84.9312377 169.347741 165" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
