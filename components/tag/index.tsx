import React, { useEffect, useMemo, useState } from 'react'
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native'
import Icon from '../icon'
import { useTheme, WithTheme, WithThemeStyles } from '../style'
import { TagPropsType } from './PropsType'
import TagStyles, { TagStyle } from './style/index'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { X } from 'phosphor-react-native'
import {
  PresetBrandColorTypes,
  PresetColorTypes,
  PresetStatusColorTypes,
} from '@subwallet/react-ui/es/_util/colors'
import capitalize from '@subwallet/react-ui/es/_util/capitalize'
const PresetColorRegex = new RegExp(
  `^(${PresetColorTypes.join('|')})(-inverse)?$`,
)
const PresetStatusColorRegex = new RegExp(
  `^(${PresetStatusColorTypes.join('|')})$`,
)
const PresetBrandColorRegex = new RegExp(
  `^(${PresetBrandColorTypes.join('|')})$`,
)

export interface TagNativeProps
  extends TagPropsType,
    WithThemeStyles<TagStyle> {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

const Tag: React.FC<TagNativeProps> = (props) => {
  const {
    closable = true,
    onClose,
    afterClose,
    styles,
    style,
    children,
    color = 'secondary',
    bgType = 'filled',
    shape = 'default',
    icon,
  } = props
  const [closed, setClosed] = useState<boolean>(false)
  const theme = useTheme()
  const isPresetColor = (): boolean => {
    if (!color) {
      return false
    }
    return (
      PresetColorRegex.test(color) ||
      PresetStatusColorRegex.test(color) ||
      PresetBrandColorRegex.test(color)
    )
  }

  const getTagColorBgc: ViewStyle = useMemo(() => {
    const tagBgc =
      // @ts-ignore
      // eslint-disable-next-line prettier/prettier
      bgType === 'default' ? theme[`${color}-1`] : bgType === 'filled' ? theme[`${color}-6`] : theme['gray-1']
    // @ts-ignore
    // eslint-disable-next-line prettier/prettier
    const tagText = bgType === 'default' || bgType === 'gray' ? theme[`${color}-7`] : theme.colorText

    return {
      backgroundColor: tagBgc,
      color: tagText,
    }
  }, [bgType, color, theme])

  const getTagColorText: TextStyle = useMemo(() => {
    const tagText =
      // @ts-ignore
      // eslint-disable-next-line prettier/prettier
      bgType === 'default' || bgType === 'gray' ? theme[`${color}-7`] : theme.colorText

    return {
      color: tagText,
    }
  }, [bgType, color, theme])

  useEffect(() => {
    afterClose && afterClose()
  }, [afterClose, closed])

  const onTagClose = () => {
    onClose && onClose()
    setClosed(true)
  }
  const presetColor = isPresetColor()

  return (
    <WithTheme styles={styles} themeStyles={TagStyles}>
      {(_styles) => {
        const wrapStyle =
          _styles[`${color}${capitalize(bgType)}Wrap`] || getTagColorBgc
        const textStyle =
          _styles[`${color}${capitalize(bgType)}Text`] || getTagColorText

        const closableDom = closable ? (
          <TouchableOpacity style={_styles.close} onPress={onTagClose}>
            <Icon
              type="phosphor"
              phosphorIcon={X}
              customSize={12}
              iconColor={theme.colorTextDescription}
            />
          </TouchableOpacity>
        ) : null

        return !closed ? (
          <View style={[_styles.tag, style]}>
            <View
              style={[
                _styles.wrap,
                presetColor && wrapStyle,
                shape && _styles[`shape${capitalize(shape)}Style`],
              ]}>
              {icon}
              {React.isValidElement(children) ? (
                children
              ) : (
                <Text style={[_styles.text, presetColor && textStyle]}>
                  {children}
                </Text>
              )}
              {closableDom}
            </View>
          </View>
        ) : null
      }}
    </WithTheme>
  )
}

export default Tag
