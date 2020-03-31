
import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from './config/store'
import Routes from './config/routes'
import History from './config/routes/history'

ReactDOM.render(
    <Provider store={Store} history={History}>
        <Routes />
    </Provider>,
    document.getElementById('root')
)
