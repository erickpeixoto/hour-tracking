
import React, { useState, useEffect } from 'react'
import _ from 'lodash'


 const Input = (props) => {

     
     let attbs = []
     const { className, loading, error, type, year, placeholder } = props
     const [open, setOpen] = useState(false)
     const [date, setDate] = useState(null)

     attbs.push('input')
     attbs.push(className)
     attbs.push(loading && 'is-loading')
     attbs.push(error && 'is-danger')
     
     
   const classMade = _.replace(_.compact(attbs).toString(), new RegExp(',', 'g'), ' ')
     
        return (
            <div className={'control'}>
                    <input {...props} className={classMade}  />
                </div>
        )
     
}
export default Input