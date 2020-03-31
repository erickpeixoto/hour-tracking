
import React from 'react'

const Subtitle = (props) => {
    return (
        <p {...props} className={`${props.className} title`} > {props.children} </p>
    )
}
export default Subtitle