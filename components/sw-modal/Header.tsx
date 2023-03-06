import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { Button, Typography } from '..'
import { WithTheme, WithThemeStyles } from '../style'
import ModalStyles, { ModalStyle } from './style'

export interface HeaderProps extends WithThemeStyles<ModalStyle> {
  wrapperStyle?: StyleProp<ViewStyle>
  title: React.ReactNode
  onPressLeft?: () => void
  onPressRight?: () => void
  leftText?: string
  rightText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const SWModalHeader: React.FC<HeaderProps> = ({
  title,
  styles,
  leftText,
  rightText,
  leftIcon,
  rightIcon,
  onPressLeft,
  onPressRight,
}) => {
  const renderModal = (_styles: ModalStyle) => {
    return (
      <View style={_styles.headerContainer}>
        <Button
          style={_styles.headerButton}
          type="ghost"
          size="xs"
          contentAlign="center"
          onPress={onPressLeft}
          icon={leftIcon}>
          {leftText}
        </Button>

        {React.isValidElement(title) ? (
          title
        ) : (
          <Typography.Title level={4} style={{ fontWeight: '500' }}>
            {title}
          </Typography.Title>
        )}

        <Button
          style={_styles.headerButton}
          type="ghost"
          size="xs"
          onPress={onPressRight}
          contentAlign="center"
          icon={rightIcon}>
          {rightText}
        </Button>
      </View>
    )
  }

  return (
    <WithTheme styles={styles} themeStyles={ModalStyles}>
      {renderModal}
    </WithTheme>
  )
}

export default SWModalHeader
