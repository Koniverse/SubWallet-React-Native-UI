import React from 'react'
import { StyleProp, Text as RNText, TextStyle } from 'react-native'
import { WithTheme, WithThemeStyles } from '../style'
import { LevelProps, SuperLevelProps } from './PropsType'
import TypographyStyles, { TypographyStyle } from './style'

export interface TitleProps extends WithThemeStyles<TypographyStyle> {
  level?: LevelProps
  superLevel?: SuperLevelProps
  style?: StyleProp<TextStyle>
  children?: React.ReactNode
}

const Title: React.FC<TitleProps> = ({
  level,
  superLevel,
  style,
  styles,
  children,
  ...restProps
}) => {
  const renderTextBase = (_style: TypographyStyle) => {
    const allStyle = [
      level && _style[`titleLevel${level}`],
      superLevel && _style[`titleSuperLevel${superLevel}`],
      style,
    ]

    return (
      <RNText style={allStyle} {...restProps}>
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

export default Title
