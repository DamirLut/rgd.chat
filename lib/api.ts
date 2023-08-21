import { Directus } from '@directus/sdk';

import { Collections } from './api.type';

export class API {
  static instance = new API();

  client = new Directus<Collections>('https://cms.rgd.chat/');

  async patrons() {
    const { data } = await this.client.items('patron').readByQuery({
      fields: ['amount', 'user.*'],
      sort: ['-amount'],
    });

    return data ?? [];
  }

  async getProfile(nickname_or_id: string) {
    const key = /^(?<id>\d{17,20})$/.test(nickname_or_id) ? 'id' : 'username';

    const { data } = await this.client.items('user').readByQuery({
      filter: {
        [key]: decodeURIComponent(nickname_or_id),
      },
      fields: ['*', 'roles.Discord_Roles_id.*'],
    });

    const profile = data?.[0];

    if (!profile) return undefined;

    profile.roles = profile.roles.sort((a, b) => {
      return b.Discord_Roles_id.position - a.Discord_Roles_id.position;
    });

    return profile;
  }

  async getJams() {
    const { data } = await this.client.items('jams').readByQuery({
      sort: ['-date_created'],
    });

    return data ?? [];
  }

  image(id: string, filename: string, ext = 'png') {
    return new URL(
      `assets/${id}/${encodeURIComponent(filename)}.${ext}`,
      this.client.url
    ).toString();
  }
}
