import { Collections, User } from '@/lib/api.type';
import { Directus, OneItem } from '@directus/sdk';
import { create } from 'zustand';

type UserState = {
  user: OneItem<User>;
  fetch: () => Promise<void>;
};

export const useUser = create<UserState>((set) => ({
  user: undefined,
  fetch: async () => {
    if (localStorage.getItem('auth_token') == undefined) return;
    const sdk = new Directus<Collections>('https://cms.rgd.chat');
    try {
      const me = await sdk.users.me.read();
      console.log(me);
      const user = await sdk.items('user').readOne(me.external_identifier!);
      set({ user });
    } catch (e) {
      console.warn(e);
    }
  },
}));
