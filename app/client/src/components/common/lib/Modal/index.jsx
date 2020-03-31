
import React from 'react'
import _ from 'lodash'

const Modal = (props) => {

    let attbs = []
    const { className, active } = props

    attbs.push('modal')
    attbs.push(className)
    attbs.push(active && 'is-active')

    const classMade = _.replace(_.compact(attbs).toString(), new RegExp(',', 'g'), ' ')
    return (
        <div {...props} className={classMade}>
            <div className="modal-background"></div>
            <div className="modal-content">
                    {props.children}      
            </div>
            <button className="modal-close is-large" aria-label="close"></button>
        </div>
    )
}
export default Modal