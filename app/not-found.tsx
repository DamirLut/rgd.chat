import Image from 'next/image';

import NotFoundImage from '@/assets/clown_by_Jacob.png';
import Text from '@/components/Text';

import '@/styles/global.scss';

export default function NotFound() {
  return (
    <>
      <Text as="h1">Такой страницы нет</Text>
      <Image
        className="sticker"
        alt="Здесь ничего нет, как и актива на этом сайте. Made by Jacob."
        src={NotFoundImage}
      />
    </>
  );
}
