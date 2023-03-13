import { StyleSheet, ViewStyle } from 'react-native'
// import { Theme } from '../../style'

export interface LogoStyle {
  subLogoContainer: ViewStyle
}

export default () =>
  StyleSheet.create<LogoStyle>({
    subLogoContainer: { position: 'absolute', bottom: 0, right: 0 },
  })
