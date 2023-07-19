interface Platform {
  regex: RegExp;
  icon: string;
  label: string;
}
export const Platforms: Record<string, Platform> = {
  google_play: {
    icon: 'https://cdn.discordapp.com/attachments/854576129679556618/854576281340215356/google_play.png',
    label: 'Play Market',
    regex: /https:\/\/play\.google\.com\/store\/.*/,
  },
  apple: {
    icon: 'https://cdn.discordapp.com/attachments/854576129679556618/854576544789430272/Apple_Store-512.png',
    label: 'Apple Store',
    regex: /https:\/\/apps\.apple\.com\/.*/,
  },
  steam: {
    icon: 'https://cdn.discordapp.com/attachments/854576129679556618/854576143423635476/512px-Steam_icon_logo.png',
    label: 'Steam',
    regex: /https:\/\/store\.steampowered\.com\/app\/.*/,
  },
  itch: {
    icon: 'https://cdn.discordapp.com/attachments/854576129679556618/854576200944320512/app-icon.png',
    label: 'itch.io',
    regex: /https:\/\/(.*)\.itch\.io\/.*/,
  },
  vk: {
    icon: 'https://cdn.discordapp.com/attachments/1127255167096586252/1130386188100976810/2048px-VK_Compact_Logo_282021-present29.png',
    label: 'VK Games',
    regex: /https:\/\/vk\.com\/.*/,
  },
  yandex_games: {
    icon: 'https://cdn.discordapp.com/attachments/1127255167096586252/1130390218617405490/1652444548629.png',
    label: 'Yandex Games',
    regex: /https:\/\/yandex\.ru\/games\/.*/,
  },
  gamejolt: {
    icon: 'https://cdn.discordapp.com/attachments/1127255167096586252/1130386363255095316/139321698-3c29b357-1c09-48f9-a46f-e55390747c46.png',
    label: 'Game Jolt',
    regex: /https:\/\/gamejolt\.com\/games\/.*/,
  },
  nintendo: {
    icon: 'https://cdn.discordapp.com/attachments/854576129679556618/854576358651199498/1200px-NintendoSwitchLogo.png',
    label: 'Nintendo',
    regex: /https:\/\/(www\.)?nintendo\.com\/.*/,
  },
} as const;

export const UnknownPlatform: Platform = {
  icon: 'https://cdn.discordapp.com/emojis/920302778750992434.webp?size=256&quality=lossless',
  label: 'unknown',
  regex: /.*/gm,
};

/*

https://apps.apple.com/ru/app/app-store-connect/id1234793120
https://www.nintendo.com/store/products/super-mario-bros-wonder-switch/
https://vk.com/app51579507
https://gamejolt.com/games/asistersjourney/435648
https://yellowafterlife.itch.io/gamemaker-live
https://store.steampowered.com/app/1857090/Norland/
https://play.google.com/store/apps/details
https://yandex.ru/games/app/100048

 */

export function findPlatformByLink(link: string) {
  for (const [platform, info] of Object.entries(Platforms)) {
    if (info.regex.test(link.trim())) {
      return platform;
    }
  }
  return undefined;
}
