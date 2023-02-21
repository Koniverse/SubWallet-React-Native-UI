import type { NumberFormatter } from '@subwallet/react-ui/es/_util/number'
import {
  balanceFormatter,
  formatNumber,
} from '@subwallet/react-ui/es/_util/number'
import type { BigNumber } from 'bignumber.js'
import React, { useMemo } from 'react'
import { TextStyle, View } from 'react-native'
import { WithTheme, WithThemeStyles } from '../style'
import Typography from '../typography'
import NumberStyles, { NumberStyle } from './style'

type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined
export interface SwNumberProps extends WithThemeStyles<NumberStyle> {
  value: string | number | BigNumber
  decimal: number
  size?: number
  weight?: FontWeight
  subFloatNumber?: boolean
  prefix?: string
  suffix?: string
  formatType?: 'default' | 'balance' | 'custom'
  customFormatter?: NumberFormatter
  metadata?: Record<string, number>
  leftOpacity?: number
  leftColor?: string
  rightOpacity?: number
  rightColor?: string
}

interface LocaleNumberFormat {
  decimal: string
  thousand: string
}

const intToLocaleString = (str: string, separator: string) =>
  str.replace(/\B(?=(\d{3})+(?!\d))/g, separator)

const getNumberSeparators = () => {
  // default
  const res: LocaleNumberFormat = {
    decimal: '.',
    thousand: '',
  }

  // convert a number formatted according to locale
  const str = parseFloat('1234.56').toLocaleString()

  // if the resulting number does not contain previous number
  // (i.e. in some Arabic formats), return defaults
  if (!str.match('1')) {
    return res
  }

  // get decimal and thousand separators
  res.decimal = str.replace(/.*4(.*)5.*/, '$1')
  res.thousand = str.replace(/.*1(.*)2.*/, '$1')

  // return results
  return res
}

const { decimal: decimalSeparator, thousand: thousandSeparator } =
  getNumberSeparators()

const Number: React.FC<SwNumberProps> = (props) => {
  const {
    metadata,
    formatType,
    decimal,
    size: integerFontSize = 16,
    prefix,
    customFormatter,
    suffix,
    subFloatNumber,
    value,
    leftColor = 'black',
    leftOpacity = 1,
    rightColor = 'black',
    rightOpacity = 1,
    weight = '500',
    styles,
  } = props

  const leftStyle = useMemo(
    (): TextStyle => ({
      color: leftColor,
      opacity: leftOpacity,
    }),
    [leftColor, leftOpacity],
  )

  const rightStyle = useMemo(
    (): TextStyle => ({
      color: rightColor,
      opacity: rightOpacity,
    }),
    [rightColor, rightOpacity],
  )

  const decimalFontSize = useMemo((): number => {
    if (subFloatNumber) {
      return (integerFontSize * 24) / 38
    }

    return integerFontSize
  }, [subFloatNumber, integerFontSize])

  const formatted = useMemo((): string => {
    try {
      switch (formatType) {
        case 'custom':
          if (customFormatter) {
            return formatNumber(value, decimal, customFormatter, metadata)
          }
          return formatNumber(value, decimal, balanceFormatter, metadata)
        case 'balance':
        case 'default':
        default:
          return formatNumber(value, decimal, balanceFormatter, metadata)
      }
    } catch (e) {
      return value.toString()
    }
  }, [value, decimal, customFormatter, formatType, metadata])

  const [_int, _dec] = useMemo((): [string, string] => {
    const [int, dec] = formatted.split('.')

    return [intToLocaleString(int, thousandSeparator), dec]
  }, [formatted])

  const renderNumber = (_style: NumberStyle) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        {prefix && (
          <Typography.Text
            style={{
              ...leftStyle,
              fontWeight: weight,
              fontSize: integerFontSize,
            }}>
            {prefix}
          </Typography.Text>
        )}
        <Typography.Text
          style={{
            ...leftStyle,
            fontWeight: weight,
            fontSize: integerFontSize,
          }}>
          {_int}
        </Typography.Text>
        {!!_dec && (
          <Typography.Text
            style={{
              ...rightStyle,
              fontWeight: weight,
              fontSize: decimalFontSize,
            }}>
            {decimalSeparator}
            {_dec}
          </Typography.Text>
        )}
        {suffix && (
          <Typography.Text
            style={{
              ...rightStyle,
              fontWeight: weight,
              fontSize: decimalFontSize,
            }}>
            &nbsp;{suffix}
          </Typography.Text>
        )}
      </View>
    )
  }

  return (
    <WithTheme styles={styles} themeStyles={NumberStyles}>
      {renderNumber}
    </WithTheme>
  )
}

export default Number
