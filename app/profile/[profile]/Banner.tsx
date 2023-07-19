import { CSSProperties } from 'react';

import style from './style.module.scss';

type BannerProps = {
  src: string | null;
  color: string;
};

export default function Banner({ src, color }: BannerProps) {
  return (
    <div
      className={style.banner}
      style={{ '--color': src ? undefined : color } as CSSProperties}
    >
      {src && <img src={src} alt={'profile banner'} />}
    </div>
  );
}
