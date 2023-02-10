/* eslint-disable @next/next/no-img-element */
'use client';

import { Directus, ItemInput, UserItem } from '@directus/sdk';
import Text from '@/components/Text';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    const refresh = async () => {
      const sdk = new Directus('https://cms.rgd.chat');

      await sdk.auth.refresh();
      window.location.href = '/';
    };
    refresh();
  }, []);
  return;
}
