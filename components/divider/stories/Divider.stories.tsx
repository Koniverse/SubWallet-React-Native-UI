import { storiesOf } from '@storybook/react-native'
import CenterView from '../../CenterView'
import React from 'react'
import Divider from '../../divider'
import { boolean, color } from '@storybook/addon-knobs'
import Typography from '../../typography'

storiesOf('Divider', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <>
      <Typography.Text ellipsis={true} style={{ width: '100%' }}>
        This is content
      </Typography.Text>
      <Divider
        color={color('Color', '#212121')}
        dashed={boolean('Dashed', false)}
      />
    </>
  ))
