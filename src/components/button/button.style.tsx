import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Dimensions } from 'react-native';
import type { Theme } from '../../theme';
import { createThemedStyleSheet } from '../../theme';
import { buttonVars } from './button.vars';
import type { ValueOf } from 'etta-ui';
import { selectStyles } from '../../utils/select-styles';

const { sizes, iconPositions, appearances } = buttonVars;

const deviceWidth = Dimensions.get('window').width;

const getStyles = createThemedStyleSheet((theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },

  container__appearance_filled__state_default: {
    backgroundColor: theme.buttons.filled.background.default,
    borderColor: theme.buttons.filled.border.default,
  },

  container__appearance_filled__state_pressed: {
    backgroundColor: theme.buttons.filled.background.pressed,
    borderColor: theme.buttons.filled.border.pressed,
  },

  container__appearance_filled__state_disabled: {
    backgroundColor: theme.buttons.filled.background.disabled,
    borderColor: theme.buttons.filled.border.disabled,
  },

  container__appearance_outline__state_default: {
    backgroundColor: theme.buttons.outline.background.default,
    borderColor: theme.buttons.outline.border.default,
  },

  container__appearance_outline__state_pressed: {
    backgroundColor: theme.buttons.outline.background.pressed,
    borderColor: theme.buttons.outline.border.pressed,
  },

  container__appearance_outline__state_disabled: {
    backgroundColor: theme.buttons.outline.background.disabled,
    borderColor: theme.buttons.outline.border.disabled,
  },
  container__appearance_transparent__state_default: {
    backgroundColor: theme.buttons.transparent.background.default,
    borderColor: theme.buttons.transparent.border.default,
  },

  container__appearance_transparent__state_pressed: {
    backgroundColor: theme.buttons.transparent.background.pressed,
    borderColor: theme.buttons.transparent.border.pressed,
  },

  container__appearance_transparent__state_disabled: {
    backgroundColor: theme.buttons.transparent.background.disabled,
    borderColor: theme.buttons.transparent.border.disabled,
  },

  // --- CONTAINER SIZE BLOCK ---
  container__size_block: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    minWidth: deviceWidth - 2 * 16,
    justifyContent: 'center',
  },

  container__size_block__icon_left: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  container__size_block__icon_right: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  // --- CONTAINER SIZE DEFAULT ---
  container__size_default: {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },

  container__size_default__icon_left: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  container__size_default__icon_right: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  // --- CONTAINER SIZE LARGE ---
  container__size_large: {
    paddingVertical: 19,
    paddingHorizontal: 20,
  },

  container__size_large__icon_left: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  container__size_large__icon_right: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  // --- CONTAINER SIZE SMALL ---
  container__size_small: {
    paddingVertical: 6,
    paddingHorizontal: 15,
  },

  container__size_small__icon_left: {
    paddingLeft: 15,
    paddingRight: 15,
  },

  container__size_small_icon_right: {
    paddingLeft: 15,
    paddingRight: 15,
  },

  text: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 18,
  },

  text_block: {
    fontSize: 18,
    lineHeight: 18,
    fontWeight: '500',
    textAlign: 'center',
  },

  text_default: {
    fontSize: 18,
    lineHeight: 18,
    fontWeight: '500',
    textAlign: 'center',
  },

  text_large: {
    fontSize: 21,
    lineHeight: 22,
    fontWeight: '500',
    textAlign: 'center',
  },

  text_small: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '500',
    textAlign: 'center',
  },

  text__size_block__icon_right: {
    marginLeft: 5,
  },

  text__size_block__icon_left: {
    marginLeft: 5,
  },

  text__size_default__icon_right: {
    marginLeft: 5,
  },

  text__size_default__icon_left: {
    marginLeft: 5,
  },

  text__size_large__icon_left: {
    marginLeft: 5,
  },

  text__size_large__icon_right: {
    marginRight: 5,
  },

  text__size_small__icon_left: {
    marginLeft: 5,
  },

  text__size_small__icon_right: {
    marginRight: 5,
  },

  icon: {
    textAlign: 'center',
  },

  icon__size_block: {
    fontSize: 18,
    width: 18,
  },

  icon__size_default: {
    fontSize: 18,
    width: 18,
  },

  icon__size_large: {
    fontSize: 20,
    width: 20,
  },

  icon__size_small: {
    fontSize: 16,
    width: 16,
  },

  font__appearance_filled__state_default: {
    color: theme.buttons.filled.text.default,
  },

  font__appearance_filled__state_pressed: {
    color: theme.buttons.filled.text.pressed,
  },

  font__appearance_filled__state_disabled: {
    color: theme.buttons.filled.text.disabled,
  },

  font__appearance_outline__state_default: {
    color: theme.buttons.outline.text.default,
  },

  font__appearance_outline__state_pressed: {
    color: theme.buttons.outline.text.pressed,
  },

  font__appearance_outline__state_disabled: {
    color: theme.buttons.outline.text.disabled,
  },

  font__appearance_transparent__state_default: {
    color: theme.buttons.transparent.text.default,
  },

  font__appearance_transparent__state_pressed: {
    color: theme.buttons.transparent.text.pressed,
  },

  font__appearance_transparent__state_disabled: {
    color: theme.buttons.transparent.text.disabled,
  },
}));

