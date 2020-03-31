
import React from 'react'

const Title = (props) => {
    return (
        <p {...props} className={`${props.className} subtitle`} > {props.children} </p>
    )
}
export default Title