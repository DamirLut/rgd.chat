import Sidebar from './(main)/Sidebar';
import '@/styles/global.scss';
import { Metadata } from 'next';
import { API } from '@/lib/api';

type RootLayoutProps = {
  children: React.ReactNode;
};

export async function generateMetadata(): Promise<Metadata> {
  const settings = await API.instance.client.items('web_settings').readOne(1);

  const title = 'Russian Gamedev — Discord сообщество';
  const description =
    'Обитель разработчиков игр, где вы услышите экспертное мнение по поводу своих игр и идей, найдёте отличных напарников которые не бросят под самый релиз, и живой войс где мы регулярно срём новых участников и играем в игры.';

  return {
    title,
    description,
    keywords: settings?.tags ?? [],
    openGraph: {
      title,
      description,
      siteName: 'rgd.chat',
      url: 'https://rgd.chat',
      type: 'website',
      images: 'https://assets.rgd.chat/banner.jpg',
    },
    metadataBase: new URL('https://rgd.chat'),
    viewport: 'width=device-width, initial-scale=1',
    icons: '/favicon.png',
    robots: 'index, follow',
    authors: { name: 'Russian Gamedev Community', url: 'https://rgd.chat' },
  };
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <head />
      <body>
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
