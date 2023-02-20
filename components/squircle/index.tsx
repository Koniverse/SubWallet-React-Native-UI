import React from 'react'
import { View } from 'react-native'
// @ts-ignore
import SuperEllipseMask from 'react-native-super-ellipse-mask'

interface Props {
  backgroundColor?: string
  children?: React.ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

const SIZE_MAP: Record<string, number> = {
  xs: 40,
  sm: 48,
  md: 52,
  lg: 64,
}

const Squircle: React.FC<Props> = ({
  children,
  size = 'md',
  backgroundColor = '#004BFF',
}) => {
  const squircleSize = size ? SIZE_MAP[size] : 52
  return (
    <SuperEllipseMask radius={squircleSize / 2.5}>
      <View
        style={{
          width: squircleSize,
          height: squircleSize,
          backgroundColor: backgroundColor,
        }}>
        {children}
      </View>
    </SuperEllipseMask>
  )
}

export default Squircle
