import { Opaque } from "type-fest";
import { ClassSpec, Covenant, PClass, Spell, MechanicMitigationFlavor } from "@cdplan/db/db/types";

export * as DBC from "@cdplan/db/db/types";

export type RosterCharacterId = Opaque<string, "RosterCharacterId">;
export interface RosterCharacter {
  id: RosterCharacterId;
  pclass: PClass;
  spec: ClassSpec;
  covenant: RosterCovenant;
  name: string;
}

export interface RosterCovenant extends Covenant {
  spells: Spell[];
}

export type RaidCooldownId = Opaque<string, "RaidCooldownId">;
export interface RaidCooldown {
  id: RaidCooldownId;
  caster: RosterCharacter;
  spell: Spell;
}

export type MitigationDB<T> = Record<string /* BossMechanic['key'] */, Partial<Record<MechanicMitigationFlavor, T>>>;
export type SoakDB = Record<string /* BossMechanic['key'] */, Record<number, RosterCharacterId[]>>;

export type Semver = Opaque<string, "Semver">;
export type ProfileId = Opaque<string, "ProfileId">;
export type Profile = {
  name: string;
  id: ProfileId;
  appVersion: Semver;
};
export type ProfileDB = Record<string, Profile>;
