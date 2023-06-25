import { IconChevronRight } from '@/assets/icons';

import Text from '../Text';
import style from './style.module.scss';

type BreadcrumbsProps = {
  path: Array<{ title: string; href: string }>;
};

export default function Breadcrumbs(props: BreadcrumbsProps) {
  return (
    <div className={style.breadcrumbs}>
      {props.path.map((part, index) => (
        <div
          key={part.href}
          style={{
            color:
              index < props.path.length - 1 ? 'var(--text-body)' : undefined,
          }}
        >
          <Text as="a" href={part.href}>
            {part.title}
          </Text>
          {index < props.path.length - 1 && (
            <IconChevronRight width={12} height={12} />
          )}
        </div>
      ))}
    </div>
  );
}
