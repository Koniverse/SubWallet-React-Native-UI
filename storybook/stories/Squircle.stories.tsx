import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Squircle } from '../../components'
import CenterView from '../CenterView'

storiesOf('Squircle', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <Squircle />)
