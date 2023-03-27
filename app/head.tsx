import { API } from '@/lib/api';

export default async function Head() {
  const settings = await API.instance.client.items('web_settings').readOne(1);
  if (!settings) {
    return <>error</>;
  }
  const tags = settings.tags;

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="site_name" content="Russian Gamedev" />
      <title>Russian Gamedev — Discord сообщество</title>
      <meta
        name="description"
        content="Обитель разработчиков игр, где вы услышите экспертное мнение по поводу своих игр и идей, найдёте отличных напарников которые не бросят под самый релиз, и живой войс где мы регулярно срём новых участников и играем в игры."
      />
      <meta name="keywords" content={tags.join(',')} />
      <meta name="author" content="Russian Gamedev Community" />
      <link rel="canonical" href="http://rgd.chat/" />
      <meta name="robots" content="index, follow" />
      <link rel="icon" href="/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="Russian GameDev" />
      <meta property="og:site_name" content="rgd.chat" />
      <meta property="og:url" content="https://rgd.chat" />
      <meta
        property="og:description"
        content="Обитель разработчиков игр, где вы услышите экспертное мнение по поводу своих игр и идей, найдёте отличных напарников которые не бросят под самый релиз, и живой войс где мы регулярно срём новых участников и играем в игры."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://assets.rgd.chat/banner.jpg" />
    </>
  );
}
