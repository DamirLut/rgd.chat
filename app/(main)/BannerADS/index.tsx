import Image from 'next/image';

import { IconChevronRight } from '@/assets/icons';
import Button from '@/components/Button';
import Text from '@/components/Text';

import Style from './style.module.scss';

export default function BannerADS() {
  return (
    <section className={Style.container}>
      <Image
        src={
          'https://cdn.discordapp.com/attachments/507239374120026112/1143112864895336528/2Comp_1_0-00-00-00.png'
        }
        alt={'RGD Jam'}
        width={1920}
        height={1080}
      />
      <div className={Style.info}>
        <div>
          <Text as={'h2'}>Сейчас проводится RGD Jam</Text>
          <Text as={'p'}>
            Присоединяйтесь к игровому марафону GameJam, покажи всю мощь своего
            творческого потенциала
          </Text>
        </div>
        <div>
          <Button as={'a'} href={'https://join.rgd.chat/'} target={'_blank'}>
            <Text>Перейти</Text> <IconChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
