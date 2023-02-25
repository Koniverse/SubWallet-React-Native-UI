import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface BackgroundIconStyle {
  defaultIcon: ViewStyle
  squareIcon: ViewStyle
  circleIcon: ViewStyle
  squircleIcon: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<BackgroundIconStyle>({
    defaultIcon: {
      padding: 2,
      borderTopLeftRadius: theme.borderRadius,
      borderTopRightRadius: theme.borderRadius,
      borderBottomRightRadius: theme.borderRadius,
      borderBottomLeftRadius: theme.borderRadius,
    },
    squareIcon: {
      padding: 2,
      borderRadius: 0,
    },
    circleIcon: {
      padding: 2,
      borderTopLeftRadius: 999,
      borderTopRightRadius: 999,
      borderBottomRightRadius: 999,
      borderBottomLeftRadius: 999,
    },
    squircleIcon: {
      padding: 2,
      borderRadius: 0,
    },
  })
