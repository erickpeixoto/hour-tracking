
import React from 'react'
import _ from 'lodash'

const Anchor = (props) => {
    return (
        <div {...props} className={`${props.className} anchor`} > { props.children } </div>
    )
}
export default Anchor