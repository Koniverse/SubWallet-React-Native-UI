import React from 'react'
import { View } from 'react-native'
import { WithTheme, WithThemeStyles } from '../style'
import dividerStyles, { DividerStyles } from './style/index'

interface Props extends WithThemeStyles<DividerStyles> {
  color?: string
  dashed?: boolean
  type?: 'horizontal' | 'vertical'
}

const Divider: React.FC<Props> = ({ color = '#212121', dashed }) => {
  return (
    <WithTheme themeStyles={dividerStyles}>
      {(_styles) => {
        const dividerStyle = [_styles.dividerStyle]

        return (
          <View style={{ overflow: 'hidden', width: '100%' }}>
            <View
              style={[
                dividerStyle,
                {
                  borderStyle: dashed ? 'dashed' : 'solid',
                  borderColor: color,
                },
              ]}
            />
          </View>
        )
      }}
    </WithTheme>
  )
}

export default Divider
