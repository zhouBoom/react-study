import * as actionTypes from './constants'

const defaultState = {
    data: 'redux使用',
    enterLoading: true
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action: { type: any; data: any }) => {
    switch (action.type) {
        case actionTypes.SET_RECOMMENDLIST:
            return {
                ...state,
                data: action.data
            }
        case actionTypes.CHANGE_RECOMMENDLIST_LOADING:
            return {
                ...state,
                enterLoading: action.data
            }
        default:
            return state;
    }
}