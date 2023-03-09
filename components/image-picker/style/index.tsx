import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface ImagePickerStyle {
  container: ViewStyle
  size: ImageStyle
  item: ViewStyle
  image: ImageStyle
  closeWrap: ViewStyle
  closeText: TextStyle
  plusWrap: ViewStyle
  plusWrapNormal: ViewStyle
  plusWrapHighlight: ViewStyle
  plusText: TextStyle
}

export default (theme: Theme) =>
  StyleSheet.create<ImagePickerStyle>({
    container: {
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    size: {
      width: 80,
      height: 80,
    },
    item: {
      marginRight: theme.marginMD,
      marginBottom: theme.marginMD,
      overflow: 'hidden',
    },
    image: {
      overflow: 'hidden',
      borderRadius: 5,
    },
    closeWrap: {
      width: 16,
      height: 16,
      backgroundColor: '#999',
      borderRadius: 8,
      position: 'absolute',
      top: 4,
      right: 4,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    closeText: {
      color: 'gray',
      backgroundColor: 'transparent',
      fontSize: 20,
      height: 20,
      marginTop: -8,
      fontWeight: '300',
    },
    plusWrap: {
      borderRadius: 4,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    plusWrapNormal: {
      backgroundColor: 'gray',
      borderColor: 'gray',
    },
    plusWrapHighlight: {
      backgroundColor: 'gray',
      borderColor: 'gray',
    },
    plusText: {
      fontSize: 64,
      backgroundColor: 'transparent',
      fontWeight: '100',
      color: 'black',
    },
  })
