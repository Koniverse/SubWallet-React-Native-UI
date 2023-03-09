/* eslint-disable no-alert */
import { boolean, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import { Airplay } from 'phosphor-react-native'
import React from 'react'
import { Icon, Typography } from '../../components'
import CenterView from '../CenterView'

storiesOf('Typography', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Text', () => (
    <Typography.Text
      monospace={boolean('monospace', false)}
      ellipsis={boolean('ellipsis', false)}>
      {text(
        'Typography text',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet corporis cumque deleniti dicta distinctio dolores ea est et eveniet ipsam iste molestiae non possimus, recusandae rem sint. Cumque, eum?',
      )}
    </Typography.Text>
  ))
  .add('Title', () => (
    <Typography.Title
      level={select('level', [1, 2, 3, 4, 5, 6], undefined)}
      superLevel={select('superLevel', [1, 2, 3], undefined)}>
      {text('Typography Title', 'Hello SubWallet')}
    </Typography.Title>
  ))
  .add('Link', () => (
    <Typography.Link
      onPress={() => alert('Go to the link >>')}
      underline={boolean('underline', true)}
      size={select('size', ['xs', 'sm', 'md', 'lg'], undefined)}
      icon={<Icon type="phosphor" phosphorIcon={Airplay} />}>
      {text(
        'Typography Link',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      )}
    </Typography.Link>
  ))
