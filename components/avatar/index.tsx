import Identicon from '@polkadot/reactnative-identicon'
import React from 'react'
import { Image, StyleProp } from 'react-native'
import { WithTheme, WithThemeStyles } from '../style'
// @ts-ignore
import { toDataUrl } from './blockies.js'
import AvatarStyles, { AvatarStyle } from './style'

function getEthereumIdenticonStyle(size: number): StyleProp<any> {
  return {
    width: size,
    height: size,
    borderRadius: size,
  }
}

export interface SWLogoProps extends WithThemeStyles<AvatarStyle> {
  theme?: 'polkadot' | 'ethereum'
  size: number
  value: string | null
  identPrefix?: number
}

const Avatar: React.FC<SWLogoProps> = ({
  theme,
  size,
  value,
  identPrefix,
  styles,
}) => {
  const renderLogo = (_style: AvatarStyle) => {
    if (theme === 'ethereum') {
      return (
        <Image
          source={{ uri: toDataUrl(value) }}
          style={getEthereumIdenticonStyle(size)}
        />
      )
    }
    return (
      <Identicon
        prefix={identPrefix}
        value={value}
        size={size}
        theme="polkadot"
      />
    )
  }
  return (
    <WithTheme styles={styles} themeStyles={AvatarStyles}>
      {renderLogo}
    </WithTheme>
  )
}

export default Avatar
