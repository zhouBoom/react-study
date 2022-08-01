// store
const userState = {
    username: '周斌',
    headimg: 'https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png',
    des: '个人简介'
}

const SET_USERINFO = 'SET_USERINFO';

const setUserInfo = (data) => ({ // action，根据这个type去找reduces，reduces修改state
    type: SET_USERINFO,
    data
})

const reducer = (state = userState, action: { type: string; data: { username: string; headimg: string; des: string; } }) => {
    console.log(action)
    switch (action.type) {
        case SET_USERINFO:
            return {
                ...state,
                username: action.data.username,
                headimg: action.data.headimg,
                des: action.data.des
            }
        default:
            return state;
    }
}

export {
    reducer,
    setUserInfo
}