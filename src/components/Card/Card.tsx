import * as React from 'react';
import bem from '@fesk/bem-js';
import './Card.scss';
import Link from 'next/link';

const $ = bem.block('card');

type StatusKey = 'roadMap' | 'development' | 'production' | 'documentation';

const messages: { [key in StatusKey]: string } = {
  development: 'This feature is in development',
  production: 'This feature is complete',
  roadMap: 'This feature is on the road map',
  documentation: '',
};

const buttonLabels: { [key in StatusKey]: string | null } = {
  development: 'View repository',
  production: 'View documentation',
  roadMap: 'View road map',
  documentation: 'View documentation',
};

export const Card: React.FC<{
  logo: string;
  hideLink?: boolean;
  title: string;
  status?: StatusKey;
  buttonLink?: string;
}> = ({ title, logo, children, hideLink = false, status = 'roadMap', buttonLink = '/roadmap' }) => (
  <div className={$}>
    <div className={$.element('logo')}>
      <img src={logo} alt={`${title} logo`} />
    </div>
    <div className={$.element('title')}>{title}</div>
    <div className={$.element('description')}>{children}</div>
    {!hideLink ? (
      <div>
        <div className={$.element('footer').modifiers({ [status]: true })}>{messages[status]}</div>
        {buttonLabels[status] ? (
          <Link href={buttonLink}>
            <div className={$.element('button')}>{buttonLabels[status]}</div>
          </Link>
        ) : null}
      </div>
    ) : null}
  </div>
);
