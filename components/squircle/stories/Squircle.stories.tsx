import { storiesOf } from '@storybook/react-native'
import React from 'react'
import CenterView from '../../CenterView'
import Squircle from '../index'

storiesOf('Squircle', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <Squircle></Squircle>)
