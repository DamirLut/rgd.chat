import Button from '@/components/Button';
import style from './style.module.scss';
import { FC, ReactNode } from 'react';
import Text from '@/components/Text';

export default function UIKitPage() {
  return (
    <>
      <Section title={'Кнопки'}>
        <Button color={'default'}>Default</Button>
        <Button color={'primary'}>Primary</Button>
      </Section>
      <Section title={'Текст'}>
        <Text as={'h1'}>Title</Text>
        <Text as={'h2'}>Subtitle</Text>
        <Text as={'h3'}>Subtitle</Text>
      </Section>
    </>
  );
}

type SectionProps = {
  title: string;
  children: ReactNode;
};

const Section: FC<SectionProps> = (props) => {
  return (
    <section className={style.uiKitSection}>
      <Text as={'h2'}>{props.title}</Text>
      <div>{props.children}</div>
    </section>
  );
};
