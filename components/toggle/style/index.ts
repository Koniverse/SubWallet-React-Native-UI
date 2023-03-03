import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface ToggleStyle {
  container: ViewStyle
  popover: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<ToggleStyle>({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    popover: {
      paddingHorizontal: theme.paddingContentHorizontal,
      paddingVertical: theme.paddingContentVertical,
      borderRadius: theme.borderRadiusSM,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: theme.borderRadiusSM,
      elevation: 5,
      backgroundColor: theme.colorBgSpotlight,
    },
  })
