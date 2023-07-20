import moment from 'moment';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import EasterEgg from '@/app/profile/[profile]/EasterEgg';
import Badge from '@/components/Badge';
import Breadcrumbs from '@/components/Breadcrumbs';
import Text from '@/components/Text';
import { API } from '@/lib/api';
import { formatTime } from '@/lib/tools';

import 'moment/locale/ru';
import Banner from './Banner';
import style from './style.module.scss';

type PageProps = {
  params: {
    profile: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const profile = await API.instance.getProfile(params.profile);

  if (!profile) notFound();

  return {
    title: '@' + profile.username,
    openGraph: {
      title: '@' + profile.username,
      description: profile.about ?? '',
      images: profile.avatar,
      siteName: 'rgd.chat',
      url: 'https://rgd.chat',
      type: 'website',
    },
    themeColor: profile.banner_color,
  };
}

export default async function Page({ params }: PageProps) {
  const profile = await API.instance.getProfile(params.profile);

  if (!profile) {
    notFound();
  }

  const role = profile.roles[0]?.Discord_Roles_id;

  const firstJoin = moment.duration(
    moment(new Date()).diff(moment(new Date(profile.firstJoin)))
  );

  return (
    <>
      <Breadcrumbs
        path={[
          { title: 'Главная', href: '/' },
          { title: 'Профиль', href: '/profile/' + profile.username },
        ]}
      />
      <div className={style.profile__wrapper}>
        <Banner
          src={profile.banner_alt ?? profile.banner}
          color={profile.banner_color}
        />
        <div className={style.profile}>
          <img
            id={'avatar'}
            className={style.avatar}
            src={profile.avatar}
            alt={profile.username}
            width={128}
            height={128}
          />
          <div className={style.profile__info}>
            <div className={style.badges}>
              {role && <Badge color={role.color}>{role.name}</Badge>}
            </div>
            <Text as={'h1'}>{profile.username}</Text>
            <Text>{profile.about}</Text>
          </div>
        </div>
      </div>
      <Text as={'h3'} tertiary>
        Статистика
      </Text>
      <div className={style.badges}>
        <Badge>
          <Text>На сервере </Text>
          <Text color="primary">{firstJoin.humanize()}</Text>
        </Badge>{' '}
        <Badge>
          <Text>Уровень уважение </Text>
          <Text color="primary">
            {profile.reputation.toLocaleString('ru-RU')}
          </Text>
        </Badge>
        <Badge>
          <Text>Понаписал </Text>
          <Text color="primary">
            {profile.experience.toLocaleString('ru-RU')}
          </Text>
          <Text> слов</Text>
        </Badge>
        <Badge>
          <Text>Наговорил </Text>
          <Text color="primary">{formatTime(Number(profile.voiceTime))}</Text>
        </Badge>
        <Badge>
          <Text>Выходил </Text>
          <Text color="primary">{profile.leaveCount}</Text>
          <Text> раз</Text>
        </Badge>
      </div>
      <EasterEgg id={profile.id} />
    </>
  );
}
