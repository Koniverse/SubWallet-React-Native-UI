import * as React from 'react'
import { Animated, EasingFunction } from 'react-native'

type animateType = (_TimingAnimationConfig: {
  toValue?:
    | number
    | Animated.AnimatedValue
    | { x: number; y: number }
    | Animated.AnimatedValueXY
    | Animated.AnimatedInterpolation
  easing?: EasingFunction
  duration?: number
  delay?: number
  useNativeDriver?: boolean
}) => void

interface ConfigureInterface {
  initialValue: number
  animate: animateType
}

// Animated.Value hook
export function useAnimate(configure: ConfigureInterface) {
  const useAnimatedValue = (initialValue: number) => {
    const ref = React.useRef(new Animated.Value(initialValue))
    return ref.current
  }

  const animatedValue = useAnimatedValue(configure.initialValue)

  return [animatedValue]
}

// Animated.timing hook
export function useAnimatedTiming(): [Animated.Value, animateType] {
  const animatedRef = React.useRef<Animated.CompositeAnimation | void>()
  const animatedValRef = React.useRef(new Animated.Value(0))

  const animatedFunc = React.useCallback(
    ({ toValue = 1, duration = 200, easing, useNativeDriver = false }) => {
      animatedRef.current?.stop()
      animatedRef.current = Animated.timing(animatedValRef.current, {
        toValue,
        duration,
        easing,
        useNativeDriver,
      }).start()
    },
    [],
  )

  return [animatedValRef.current, animatedFunc]
}
