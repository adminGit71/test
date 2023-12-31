import { IS_MAINNET } from '@qstn/data/constants';
import { mainnetVerified, testnetVerified } from '@qstn/data/verified';

/**
 * Checks whether a profile is verified or not.
 *
 * @param id The profile id to check.
 * @returns True if the profile is verified, false otherwise.
 */
const isVerified = (id: string): boolean =>
  IS_MAINNET ? mainnetVerified.includes(id) : testnetVerified.includes(id);

export default isVerified;
