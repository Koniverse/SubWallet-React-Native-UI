// tslint:disable:no-empty
import React, { useState } from 'react'
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableHighlightProps,
  View,
  ViewStyle,
} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { WithTheme, WithThemeStyles } from '../style'
import { ButtonPropsType } from './PropsType'
import buttonStyles, { ButtonStyles } from './style/index'

export interface ButtonProps
  extends ButtonPropsType,
    WithThemeStyles<ButtonStyles>,
    TouchableHighlightProps {
  onPress?: (event?: GestureResponderEvent) => void
  onPressIn?: (event?: GestureResponderEvent) => void
  onPressOut?: (event?: GestureResponderEvent) => void
  activeStyle?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    loading = false,
    disabled = false,
    styles,
    style,
    size = 'md',
    type = 'primary',
    shape = 'default',
    block = false,
    activeStyle,
    onPress,
    children,
    onPressIn,
    onPressOut,
    onLongPress,
    onShowUnderlay,
    onHideUnderlay,
    icon,
    contentAlign = 'center',
    ...restProps
  } = props
  const [pressIn, setPressIn] = useState<boolean>(false)
  const [touchIt, setTouchIt] = useState<boolean>(false)
  const isIconOnly = !children && children !== 0 && !!icon

  const _onPress = (event?: GestureResponderEvent) => {
    onPress && onPress(event)
  }

  const _onPressIn = (event?: GestureResponderEvent) => {
    setPressIn(true)
    onPressIn && onPressIn(event)
  }

  const _onPressOut = (event?: GestureResponderEvent) => {
    setPressIn(false)
    onPressOut && onPressOut(event)
  }

  const _onShowUnderlay = () => {
    setTouchIt(true)
    onShowUnderlay && onShowUnderlay()
  }

  const _onHideUnderlay = () => {
    setTouchIt(false)
    onHideUnderlay && onHideUnderlay()
  }

  return (
    <WithTheme themeStyles={buttonStyles} styles={styles}>
      {(_styles) => {
        const textStyle = [
          _styles[`${size}RawText`],
          _styles[`${type}RawText`],
          (loading || !!icon) && _styles.buttonRawText,
          disabled && _styles[`${type}DisabledRawText`],
        ]

        const wrapperStyle = [
          _styles.wrapperStyle,
          _styles[`${size}Raw`],
          _styles[`${shape}ShapeRaw`],
          _styles[`${type}Raw`],
          _styles[`${contentAlign}ContentAlign`],
          isIconOnly && _styles[`${size}IconOnly`],
          disabled && _styles[`${type}DisabledRaw`],
          block && _styles.blockButtonRaw,
          pressIn && activeStyle && _styles[`${type}Highlight`],
          activeStyle && touchIt && activeStyle,
          style,
        ]

        const underlayColor = (
          StyleSheet.flatten(
            activeStyle ? activeStyle : _styles[`${type}Highlight`],
          ) as any
        ).backgroundColor

        const indicatorColor = (
          StyleSheet.flatten(_styles[`${type}RawText`]) as any
        ).color

        const iconNode = loading ? (
          <ActivityIndicator animating color={indicatorColor} size="small" />
        ) : icon ? (
          icon
        ) : null
        return (
          <TouchableHighlight
            accessibilityRole="button"
            accessibilityState={{ disabled: !!disabled }}
            activeOpacity={0.4}
            {...restProps}
            style={wrapperStyle}
            disabled={disabled}
            underlayColor={underlayColor}
            onPress={_onPress}
            onPressIn={_onPressIn}
            onPressOut={_onPressOut}
            onShowUnderlay={_onShowUnderlay}
            onHideUnderlay={_onHideUnderlay}>
            <View style={_styles.container}>
              {iconNode}
              {typeof children === 'string' ? (
                <Text style={textStyle}>{children}</Text>
              ) : (
                <>{children}</>
              )}
            </View>
          </TouchableHighlight>
        )
      }}
    </WithTheme>
  )
}

export default Button
