import Breadcrumbs from '@/components/Breadcrumbs';

import PublishForm from './form';

export default function PublishPage() {
  return (
    <>
      <Breadcrumbs
        path={[
          { title: 'Главная', href: '/' },
          { title: 'Редактор', href: '/publish' },
        ]}
      />
      <PublishForm />
    </>
  );
}
