import { boolean, color, number, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Button, Toast, ToastWrapper } from '../../components'
import CenterView from '../CenterView'

storiesOf('Toast', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => {
    return (
      <>
        <Button
          shape="squircle"
          onPress={() =>
            Toast.show({
              message: text('message', 'Hello Kitty'),
              autoHide: boolean('autoHide', true),
              dismissible: boolean('dismissible', true),
              backgroundColor: color('backgroundColor', 'rgba(0, 0, 0, 0.75)'),
              duration: number('duration', 2000),
              direction: select(
                'direction',
                ['horizontal', 'vertical'],
                'horizontal',
              ),
              type: select(
                'type',
                ['success', 'info', 'warning', 'error'],
                'success',
              ),
            })
          }>
          Show Toast
        </Button>
        <ToastWrapper placement={'top'} />
      </>
    )
  })
