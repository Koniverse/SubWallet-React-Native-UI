import { theme as swTheme } from '@subwallet/react-ui'
import { GlobalToken } from '@subwallet/react-ui/es/theme/interface'
import logoMap from '@subwallet/react-ui/es/theme/themes/logoMap'
import defaultTheme from '@subwallet/react-ui/es/theme/themes/seed'
import React from 'react'
import shallowequal from 'shallowequal'

export const ThemeContext = React.createContext(defaultTheme)
export type Theme = GlobalToken & { [key: string]: any }
export type PartialTheme = Partial<Theme>

export interface ThemeProviderProps {
  value?: PartialTheme
  children?: React.ReactNode
}
export const ThemeProvider = (props: ThemeProviderProps) => {
  const { value, children } = props
  const { token } = swTheme.useToken()

  const theme = React.useMemo(() => {
    return {
      ...defaultTheme,
      logoMap,
      ...token,
      ...value,
    }
  }, [value, token])
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
export interface UseThemeContextProps {
  theme?: PartialTheme
}
export const useTheme = (props: UseThemeContextProps = {}) => {
  const theme = React.useContext(ThemeContext)
  return { ...theme, ...props.theme }
}

export interface WithThemeProps<T, S> {
  themeStyles?: (theme: PartialTheme) => T
  styles?: PartialTheme
  children: (
    // fix: styles[`${size}RawText`]
    styles: PartialTheme,
    theme: PartialTheme,
  ) => React.ReactNode
}

/**
 * Component can extends this props
 */
export type WithThemeStyles<T> = { styles?: Partial<T> }

export function WithTheme<T, S>(props: WithThemeProps<T, S>) {
  const { children, themeStyles, styles } = props

  const stylesRef = React.useRef<PartialTheme | undefined>(undefined)
  const cache = React.useRef<T | any>(undefined)

  const getStyles = React.useCallback(
    (theme: PartialTheme) => {
      if (themeStyles && cache.current === undefined) {
        cache.current = themeStyles(theme)
      }

      // TODO: check these styles has changed
      if (styles && !shallowequal(stylesRef.current, styles)) {
        stylesRef.current = styles
        // merge styles from user defined
        styles &&
          Object.keys(styles).forEach((key) => {
            if (cache.current[key]) {
              cache.current[key] = [cache.current[key], styles[key]]
            }
          })
      }

      return cache.current || {}
    },
    [themeStyles, styles],
  )

  return (
    <ThemeContext.Consumer>
      {(theme) => children(getStyles(theme), theme)}
    </ThemeContext.Consumer>
  )
}
