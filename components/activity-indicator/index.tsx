/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { View } from 'react-native'
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'
import { WithTheme, WithThemeStyles } from '../style'
// @ts-ignore
import SVGImage from './loading-outlined.svg'
import ActivityIndicatorStyles, { ActivityIndicatorStyle } from './style'

interface ActivityIndicatorProps
  extends WithThemeStyles<ActivityIndicatorStyle> {
  size: number
  indicatorColor: string
}

const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({
  size = 16,
  indicatorColor = '#fff',
  styles,
}) => {
  const rotation = useSharedValue(0)
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    }
  }, [rotation.value])

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      200,
    )
    return () => cancelAnimation(rotation)
  }, [])

  const renderIndicator = (_style: ActivityIndicatorStyle) => {
    return (
      <View style={_style.container}>
        <Animated.View style={[animatedStyles]}>
          <SVGImage width={size} height={size} color={indicatorColor} />
        </Animated.View>
      </View>
    )
  }
  return (
    <WithTheme styles={styles} themeStyles={ActivityIndicatorStyles}>
      {renderIndicator}
    </WithTheme>
  )
}

export default ActivityIndicator
