import { boolean, number, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { QRCode } from '../../components'
import CenterView from '../CenterView'

storiesOf('QRCode', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <QRCode
      value={text('value', '123123')}
      defaultIcon={boolean('default icon', false)}
      iconSize={number('icon size', 30)}
      errorLevel={select('error level', ['L', 'M', 'Q', 'H'], 'H')}
      status={select('status', ['active', 'expired', 'loading'], 'active')}
    />
  ))
