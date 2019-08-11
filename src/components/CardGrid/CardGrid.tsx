import * as React from 'react';
import bem from '@fesk/bem-js';
import './CardGrid.scss';

const $ = bem.block('card-grid');

export const CardGrid: React.FC = ({ children }) => <div className={$}>{children}</div>;
