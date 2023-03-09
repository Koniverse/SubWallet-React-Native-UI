import { Dimensions, StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'
const { width, height: SCREEN_HEIGHT } = Dimensions.get('window')

export interface ModalStyle {
  rootView: ViewStyle
  container: ViewStyle
  line: ViewStyle
  headerButton: ViewStyle
  headerContainer: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<ModalStyle>({
    rootView: {
      position: 'absolute',
      top: 0,
      left: 0,
      width,
      height: SCREEN_HEIGHT,
    },
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: 'white',
      position: 'absolute',
      top: SCREEN_HEIGHT,
      borderRadius: theme.borderRadiusXL,
      zIndex: 9999999999,
    },
    line: {
      width: 75,
      height: 4,
      backgroundColor: 'grey',
      alignSelf: 'center',
      marginTop: theme.marginSM,
      borderRadius: 2,
    },
    headerButton: { width: 70 },
    headerContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  })
