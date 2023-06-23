import Text from '@/components/Text';
import Image from 'next/image';
import '@/styles/404.scss';

/// TODO Заменить стикер Коли на нейтральное, наверное

export default function NotFound() {
  return (
    <main>
      <Text as="h1">Такой страницы нет</Text>
      <Image
        className="sticker"
        width={512}
        height={512}
        alt={'Коля плачет'}
        src="https://media.discordapp.net/stickers/949088956203552799.webp?size=512"
      />
    </main>
  );
}
