
import React from 'react'

const Typography = (props) => {
    return (
        <div {...props} className={`${props.className} typography`} > { props.children } </div>
    )
}
export default Typography