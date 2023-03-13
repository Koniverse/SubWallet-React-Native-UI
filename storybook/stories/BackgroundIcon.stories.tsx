import { color, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import { Airplay } from 'phosphor-react-native'
import React from 'react'
import { BackgroundIcon } from '../../components'
import CenterView from '../CenterView'

storiesOf('BackgroundIcon', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <BackgroundIcon
      type="phosphor"
      phosphorIcon={Airplay}
      shape={select(
        'shape:',
        ['circle', 'default', 'square', 'squircle'],
        undefined,
      )}
      backgroundColor={color('background color:', '#000')}
      iconColor={color('color:', 'red')}
      size={select('size:', ['xs', 'sm', 'md'], undefined)}
      weight={select(
        'weight:',
        ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'],
        undefined,
      )}
    />
  ))
