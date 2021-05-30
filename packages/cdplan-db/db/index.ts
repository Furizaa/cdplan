import { API } from "./types";
import _REALMS from "./realms.json";

export { default as SPELLS } from "./spells";
export { default as CLASSES } from "./classes";
export { default as BOSSES } from "./bosses";
export { default as COVENANT_SPELLS } from "./covenant-spells";
export { default as COVENANTS } from "./covenants";
export { ALL as SPECS } from "./specs";

export { default as selectById } from "./utils/selectById";
export { default as whitelistHealingSpells } from "./defensiveSpellWhitelist";
export { default as whitelistOffensiveSpells } from "./offensiveSpellWhitelist";
export { default as whitelistMovementSpells } from "./movementSpellWhitelist";

export const REGIONS = ["eu", "us"];
export const REALMS = _REALMS as unknown as Record<string, API.RealmReference[]>;
