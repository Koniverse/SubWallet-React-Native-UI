import React from 'react'
import { ImageSourcePropType, View } from 'react-native'
import QRCodeGenerator, { QRCodeProps } from 'react-native-qrcode-svg'
import { ActivityIndicator, Typography } from '..'
import { WithTheme, WithThemeStyles } from '../style'
import QRCodeStyles, { QRCodeStyle } from './style'

export interface SWQRCodeProps
  extends WithThemeStyles<QRCodeStyle>,
    QRCodeProps {
  icon?: ImageSourcePropType
  defaultIcon?: boolean
  iconSize?: number
  errorLevel?: 'L' | 'M' | 'Q' | 'H'
  status?: 'active' | 'expired' | 'loading'
  onRefresh?: () => void
}

const QRCode: React.FC<SWQRCodeProps> = ({
  styles,
  icon,
  defaultIcon,
  iconSize = 20,
  status,
  errorLevel,
  ...restProps
}) => {
  const renderQRCode = (_style: QRCodeStyle) => {
    return (
      <View style={_style.container}>
        <QRCodeGenerator
          logo={defaultIcon ? require('./QrCodeIcon.png') : icon}
          logoSize={iconSize}
          logoMargin={3}
          logoBorderRadius={5}
          logoBackgroundColor="white"
          ecl={errorLevel}
          {...restProps}
        />
        {status === 'loading' && (
          <View style={_style.expired}>
            <ActivityIndicator size={12} indicatorColor="black" />
          </View>
        )}
        {status === 'expired' && (
          <View style={_style.expired}>
            <Typography.Text size="sm" style={_style.bold}>
              QR code expired
            </Typography.Text>
          </View>
        )}
      </View>
    )
  }
  return (
    <WithTheme styles={styles} themeStyles={QRCodeStyles}>
      {renderQRCode}
    </WithTheme>
  )
}

export default QRCode
