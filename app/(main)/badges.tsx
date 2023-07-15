'use client';

import { useEffect, useState } from 'react';

import Badge from '@/components/Badge';
import Text from '@/components/Text';

import style from './style.module.scss';

type Response = {
  online: number;
  members: number;
};

export function Badges() {
  const [response, setResponse] = useState<Response>({
    online: 590,
    members: 2082,
  });

  useEffect(() => {
    fetch('https://bot.rgd.chat/online')
      .then((res) => res.json())
      .then(setResponse);
  }, []);

  return (
    <div className={style.badges}>
      <Badge>
        <Text>участников: </Text>
        <Text color="primary">{response.members.toLocaleString('ru-RU')}</Text>
      </Badge>
      <Badge>
        <Text>онлайн: </Text>
        <Text color="primary">{response.online.toLocaleString('ru-RU')}</Text>
      </Badge>
    </div>
  );
}
