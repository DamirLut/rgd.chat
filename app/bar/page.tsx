import React from 'react';
import { Metadata } from 'next';

import Breadcrumbs from '@/components/Breadcrumbs';
import Text from '@/components/Text';

export const metadata: Metadata = {
  title: 'RGD-Bar',
  openGraph: {
    images: 'https://assets.rgd.chat/rgdbar.png',
  },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs
        path={[
          { title: 'Главная', href: '/' },
          { title: 'rgd-bar', href: '/bar' },
        ]}
      />
      <Text as={'h1'}>Тот самый ргд-бар, который слышал каждый!</Text>
      <iframe
        src="https://assets.rgd.chat/rgdbar/"
        frameBorder="0"
        width="100%"
        style={{ aspectRatio: '16/9' }}
      />
    </>
  );
}
