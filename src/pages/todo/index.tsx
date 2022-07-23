import { useState } from "react";
import {
  LayoutRow as Row,
  LayoutCol as Col,
  LayoutGrid as Grid,
  LayoutConfigProvider as ConfigProvider,
  ScrollAlert,
  AlertItem,
  Notify,
  Button,
  Card
} from "zent";
import TaskCard from "./task-card";

interface ITask {
    id: number; 
    title: string; 
    status: number; 
    description: string;
}

export default function Todo() {
  const allList = [
    {
      id: 1,
      title: "第一天的任务",
      status: 2,
      description: "熟悉zent组件",
    },
    {
      id: 2,
      title: "第二天的任务",
      status: 1,
      description: "开发一个TODO LIST",
    },
    {
      id: 3,
      title: "第三天的任务",
      status: 0,
      description: "熟悉Node 和 Dubbo的调用",
    },
  ]
  const [taskList, setTaskList] = useState(allList);
  const todoList: ITask[] = taskList.filter(
    (v) => v.status === 0
  );
  const doingList: ITask[] = taskList.filter(
    (v) => v.status === 1
  );
  const doneList: ITask[] = taskList.filter(
    (v) => v.status === 2
  );



  const onAddTask = () => {
      Notify.info('功能开发中');
  }

  return (
    <div style={{ padding: "12px" }}>
      <ConfigProvider
        value={{
          rowGutter: 0,
          colGutter: 10,
        }}
      >
        <Grid className="layout-demo-basic">
          <Row>
            <Col span={6}>
              <div className="layout-demo-cell">
                  <Card
                  title="所有任务"
                  action={
                    <Button
                      type="primary"
                      onClick={() => {
                        onAddTask();
                      }}
                    >
                      新建任务
                    </Button>
                  }
                  >
                   <TaskCard
                   taskList = {taskList}
                   >
                   </TaskCard>
                  </Card>
              </div>
            </Col>
            <Col span={6}>
              <div className="layout-demo-cell">
              <Card title="TODO">
              <TaskCard
                   taskList = {todoList}
                   >
                   </TaskCard>
              </Card>
              </div>
            </Col>
            <Col span={6}>
              <div className="layout-demo-cell">
              <Card title="DING">
              <TaskCard
                   taskList = {doingList}
                   >
                   </TaskCard>
              </Card>
              </div>
            </Col>
            <Col span={6}>
              <div className="layout-demo-cell">
              <Card title="DONE">
              <TaskCard
                   taskList = {doneList}
                   >
                   </TaskCard>
              </Card>
              </div>
            </Col>
          </Row>
        </Grid>
      </ConfigProvider>
    </div>
  );
}
