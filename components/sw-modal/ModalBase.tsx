/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useImperativeHandle } from 'react'
import {
  Dimensions,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler'
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { WithTheme, WithThemeStyles } from '../style'
import ModalStyles, { ModalStyle } from './style'

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT

export interface SWModalProps extends WithThemeStyles<ModalStyle> {
  isVisible: boolean
  setVisible: (arg0: boolean) => void
  height: number
  children?: React.ReactNode
  wrapperStyle?: StyleProp<ViewStyle>
}

export type SWModalRefProps = {
  scrollTo: (destination: number) => void
  isActive: () => boolean
}

const ModalBase = React.forwardRef<SWModalRefProps, SWModalProps>(
  ({ isVisible, setVisible, height, children, styles, wrapperStyle }, ref) => {
    const translateY = useSharedValue(0)
    const active = useSharedValue(false)

    useEffect(() => {
      if (isVisible) {
        scrollTo(-height)
      }
    }, [isVisible])

    const scrollTo = useCallback((destination: number) => {
      'worklet'
      active.value = destination !== 0

      translateY.value = withSpring(
        destination,
        {
          damping: 25,
          stiffness: 340,
        },
        () => {
          if (destination === 0 && setVisible) {
            runOnJS(setVisible)(false)
          }
        },
      )
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
        if (translateY.value > context.value.y + 40) {
          scrollTo(0)
        } else if (translateY.value < context.value.y - 40) {
          scrollTo(MAX_TRANSLATE_Y)
        }
      })

    const rSWModalStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translateY.value,
        [height, MAX_TRANSLATE_Y],
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
        <GestureHandlerRootView style={isVisible && _styles.rootView}>
          <GestureDetector gesture={gesture}>
            <Animated.View
              style={[_styles.container, wrapperStyle, rSWModalStyle]}>
              <View style={_styles.line} />
              {children}
            </Animated.View>
          </GestureDetector>
          <Animated.View
            style={{
              backgroundColor: 'blue',
              opacity: interpolate(
                translateY.value,
                [0, -299, -height],
                [0, 0, 1],
                Extrapolate.CLAMP,
              ),
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}>
            <TouchableOpacity
              activeOpacity={0}
              style={{ flex: 1 }}
              onPress={() => scrollTo(0)}
            />
          </Animated.View>
        </GestureHandlerRootView>
      )
    }

    return (
      <WithTheme styles={styles} themeStyles={ModalStyles}>
        {renderModal}
      </WithTheme>
    )
  },
)

export default ModalBase
