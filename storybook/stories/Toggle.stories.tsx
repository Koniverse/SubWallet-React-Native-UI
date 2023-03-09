import { PortalProvider } from '@gorhom/portal'
import { select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Dimensions, View } from 'react-native'
import { Button, Toggle } from '../../components'
import CenterView from '../CenterView'

storiesOf('Toggle', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <ToggleComoponent />)

const ToggleComoponent = () => {
  const [isVisible, toggle] = React.useReducer((state) => !state, false)
  return (
    <View
      style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }}>
      <PortalProvider>
        <Toggle
          position={select(
            'position',
            ['top', 'bottom', 'left', 'right'],
            'top',
          )}
          isVisible={isVisible}
          onDismissPopover={toggle}
          message={text(
            'message',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare',
          )}>
          <Button onPress={toggle}>This is new cool feature</Button>
        </Toggle>
      </PortalProvider>
    </View>
  )
}
