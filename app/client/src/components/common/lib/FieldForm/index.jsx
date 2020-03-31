
import React from 'react'
import _ from 'lodash'

const FieldForm = (props) => {
  const  { className } = props
    return (
        <div {...props} className={ !_.isUndefined(className) ? `${className} field` : 'field' }> { props.children } </div>
    )
}
export default FieldForm