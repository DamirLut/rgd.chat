/* eslint-disable @next/next/no-img-element */
'use client';

import { Directus } from '@directus/sdk';
import Text from '@/components/Text';
import { useEffect } from 'react';
import { Metadata } from 'next';
export default function Page() {
  useEffect(() => {
    const refresh = async () => {
      const sdk = new Directus('https://cms.rgd.chat');
      try {
        await sdk.auth.refresh();
      } catch (e: any) {
        alert(`Упс, ошибка ${e.message}`);
      }
      window.location.href = '/';
    };
    refresh();
  }, []);
  return <Text>Авторизуемся...</Text>;
}
