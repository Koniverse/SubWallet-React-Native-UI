import { boolean, number, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Logo } from '../../components'
import CenterView from '../CenterView'

storiesOf('Logo', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <Logo
      isShowSubLogo={boolean('isShowSubLogo', false)}
      network={text('network', 'ksm')}
      size={number('size', 100)}
      shape={select('shape', ['circle', 'squircle'], 'circle')}
      subLogoShape={select('subLogoShape', ['circle', 'squircle'], 'circle')}
      subNetwork={text('subNetwork', 'ksm')}
      subToken={text('subToken', 'default')}
      token={text('token', 'default')}
    />
  ))
