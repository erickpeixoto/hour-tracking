
import { combineReducers } from 'redux'
import core from '../../../components/main/store/reducers'
import app from '../../../components/app/store/combineReducers'

const appReducer = combineReducers({
    core,
    app
})

const initialState = appReducer({}, {})
const rootReducer = (state, action) => {
	if (action.type === 'SIGN_OUT_APP') {
		state = initialState
	}
	return appReducer(state, action)
}

export default rootReducer






