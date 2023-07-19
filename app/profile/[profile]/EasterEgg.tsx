import fs from 'fs';
import Script from 'next/script';
import path from 'path';

const easterEggPath = path.resolve(
  __dirname,
  '../../../../../public/profile/easter-egg/'
);

const ids = fs.readdirSync(easterEggPath).map((id) => id.replace('.js', ''));

export default function EasterEgg({ id }: { id: string }) {
  if (ids.includes(id)) {
    return (
      <>
        <Script id={'page-leave-checker'}>{`
        
        const event = new Event("page-leave");
        
        let prevLocation = location.href;
        let interval = setInterval(() => {
          if (prevLocation !== location.href) {
            prevLocation = location.href;
      
            window.dispatchEvent(event);
            
            clearInterval(interval);
          }
        }, 500);
        
        
        `}</Script>
        <Script
          src={'/profile/easter-egg/' + id + '.js'}
          strategy={'lazyOnload'}
        />
      </>
    );
  }

  return null;
}
