import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeIcon,
  FontAwesomeIconStyle,
} from '@fortawesome/react-native-fontawesome'
import { SizeType } from '@subwallet/react-ui/es/config-provider/SizeContext'
import { IconProps } from 'phosphor-react-native'
import { IconWeight } from 'phosphor-react-native/lib/typescript'
import React from 'react'
import { StyleProp, TextProps, ViewStyle } from 'react-native'

export interface SWIconProps extends TextProps {
  customSize?: number
  fontawesomeIcon?: IconProp
  iconColor?: string
  phosphorIcon?: React.ElementType<IconProps>
  size?: SizeType
  style?: StyleProp<ViewStyle>
  type?: 'fontAwesome' | 'phosphor'
  weight?: IconWeight
}

const Icon: React.FC<SWIconProps> = ({
  customSize,
  fontawesomeIcon,
  iconColor,
  phosphorIcon: PhosphorIcon,
  size,
  style,
  type = 'phosphor',
  weight,
}) => {
  function getStyle(): FontAwesomeIconStyle {
    return {
      ...(Array.isArray(style) ? Object.assign({}, ...style) : style),
    }
  }

  function getIconSize() {
    if (!size) {
      return undefined
    }
    if (size === 'xs') {
      return 16
    }
    if (size === 'sm') {
      return 24
    }

    return 32
  }

  if (type === 'fontAwesome' && fontawesomeIcon) {
    return (
      <FontAwesomeIcon
        icon={fontawesomeIcon}
        style={getStyle()}
        size={customSize || getIconSize()}
        color={iconColor}
      />
    )
  }

  if (type === 'phosphor' && PhosphorIcon) {
    return (
      <PhosphorIcon
        size={customSize || getIconSize()}
        color={iconColor}
        weight={weight}
      />
    )
  }

  return <></>
}

export default Icon
