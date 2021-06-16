import semver from "semver";
import pack from "../../../../package.json";

const { version } = pack;

export const VERSION = version;

export const VERSION_STORAGE = `${semver.major(version)}-${(semver.prerelease(version) ?? ["release"]).join(".")}`;
