
import React, { memo } from 'react'
import _ from 'lodash'

const Avatar = (props) => {

    let attbs = []
    const { className, src } = props

    attbs.push('column')
    attbs.push(className)
    console.warn({ src })
    
    const classMade = _.replace(_.compact(attbs).toString(), new RegExp(',', 'g'), ' ')
    return (
        <div class={classMade} style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover' }}>
        </div>
    )
}
export default memo(Avatar)