import Image from 'next/image';
import Link from 'next/link';

import Text from '@/components/Text';
import { API } from '@/lib/api';
import { Jam } from '@/lib/api.type';

import Style from './jam-banner.module.scss';

type JamBannerProps = {
  jam: Jam;
};

export default function JamBanner({ jam }: JamBannerProps) {
  return (
    <Link href={`jams/${jam.slug}`} className={Style.container}>
      <Image
        src={API.instance.image(jam.thumbnail, jam.slug)}
        alt={jam.title}
        width={1080}
        height={720}
      />
      <div className={Style.info}>
        <Text as={'h2'}>{jam.title}</Text>
        <Text as={'p'}>{jam.description}</Text>
      </div>
    </Link>
  );
}
