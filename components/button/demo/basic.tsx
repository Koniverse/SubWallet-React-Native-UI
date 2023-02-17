/* tslint:disable:no-unused-variable */

import React from 'react'
import { Button, Icon, WhiteSpace, WingBlank } from '../../'

/* tslint:disable:no-console */
export default () => (
  <WingBlank>
    <WhiteSpace />
    <Button>default</Button>
    <WhiteSpace />
    <Button disabled>default disabled</Button>
    <WhiteSpace />

    <Button>primary</Button>
    <WhiteSpace />
    <Button disabled>primary disabled</Button>
    <WhiteSpace />

    <Button>warning</Button>
    <WhiteSpace />
    <Button disabled>warning disabled</Button>
    <WhiteSpace />

    <Button loading>loading button</Button>

    <Button activeStyle={false}>无点击反馈</Button>
    <WhiteSpace />
    <Button activeStyle={{ backgroundColor: 'red' }}>
      custom feedback style
    </Button>
    <WhiteSpace />

    <WingBlank
      style={{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Button type="ghost">ghost</Button>
      <Button type="ghost" disabled>
        ghost disabled
      </Button>
      <Button type="ghost" size="sm">
        ghost
      </Button>
    </WingBlank>
    <WhiteSpace />

    <Button>
      <Icon name="login" />
    </Button>
  </WingBlank>
)
