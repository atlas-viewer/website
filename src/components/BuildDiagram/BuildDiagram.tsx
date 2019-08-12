import * as React from 'react';

export const BuildDiagram: React.FC = () => (
  <svg viewBox="0 0 492 292" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter x="-61.2%" y="-114.3%" width="222.4%" height="328.6%" id="build-a">
        <feOffset dy="40" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation="9" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd" opacity=".8">
      <g filter="url(#build-a)" transform="translate(210)">
        <path fill="#3737B2" d="M88 91L0 47.6V41l88 43.4z" />
        <path fill="#7171F5" d="M88 91l82-41.3V43L88 84.3z" />
        <path fill="#4B4BD2" d="M0 41.2L82.5 0 170 43.8 87.5 85z" />
      </g>
      <g filter="url(#build-a)" transform="translate(308 51)">
        <path fill="#3737B2" d="M88 91L0 47.6V41l88 43.4z" />
        <path fill="#7171F5" d="M88 91l82-41.3V43L88 84.3z" />
        <path fill="#4B4BD2" d="M0 41.2L82.5 0 170 43.8 87.5 85z" />
      </g>
      <g filter="url(#build-a)" transform="translate(111 48)">
        <path fill="#3737B2" d="M88 91L0 47.6V41l88 43.4z" />
        <path fill="#7171F5" d="M88 91l82-41.3V43L88 84.3z" />
        <path fill="#4B4BD2" d="M0 41.2L82.5 0 170 43.8 87.5 85z" />
      </g>
      <g filter="url(#build-a)" transform="translate(209 99)">
        <path fill="#3737B2" d="M88 91L0 47.6V41l88 43.4z" />
        <path fill="#7171F5" d="M88 91l82-41.3V43L88 84.3z" />
        <path fill="#4B4BD2" d="M0 41.2L82.5 0 170 43.8 87.5 85z" />
      </g>
      <g filter="url(#build-a)" transform="translate(14 97)">
        <path fill="#3737B2" d="M88 90L0 46.6V40l88 43.4z" />
        <path fill="#7171F5" d="M88 90l82-40.4V43L88 83.4z" />
        <path fill="#4B4BD2" d="M0 40.8L82.5 0 170 43.2 87.5 84z" />
      </g>
      <g filter="url(#build-a)" transform="translate(112 149)">
        <path fill="#3737B2" d="M88 90L0 46.6V40l88 43.4z" />
        <path fill="#7171F5" d="M88 90l82-40.4V43L88 83.4z" />
        <path fill="#4B4BD2" d="M0 40.8L82.5 0 170 43.2 87.5 84z" />
      </g>
    </g>
  </svg>
);
