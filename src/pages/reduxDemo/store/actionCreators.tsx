import * as actionTypes from './constants'
// import {
//     getRecommendListRequest
// } from '@/api/request'

export const changeEnterLoading = (data) => ({
    type: actionTypes.CHANGE_RECOMMENDLIST_LOADING,
    data
})

export const changeRecommendList = (data) => ({
    type: actionTypes.SET_RECOMMENDLIST,
    data
})

// export const getRecommendList = () => {
//     return (dispatch) => {
//         getRecommendListRequest()
//             .then(data => {
//                 console.log(data);
//                 dispatch(changeRecommendList(data.data))
//                 dispatch(changeEnterLoading(false))
//             })
//     }
// }