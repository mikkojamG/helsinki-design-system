import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconSitemap = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    {...rest}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <polygon points="0 0 9.438 0 24 0 24 24 0 24" />
      <path
        fill="currentColor"
        d="M15,3 L15,9 L13,9 L13,11 L20,11 L20,15 L22,15 L22,21 L16,21 L16,15 L18,15 L18,13 L13,13 L13,15 L15,15 L15,21 L9,21 L9,15 L11,15 L11,13 L6,13 L6,15 L8,15 L8,21 L2,21 L2,15 L4,15 L4,11 L11,11 L11,9 L9,9 L9,3 L15,3 Z M6,17 L4,17 L4,19 L6,19 L6,17 Z M13,17 L11,17 L11,19 L13,19 L13,17 Z M20,17 L18,17 L18,19 L20,19 L20,17 Z"
      />
    </g>
  </svg>
);
