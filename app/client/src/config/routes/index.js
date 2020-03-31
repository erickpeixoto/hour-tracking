
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from '../../components/main'
import App from '../../components/app'

class Routes extends Component {

    render() {

        return (
            <Router>
                <Switch>
                    <Main>
                        <Route exact path="/" component={App} />
                    </Main>
                </Switch>
            </Router>
        )
    }
}
const mapStateToProps = state => ({ settings: state.settings })
export default connect(mapStateToProps)(Routes)
