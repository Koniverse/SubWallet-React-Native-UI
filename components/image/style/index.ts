import { StyleSheet, ViewStyle } from 'react-native'
import { ImageStyle as FastImageStyle } from 'react-native-fast-image'
import { Theme } from '../../style'

export interface ImageStyle {
  container: ViewStyle
  defaultImage: FastImageStyle
  squareImage: FastImageStyle
  circleImage: FastImageStyle
  squircleImage: FastImageStyle
  loadingImage: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<ImageStyle>({
    container: {},
    defaultImage: {
      borderTopLeftRadius: theme.borderRadiusLG,
      borderTopRightRadius: theme.borderRadiusLG,
      borderBottomRightRadius: theme.borderRadiusLG,
      borderBottomLeftRadius: theme.borderRadiusLG,
    },
    squareImage: {
      borderRadius: 0,
    },
    circleImage: {
      borderTopLeftRadius: 999,
      borderTopRightRadius: 999,
      borderBottomRightRadius: 999,
      borderBottomLeftRadius: 999,
    },
    squircleImage: {
      borderRadius: 1,
    },
    loadingImage: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: theme.colorBgInput,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: theme.borderRadiusLG,
    },
  })
