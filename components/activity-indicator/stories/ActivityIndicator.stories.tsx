import { number, color } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import CenterView from '../../CenterView'
import RNActivityIndicator from '../index'

storiesOf('Activity Indicator', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <RNActivityIndicator
      size={number('Size', 16)}
      indicatorColor={color('Indicator color', '#000')}
    />
  ))
