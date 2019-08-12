import * as React from 'react';
import './HomepageDiagram.scss';

export const HomepageDiagram: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 785 515">
    <defs>
      <filter id="home-a" width="179.2%" height="225.7%" x="-39.6%" y="-62.9%" filterUnits="objectBoundingBox">
        <feOffset dy="40" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="20" />
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="home-b" width="240.6%" height="293.7%" x="-70.3%" y="-96.9%" filterUnits="objectBoundingBox">
        <feOffset dy="40" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="20" />
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="home-c" width="199.4%" height="250.2%" x="-49.7%" y="-75.1%" filterUnits="objectBoundingBox">
        <feOffset dy="40" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="20" />
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="home-d" width="173.7%" height="218.9%" x="-36.8%" y="-59.5%" filterUnits="objectBoundingBox">
        <feOffset dy="40" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="20" />
        <feColorMatrix
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g filter="url(#home-a)" transform="translate(356 40)">
        <path fill="#252580" d="M287.8 245L0 100.9V51.1l287.8 144.1z" />
        <path fill="#161650" d="M287.8 245L389 194.3v-49.8l-101.2 50.7z" />
        <path fill="#3434A5" d="M0 51.1L101.2.4 389 144.5l-101.2 50.7z" />
      </g>
      <g filter="url(#home-b)" transform="translate(242 101)">
        <path fill="#252580" d="M126.9 159L0 95.6V46l126.9 63.3z" />
        <path fill="#161650" d="M126.9 159l92.1-46V63.4l-92.1 45.9z" />
        <path fill="#3434A5" d="M0 46L92.1 0 219 63.4l-92.1 45.9z" />
      </g>
      <g filter="url(#home-c)" transform="translate(40 156)">
        <path fill="#252580" d="M126.8 205L0 141.5V91.7l126.8 63.5z" />
        <path fill="#161650" d="M126.8 205L310 113.3V63.5l-183.2 91.7z" />
        <path fill="#3434A5" d="M0 91.7L183.2 0 310 63.5l-183.2 91.7z" />
      </g>
      <g filter="url(#home-d)" transform="translate(203 179)">
        <path fill="#252580" d="M126.9 259L0 195.5v-49.8l126.9 63.5z" />
        <path fill="#161650" d="M126.9 259L418 113.3V63.5L126.9 209.2z" />
        <path fill="#3434A5" d="M0 145.7L291.1 0 418 63.5 126.9 209.2z" />
      </g>
      <g className="homepage-diagram-animation" opacity=".7" transform="translate(43)">
        <path fill="#6262C0" d="M288.1 361L0 217v-8.3l288.1 144z" opacity=".5" />
        <path fill="#6666BA" d="M288.1 361L705 152.7v-8.3L288.1 352.7z" opacity=".4" />
        <path fill="#7F7FE1" d="M0 208.7L416.9.4l288.1 144-416.9 208.3z" opacity=".4" />
      </g>
    </g>
  </svg>
);
