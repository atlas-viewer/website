import * as React from 'react';
import bem from '@fesk/bem-js';
import './Header.scss';
import { AtlasLogo } from '../AtlasLogo/AtlasLogo';
import Link from 'next/link';

const $ = bem.block('header');

export const Header: React.FC<{ diagram: () => any; homepage?: boolean }> = ({
  children,
  diagram,
  homepage = false,
}) => (
  <div className={$.modifiers({ homepage })}>
    <div className={$.element('container')}>
      <div className={$.element('header')}>
        <Link href="/">
          <div className={$.element('logo')}>
            <AtlasLogo />
          </div>
        </Link>
        <ul className={$.element('menu')}>
          <li className={$.element('menu-item')}>
            <Link href="/docs">Documentation</Link>
          </li>
          <li className={$.element('menu-item')}>
            <Link href="/roadmap">Roadmap</Link>
          </li>
          <li className={$.element('menu-item')}>
            <Link>
              <a href="https://github.com/atlas-viewer" target="_blank">
                GitHub
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={$.element('diagram')}>{diagram()}</div>
      <div className={$.element('title')}>{children}</div>
    </div>
  </div>
);
