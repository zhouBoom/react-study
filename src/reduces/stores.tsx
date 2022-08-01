
const stateStore = {
    webstitTitle: 'Redux'
}

const types = {
    'webstitTitle': function(data:string) {
        stateStore.webstitTitle = data
    }
}

// 这个就是reducers!
export default (state=stateStore, action)=>{
    let actionType = action.type;
    // 使用策略模式，更好的操作你的Types。
    types[actionType] && types[actionType](action.payload);
    return state;
};