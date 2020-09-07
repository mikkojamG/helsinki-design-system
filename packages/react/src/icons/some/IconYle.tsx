import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

export const IconYle = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    {...rest}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M19.071 3H4.93A1.93 1.93 0 003 4.929V19.07A1.93 1.93 0 004.929 21H19.07A1.93 1.93 0 0021 19.071V4.93A1.93 1.93 0 0019.071 3zM5.781 9.207h-.347l-.089.005C5.122 9.241 5 9.383 5 9.62c0 .14.032.337.1.616l.038.147.986 3.516.04.136c.176.523.49.771 1.025.806l.138.005h.396l-.106.522a4.166 4.166 0 01-.081.326c-.181.562-.461.681-.943.681-.285 0-.5-.016-.668-.033l-.183-.02c-.114-.013-.206-.024-.29-.024-.198 0-.322.105-.35.29l-.006.085v.232l.006.091c.024.161.11.236.208.286l.06.027c.235.107.53.165 1.416.165.888 0 1.548-.476 1.763-1.276l.278-1.08 1.207-4.967c.036-.155.084-.393.084-.53 0-.22-.125-.372-.325-.407l-.09-.007h-.328l-.08.004c-.204.024-.315.147-.398.441l-.03.119-.928 4.034h-.207l-.08-.002c-.228-.014-.346-.096-.44-.396l-.035-.123-.962-3.644c-.057-.207-.13-.388-.346-.426l-.088-.007zm10.879-.155c-1.742 0-2.52.95-2.52 3.08 0 2.077.725 2.849 2.675 2.849.87 0 1.441-.12 1.664-.22.122-.053.242-.12.27-.315l.006-.092v-.212l-.006-.085c-.028-.186-.152-.29-.35-.29a.951.951 0 00-.167.017l-.337.062c-.193.03-.458.056-.849.056-1.404 0-1.629-.243-1.681-1.331l-.006-.14h2.763l.135-.005c.56-.038.743-.317.743-.721l-.004-.23c-.039-1.095-.394-2.423-2.336-2.423zM12.138 6.25h-.83c-.137 0-.479 0-.54.296l-.01.098v.368l.003.04c.012.142.098.335.466.369l.119.005h.204v6.909l.002.096c.013.277.092.438.37.468l.1.005h.271l.095-.006c.261-.032.34-.206.355-.463l.003-.1V7.05c-.01-.418-.087-.8-.608-.8zm4.543 3.725c.803 0 1.152.447 1.211 1.312l.008.168-2.52.002.011-.177c.077-.912.474-1.305 1.29-1.305z"
        fill="currentColor"
      />
    </g>
  </svg>
);
