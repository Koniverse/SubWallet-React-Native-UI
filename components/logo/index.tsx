import React from 'react'
import { View } from 'react-native'
import { Image } from '..'
import { PartialTheme, WithTheme, WithThemeStyles } from '../style'
import LogoStyles, { LogoStyle } from './style'

type IconShapeType = 'circle' | 'squircle'

export interface SWLogoProps extends WithThemeStyles<LogoStyle> {
  isShowSubLogo?: boolean
  network?: string
  shape: IconShapeType
  size: number
  subLogoShape?: IconShapeType
  subNetwork?: string
  subToken?: string
  token?: string
}

const Logo: React.FC<SWLogoProps> = ({
  isShowSubLogo,
  network,
  shape = 'circle',
  size,
  styles,
  subLogoShape = 'circle',
  subNetwork,
  subToken,
  token,
}) => {
  const subLogoSize = size / 2.5
  const renderLogo = (_style: LogoStyle, theme: PartialTheme) => {
    let srcLogo = theme.logoMap.default
    if (token) {
      srcLogo = theme.logoMap.symbol[token]
    } else if (network) {
      srcLogo = theme.logoMap.network[network]
    }

    let srcSubLogo = theme.logoMap.default
    if (subToken) {
      srcSubLogo = theme.logoMap.symbol[subToken]
    } else if (subNetwork) {
      srcSubLogo = theme.logoMap.network[subNetwork]
    }

    return (
      <View>
        <Image
          src={srcLogo}
          style={{ width: size, height: size }}
          squircleSize={size}
          shape={shape}
        />
        {isShowSubLogo && (
          <Image
            src={srcSubLogo}
            style={{ width: subLogoSize, height: subLogoSize }}
            squircleSize={subLogoSize}
            shape={subLogoShape}
            containerStyle={_style.subLogoContainer}
          />
        )}
      </View>
    )
  }
  return (
    <WithTheme styles={styles} themeStyles={LogoStyles}>
      {renderLogo}
    </WithTheme>
  )
}

export default Logo
