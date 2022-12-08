import React, { ReactNode } from 'react'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'
// export type ListType = JSX.Element
export interface ListPropsType {
  renderHeader?: (() => React.ReactElement<any>) | string | React.ReactElement
  renderFooter?: (() => React.ReactElement<any>) | string | React.ReactElement
  children?: false | React.ReactElement | React.ReactElement[]
}

export interface ListItemPropsType {
  align?: 'top' | 'middle' | 'bottom'
  disabled?: boolean
  multipleLine?: boolean
  children?: ReactNode
  thumb?: ReactNode | null
  extra?: ReactNode
  arrow?: 'horizontal' | 'down' | 'up' | 'empty' | ''
  wrap?: boolean
  activeStyle?: StyleProp<ViewStyle>
  error?: boolean
  platform?: 'android' | 'ios'
}

export interface BriefProps {
  children?: ReactNode
  wrap?: boolean
  style?: StyleProp<TextStyle>
}
