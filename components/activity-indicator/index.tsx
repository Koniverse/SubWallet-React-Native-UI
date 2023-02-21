import React, { useEffect, useMemo } from 'react'
import { Animated, Easing } from 'react-native'
import { WithThemeStyles } from '../style'
import { ActivityIndicatorStyle } from './style/index'
// @ts-ignore
import SVGImg from './loading-outlined.svg'

export interface ActivityIndicatorNativeProps
  extends WithThemeStyles<ActivityIndicatorStyle> {
  size?: number
  indicatorColor?: string
}

const RNActivityIndicator: React.FC<ActivityIndicatorNativeProps> = ({
  size = 16,
  indicatorColor = '#FFF',
}) => {
  const animation = useMemo(() => new Animated.Value(0), [])

  const rotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })

  useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start()
  }, [animation])

  return (
    <Animated.View style={{ transform: [{ rotate: rotation }] }}>
      <SVGImg width={size} height={size} color={indicatorColor} />
    </Animated.View>
  )
}

export default RNActivityIndicator
