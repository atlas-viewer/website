import * as React from 'react';
import bem from '@fesk/bem-js';
import './GridBox.scss';
import { CallToAction } from '../CallToAction/CallToAction';

const $ = bem.block('grid-box');

export const GridBox: React.FC<{
  title: string;
  description: string;
  reverse?: boolean;
  buttonLink?: string;
  buttonText: string;
}> = ({ children, title, description, buttonText, buttonLink, reverse = false }) => (
  <div className={$.modifiers({ reverse })}>
    <div className={$.element('image')}>{children}</div>
    <div className={$.element('content')}>
      <h3 className={$.element('title')}>{title}</h3>
      <p className={$.element('description')}>{description}</p>
      <CallToAction href={buttonLink ? buttonLink : '/'}>{buttonText}</CallToAction>
    </div>
  </div>
);
