import { color, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { ActivityIndicator } from '../../components'
import CenterView from '../CenterView'

storiesOf('Activity Indicator', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <ActivityIndicator
      size={number('Size', 16)}
      indicatorColor={color('Indicator color', '#000')}
    />
  ))
