import React from 'react'
import Helmet from 'react-helmet'


const Styles = props => (
            <Helmet
                style={[{
                    "cssText": `
                     body {
                        min-height: 100%;
                        padding: 15px;
                        font-family: 'Comfortaa-Regular'
                    }
                    #root{
                        margin: 0px auto;
                    }
                   ._t{
                       padding: 10px !important;
                   }
                  menu-list a.is-active {
                    background-color: #3598d5 !important;
                    color: #fff;
                }
                         
                     `
                }]}
            />
    )
export default Styles





