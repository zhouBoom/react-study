import { Alert, Button, Modal } from "antd";
import { useCallback, useState } from "react";

function Home() {
  const [isModel, setIsModelVisiable] = useState(false);
  return (
    <>
      <Alert message={"学习react写法"} description="加油加油，冲冲冲！！！"></Alert>
      <Button type="primary" onClick={()=> {setIsModelVisiable(true)}}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" transitionName="" maskTransitionName="" visible={isModel} onOk={useCallback(()=>{setIsModelVisiable(false)}, [])} onCancel={useCallback(()=>{setIsModelVisiable(false)}, [])}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default Home;