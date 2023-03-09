import { StyleSheet, ViewStyle } from 'react-native'
// import { Theme } from '../../style'

export interface AvatarStyle {
  container: ViewStyle
}

export default () =>
  StyleSheet.create<AvatarStyle>({
    container: {},
  })