export function getContainerStyle(options: {
  appearance: ValueOf<typeof buttonVars.appearances>;
  size: ValueOf<typeof buttonVars.sizes>;
  iconPosition?: ValueOf<typeof buttonVars.iconPositions>;
  isDisabled: boolean;
  isPressed: boolean;
  theme: Theme;
}): StyleProp<ViewStyle> {
  let { theme, appearance, isDisabled, isPressed, size, iconPosition } =
    options;

  const buttonStyles = getStyles(theme);

  const styles: StyleProp<TextStyle> = selectStyles(
    buttonStyles,
    {
      size,
      iconPosition,
      appearance,
      isDisabled,
      isPressed,
    },

    {
      container: true,
      container__size_block: {
        size: sizes.block,
      },

      container__size_block__icon_right: {
        iconPosition: iconPositions.right,
        size: sizes.block,
      },

      container__size_block__icon_left: {
        iconPosition: iconPositions.left,
        size: sizes.block,
      },

      container__size_default: {
        size: sizes.default,
      },

      container__size_default__icon_right: {
        iconPosition: iconPositions.right,
        size: sizes.default,
      },

      container__size_default__icon_left: {
        iconPosition: iconPositions.left,
        size: sizes.default,
      },

      container__size_large: {
        size: sizes.large,
      },

      container__size_large__icon_right: {
        iconPosition: iconPositions.right,
        size: sizes.large,
      },

      container__size_large__icon_left: {
        iconPosition: iconPositions.left,
        size: sizes.large,
      },

      container__size_small: {
        size: sizes.small,
      },

      container__size_small__icon_left: {
        size: sizes.small,
        iconPosition: iconPositions.left,
      },

      container__size_small_icon_right: {
        size: sizes.small,
        iconPosition: iconPositions.right,
      },

      container__appearance_outline__state_default: {
        appearance: appearances.outline,
        isDisabled: false,
        isPressed: false,
      },

      container__appearance_outline__state_pressed: {
        appearance: appearances.outline,
        isDisabled: false,
        isPressed: true,
      },

      container__appearance_outline__state_disabled: {
        appearance: appearances.outline,
        isDisabled: true,
        isPressed: false,
      },

      container__appearance_filled__state_default: {
        appearance: appearances.filled,
        isDisabled: false,
        isPressed: false,
      },

      container__appearance_filled__state_pressed: {
        appearance: appearances.filled,
        isDisabled: false,
        isPressed: true,
      },

      container__appearance_filled__state_disabled: {
        appearance: appearances.filled,
        isDisabled: true,
        isPressed: false,
      },

      container__appearance_transparent__state_default: {
        appearance: appearances.transparent,
        isDisabled: false,
        isPressed: false,
      },

      container__appearance_transparent__state_pressed: {
        appearance: appearances.transparent,
        isDisabled: false,
        isPressed: true,
      },

      container__appearance_transparent__state_disabled: {
        appearance: appearances.transparent,
        isDisabled: true,
        isPressed: false,
      },
    }
  );

  return styles;
}

