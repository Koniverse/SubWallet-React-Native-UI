// import { boolean, color, number, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import { X } from 'phosphor-react-native'
import React, { useCallback, useRef } from 'react'
import { Dimensions, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Button from '../../button'
import CenterView from '../../CenterView'
import Icon from '../../icon'
import SWModal, { SWModalHeader } from '../index'
import { SWModalRefProps } from '../ModalBase'

storiesOf('SWModal', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <Modal />)

const Modal = () => {
  const ref = useRef<SWModalRefProps>(null)

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive()
    if (isActive) {
      ref?.current?.scrollTo(0)
    } else {
      ref?.current?.scrollTo(-400)
    }
  }, [])
  return (
    <GestureHandlerRootView
      style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }}>
      <View
        style={{
          flex: 1,
          // backgroundColor: '#111',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button onPress={onPress}>Click</Button>
        <SWModal ref={ref}>
          <SWModalHeader
            title="SubWallet Modal"
            leftIcon={<Icon phosphorIcon={X} size="sm" />}
            rightText="Todo"
          />
          <View style={{ flex: 1, backgroundColor: 'orange' }} />
        </SWModal>
      </View>
    </GestureHandlerRootView>
  )
}
