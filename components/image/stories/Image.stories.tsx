import { number, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import CenterView from '../../CenterView'
import Image from '../index'

storiesOf('Image', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <Image
      shape={select(
        'shape',
        ['default', 'square', 'circle', 'squircle'],
        'default',
      )}
      style={{ width: number('width', 200), height: number('height', 200) }}
      squircleSize={number('Squircle size', 200)}
      src={{
        uri: text(
          'src',
          'https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg',
        ),
      }}
    />
  ))
