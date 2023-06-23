import { Metadata } from 'next';

import Breadcrumbs from '@/components/Breadcrumbs';
import Text from '@/components/Text';

export const metadata: Metadata = {
  title: 'Джемы',
};

export default function Page() {
  return (
    <>
      <Breadcrumbs
        path={[
          { title: 'Главная', href: '/' },
          { title: 'Джемы', href: '/jams' },
        ]}
      />
      <Text>Какие Джемы?</Text>
    </>
  );
}
