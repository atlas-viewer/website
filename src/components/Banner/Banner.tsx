import * as React from 'react';
import Link from 'next/link';
import bem from '@fesk/bem-js';
import './Banner.scss';

const $ = bem.block('banner');

export const Banner: React.FC<{
  title: string;
  subtitle: string;
  link: string;
}> = ({ title, subtitle, link, children }) => (
  <div className={$}>
    <Link>
      <a href={link} className={$.element('inner')}>
        <div className={$.element('content')}>
          <div className={$.element('subtitle')}>{subtitle}</div>
          <div className={$.element('title')}>{title}</div>
        </div>
        <div className={$.element('image')}>{children}</div>
      </a>
    </Link>
  </div>
);
