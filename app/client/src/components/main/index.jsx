import React, { useEffect, useState }  from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as actions from './store/actions'
import './assets/styles/main.scss'
import { Col, Columns, NavBar, BreadCrumb }  from '../common/lib/Wrapper'
import Menu from './menu'
import Messages from '../common/messages'
import _ from 'lodash'

const Main = (props) => {
    const [loaded, setLoaded] = useState(true)
    const sleep = m => new Promise(r => setTimeout(r, m))
    
    useEffect(() => {
      
        const { handleLocale, requestAuthDataLoad, handleHistory, history, core } = props
        let localeObj = {}
        try {
            localeObj = JSON.parse(localStorage.getItem('locale'))
        } catch (e) { console.log(e) }

        (async () => {
            if(loaded){
                !_.get(core, 'history.action') && await handleHistory(history)
                await  handleLocale({
                            locale: _.get(localeObj, 'locale') || navigator.language || 'pt-BR',
                            flag: _.get(localeObj, 'flag') || 'br',
                })
                await requestAuthDataLoad(localStorage.getItem('_x'))
                await sleep(2000)
                setLoaded(false)
            }
        })()

    })

    const logo = (
        <>
            {/* <img src={require('../signin/assets/images/logo.png')} style={{ width: 30, position: 'relative',  left: -56 }} /> */}
            <span className={'typography'} style={{position: 'relative', top: 15, left: 5, fontSize: 10}}>SCIO SYSTEM</span>
        </>
    )

    const { to_translate, handleLocale, changeSidebar } = props,
            $t = to_translate()
    return (
        <>

        <Col className="container-app paper">
          
            <Columns style={{ margin: 0, padding: 0 }}>
                    <Col className="is-1 colunm-menu side-one">
                            {/* <Icon icon={menu} size={28} style={{ color: '#f0f0f0' }}/> */}
                    </Col>
                    <Col style={{ padding: 0 }} className="box-nav" >
                        <NavBar
                            logo={logo}
                            $t={$t}
                            handleLocale={handleLocale}
                            changeSidebar={changeSidebar}
                            {...props}
                        />
                </Col>
            
            </Columns>
                <Columns className="container-content-app">
                    <Col className="is-1 colunm-menu side-two">
                        <Menu /> 
                    </Col>
                    <Col>
                        <BreadCrumb {...props} />
                        {props.children}
                    </Col>
                </Columns>
            <Messages />
        </Col>
        </>
    )
}


const mapStateToProps = (state) => ({ core: state.core, ...state })
const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main))


