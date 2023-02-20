import { StyleSheet, ViewStyle } from 'react-native'

export interface DividerStyles {
  dividerStyle: ViewStyle
}

export default () =>
  StyleSheet.create<DividerStyles>({
    dividerStyle: {
      width: '100%',
      borderWidth: 2,
      marginBottom: -2,
      marginTop: 2,
    },
  })
