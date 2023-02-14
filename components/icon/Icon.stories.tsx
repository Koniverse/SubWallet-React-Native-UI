import { storiesOf } from '@storybook/react-native'
import React from 'react'
import Icon from '.'
import CenterView from '../CenterView'

storiesOf('Icon', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Icon with name=setting', () => <Icon name="setting" />)
