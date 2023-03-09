import { faAmbulance } from '@fortawesome/free-solid-svg-icons/faAmbulance'
import { color, number, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import { Airplay } from 'phosphor-react-native'
import React from 'react'
import { Icon } from '../../components'
import CenterView from '../CenterView'

storiesOf('Icon', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Phosphor', () => (
    <Icon
      type="phosphor"
      phosphorIcon={Airplay}
      iconColor={color('Icon color:', '#000')}
      size={select('Size:', ['xs', 'sm', 'md'], undefined)}
      customSize={number('Custom size:', 0)}
      weight={select(
        'Weight:',
        ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'],
        undefined,
      )}
    />
  ))
  .add('AwesomeFont', () => (
    <Icon
      type="fontAwesome"
      fontawesomeIcon={faAmbulance}
      iconColor={color('Icon color', '#000')}
      size={select('Size:', ['xs', 'sm', 'md'], undefined)}
      customSize={number('Custom size', 0)}
    />
  ))
