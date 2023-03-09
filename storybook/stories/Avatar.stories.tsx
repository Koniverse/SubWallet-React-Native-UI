import { number, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Avatar } from '../../components'
import CenterView from '../CenterView'

storiesOf('Avatar', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <Avatar
      theme={select('theme', ['polkadot', 'ethereum'], undefined)}
      size={number('size', 300)}
      value={text('value', '5HbcGs2QXVAc6Q6eoTzLYNAJWpN17AkCFRLnWDaHCiGYXvNc')}
      identPrefix={number('identPrefix', 42)}
    />
  ))
