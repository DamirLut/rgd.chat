import { FC } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import JamBanner from '@/app/jams/jam-banner';
import Badge from '@/components/Badge';
import Breadcrumbs from '@/components/Breadcrumbs';
import Text from '@/components/Text';
import { API } from '@/lib/api';
import { Jam } from '@/lib/api.type';

import Style from './page.module.scss';

export const metadata: Metadata = {
  title: 'Джемы',
};

export default async function Page() {
  const [latest_jam, ...jams] = await API.instance.getJams();

  return (
    <>
      <Breadcrumbs
        path={[
          { title: 'Главная', href: '/' },
          { title: 'Джемы', href: '/jams' },
        ]}
      />
      <JamBanner jam={latest_jam} />
      <Text as={'h4'} tertiary>
        Джемы
      </Text>
      <ul className={Style.jams}>
        {jams.map((jam) => (
          <li key={jam.id}>
            <JamCard jam={jam} />
          </li>
        ))}
      </ul>
    </>
  );
}

const JamCard: FC<{ jam: Jam }> = ({ jam }) => {
  return (
    <Link href={`jams/${jam.slug}`} className={Style.jam}>
      <Image
        src={API.instance.image(jam.thumbnail, jam.slug)}
        alt={jam.title}
        width={320}
        height={160}
      />
      <Badge className={Style.jam__tag}>{jam.season}</Badge>
      <div className={Style.jam__info}>
        <Text as={'h3'}>{jam.title}</Text>
      </div>
    </Link>
  );
};
