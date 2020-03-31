import { toast } from 'react-toastify'
import { css } from 'glamor'


export const ToastMe = ( props ) => {
  return (
      toast(props, {
          className: css({
              background: '#5a5a5a !important',
              color: "#FFFFFF !important"
          }),
          bodyClassName: css({
              fontSize: '16px'
          }),
          progressClassName: css({
              background: "#6f6e6e !important"
          })
      })

  ) 
}