import { Alert, Avatar, Button, Card ,  LayoutRow as Row,
    LayoutCol as Col,
    LayoutGrid as Grid,
    LayoutConfigProvider as ConfigProvider, } from "zent";
import { connect } from 'react-redux'
import { changeRecommendList } from './store/actionCreators'
import { useEffect, useState } from "react";
import { setUserInfo } from "../../store/userInfo";
import { getProjectList, udpateProjectState } from "../../api/project";

const mapStateToProps = (state) => {
    return {
        data: state.shouye.data,
        userinfo: state.userinfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRecommendListDispatch() {
            dispatch(changeRecommendList('888'))
        },
        updateInfo(data) {
            console.log(data)
            dispatch(setUserInfo(data))
        }
    }
}

function CardList({data}) {
    return data.map((item, index) => {
        return (
            <Card title={item.name} key={index}>
                {item.id}
            </Card>
        )
    })
}

function ReduxDemo({data, userinfo, getRecommendListDispatch, updateInfo}) {
    const [userInfo, setUserInfo] = useState({
        username: '王武',
        headimg: 'https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png',
        des: '更改过后的说明'
    })
    const [cardData, setCardData] = useState([])

    const updateUserInfo = () => {
        updateInfo(userInfo)
    }

    const getList = () => {
        getProjectList(1).then((res) => {
            setCardData(res.data)
        })
    }
    useEffect(() => {  //Hook生命周期
        getProjectList(1).then((res) => {
            console.log(res)
        })
        udpateProjectState({id: 2}).then((res) => {
            console.log(res)
        })
    }, [])
    return(
        <div>
            <Alert>
                <span>ReduxDemo学习</span>
                <p>react-redux提供了两个API，provider为后代组件提供store，connect为组件提供数据和变更方法</p>
            </Alert>
            <p>{data}</p>
            <Button onClick={getRecommendListDispatch}>修改Redux数据</Button>

            <Alert>
                <span>Redux</span>
                <p>Redux分为Action、Store、Reducer</p>
                <p>Action是把数据从应用传到store的唯一来源，一般来说通过store.dispath()</p>
                <p>Action本质是一个js的普通对象，我们约定Action中必须有一个type字段来表示将要执行的动作</p>
            </Alert>

            <Alert>
                <span>Reducer</span>
                <p>Reducer负责根据action的type进行state状态更新</p>
                <p>Reducer就是一个纯函数，接收旧的state和action返回新的state</p>
                <p>保持 reducer 纯净非常重要。永远不要在 reducer 里做这些操作：</p>
                <ul>
                    <li>修改传入参数；</li>
                    <li>执行有副作用的操作，如 API 请求和路由跳转；</li>
                    <li>调用非纯函数，如 Date.now() 或 Math.random()。</li>
                </ul>
            </Alert>

            <Alert>
                <span>Store</span>
                <p>使用 action 来描述“发生了什么”，和使用 reducers 来根据 action 更新 state 的用法</p>
                <p>Store 就是把联系到一起的对象。Store 有以下职责</p>
                <p>维持应用的 state</p>
                <p>提供 getState() 方法获取 state</p>
                <p>提供 dispatch(action) 方法更新 state</p>
                <p>通过 subscribe(listener) 注册监听器</p>
                <p>通过 subscribe(listener) 返回的函数注销监听器</p>
                <p>Redux 应用只有一个单一的 store, 我们可以使用 combineReducers() 将多个 reducer 合并成为一个</p>
            </Alert>
            <Card title="个人信息" style={{width: 400,height: 200}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                <span>{userinfo.username}</span>
                <Avatar
                    size="small"
                    src={userinfo.headimg}
                />
                </div>
            <p>{userinfo.des}</p>
            </Card>
            <Button onClick={updateUserInfo}>修改个人信息</Button>
            <Alert>
                <span>发起异步请求</span>
            </Alert>
            <ConfigProvider
                value={{
                rowGutter: 0,
                colGutter: 10,
                }}
            >
            <Grid>
                <Row>
                    <Col span={6}>
                    <CardList data={cardData} />
                    </Col>
                </Row>
            </Grid>
            </ConfigProvider>
            <Button onClick={getList}>发起请求</Button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo)
