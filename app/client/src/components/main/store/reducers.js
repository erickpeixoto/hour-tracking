import {
    actionTypes
} from './actionTypes'

const INITIAL_STATE = {
    history: {},
    endpoints: {
        services: {
            cnpj: {
                host: 'https://www.receitaws.com.br/v1/cnpj/',
                token: ''
            },
            cep: {
                host: 'https://viacep.com.br/ws/',
                token: ''
            }
        },
        api: {
         host: `${process.env.REACT_APP_API_URL || 'https://app.sciosystem.com/api'}`,
       
        }
    },
        toTranslate: {},
        internationalization: {},
        menus: {
            sidebar: false
    }
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case actionTypes.MAIN_HANDLE_HISTORY:
            return { ...state, history: action.payload }
        case actionTypes.MAIN_HANDLE_INTERNATIONALIZATION:
            return { ...state, internationalization: action.payload }
        case actionTypes.MAIN_TO_TRANSLATE:
            return { ...state, toTranslate: action.payload }
        case actionTypes.MAIN_SIDEBAR_CHANGE:
            return { ...state, menus: { sidebar: action.payload } }
                    
        default:
            return state
    }
}