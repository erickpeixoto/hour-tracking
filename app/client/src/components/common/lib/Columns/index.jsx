
import React from 'react'

const Content = (props) => {
    return (
        <div {...props} className={`${props.className} columns`} > { props.children } </div>
    )
}
export default Content