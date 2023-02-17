import React from 'react'
import { View } from 'react-native'
// @ts-ignore
import SuperEllipseMask from 'react-native-super-ellipse-mask'

interface Props {
  backgroundColor?: string
  children?: React.ReactNode
  size?: number
}

const Squircle: React.FC<Props> = ({
  children,
  size = 64,
  backgroundColor = '#004BFF',
}) => {
  return (
    <SuperEllipseMask radius={size / 2.5}>
      <View
        style={{
          width: size,
          height: size,
          backgroundColor: backgroundColor,
        }}>
        {children}
      </View>
    </SuperEllipseMask>
  )
}

export default Squircle
