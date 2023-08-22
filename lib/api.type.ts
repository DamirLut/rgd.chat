export type Collections = {
  user: User;
  patron: Patron;
  web_settings: WebSettings;
  jams: Jam;
};

export type Patron = {
  amount: string;
  user: User;
};

export type User = {
  id: string;
  username: string;
  avatar: string;
  banner: string | null;
  banner_alt: string | null;
  banner_color: string;
  about: string | null;
  experience: number;
  voiceTime: number;
  reputation: number;
  leaveCount: number;
  firstJoin: string;
  roles: Array<{ Discord_Roles_id: Role }>;
};

export type Role = {
  id: string;
  name: string;
  color: string;
  position: number;
};

export type WebSettings = {
  tags: string[];
};

export type Jam = {
  id: number;
  status: 'draft';
  slug: string;
  title: string;
  stream_embed: string | null;
  description: string;
  details: string | null;
  season: string;
  start: string;
  end: string;
  prize: string;
  thumbnail: string;
  date_created: string;
  date_updated: string;
};
