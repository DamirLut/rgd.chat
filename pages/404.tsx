import Text from '@/components/Text';
import Image from 'next/image';
import { CSSProperties } from 'react';
import '@/styles/404.scss';

/// TODO Заменить стикер Коли на нейтральное, наверное

export default function NotFound() {
  const style: CSSProperties = {};

  return (
    <main>
      <Text as={'h1'}>Not Found</Text>
      <Image
        width={512}
        height={512}
        alt={'Коля плачет'}
        src="https://media.discordapp.net/stickers/949088956203552799.webp?size=512"
      />
    </main>
  );
}
