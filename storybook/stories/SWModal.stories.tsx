// import { boolean, color, number, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, SWModal } from '../../components'
import CenterView from '../CenterView'

storiesOf('SWModal', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <Modal />)

const Modal = () => {
  const [isVisible, setVisible] = useState(false)
  return (
    <>
      <Button onPress={() => setVisible(true)}>Click</Button>
      <SWModal isVisible={isVisible} setVisible={setVisible} height={300}>
        <View style={{ flex: 1, backgroundColor: 'orange' }} />
      </SWModal>
    </>
  )
}
