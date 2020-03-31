import React, { useState } from 'react'
import { Flag } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const Internationalization =  props => {

    const [openBoxtranslate, setOpenBoxtranslate] = useState(false)
    const { to_translate, core: { internationalization: { flag } } } = props,
           $t = to_translate()
  
           return (
               <div className={`${openBoxtranslate ? 'is-active ' : ''} dropdown is-pulled-right`}  style={{marginTop: 20, right: 33, position: 'absolute'}}>
                   <div className="dropdown-trigger">
                       <button className="button" 
                                aria-haspopup="true" 
                                aria-controls="dropdown-menu" 
                                onClick={() => setOpenBoxtranslate(!openBoxtranslate)}>
                           <span>
                                <Flag name={flag} /> 
                                {$t('header.internationalization.label')}

                           </span>
                           <span className="icon is-small">
                               <i className="fas fa-angle-down" aria-hidden="true"></i>
                           </span>
                       </button>
                   </div>
                   <div className="dropdown-menu" id="dropdown-menu" role="menu">
                       <div className="dropdown-content">
                       </div>
                       <a href="#" 
                          className="dropdown-item" 
                          onClick={() => props.handleLocale({ locale: 'pt-BR', flag: 'br' })}
                       >
                           <Flag name='br' /> Português - ( Brasil )
                        </a>
                       <a href="#" 
                          className="dropdown-item"
                          onClick={() => props.handleLocale({ locale: 'en-US', flag: 'us' })}
                       >
                           <Flag name='us' /> Inglês
                        </a>
                       <a href="#" 
                          className="dropdown-item"
                           onClick={() => props.handleLocale({ locale: 'es-ES', flag: 'es' })}
                          >
                           <Flag name='es' /> Espanhol
                        </a>
                   </div>
               </div>
    )
}

export default Internationalization
