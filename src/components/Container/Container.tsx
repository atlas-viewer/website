import * as React from 'react';
import bem from '@fesk/bem-js';
import './Container.scss';

const $ = bem.block('container');

export const Container: React.FC = ({ children }) => <div className={$}>{children}</div>;
