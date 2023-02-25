import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { ImageShape } from '@subwallet/react-ui/es/image'
import { IconProps } from 'phosphor-react-native'
import { IconWeight } from 'phosphor-react-native/lib/typescript'
import React from 'react'
import { View } from 'react-native'
// @ts-ignore
import SuperEllipseMask from 'react-native-super-ellipse-mask'
import { Icon } from '..'
import { WithTheme, WithThemeStyles } from '../style'
import BackgroundIconStyles, { BackgroundIconStyle } from './style'

interface ActivityIndicatorProps extends WithThemeStyles<BackgroundIconStyle> {
  shape?: ImageShape
  type?: 'fontAwesome' | 'phosphor'
  size?: 'xs' | 'sm' | 'md'
  phosphorIcon?: React.ElementType<IconProps>
  fontawesomeIcon?: IconProp
  weight?: IconWeight
  iconColor?: string
  backgroundColor?: string
}

const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({
  shape = 'default',
  type,
  size = 'sm',
  phosphorIcon,
  fontawesomeIcon,
  weight,
  iconColor,
  backgroundColor,
  styles,
}) => {
  function getBackgroundIconSize() {
    if (size === 'xs') {
      return 12
    }
    if (size === 'sm') {
      return 16
    }

    return 24
  }

  const renderBackgroundIcon = (_style: BackgroundIconStyle) => {
    if (shape === 'squircle') {
      return (
        <SuperEllipseMask radius={(getBackgroundIconSize() + 4) / 2.5}>
          <View style={[{ backgroundColor }, _style[`${shape}Icon`]]}>
            <Icon
              type={type}
              phosphorIcon={phosphorIcon}
              fontawesomeIcon={fontawesomeIcon}
              iconColor={iconColor}
              customSize={getBackgroundIconSize()}
              weight={weight}
            />
          </View>
        </SuperEllipseMask>
      )
    }

    return (
      <View style={[{ backgroundColor }, _style[`${shape}Icon`]]}>
        <Icon
          type={type}
          phosphorIcon={phosphorIcon}
          fontawesomeIcon={fontawesomeIcon}
          iconColor={iconColor}
          customSize={getBackgroundIconSize()}
          weight={weight}
        />
      </View>
    )
  }
  return (
    <WithTheme styles={styles} themeStyles={BackgroundIconStyles}>
      {renderBackgroundIcon}
    </WithTheme>
  )
}

export default ActivityIndicator
