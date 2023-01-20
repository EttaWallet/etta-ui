/****
 * As seen in https://www.bitcoinuikit.com/foundation
 * Line heights are all 140% of the fontSize for each preset
 * Font weights are either Semi-Bold or Regular
 ****/

import type { TextStyle } from 'react-native';

const Fonts = {
  SemiBold: 'Inter-SemiBold',
  Regular: 'Inter-Regular',
} as const;

function fontSetup(
  size: number,
  lineHeight: number,
  fontWeight: keyof typeof Fonts
): TextStyle {
  return {
    fontFamily: Fonts[fontWeight],
    fontSize: size,
    lineHeight: lineHeight,
  };
}

export const TypographyPresets = {
  // Headings
  Header1: fontSetup(36, 50.4, 'SemiBold'),
  Header2: fontSetup(28, 39.2, 'SemiBold'),
  Header3: fontSetup(24, 33.6, 'SemiBold'),
  Header4: fontSetup(21, 29.4, 'SemiBold'),
  Header5: fontSetup(18, 25.2, 'SemiBold'),
  // Body
  Body1: fontSetup(24, 33.6, 'Regular'),
  Body2: fontSetup(21, 29.4, 'Regular'),
  Body3: fontSetup(18, 25.2, 'Regular'),
  Body4: fontSetup(15, 21, 'Regular'),
  Body5: fontSetup(13, 18.2, 'Regular'),
} as const;
