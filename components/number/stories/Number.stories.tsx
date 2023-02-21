import { boolean, color, number, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import CenterView from '../../CenterView'
import Number from '../index'

storiesOf('Number', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <Number
      value={number('value', 5000)}
      decimal={number('decimal', 8)}
      prefix={text('prefix', '$')}
      suffix={text('suffix', 'DOT')}
      size={number('size', 16)}
      weight={select(
        'weight',
        [
          'normal',
          'bold',
          '100',
          '200',
          '300',
          '400',
          '500',
          '600',
          '700',
          '800',
          '900',
          undefined,
        ],
        undefined,
      )}
      subFloatNumber={boolean('subFloatNumber', false)}
      leftOpacity={number('leftOpacity', 1)}
      rightOpacity={number('rightOpacity', 0.8)}
      leftColor={color('leftColor', 'black')}
      rightColor={color('rightColor', 'black')}
    />
  ))
