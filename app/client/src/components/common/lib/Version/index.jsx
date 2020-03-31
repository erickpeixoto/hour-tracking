
import React from 'react'

const Version = (props) => {

    return (
        <div style={{ padding: '0px 10px',
                      display: 'flex', 
                      justifyContent: 'flex-end', 
                      color: '#c0b5b5', 
                      fontSize: '12px', 
                      position: 'relative',
                      top: -14 }}>
            {process.env.REACT_APP_VERSION ? 'v' + process.env.REACT_APP_VERSION : ''}
        </div>
    )
}
export default Version