
import React from 'react'
import _ from 'lodash'

const Control = (props) => {
    let attbs = []
    let attbsBox = []
    let prefix = 'fa-'
    const { className, icon, size, isRight, isLeft, click  } = props

    
    attbs.push(className ? `${className} fas` : 'fas')
    attbs.push(`${prefix}${icon}`)
    attbs.push(`${prefix}${size}`)
    attbsBox.push(isRight && 'is-right')
    attbsBox.push(isLeft && 'is-left')
    attbsBox.push(click && 'enableClick')
    attbsBox.push('icon')


    const classMade = _.replace(_.compact(attbs).toString(), new RegExp(',', 'g'), ' ')
    const classMadeBox = _.replace(_.compact(attbsBox).toString(), new RegExp(',', 'g'), ' ')

    return (
        <span className={classMadeBox}>
            <i {...props} className={classMade}></i>
        </span>
    )
}
export default Control