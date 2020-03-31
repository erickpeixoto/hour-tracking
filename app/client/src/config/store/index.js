
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import reducers from './reducers'
import rootSagas from './sagas'


    const sagaMiddleware = createSagaMiddleware()
    const composeArgs = [
        applyMiddleware(sagaMiddleware),
        applyMiddleware(thunk),
    ];
    if (window && window.__REDUX_DEVTOOLS_EXTENSION__) {
        composeArgs.push(window.__REDUX_DEVTOOLS_EXTENSION__());
    }

    const store = createStore(
        reducers,
        compose.apply(undefined, composeArgs)
    );

    sagaMiddleware.run(rootSagas);
export default store;

