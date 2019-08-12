import * as React from 'react';

export const PaintDiagram: React.FC = () => (
  <svg width="100%" viewBox="0 0 593 346" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter x="-20.4%" y="-39.4%" width="140.8%" height="178.8%" filterUnits="objectBoundingBox" id="filter-1">
        <feOffset dx="0" dy="40" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation="9.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.358910621 0"
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
      <g transform="translate(-22.000000, -1469.000000)">
        <g transform="translate(40.000000, 1469.000000)">
          <g filter="url(#filter-1)" opacity="0.278041295">
            <polygon fill="#131372" points="224 288 0 175.312977 0 166 224 278.687023" />
            <polygon fill="#5D5DD2" points="224 288 557 121.263158 557 112 224 278.736842" />
            <polygon fill="#23239C" points="0 166.843854 333.089701 0 557 112.156146 223.910299 279" />
          </g>
          <g transform="translate(197.000000, 24.000000)" opacity="0.810825893">
            <polygon fill="#3737B2" points="86 108 0 65.5 0 53 86 95.6" />
            <polygon fill="#7171F5" points="86 108 191 55.4 191 43 86 95.6" />
            <polygon fill="#4B4BD2" points="0 53.0086957 105.465217 0 191 43 85.5 96" />
          </g>
          <g transform="translate(299.000000, 76.000000)" opacity="0.810825893">
            <polygon fill="#3737B2" points="85 107 0 64.406015 0 52 85 94.6" />
            <polygon fill="#7171F5" points="85 107 190 54.4 190 42 85 94.6" />
            <polygon fill="#4B4BD2" points="0 52.4565217 104.913043 0 190 42.5434783 85.0869565 95" />
          </g>
          <g transform="translate(75.000000, 85.000000)" opacity="0.810825893">
            <polygon fill="#3737B2" points="86 108 0 65.5 0 53 86 95.6" />
            <polygon fill="#7171F5" points="86 108 191 55.4 191 43 86 95.6" />
            <polygon fill="#4B4BD2" points="0 53.0086957 105.465217 0 191 43 85.5 96" />
          </g>
          <g transform="translate(176.000000, 137.000000)" opacity="0.810825893">
            <polygon fill="#3737B2" points="86 108 0 65.5 0 53 86 95.6" />
            <polygon fill="#7171F5" points="86 108 191 55.4 191 43 86 95.6" />
            <polygon fill="#4B4BD2" points="0 53.0086957 105.465217 0 191 43 85.5 96" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
