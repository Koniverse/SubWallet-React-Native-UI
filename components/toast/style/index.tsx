import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface ToastStyle {
  successBorderColor: ViewStyle
  infoBorderColor: ViewStyle
  warningBorderColor: ViewStyle
  errorBorderColor: ViewStyle
  container: ViewStyle
  touchable: ViewStyle
  text: ViewStyle
  horizontalToast: ViewStyle
  verticalToast: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<ToastStyle>({
    container: {
      paddingHorizontal: theme.paddingContentHorizontal,
      paddingVertical: theme.paddingContentVerticalSM,
      alignItems: 'center',
    },
    touchable: {
      alignItems: 'center',
      borderRadius: theme.borderRadiusLG,
      padding: theme.padding,
      minHeight: 40,
      borderWidth: 2,
    },
    text: {
      color: theme.colorTextHeading,
      fontSize: theme.fontSize,
      paddingHorizontal: 2,
    },
    successBorderColor: {
      borderColor: theme.colorSuccess,
    },
    infoBorderColor: {
      borderColor: theme.colorInfo,
    },
    warningBorderColor: {
      borderColor: theme.colorWarning,
    },
    errorBorderColor: {
      borderColor: theme.colorError,
    },
    horizontalToast: {
      flexDirection: 'row',
    },
    verticalToast: {
      width: 200,
      flexDirection: 'column',
    },
  })
