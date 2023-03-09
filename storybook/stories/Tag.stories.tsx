import { boolean, radios, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import {
  PresetBrandColorTypes,
  PresetColorTypes,
  PresetStatusColorTypes,
} from '@subwallet/react-ui/es/_util/colors'
import { PresetBarShapeTypes } from '@subwallet/react-ui/es/_util/shapes'
import React from 'react'
import { Tag } from '../../components'
import CenterView from '../CenterView'

storiesOf('Tag', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <Tag
      color={select(
        'Color',
        [
          ...PresetBrandColorTypes,
          ...PresetStatusColorTypes,
          ...PresetColorTypes,
        ],
        'primary',
      )}
      shape={select('Shape', PresetBarShapeTypes, 'default')}
      bgType={radios(
        'BgType',
        { default: 'default', gray: 'gray', filled: 'filled' },
        'gray',
      )}
      closable={boolean('Closable', false)}>
      Text
    </Tag>
  ))
  .add('Closable', () => (
    <Tag
      color={select(
        'Color',
        [
          ...PresetBrandColorTypes,
          ...PresetStatusColorTypes,
          ...PresetColorTypes,
        ],
        'primary',
      )}
      shape={select('Shape', PresetBarShapeTypes, 'default')}
      bgType={radios(
        'BgType',
        { default: 'default', gray: 'gray', filled: 'filled' },
        'default',
      )}
      closable={boolean('Closable', true)}>
      Text
    </Tag>
  ))
  .add('Rounded', () => (
    <Tag
      color={select(
        'Color',
        [
          ...PresetBrandColorTypes,
          ...PresetStatusColorTypes,
          ...PresetColorTypes,
        ],
        'primary',
      )}
      shape={select('Shape', PresetBarShapeTypes, 'round')}
      bgType={radios(
        'BgType',
        { default: 'default', gray: 'gray', filled: 'filled' },
        'default',
      )}
      closable={boolean('Closable', false)}>
      Text
    </Tag>
  ))
  .add('Bg Gray', () => (
    <Tag
      color={select(
        'Color',
        [
          ...PresetBrandColorTypes,
          ...PresetStatusColorTypes,
          ...PresetColorTypes,
        ],
        'primary',
      )}
      shape={select('Shape', PresetBarShapeTypes, 'default')}
      bgType={radios(
        'BgType',
        { default: 'default', gray: 'gray', filled: 'filled' },
        'gray',
      )}
      closable={boolean('Closable', false)}>
      Text
    </Tag>
  ))
  .add('Bg Filled', () => (
    <Tag
      color={select(
        'Color',
        [
          ...PresetBrandColorTypes,
          ...PresetStatusColorTypes,
          ...PresetColorTypes,
        ],
        'primary',
      )}
      shape={select('Shape', PresetBarShapeTypes, 'default')}
      bgType={radios(
        'BgType',
        { default: 'default', gray: 'gray', filled: 'filled' },
        'filled',
      )}
      closable={boolean('Closable', false)}>
      Text
    </Tag>
  ))
