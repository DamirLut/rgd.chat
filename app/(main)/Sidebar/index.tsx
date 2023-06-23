'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IconCrown, IconJam, IconRgd } from '@/assets/icons';

import { ProfileBlock } from './profile';
import style from './style.module.scss';

const items = [
  {
    title: 'Джемы',
    link: '/jams',
    icon: IconJam,
  },
  {
    title: 'Патроны',
    link: '/patrons',
    icon: IconCrown,
  },
];

export default function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <Link href="/" className={style.sidebar__logotype}>
        <IconRgd />
      </Link>
      <nav role="menu" className={style.sidebar__menu}>
        {items.map((item) => (
          <Item key={item.link} item={item} />
        ))}
      </nav>
      <ProfileBlock />
    </aside>
  );
}

function Item({ item }: { item: (typeof items)[0] }) {
  const pathname = usePathname();

  const isActive = pathname?.startsWith(item.link);

  return (
    <Link href={item.link} style={{ color: isActive ? '#fff' : undefined }}>
      {<item.icon />}
      {item.title}
    </Link>
  );
}
