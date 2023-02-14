import { presetPalettes } from '@ant-design/colors'
import { ConfigProvider } from '@subwallet/react-ui'
import logoMap from '@subwallet/react-ui/es/theme/themes/logoMap'
import seedToken from '@subwallet/react-ui/es/theme/themes/seed'
import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Flex, Icon, Modal, Provider } from '../index'
import style from './style'

interface ThemePanelProps {
  currentTheme: string
  changeTheme: (newTheme: object, currentTheme: string) => void
}

const ThemePanel: React.FC<ThemePanelProps> = ({
  currentTheme,
  changeTheme,
}) => {
  const [newTheme, setNewTheme] = useState(currentTheme)

  return (
    <Flex direction="row" wrap="wrap">
      {Object.keys(presetPalettes).map((palettes) => (
        <Button
          style={{
            width: '46%',
            marginRight: 10,
            marginBottom: 10,
          }}
          type={newTheme === palettes ? 'primary' : undefined}
          key={palettes}
          onPress={() => {
            changeTheme(
              {
                primaryColor: 'red',
              },
              palettes,
            )
            setNewTheme(palettes)
          }}>
          {palettes}
        </Button>
      ))}
    </Flex>
  )
}

interface ThemeProps {
  changeTheme: (newTheme: any, currentTheme: string) => void
  currentTheme: string
}

const Theme: React.FC<ThemeProps> = ({ changeTheme, currentTheme }) => {
  return (
    <Button
      onPress={() =>
        Modal.alert(
          'Accept change?',
          <ThemePanel changeTheme={changeTheme} currentTheme={currentTheme} />,
        )
      }
      type="ghost"
      styles={{
        wrapperStyle: { borderWidth: 0 },
      }}>
      <Icon name="setting" />
    </Button>
  )
}

interface CenterViewProps {
  children?: React.ReactNode
}

const CenterView: React.FC<CenterViewProps> = ({ children }) => {
  const [newTheme, setNewTheme] = useState({
    token: {
      ...seedToken,
    },
    logoMap: logoMap,
  })
  const [currentTheme, setCurrentTheme] = useState('default')

  const changeTheme = (
    newThemeSelecting: object,
    currentThemeSelecting: string,
  ) => {
    setCurrentTheme(currentThemeSelecting)
    setNewTheme((oldTheme) => ({ ...oldTheme, ...newThemeSelecting }))
  }
  return (
    <ConfigProvider theme={newTheme}>
      <Provider>
        <Theme changeTheme={changeTheme} currentTheme={currentTheme} />
        <View style={style.main}>{children}</View>
      </Provider>
    </ConfigProvider>
  )
}

export default CenterView
