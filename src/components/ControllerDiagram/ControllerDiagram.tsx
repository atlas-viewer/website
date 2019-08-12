import * as React from 'react';

export const ControllerDiagram: React.FC = () => (
  <svg viewBox="0 0 580 323" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter x="-69.1%" y="-125.2%" width="238.1%" height="350.3%" id="controller-a">
        <feOffset dy="40" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation="4" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd" opacity=".81082589">
      <g opacity=".9">
        <path fill="#3737B2" d="M290 149L155 81.2608696V67l135 67.73913z" />
        <path fill="#7171F5" d="M290 149l135-67.7391304V67l-135 67.73913z" />
        <path fill="#4B4BD2" d="M156 67.5L290.5 0 425 67.5 290.5 135z" />
      </g>
      <g opacity=".9">
        <path fill="#3737B2" d="M445 226l-135-67.7391304V144l135 67.73913z" />
        <path fill="#7171F5" d="M445 226l135-67.7391304V144l-135 67.73913z" />
        <path fill="#4B4BD2" d="M311 144.5L445.5 77 580 144.5 445.5 212z" />
      </g>
      <g opacity=".9">
        <path fill="#3737B2" d="M135 229L0 161.2608696V147l135 67.73913z" />
        <path fill="#7171F5" d="M135 229l135-67.7391304V147l-135 67.73913z" />
        <path fill="#4B4BD2" d="M0 147.5L134.5 80 269 147.5 134.5 215z" />
      </g>
      <g opacity=".9" filter="url(#controller-a)" transform="translate(155 115)">
        <path fill="#3737B2" d="M135 149L0 81.2608696V67l135 67.73913z" />
        <path fill="#7171F5" d="M135 149l135-67.7391304V67l-135 67.73913z" />
        <path fill="#4B4BD2" d="M1 67.5L135.5 0 270 67.5 135.5 135z" />
      </g>
    </g>
  </svg>
);
