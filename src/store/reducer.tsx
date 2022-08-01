import { combineReducers } from 'redux'
import { reducer as ShouyeReducer } from
    '../pages/reduxDemo/store'
import { reducer as UserReducer } from './userInfo'

// 引入并合并分仓
export default combineReducers({
    shouye: ShouyeReducer,
    userinfo: UserReducer
})