export type AsyncError = { code: number; text: string } | null;

export type AsyncStore<T> = {
  status: "idle" | "queue" | "loading" | "done";
  data: T | null;
  error: AsyncError;
};

export type Locale = "en_US" | "es_MX" | "pt_BR" | "de_DE" | "en_GB" | "es_ES" | "fr_FR" | "it_IT" | "ru_RU";

export type LocalizedString = Record<Locale, string>;

export type Region = "eu" | "us";

export type Link = {
  href: string;
};

export type UnionValue<T> = {
  type: T;
  name: LocalizedString;
};

export type Reference<T = number> = {
  key: Link;
  id: T;
};

export type NamedReference<T = number> = Reference<T> & {
  name: LocalizedString;
};

export type SelfReference = {
  self: Link;
};

export type RealmReference = NamedReference & { slug: string };

export type CharacterReference = NamedReference & { realm: RealmReference };

export type QueuedResult<T> =
  | {
      token: string;
      waitTimeSeconds: number;
    }
  | {
      cache: Result<T>;
    };

export type QueuedLookupResult<T> = {
  token: string;
  status: "QUEUE" | "DONE";
  payload: T;
};

export type Result<T> = {
  data: null | T;
  error: null | { code: number; text: string };
};

export type CharacterRequestBody = {
  region: Region;
  realm: string;
  name: string;
};

export type GuildRequestBody = {
  region: Region;
  realm: string;
  name: string;
};

export type CharacterRequestResponse = {
  character: Character;
};

export type GuildRequestResponse = {
  guild: {
    _links: SelfReference;
    guild: Guild;
    members: Array<{ character: GuildMember }>;
  };
};

export type Character = {
  _links: SelfReference;
  id: number;
  name: string;
  gender: UnionValue<"MALE" | "FEMALE">;
  faction: UnionValue<"HORDE" | "ALLIANCE">;
  race: NamedReference;
  character_class: NamedReference<number>;
  active_spec: NamedReference;
  realm: RealmReference;
  guild: CharacterReference;
  level: number;
  experience: number;
  achievement_points: number;
  achievements: Link;
  titles: Link;
  pvp_summary: Link;
  raid_progression: Link;
  media: Link;
  last_login_timestamp: number;
  average_item_level: number;
  equipped_item_level: number;
  specializations: Link;
  statistics: Link;
  mythic_keystone_profile: Link;
  equipment: Link;
  appearance: Link;
  collections: Link;
};

export type GuildMember = NamedReference & {
  realm: RealmReference;
  level: number;
  playable_class: Reference;
  playable_race: Reference;
  rank: number;
};

export type Guild = NamedReference & {
  realm: RealmReference;
};
