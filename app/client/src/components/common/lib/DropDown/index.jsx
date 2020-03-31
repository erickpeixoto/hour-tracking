import React, { useState }  from 'react'
import { Link } from 'react-router-dom'

import _ from 'lodash'

const DropDown = (props) => {
    const [openBoxtranslate, setOpenBoxtranslate] = useState(false)
    let attbs = []
    const { className, iconRight, iconLeft } = props
 
        attbs.push('control')
        attbs.push(className)
        attbs.push(iconRight && 'has-icons-right')
        attbs.push(iconLeft && 'has-icons-left')

        const classMade =  _.replace(_.compact(attbs).toString(), new RegExp(',', 'g'), ' ')
        const { $t } = props

        const actionHandle = (action) => {
            action()
            setOpenBoxtranslate(false)
        }


        const renderItems = p => (
               props.items.map(item => (
                   <>
                    <Link to={_.get(item, 'href')} 
                       className="dropdown-item" 
                       onClick={() => actionHandle(_.get(item, 'action'))}
                    >
                        {_.get(item, 'desc')}
                    </Link>
                        {item.divider &&  <hr className="dropdown-divider"/> }
                    </>
                ))
        )

        return (
           
                <div className={`${classMade} ${openBoxtranslate ? 'is-active ' : ''} dropdown is-pulled-right`} >
                <div className="dropdown-trigger">
                    <button className="button" 
                            aria-haspopup="true" 
                            aria-controls="dropdown-menu" 
                            onClick={() => setOpenBoxtranslate(!openBoxtranslate)}>
                        <span>
                            { _.get(props, 'locale') }
                            {  _.get(props, 'desc') }
                         </span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                    </div>
                            { renderItems() }
                   </div>
            </div>
        )
}
export default DropDown