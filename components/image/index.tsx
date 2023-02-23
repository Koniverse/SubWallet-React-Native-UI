import React, { useState } from 'react'
import { ImageRequireSource, StyleProp, View, ViewStyle } from 'react-native'
import FastImage, { FastImageProps, Source } from 'react-native-fast-image'
import { ActivityIndicator } from '..'
import { WithTheme, WithThemeStyles } from '../style'
import ImageStyles, { ImageStyle } from './style'
// @ts-ignore
import SuperEllipseMask from 'react-native-super-ellipse-mask'

type ImageShape = 'default' | 'square' | 'circle' | 'squircle'
export interface SWImageProps
  extends WithThemeStyles<ImageStyle>,
    FastImageProps {
  containerStyle?: StyleProp<ViewStyle>
  shape?: ImageShape
  src: Source | ImageRequireSource
  squircleSize?: number
}

const Image: React.FC<SWImageProps> = ({
  containerStyle,
  squircleSize,
  shape = 'default',
  src,
  style,
  styles,
  ...restProps
}) => {
  const [isLoading, setLoading] = useState(true)

  const onLoadStart = () => {
    setLoading(true)
  }
  const onLoadEnd = () => {
    setLoading(false)
  }

  const renderImage = (_style: ImageStyle) => {
    const customStyle = [_style.container, containerStyle]
    const customImageStyle = [
      _style[`${shape}Image`],
      { width: squircleSize || 'undefined' },
      style,
    ]
    if (shape === 'squircle') {
      return (
        <SuperEllipseMask
          radius={typeof squircleSize === 'number' ? squircleSize / 2.5 : 100}>
          <FastImage
            source={src}
            style={customImageStyle}
            onLoadStart={onLoadStart}
            onLoadEnd={onLoadEnd}
            {...restProps}
          />
          {isLoading && (
            <View style={_style.loadingImage}>
              <ActivityIndicator size={30} indicatorColor="#737373" />
            </View>
          )}
        </SuperEllipseMask>
      )
    }
    return (
      <View style={customStyle}>
        <FastImage
          source={src}
          style={customImageStyle}
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
          {...restProps}
        />
        {isLoading && (
          <View style={_style.loadingImage}>
            <ActivityIndicator size={30} indicatorColor="#737373" />
          </View>
        )}
      </View>
    )
  }
  return (
    <WithTheme styles={styles} themeStyles={ImageStyles}>
      {renderImage}
    </WithTheme>
  )
}

export default Image
