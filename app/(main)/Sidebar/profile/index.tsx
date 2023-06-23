'use client';

import { useEffect } from 'react';
import Link from 'next/link';

import { IconDiscord } from '@/assets/icons';
import Text from '@/components/Text';
import { useUser } from '@/store/user';

import style from './style.module.scss';

export function ProfileBlock() {
  const redirect = 'https://rgd.chat/login';
  const loginURL =
    'https://cms.rgd.chat/auth/login/discord?redirect=' + redirect;

  const user = useUser((select) => select.user);
  const fetchUser = useUser((select) => select.fetch);

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, []);

  const url = user ? '#' : loginURL;

  return (
    <Link href={url} className={style.profileBlock}>
      {user ? (
        <>
          <img src={user.avatar} alt={user.username} width={32} height={32} />
          <Text>{user.username}</Text>
        </>
      ) : (
        <>
          <div className={style.discordIcon}>
            <IconDiscord />
          </div>
          <Text>Авторизация</Text>
        </>
      )}
    </Link>
  );
}
