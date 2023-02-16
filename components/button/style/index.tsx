import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface ButtonStyles {
  container: ViewStyle
  blockButtonRaw: ViewStyle
  centerContentAlign: ViewStyle
  leftContentAlign: ViewStyle
  primaryHighlight: ViewStyle
  secondaryHighlight: ViewStyle
  warningHighlight: ViewStyle
  dangerHighlight: ViewStyle
  ghostHighlight: ViewStyle
  wrapperStyle: ViewStyle
  xsRaw: ViewStyle
  smRaw: ViewStyle
  mdRaw: ViewStyle
  lgRaw: ViewStyle
  xsIconOnly: ViewStyle
  smIconOnly: ViewStyle
  mdIconOnly: ViewStyle
  lgIconOnly: ViewStyle
  defaultShapeRaw: ViewStyle
  squareShapeRaw: ViewStyle
  roundShapeRaw: ViewStyle
  circleShapeRaw: ViewStyle
  ghostRaw: ViewStyle
  primaryRaw: ViewStyle
  secondaryRaw: ViewStyle
  warningRaw: ViewStyle
  dangerRaw: ViewStyle
  primaryDisabledRaw: ViewStyle
  secondaryDisabledRaw: ViewStyle
  warningDisabledRaw: ViewStyle
  dangerDisabledRaw: ViewStyle
  ghostDisabledRaw: ViewStyle
  buttonRawText: TextStyle
  primaryRawText: TextStyle
  secondaryRawText: TextStyle
  warningRawText: TextStyle
  dangerRawText: TextStyle
  ghostRawText: TextStyle
  xsRawText: TextStyle
  smRawText: TextStyle
  mdRawText: TextStyle
  lgRawText: TextStyle
  primaryDisabledRawText: TextStyle
  secondaryDisabledRawText: TextStyle
  ghostDisabledRawText: TextStyle
  warningDisabledRawText: TextStyle
  dangerDisabledRawText: TextStyle
  indicator: ViewStyle
}
const buttonSizes = ['xs', 'sm', 'md', 'lg'] as const

type ButtonSize = (typeof buttonSizes)[number]

const buttonSizeMap: Record<ButtonSize, number> = {
  xs: 40,
  sm: 48,
  md: 52,
  lg: 64,
}

export default (theme: Theme) =>
  StyleSheet.create<ButtonStyles>({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    blockButtonRaw: {
      width: '100%',
    },
    xsIconOnly: {
      minWidth: buttonSizeMap.xs,
    },
    smIconOnly: {
      minWidth: buttonSizeMap.sm,
    },
    mdIconOnly: {
      minWidth: buttonSizeMap.md,
    },
    lgIconOnly: {
      minWidth: buttonSizeMap.lg,
    },
    centerContentAlign: {
      alignItems: 'center',
    },
    leftContentAlign: {
      alignItems: 'flex-start',
    },
    //highlight wrapper style follow type
    primaryHighlight: {
      backgroundColor: theme.colorPrimaryActive,
    },
    secondaryHighlight: {
      backgroundColor: theme['gray-1'],
    },
    warningHighlight: {
      backgroundColor: theme['yellow-4'],
    },
    dangerHighlight: {
      backgroundColor: theme['red-4'],
    },
    ghostHighlight: {
      backgroundColor: 'transparent',
    },
    // wrapper style follow size
    wrapperStyle: {
      justifyContent: 'center',
      paddingHorizontal: theme.paddingContentHorizontal,
    },
    xsRaw: {
      height: buttonSizeMap.xs,
    },
    smRaw: {
      height: buttonSizeMap.sm,
    },
    mdRaw: {
      height: buttonSizeMap.md,
    },
    lgRaw: {
      height: buttonSizeMap.lg,
    },
    //wrapper style follow shape
    defaultShapeRaw: {
      borderRadius: theme.borderRadiusLG,
    },
    squareShapeRaw: {
      borderRadius: 0,
    },
    roundShapeRaw: {
      borderRadius: buttonSizeMap.md,
    },
    circleShapeRaw: {
      borderRadius: buttonSizeMap.md,
    },
    ghostRaw: {
      backgroundColor: 'transparent',
    },
    //wrapper style follow type
    primaryRaw: {
      backgroundColor: theme.colorPrimary,
    },
    secondaryRaw: {
      backgroundColor: theme['gray-1'],
    },
    warningRaw: {
      backgroundColor: theme['yellow-6'],
    },
    dangerRaw: {
      backgroundColor: theme['red-6'],
    },
    //disabled wrapper style follow type
    primaryDisabledRaw: {
      backgroundColor: theme.colorPrimaryActive,
    },
    secondaryDisabledRaw: {
      backgroundColor: theme['gray-1'],
    },
    warningDisabledRaw: {
      backgroundColor: theme['yellow-4'],
    },
    dangerDisabledRaw: {
      backgroundColor: theme['red-4'],
    },
    ghostDisabledRaw: {
      backgroundColor: 'transparent',
    },
    buttonRawText: {
      paddingLeft: theme.paddingXS,
    },
    //text style follow type
    primaryRawText: {
      color: theme.colorTextLight1,
    },
    secondaryRawText: {
      color: theme.colorTextLight1,
    },
    warningRawText: {
      color: theme.colorTextDark2,
    },
    dangerRawText: {
      color: theme.colorTextLight1,
    },
    ghostRawText: {
      color: theme['gray-4'],
    },
    //text style follow size
    xsRawText: {
      fontSize: theme.fontSize,
      lineHeight: buttonSizeMap.xs,
      height: buttonSizeMap.xs,
      fontWeight: '600',
    },
    smRawText: {
      fontSize: theme.fontSizeLG,
      lineHeight: buttonSizeMap.sm,
      height: buttonSizeMap.sm,
      fontWeight: '600',
    },
    mdRawText: {
      fontSize: theme.fontSizeLG,
      lineHeight: buttonSizeMap.md,
      height: buttonSizeMap.md,
      fontWeight: '600',
    },
    lgRawText: {
      fontSize: theme.fontSizeLG,
      lineHeight: buttonSizeMap.lg,
      height: buttonSizeMap.lg,
      fontWeight: '600',
    },
    //disabled text style follow type
    primaryDisabledRawText: {
      color: theme.colorTextLight5,
    },
    secondaryDisabledRawText: {
      color: theme.colorTextLight5,
    },
    ghostDisabledRawText: {
      color: theme['gray-4'],
    },
    warningDisabledRawText: {
      color: theme.colorTextDark5,
    },
    dangerDisabledRawText: {
      color: theme.colorTextLight5,
    },
    //indicator style
    indicator: {
      marginRight: theme.marginXS,
    },
  })
