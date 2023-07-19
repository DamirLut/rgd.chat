'use client';

import { useCallback, useEffect, useState } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Text from '@/components/Text';

import { findPlatformByLink, Platforms, UnknownPlatform } from './platforms';
import style from './style.module.scss';

type PlatformLink = {
  platform: keyof typeof Platforms;
  link: string;
};

export default function PublishForm() {
  const [linkInput, setLinkInput] = useState('');
  const [linkIcon, setLinkIcon] = useState('');
  const [links, setLinks] = useState<PlatformLink[]>([]);

  useEffect(() => {
    const platform = findPlatformByLink(linkInput);
    if (platform) {
      setLinkIcon(Platforms[platform].icon);
    } else {
      setLinkIcon('');
    }
  }, [linkInput]);

  const addLink = useCallback(() => {
    const platform = findPlatformByLink(linkInput) ?? 'unknown';
    if (links.some((link) => link.platform === platform)) return;
    setLinks((prev) => [...prev, { platform, link: linkInput }]);
    setLinkInput('');
  }, [linkInput]);

  const removeLink = (link: string) => {
    setLinks((prev) => prev.filter((value) => value.link != link));
  };

  return (
    <form className={style.form} action={'#'}>
      <Text as="h3" tertiary>
        Информация
      </Text>
      <section>
        <Input label={'Название'} />
        <Input.Multiline label={'Описание'} style={{ minHeight: '8rem' }} />
      </section>

      <Text as="h3" tertiary>
        Ссылки
      </Text>
      <section>
        <div className={style.linkInput}>
          <Input
            label={'Ссылка на проект'}
            type={'url'}
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addLink();
              }
            }}
          >
            {linkIcon && (
              <img src={linkIcon} alt={'текущая иконка'} height={24} />
            )}
          </Input>
          <Button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              addLink();
            }}
          >
            Добавить
          </Button>
        </div>

        <ul className={style.links}>
          <Text>Список</Text>
          {links.map((link) => {
            const platform = Platforms[link.platform] ?? UnknownPlatform;

            return (
              <li key={link.platform}>
                <img src={platform.icon} alt={platform.label} height={24} />
                <Text as={'a'} href={link.link}>
                  {platform.label}
                </Text>
                <Button
                  color={'error'}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault();
                    removeLink(link.link);
                  }}
                >
                  X
                </Button>
              </li>
            );
          })}
        </ul>
      </section>

      <Text as="h3" tertiary>
        Изображения
      </Text>
      <section>
        <Input.FileInput
          label="Загрузить обложку"
          style={{ width: '20rem', height: '16rem' }}
          accept={'.png,.gif,.jpg,.jpeg,.webp'}
        />
      </section>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Button color={'success'}>Сохранить</Button>
      </div>
    </form>
  );
}
