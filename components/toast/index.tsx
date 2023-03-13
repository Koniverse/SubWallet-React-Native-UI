import { NotificationPlacement } from '@subwallet/react-ui/es/notification/interface'
import {
  CheckCircle,
  Info,
  WarningCircle,
  XCircle,
} from 'phosphor-react-native'
import React, { createRef } from 'react'
import { Text, View } from 'react-native'
import {
  Swipeable,
  ToasterBase,
  ToasterMethods,
  useToast,
} from 'react-native-customizable-toast'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {
  SlideInDown,
  SlideInLeft,
  SlideInRight,
  SlideInUp,
  SlideOutDown,
  SlideOutLeft,
  SlideOutRight,
  SlideOutUp,
} from 'react-native-reanimated'
import { Icon } from '..'
import { PartialTheme, WithTheme, WithThemeStyles } from '../style'
import ToastStyles, { ToastStyle } from './style'

type NotificationType = 'success' | 'info' | 'warning' | 'error'

interface CustomToastComponentProps extends WithThemeStyles<ToastStyle> {
  message: React.ReactNode
  duration?: number
  type?: NotificationType
  onPress?(): void
  dismissible?: boolean
  backgroundColor?: string
  autoHide?: boolean
  direction?: 'vertical' | 'horizontal'
}

const CustomToasterRef = createRef<ToasterMethods<CustomToastComponentProps>>()
const typeToIcon = {
  success: CheckCircle,
  info: Info,
  error: XCircle,
  warning: WarningCircle,
}

const CustomToastComponent: React.FC<CustomToastComponentProps> = ({
  styles,
}) => {
  const {
    message,
    hide,
    dismissible,
    backgroundColor = 'rgba(0, 0, 0, 0.75)',
    type = 'info',
    direction = 'horizontal',
    onPress,
  } = useToast<CustomToastComponentProps>()

  const renderToast = (_styles: ToastStyle, theme: PartialTheme) => {
    const getTouchableStyle = [
      _styles.touchable,
      _styles[`${type}BorderColor`],
      _styles[`${direction}Toast`],
      {
        backgroundColor,
      },
    ]
    const iconStatusColor = {
      success: theme.colorSuccess,
      info: theme.colorInfo,
      error: theme.colorError,
      warning: theme.colorWarning,
    }
    const onPressToast = () => {
      onPress && onPress()
      hide && hide()
    }

    return (
      <Swipeable onSwipe={hide} disabled={!dismissible}>
        <View style={_styles.container}>
          <TouchableOpacity
            useNativeAnimations
            disabled={!dismissible}
            style={getTouchableStyle}
            onPress={onPressToast}>
            {React.isValidElement(message) ? (
              message
            ) : (
              <>
                <Icon
                  type="phosphor"
                  phosphorIcon={typeToIcon[type]}
                  iconColor={iconStatusColor[type]}
                  weight="fill"
                  size="sm"
                />
                <Text style={_styles.text}>{message}</Text>
              </>
            )}
          </TouchableOpacity>
        </View>
      </Swipeable>
    )
  }

  return (
    <WithTheme styles={styles} themeStyles={ToastStyles}>
      {renderToast}
    </WithTheme>
  )
}

const Toast = {
  show: (options: CustomToastComponentProps) => {
    const { autoHide = true, duration = 3000 } = options
    const id = CustomToasterRef.current?.show(options)!
    if (duration && duration > 0 && autoHide) {
      setTimeout(() => {
        CustomToasterRef.current?.hide(id)
      }, duration)
    }
  },
  hide: (id: string) => CustomToasterRef.current?.hide(id),
  filter: (fn: (value: CustomToastComponentProps, index: number) => void) =>
    CustomToasterRef.current?.filter(fn),
  update: (id: string, options: Partial<CustomToastComponentProps>) =>
    CustomToasterRef.current?.update(id, options),
}

const getPlacement = {
  top: [SlideInUp, SlideOutUp],
  topLeft: [SlideInLeft, SlideOutLeft],
  topRight: [SlideInRight, SlideOutRight],
  bottom: [SlideInDown, SlideOutDown],
  bottomLeft: [SlideInLeft, SlideOutLeft],
  bottomRight: [SlideInRight, SlideOutRight],
}
interface CustomToasterProps {
  placement: NotificationPlacement
}
const ToastWrapper: React.FC<CustomToasterProps> = ({ placement = 'top' }) => {
  return (
    <ToasterBase
      entering={getPlacement[placement][0]}
      exiting={getPlacement[placement][1]}
      ref={CustomToasterRef}
      onSwipeEdge={({ filter }) => filter((e) => !e.dismissible)}
      render={CustomToastComponent}
    />
  )
}

export {
  NotificationType,
  CustomToastComponentProps,
  Toast,
  CustomToasterProps,
  ToastWrapper,
}
