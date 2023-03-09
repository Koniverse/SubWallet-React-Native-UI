// const { width, height } = Dimensions.get('window')
// const SWModal = ({ isOpen, contentHeight, children }) => {
//   const ref = useRef<SWModalRefProps>(null)

//   useEffect(() => {
//     const isActive = ref?.current?.isActive()
//     if (isActive && isOpen) {
//       ref?.current?.scrollTo(0)
//     } else {
//       ref?.current?.scrollTo(-contentHeight)
//     }
//   }, [isOpen, contentHeight])
//   return (
//     <GestureHandlerRootView
//       style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width,
//         height,
//         zIndex: 999,
//       }}>
//       <ModalBase ref={ref}>{children}</ModalBase>
//     </GestureHandlerRootView>
//   )
// }

export { default as SWModalHeader } from './Header'
export { default, SWModalProps, SWModalRefProps } from './ModalBase'
