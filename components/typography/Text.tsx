import React from 'react'
import { Text as RNText, TextStyle } from 'react-native'
import { WithTheme, WithThemeStyles } from '../style'
import { TextSizeProps } from './PropsType'
import TypographyStyles, { TypographyStyle } from './style'

export interface TextProps extends WithThemeStyles<TypographyStyle> {
  ellipsis?: boolean
  monospace?: boolean
  size?: TextSizeProps
  style?: TextStyle
  children?: React.ReactNode
}

const Text: React.FC<TextProps> = ({
  ellipsis,
  monospace,
  size,
  style,
  styles,
  children,
  ...restProps
}) => {
  const renderTextBase = (_style: TypographyStyle) => {
    const allStyle = [
      monospace && _style?.monospace,
      size && _style[`${size}Text`],
      style,
    ]
    return (
      <RNText
        style={allStyle}
        numberOfLines={ellipsis ? 1 : undefined}
        {...restProps}>
        {children}
      </RNText>
    )
  }
  return (
    <WithTheme styles={styles} themeStyles={TypographyStyles}>
      {renderTextBase}
    </WithTheme>
  )
}

export default Text
