import { Dimensions, StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'
const { height: SCREEN_HEIGHT } = Dimensions.get('window')

export interface ModalStyle {
  container: ViewStyle
  line: ViewStyle
  headerButton: ViewStyle
  headerContainer: ViewStyle
}

export default (theme: Theme) =>
  StyleSheet.create<ModalStyle>({
    container: {
      height: SCREEN_HEIGHT,
      width: '100%',
      backgroundColor: 'white',
      position: 'absolute',
      top: SCREEN_HEIGHT,
      borderRadius: theme.borderRadiusXL,
      zIndex: 9999999999999999,
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
