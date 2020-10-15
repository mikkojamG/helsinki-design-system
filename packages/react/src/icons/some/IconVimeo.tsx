import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconVimeo = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    {...rest}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M19.071 3H4.93A1.93 1.93 0 003 4.929V19.07A1.93 1.93 0 004.929 21H19.07A1.93 1.93 0 0021 19.071V4.93A1.93 1.93 0 0019.071 3zm-.65 6.01c-.057 1.25-.933 2.966-2.624 5.14-1.748 2.27-3.226 3.407-4.436 3.407-.751 0-1.382-.691-1.9-2.074-1.013-3.708-1.443-5.882-2.278-5.882-.097 0-.434.201-1.009.607l-.603-.78C7.054 8.128 8.468 6.68 9.352 6.6c1-.096 1.615.587 1.848 2.053.824 5.207 1.19 5.995 2.684 3.636.539-.851.828-1.494.864-1.94.137-1.318-1.028-1.23-1.816-.892.63-2.07 1.84-3.074 3.62-3.018 1.322.04 1.945.9 1.869 2.572z"
        fill="currentColor"
      />
    </g>
  </svg>
);
