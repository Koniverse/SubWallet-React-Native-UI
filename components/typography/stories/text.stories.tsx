/* eslint-disable no-alert */
import { boolean, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import CenterView from '../../CenterView'
import Icon from '../../icon'
import Typography from '../index'

storiesOf('Typography', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('with Text', () => (
    <Typography.Text
      monospace={boolean('monospace', false)}
      ellipsis={boolean('ellipsis', false)}>
      {text(
        'Typography text',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet corporis cumque deleniti dicta distinctio dolores ea est et eveniet ipsam iste molestiae non possimus, recusandae rem sint. Cumque, eum?',
      )}
    </Typography.Text>
  ))
  .add('with Title', () => (
    <Typography.Title
      level={select('level', [1, 2, 3, 4, 5, 6], undefined)}
      superLevel={select('superLevel', [1, 2, 3], undefined)}>
      {text('Typography Title', 'Hello SubWallet')}
    </Typography.Title>
  ))
  .add('with Link', () => (
    <Typography.Link
      onPress={() => alert('Go to the link >>')}
      underline={boolean('underline', true)}
      size={select('size', ['xs', 'sm', 'md', 'lg'], undefined)}
      icon={<Icon name="apple" />}>
      {text(
        'Typography Link',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      )}
    </Typography.Link>
  ))
