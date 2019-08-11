import * as React from 'react';
import bem from '@fesk/bem-js';
import './CallToAction.scss';
import Link from 'next/link';

const $ = bem.block('call-to-action');

export const CallToAction: React.FC<{ href: string }> = ({ href, children }) => (
  <Link href={href}>
    <div className={$}>
      <div className={$.element('icon')}>
        <svg width="17px" height="17px" viewBox="0 0 53 53" xmlns="http://www.w3.org/2000/svg">
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Atlas-website" transform="translate(-47.000000, -45.000000)" fill="#FFFFFF">
              <g id="Group-5" transform="translate(47.000000, 45.000000)">
                <polygon
                  id="Path-3"
                  points="18.6153564 15.8120117 26.5 0 53 53 34.2470703 53 44 41 31.0371094 53 16.9505615 53 38 26 10.2932129 53 0 53 5 42.9710693 27 16 11.1776123 30.6766357 15.3526611 22.2998047 27 8"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className={$.element('text')}>{children}</div>
    </div>
  </Link>
);
