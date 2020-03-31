
import React from 'react'
import _ from 'lodash'

const Control = (props) => {
    let attbs = []
    const { className, iconRight, iconLeft } = props
    
        attbs.push('control')
        attbs.push(className)
        attbs.push(iconRight && 'has-icons-right')
        attbs.push(iconLeft && 'has-icons-left')

        const classMade =  _.replace(_.compact(attbs).toString(), new RegExp(',', 'g'), ' ')

        return (
            <div {...props} className={classMade}> { props.children } </div>
        )
}
export default Control