enum SIZES {
  XXXS = 14,
  XXS = 16,
  XS = 18,
  S = 20,
  M = 22,
  L = 24,
  XLM = 26,
  XL = 28,
  XXL = 36,
  XXXL = 40,
}

enum WEIGHTS {
  R = 'R',
  M = 'M',
  B = 'B',
}

enum FONT_FAMILIES {
  MAX_TF = 'MAX_TF',
  CABINET_GROTESK = 'CABINET_GROTESK',
  FAMILIJEN_GROTESK = 'FAMILIJEN_GROTESK',
  GENERAL_SANS = 'GENERAL_SANS',
  SF_PRO = 'SF_PRO',
  NANUM_PEN = 'NANUM_PEN',
}

const FONTS = {
  [FONT_FAMILIES.MAX_TF]: {
    [WEIGHTS.R]: 'MaxTF-Bold',
    [WEIGHTS.M]: 'MaxTF-Bold',
    [WEIGHTS.B]: 'MaxTF-Bold',
  },
  [FONT_FAMILIES.NANUM_PEN]: {
    [WEIGHTS.R]: 'NanumPen',
    [WEIGHTS.M]: 'NanumPen',
    [WEIGHTS.B]: 'NanumPen',
  },
  [FONT_FAMILIES.GENERAL_SANS]: {
    [WEIGHTS.R]: 'GeneralSans-Regular',
    [WEIGHTS.M]: 'GeneralSans-Medium',
    [WEIGHTS.B]: 'GeneralSans-Bold',
  },
  [FONT_FAMILIES.SF_PRO]: {
    [WEIGHTS.R]: 'SFProText-Regular',
    [WEIGHTS.M]: 'SFProText-Medium',
    [WEIGHTS.B]: 'SFProText-Bold',
  },
  [FONT_FAMILIES.FAMILIJEN_GROTESK]: {
    [WEIGHTS.R]: 'FamiljenGroteskGF-Regular',
    [WEIGHTS.M]: 'FamiljenGroteskGF-Medium',
    [WEIGHTS.B]: 'FamiljenGroteskGF-Bold',
  },
  [FONT_FAMILIES.CABINET_GROTESK]: {
    [WEIGHTS.R]: 'CabinetGrotesk-Regular',
    [WEIGHTS.M]: 'CabinetGrotesk-Medium',
    [WEIGHTS.B]: 'CabinetGrotesk-Bold',
  },
};

type Font =
  `${keyof typeof FONT_FAMILIES}/${WEIGHTS}/${keyof typeof SIZES}/${keyof typeof SIZES}`;

export {FONTS, FONT_FAMILIES, WEIGHTS, SIZES};
export type {Font};
