import React from 'react'
import { StyleProp, Text as RNText, TextStyle } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { WithTheme, WithThemeStyles } from '../style'
import { TextSizeProps } from './PropsType'
import TypographyStyles, { TypographyStyle } from './style'

export interface LinkProps extends WithThemeStyles<TypographyStyle> {
  icon?: React.ReactElement
  onPress: () => void
  size?: TextSizeProps
  style?: StyleProp<TextStyle>
  underline?: boolean
  children?: React.ReactNode
}

const Link: React.FC<LinkProps> = ({
  icon,
  onPress,
  size,
  style,
  styles,
  underline = true,
  children,
  ...restProps
}) => {
  const renderTextBase = (_style: TypographyStyle) => {
    const allStyle = [
      underline && _style?.underline,
      size && _style[`${size}Text`],
      style,
    ]
    return (
      <TouchableOpacity onPress={onPress} style={_style.linkWrapper}>
        {icon}
        <RNText style={allStyle} {...restProps}>
          {children}
        </RNText>
      </TouchableOpacity>
    )
  }
  return (
    <WithTheme styles={styles} themeStyles={TypographyStyles}>
      {renderTextBase}
    </WithTheme>
  )
}

export default Link
