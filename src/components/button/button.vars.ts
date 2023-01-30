import { keyMirror } from '../../utils/key-mirror';

export const buttonVars = {
  appearances: keyMirror('filled', 'outline', 'transparent'),
  sizes: keyMirror('default', 'small', 'large', 'block'),
  iconPositions: keyMirror('left', 'right'),
};
