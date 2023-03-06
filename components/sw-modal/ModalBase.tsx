import React, { useCallback, useImperativeHandle } from 'react'
import { Dimensions, StyleProp, View, ViewStyle } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { WithTheme, WithThemeStyles } from '../style'
import ModalStyles, { ModalStyle } from './style'

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 10

export interface SWModalProps extends WithThemeStyles<ModalStyle> {
  children?: React.ReactNode
  wrapperStyle?: StyleProp<ViewStyle>
}

export type SWModalRefProps = {
  scrollTo: (destination: number) => void
  isActive: () => boolean
}

const SWModal = React.forwardRef<SWModalRefProps, SWModalProps>(
  ({ children, styles, wrapperStyle }, ref) => {
    const translateY = useSharedValue(0)
    const active = useSharedValue(false)

    const scrollTo = useCallback((destination: number) => {
      'worklet'
      active.value = destination !== 0

      translateY.value = withSpring(destination, { damping: 12 })
    }, [])

    const isActive = useCallback(() => {
      return active.value
    }, [])

    useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
      scrollTo,
      isActive,
    ])

    const context = useSharedValue({ y: 0 })
    const gesture = Gesture.Pan()
      .onStart(() => {
        context.value = { y: translateY.value }
      })
      .onUpdate((event) => {
        translateY.value = event.translationY + context.value.y
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y)
      })
      .onEnd(() => {
        if (translateY.value > -SCREEN_HEIGHT / 2) {
          scrollTo(0)
        } else if (translateY.value < -SCREEN_HEIGHT / 2) {
          scrollTo(MAX_TRANSLATE_Y)
        }
      })

    const rSWModalStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translateY.value,
        [MAX_TRANSLATE_Y + 10, MAX_TRANSLATE_Y],
        [25, 5],
        Extrapolate.CLAMP,
      )

      return {
        borderRadius,
        transform: [{ translateY: translateY.value }],
      }
    })

    const renderModal = (_styles: ModalStyle) => {
      return (
        <GestureDetector gesture={gesture}>
          <Animated.View
            style={[_styles.container, rSWModalStyle, wrapperStyle]}>
            <View style={_styles.line} />
            {children}
          </Animated.View>
        </GestureDetector>
      )
    }

    return (
      <WithTheme styles={styles} themeStyles={ModalStyles}>
        {renderModal}
      </WithTheme>
    )
  },
)

export default SWModal
