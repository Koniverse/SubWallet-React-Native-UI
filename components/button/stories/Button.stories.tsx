import { action } from '@storybook/addon-actions'
import { select, boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import CenterView from '../../CenterView'
import Button from '../index'
import Icon from '../../icon'

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => (
    <Button
      shape={select(
        'Shape',
        ['default', 'square', 'round', 'circle', 'squircle'],
        'default',
      )}
      type={select(
        'Type',
        ['primary', 'secondary', 'warning', 'danger', 'ghost'],
        'primary',
      )}
      size={select('Size', ['xs', 'sm', 'md', 'lg'], 'md')}
      disabled={boolean('Disabled', false)}
      block={boolean('Block', false)}
      loading={boolean('Loading', false)}
      contentAlign={select('Content align', ['center', 'left'], 'center')}
      onPress={() => alert('eeeee')}>
      Hello Button
    </Button>
  ))
  .add('Icon', () => (
    <Button
      shape={select(
        'Shape',
        ['default', 'square', 'round', 'circle', 'squircle'],
        'default',
      )}
      type={select(
        'Type',
        ['primary', 'secondary', 'warning', 'danger', 'ghost'],
        'primary',
      )}
      size={select('Size', ['xs', 'sm', 'md', 'lg'], 'md')}
      disabled={boolean('Disabled', false)}
      block={boolean('Block', false)}
      loading={boolean('Loading', false)}
      contentAlign={select('Content align', ['center', 'left'], 'center')}
      icon={<Icon name={'camera'} size={'md'} />}
      onPress={action('clicked-text')}
    />
  ))
  .add('Squircle', () => (
    <Button
      shape={select(
        'Shape',
        ['default', 'square', 'round', 'circle', 'squircle'],
        'default',
      )}
      type={select(
        'Type',
        ['primary', 'secondary', 'warning', 'danger', 'ghost'],
        'primary',
      )}
      size={select('Size', ['xs', 'sm', 'md', 'lg'], 'md')}
      disabled={boolean('Disabled', false)}
      block={boolean('Block', false)}
      loading={boolean('Loading', false)}
      contentAlign={select('Content align', ['center', 'left'], 'center')}
      icon={<Icon name={'camera'} size={'md'} />}
      onPress={action('clicked-text')}
    />
  ))
  .add('Icon with text', () => (
    <Button
      shape={select(
        'Shape',
        ['default', 'square', 'round', 'circle', 'squircle'],
        'default',
      )}
      type={select(
        'Type',
        ['primary', 'secondary', 'warning', 'danger', 'ghost'],
        'primary',
      )}
      size={select('Size', ['xs', 'sm', 'md', 'lg'], 'md')}
      disabled={boolean('Disabled', false)}
      block={boolean('Block', false)}
      loading={boolean('Loading', false)}
      contentAlign={select('Content align', ['center', 'left'], 'center')}
      icon={<Icon name={'camera'} size={'md'} />}
      onPress={action('clicked-text')}>
      Button
    </Button>
  ))
  .add('Ghost Icon', () => (
    <Button
      shape={select(
        'Shape',
        ['default', 'square', 'round', 'circle', 'squircle'],
        'default',
      )}
      type={select(
        'Type',
        ['primary', 'secondary', 'warning', 'danger', 'ghost'],
        'ghost',
      )}
      size={select('Size', ['xs', 'sm', 'md', 'lg'], 'md')}
      disabled={boolean('Disabled', false)}
      block={boolean('Block', false)}
      loading={boolean('Loading', false)}
      contentAlign={select('Content align', ['center', 'left'], 'center')}
      icon={<Icon name={'camera'} size={'md'} />}
      onPress={action('clicked-text')}
    />
  ))
  .add('Ghost Icon with text', () => (
    <Button
      shape={select(
        'Shape',
        ['default', 'square', 'round', 'circle', 'squircle'],
        'default',
      )}
      type={select(
        'Type',
        ['primary', 'secondary', 'warning', 'danger', 'ghost'],
        'ghost',
      )}
      size={select('Size', ['xs', 'sm', 'md', 'lg'], 'md')}
      disabled={boolean('Disabled', false)}
      block={boolean('Block', false)}
      loading={boolean('Loading', false)}
      contentAlign={select('Content align', ['center', 'left'], 'center')}
      icon={<Icon name={'camera'} size={'md'} />}
      onPress={action('clicked-text')}>
      Button
    </Button>
  ))
