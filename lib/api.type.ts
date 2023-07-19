export type Collections = {
  user: User;
  patron: Patron;
  web_settings: WebSettings;
};

export type Patron = {
  amount: number;
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
