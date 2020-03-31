import { call, put, all, takeLatest, select } from 'redux-saga/effects'
import { actionTypes } from './actionTypes'
import _ from 'lodash'
import Api from '../../../config/services/api'
import intl from 'react-intl-universal'

export function authHeader() {
  return { headers: { authorization: localStorage.getItem('_t') } }
}

function* handleLocale(action) {
    try {
         const { core: { endpoints, history } } = yield select()
         const { locale, flag } = action.payload
         const response = yield call(Api(endpoints.api).get, `/internationalization/locale/?flag=${flag}&locale=${locale}`)
      
         
          yield put({
            type: actionTypes.MAIN_HANDLE_INTERNATIONALIZATION,
            payload: {
              currentLocale: locale,
              locales: response.data.locale,
              flag: response.data.flag
            }
          })

         yield intl.init({
                currentLocale: locale,
                locales: response.data.locale,
            })

          yield put({
            type: actionTypes.MAIN_TO_TRANSLATE,
            payload: intl
          })
        
          yield localStorage.setItem('locale', JSON.stringify({
                  locale: locale,
                  flag: response.data.flag
              }))

    } catch (error) {
       
  }
}

function* loadUser(action){
//   try {
//     const { core: { endpoints, history } } = yield select()
//     const response = yield call(Api(endpoints.api).get, `/company/auth/check/${action.payload}`, authHeader())
//     if(action.payload){
//        const _response = _.get(response, 'data')
//         yield put(initialize('account', _.get(_response, 'company')))
//         yield put({ type: aTypesSignIn.SIGN_IN_API_AUTH, payload: _response })
//     }
 
// } catch (error) {
//     // yield put({ type: typesSign.SIGN_IN_API_AUTH_ERROR, payload: { error: error.ApiError} })
//     // yield put({ type: typesSign.SIGN_IN_LOADING, payload: false })
// }
}

export default function* root() {
  yield all([
     takeLatest(actionTypes.SAGAS_HANDLE_LOCALE, handleLocale),
     takeLatest(actionTypes.SAGAS_MAIN_LOAD_USER, loadUser)
  ])
}
