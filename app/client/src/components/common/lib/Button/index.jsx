import React from 'react'

 const Button = (props) => {
    return (
            <a {...props} className={`${props.className} button`} >{ props.children }</a>
        )
    }
export default Button
    

