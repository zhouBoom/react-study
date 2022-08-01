import * as actionTypes from './constants'

const defaultState = {
    data: 'redux使用',
    enterLoading: true
}

console.log(actionTypes)

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

// 这个就是reducers!
// export default (state=defaultState, action)=>{
//     let actionType = action.type;
//     // 使用策略模式，更好的操作你的Types。
//     actionTypes[actionType] && actionTypes[actionType](action.payload);
//     return state;
// };