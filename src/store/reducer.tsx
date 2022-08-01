import { combineReducers } from 'redux'
import { reducer as ShouyeReducer } from
    '../pages/reduxDemo/store'

// 引入并合并分仓
export default combineReducers({
    shouye: ShouyeReducer
})