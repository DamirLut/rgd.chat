import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Breadcrumbs from '@/components/Breadcrumbs';
import Text from '@/components/Text';
import { API } from '@/lib/api';
import { Patron } from '@/lib/api.type';

import style from './style.module.scss';

export const metadata: Metadata = {
  title: 'Доска почёта',
};

export default async function Page() {
  const patrons = await API.instance.patrons();

  return (
    <>
      <Breadcrumbs
        path={[
          { title: 'Главная', href: '/' },
          { title: 'Патроны', href: '/patron' },
        ]}
      />
      <Text as="h3" tertiary>
        Доска почёта
      </Text>
      <div className={style.cards}>
        {patrons.map((patron, i) => (
          <Card
            key={patron.user.id}
            {...patron}
            showBanner={i < 3}
            badge={Math.min(i, 3)}
          />
        ))}
      </div>
    </>
  );
}

type CardProps = Patron & {
  showBanner?: boolean;
  badge: number;
};

function Card(props: CardProps) {
  const banner = props.user.banner_alt || props.user.banner;
  const avatar = props.user.avatar;

  const badgeColor = ['#DEAB43', '#9FA7AB', '#DE9C65', '#5C87E7'];

  const bannerSize = {
    width: 304,
    height: 130,
  };

  return (
    <div className={style.card}>
      {props.showBanner &&
        (banner ? (
          <Image
            className={style.card__banner}
            src={banner}
            alt={props.user.username}
            {...bannerSize}
          />
        ) : (
          <div
            className={style.card__banner}
            style={{
              ...bannerSize,
              backgroundColor: props.user.banner_color || '#fff',
            }}
          />
        ))}
      <Link href={'/profile/' + props.user.id} className={style.card__info}>
        <Image src={avatar} width={28} height={28} alt={props.user.username} />
        <Text>{props.user.username}</Text>
        <Text
          className={style.card__info__amount}
          style={{ backgroundColor: badgeColor[props.badge] }}
        >
          {props.amount.toLocaleString('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          })}
        </Text>
      </Link>
    </div>
  );
}