export function getTextStyle(options: {
  appearance: ValueOf<typeof buttonVars.appearances>;
  size: ValueOf<typeof buttonVars.sizes>;
  iconPosition?: ValueOf<typeof buttonVars.iconPositions>;
  isPressed: boolean;
  isDisabled: boolean;
  theme: Theme;
}): StyleProp<TextStyle> {
  let { theme, size, appearance, isDisabled, iconPosition, isPressed } =
    options;

  const buttonStyles = getStyles(theme);

  const styles: StyleProp<TextStyle> = selectStyles(
    buttonStyles,
    { size, iconPosition, appearance, isDisabled, isPressed },
    {
      text: true,

      text__size_block__icon_left: {
        size: sizes.default,
        iconPosition: iconPositions.left,
      },

      text__size_block__icon_right: {
        size: sizes.default,
        iconPosition: iconPositions.right,
      },

      text__size_default__icon_left: {
        size: sizes.default,
        iconPosition: iconPositions.left,
      },

      text__size_default__icon_right: {
        size: sizes.default,
        iconPosition: iconPositions.right,
      },

      text__size_large__icon_left: {
        size: sizes.large,
        iconPosition: iconPositions.left,
      },

      text__size_large__icon_right: {
        size: sizes.large,
        iconPosition: iconPositions.right,
      },

      text__size_small__icon_left: {
        size: sizes.small,
        iconPosition: iconPositions.left,
      },

      text__size_small__icon_right: {
        size: sizes.small,
        iconPosition: iconPositions.right,
      },
    }
  );

  const fontStyle = getFontStyle({
    appearance,
    theme,
    isPressed,
    isDisabled,
  });

  styles.push(fontStyle);

  return styles;
}

export function getIconStyle(options: {
  appearance: ValueOf<typeof buttonVars.appearances>;
  size: ValueOf<typeof buttonVars.sizes>;
  iconPosition?: ValueOf<typeof buttonVars.iconPositions>;
  isPressed: boolean;
  isDisabled: boolean;
  theme: Theme;
}): StyleProp<TextStyle> {
  let { theme, appearance, isDisabled, iconPosition, isPressed, size } =
    options;

  const buttonStyles = getStyles(theme);

  const styles: StyleProp<TextStyle> = selectStyles(
    buttonStyles,
    { size, iconPosition },
    {
      icon: true,

      icon__size_block: {
        size: sizes.block,
      },

      icon__size_default: {
        size: sizes.default,
      },

      icon__size_large: {
        size: sizes.large,
      },

      icon__size_small: {
        size: sizes.small,
      },
    }
  );

  const fontStyle = getFontStyle({
    appearance,
    theme,
    isPressed,
    isDisabled,
  });

  styles.push(fontStyle);

  return styles;
}

export function getFontStyle(options: {
  appearance: ValueOf<typeof buttonVars.appearances>;
  isPressed: boolean;
  isDisabled: boolean;
  theme: Theme;
}): StyleProp<TextStyle> {
  let { theme, appearance, isDisabled, isPressed } = options;

  const buttonStyles = getStyles(theme);

  const styles: StyleProp<TextStyle> = selectStyles(
    buttonStyles,
    { appearance, isDisabled, isPressed },
    {
      font__appearance_outline__state_default: {
        appearance: appearances.outline,
        isDisabled: false,
        isPressed: false,
      },

      font__appearance_outline__state_pressed: {
        appearance: appearances.outline,
        isDisabled: false,
        isPressed: true,
      },

      font__appearance_outline__state_disabled: {
        appearance: appearances.outline,
        isDisabled: true,
        isPressed: false,
      },

      font__appearance_filled__state_default: {
        appearance: appearances.filled,
        isDisabled: false,
        isPressed: false,
      },

      font__appearance_filled__state_pressed: {
        appearance: appearances.filled,
        isDisabled: false,
        isPressed: true,
      },

      font__appearance_filled__state_disabled: {
        appearance: appearances.filled,
        isDisabled: true,
        isPressed: false,
      },

      font__appearance_transparent__state_default: {
        appearance: appearances.transparent,
        isDisabled: false,
        isPressed: false,
      },

      font__appearance_transparent__state_pressed: {
        appearance: appearances.transparent,
        isDisabled: false,
        isPressed: true,
      },

      font__appearance_transparent__state_disabled: {
        appearance: appearances.transparent,
        isDisabled: true,
        isPressed: false,
      },
    }
  );

  return styles;
}
