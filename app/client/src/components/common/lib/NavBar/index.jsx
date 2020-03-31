
import React from 'react'
import _ from 'lodash'
import { Icon } from 'react-icons-kit'
import { bell } from 'react-icons-kit/feather/bell'
import { settings } from 'react-icons-kit/feather/settings'


const NavBar = (props) => {
    
    const colorIcons = { color: "#b9b9b9" }


    return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <div className={'is-1 _t'}>
                        { _.get(props, 'logo') }
                    </div>
                    <div className={'is-1 _t'}>
                              {/* <button class="button is-white" onClick={() => props.changeSidebar(!sidebar) }>
                                 <Icon icon={menu} size={19} />
                             </button> */}
                            {/* <button class="button freight-add">
                                 <Icon icon={plus} size={19} />  Frete 
                            </button> */}
                    </div>
                </div>
         
            <div className="navbar-end" style={{ paddingTop: 16}}>
               
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <p className="control">
                            <a className="bd-tw-button button is-white">
                                <span className="icon has-badge-rounded has-badge-danger" data-badge="8">
                                    <Icon icon={bell} style={colorIcons} size={22} />
                                 </span>
                            </a>

                        </p>
                        <span style={{ borderLeft: '1px solid #dbdbdb', height: 25, marginTop: 5, marginRight: 5 }}></span>
                        <p className="control" >
                            <a className="bd-tw-button button is-white">
                                <Icon icon={settings} style={colorIcons} size={22} />
                            </a>
                        </p>
                        <p className="control">
                            <p className="control">
                                   DROP
                              </p>
                        </p>
                  
                    </div>
                </div>
            </div>
         </nav>
                
           
    )
}
export default NavBar