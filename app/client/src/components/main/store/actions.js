import { actionTypes } from "./actionTypes"
import _ from 'lodash'

export const requestAuthLogin = (data) => ({ type: actionTypes.SAGAS_REQUEST_AUTH, payload: data })
export const handleHistory = (data) => ({ type: actionTypes.MAIN_HANDLE_HISTORY, payload: data })
export const handleLocale = (data) => ({ type: actionTypes.SAGAS_HANDLE_LOCALE, payload: data })
export const requestAuthDataLoad = (data) =>  ({ type: actionTypes.SAGAS_MAIN_LOAD_USER, payload: data })
export const changeSidebar = (data) => ({ type: actionTypes.MAIN_SIDEBAR_CHANGE, payload: data })

export const to_translate = () =>  {
    return (dispatch, getState) => {
        const {
            core
        } = getState()
        return (str, args) => (_.invoke(core, 'toTranslate.get', str, args) || str)
    }
}
