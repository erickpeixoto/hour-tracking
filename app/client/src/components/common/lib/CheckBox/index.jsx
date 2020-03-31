
import React, { memo, useState } from 'react'
import  Checkbox  from './styles'
import _ from 'lodash'

const Check = (props) => {

    const [checked, setChecked] = useState(true)
    let attbs = []
    const { className } = props
 
    attbs.push(className)
    const classMade = _.replace(_.compact(attbs).toString(), new RegExp(',', 'g'), ' ')
    return (
        <div className={classMade} style={{ fontFamily: 'system-ui' }}>
            <label>
                <Checkbox
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
            </label>
        </div>
    )
}
export default memo(Check)




 