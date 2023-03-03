import React from 'react'
import { StyleProp, Text, TextStyle, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Tooltip, { TooltipProps } from 'react-native-tooltiplize'
import { WithTheme, WithThemeStyles } from '../style'
import ToggleStyles, { ToggleStyle } from './style'

export type NotificationType = 'success' | 'info' | 'warning' | 'error'

export interface ToggleProps
  extends WithThemeStyles<ToggleStyle>,
    Omit<TooltipProps, 'renderContent'> {
  message: React.ReactNode
  messageStyle?: StyleProp<TextStyle>
  onDismissPopover?: () => void
  renderContent?: React.ReactNode
}

const Toggle: React.FC<ToggleProps> = ({
  message,
  messageStyle,
  styles,
  onDismissPopover,
  children,
  ...restProps
}) => {
  const renderToggle = (_styles: ToggleStyle) => {
    const renderContent = () => {
      return (
        <TouchableWithoutFeedback
          style={_styles.popover}
          onPress={onDismissPopover}>
          {React.isValidElement(message) ? (
            message
          ) : (
            <Text style={[{ color: 'white' }, messageStyle]}>{message}</Text>
          )}
        </TouchableWithoutFeedback>
      )
    }
    return (
      <View style={_styles.container}>
        <Tooltip
          offset={8}
          pointerStyle={{
            width: 16,
            height: 8,
          }}
          {...restProps}
          renderContent={renderContent}>
          {children}
        </Tooltip>
      </View>
    )
  }

  return (
    <WithTheme styles={styles} themeStyles={ToggleStyles}>
      {renderToggle}
    </WithTheme>
  )
}

export default Toggle
