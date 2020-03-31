
import React from 'react'
import _ from 'lodash'

const Col = (props) => {
    return (
        <div {...props} className={`${props.className} column`} > { props.children } </div>
    )
}
export default Col