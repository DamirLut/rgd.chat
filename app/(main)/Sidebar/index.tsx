'use client';

import { usePathname } from 'next/navigation';

import Link from 'next/link';
import style from './style.module.scss';
import { ProfileBlock } from './profile';
import { IconCrown, IconJam, IconRgd } from '@/assets/icons';

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
