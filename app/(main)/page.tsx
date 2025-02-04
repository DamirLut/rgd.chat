import React from 'react';
import { Metadata } from 'next';

import BannerADS from '@/app/(main)/BannerADS';
import {
  IconColorfulJam,
  IconExternalLink,
  IconVk,
  IconYoutube,
} from '@/assets/icons';
import Breadcrumbs from '@/components/Breadcrumbs';
import Button from '@/components/Button';
import Text from '@/components/Text';

import { Badges } from './badges';
import style from './style.module.scss';

const cards = [
  {
    icon: <IconYoutube />,
    title: 'YouTube',
    description: 'Записи подведения итогов джемов',
    link: 'https://www.youtube.com/channel/UCZq4wK7UprpSiJRQLIjtbqw',
  },
  {
    icon: <IconColorfulJam />,
    title: 'Последний джем',
    description: '35 игр, 5 часов прохождения',
    link: 'https://youtu.be/bDBhfamPtvo',
  },
  {
    icon: <IconVk />,
    title: 'ВКонтакте',
    description: 'Наше сообщество',
    link: 'https://vk.com/rgd_discord',
  },
];

export const metadata: Metadata = {
  title: 'Russian Gamedev',
};

export default async function Page() {
  return (
    <>
      <Breadcrumbs path={[{ title: 'Главная', href: '/' }]} />

      <Text as="h1">Russian Gamedev — Discord сообщество</Text>
      <Text as="p">
        Обитель разработчиков игр, где вы услышите экспертное мнение по поводу
        своих игр и идей, найдёте отличных напарников которые не бросят под
        самый релиз, и живой войс где мы регулярно срём новых участников и
        играем в игры.
      </Text>
      <Badges />
      <Button
        color="primary"
        as="a"
        rel="external"
        href="https://discord.gg/6Ph8VkrPPU"
      >
        <Text>Присоединиться</Text>
        <IconExternalLink />
      </Button>
      <Text as="h3" tertiary>
        Полезные ссылки
      </Text>
      <div className={style.cards}>
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </>
  );
}

function Card(props: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <a className={style.card} href={props.link}>
      <div>{props.icon}</div>
      <Text as="h4" className={style.card__title}>
        {props.title}
      </Text>
      <Text as="p" className={style.card__description}>
        {props.description}
      </Text>
    </a>
  );
}
