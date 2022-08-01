import { SetStateAction, useCallback, useMemo, useRef, useState } from "react";
import { Alert, Input, Notify } from "zent";
import Button from "./components/Button";
import OtherForm from "./components/OtherForm";
import UserCard from "./components/UserCard";

const UseCallback = () => {
    /**
     * 说明：使用useCallBack实现参数不变，函数不会重新生成 优化性能
     */
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const handleClickButton1 = () => {
        setCount1(count1 + 1);
    }
    const handleClickButton2 = useCallback(() => {
        setCount2(count2 + 1);
    },[count2]);
    return (
        <div style={{margin: '12px'}}>
        <Button onClickButton = {handleClickButton1}>Button1</Button><br/>
        <Button onClickButton = {handleClickButton2}>Button2</Button><br/>
        <Button onClickButton = {() => {setCount3(count3+1)}}>Button3</Button>
        </div>
    )
}

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(0);

    const userInfo = {
        age: count,
        name: '周斌'
    }
    const addAge = useCallback(() => {
        setCount(count + 1)
    },[count])
    return (
        <>
        <button onClick={() => setAge(age + 1)}>更改其他值</button>
        <span>其他值{age}</span>
        <UserCard userInfo={userInfo} addAge = {addAge}>
            增加年龄
        </UserCard>
        </>
    )
}

const UseMemo2 = () => {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(0);

    const userInfo = useMemo(() => {
        return {
         age: count,
         name: '周斌'
        } 
    },[count])

    const addAge = useCallback(() => {
        setCount(count + 1)
    },[count])

    return (
        <>
        <button onClick={() => setAge(age + 1)}>更改其他值</button>
        <span>其他值{age}</span>
        <UserCard userInfo={userInfo} addAge = {addAge}>
            增加年龄
        </UserCard>
        </>
    )
}

const UseCallbackRef = () => {
    const [text, setText] = useState('')

    const handleSubmit = useCallback(() => {
        Notify.success(text)
    },[text])
    return (
        <div style={{margin: '12px'}}>
        <Input style={{marginBottom: '12px'}} 
            value={text} onChange={(e: { target: { value: SetStateAction<string>; }; }) => {
            const { value } = e.target;
            setText(value)
        }}></Input>
        <OtherForm onSubmit={handleSubmit}></OtherForm>
        </div>
    )
}

const UseCallbackRef2 = () => {
    const [text, setText] = useState('')
    const tRef = useRef('')

    const handleSubmit = useCallback(() => {
        Notify.success(tRef.current)
    },[tRef])
    return (
        <div style={{margin: '12px'}}>
        <Input style={{marginBottom: '12px'}} 
            value={text} onChange={(e: { target: { value: SetStateAction<string>; }; }) => {
            const { value } = e.target;
            setText(value)
            tRef.current = value
        }}></Input>
        <OtherForm onSubmit={handleSubmit}></OtherForm>
        </div>
    )
}

function HookStudy() {
    return(
        <>
        <div>
        <Alert>
            <span>Hook的useCallback</span><br/>
            <p>实现功能：</p>
            <p>Button2所传递的函数使用useCallback包裹，传递的参数为count2，在count2不变的情况下不会触发子组件渲染，未使用useCallback的button1和button3在任何一个数据变化的时候，子组件都会重新渲染</p>
            <p>只要是父组件重新渲染就会重新生成我们声明的方法，虽然两次都一样但是并不相等，props的变化导致子组件渲染</p>
            <p>如果useCallback第二个参数传一个[],就相当于0，这样的话点击button2只会更改一次数据</p>
            <p>需要配合React.memo使用，React.memo会对比对象props，如果发生改变就进行渲染。useCallback 是要配合子组件的 shouldComponentUpdate 或者 React.memo 一起来使用的，否则就是反向优化。</p>
        </Alert>
        <UseCallback />
        </div>
        <div>
        <Alert>
            <span>Hook的useCallback配合useRef进行优化</span>
            <p>如果我们的useCallback与text关联，每当input输入删除的时候都会触发text变化从而生成新的submit方法，如果我们的子组件特别大这样会造成很多的性能消耗</p>
            <p>这时候我们不希望submit函数随着text变化而重新生成导致渲染可以使用useRef</p>
            <p>使用useRef会生成一个变量，让其在组件的每个生命周期都可以访问到，且关联的子组件并不会因为这个参数的更新而更新，也就不会发生多次渲染</p>
        </Alert>
        <p>不使用Ref</p>
        <UseCallbackRef />
        <p>使用Ref</p>
        <UseCallbackRef2 />
        </div>
        <Alert>
            <span>Hook的useMemo</span>
            <p>简单来说就是传递一个创建函数和依赖项，创建函数会需要返回一个值，只有在依赖项发生改变的时候，才会重新调用此函数，返回一个新的值</p>
            <p>可以把一些昂贵的计算逻辑放到 useMemo 中，只有当依赖值发生改变的时候才去更新</p>
        </Alert>
        <p>不使用useMemo</p>
        <UseMemo/>
        <p>使用useMemo</p>
        <UseMemo2/>
        </>
    )
}

export default HookStudy;