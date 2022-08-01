import { Alert, Button } from "zent";
import { connect } from 'react-redux'
import { changeRecommendList } from './store/actionCreators'
import { useEffect } from "react";

const mapStateToProps = (state) => {
    return {
        data: state.shouye.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRecommendListDispatch() {
            dispatch(changeRecommendList('888'))
        }
    }
}

function ReduxDemo({data, getRecommendListDispatch}) {
    // useEffect(() => { Hook生命周期
    //     getRecommendListDispatch();
    // }, [getRecommendListDispatch])
    return(
        <div>
            <Alert>
                <span>ReduxDemo学习</span>
                <p>react-redux提供了两个API，provider为后代组件提供store，connect为组件提供数据和变更方法</p>
            </Alert>
            <p>{data}</p>
            <Button onClick={getRecommendListDispatch}>修改Redux数据</Button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo)
