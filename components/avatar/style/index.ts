import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface AvatarStyle {
  container: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<AvatarStyle>({
    container: {},
  })
