import { CSSProperties } from 'react';

import style from './style.module.scss';

type BadgeProps = {
  children: React.ReactNode;
  color?: string;
  className?: string;
};

export default function Badge(props: BadgeProps) {
  const customStyle: CSSProperties = {};

  if (props.color) {
    customStyle.backgroundColor = props.color;
    if (props.color === '#ffffff') {
      customStyle.color = '#000';
    }
  }

  return (
    <div
      className={[style.badge, props.className].join(' ')}
      style={customStyle}
    >
      {props.children}
    </div>
  );
}
