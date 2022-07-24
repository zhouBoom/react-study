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
import { TASK_STATUS } from "../../config/todo";
import TaskCard from "./task-card";
import TodoDialog from "./todo-dialog";

interface ITask {
    id: number | undefined; 
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
  const [dialogVisible, setDialogVisible] = useState(false);
  const [taskType, setTaskType] = useState('');
  const [taskInfo, setTaskInfo] = useState<ITask>();

  const todoList: ITask[] = taskList.filter(
    (v) => v.status === TASK_STATUS.TODO
  );
  const doingList: ITask[] = taskList.filter(
    (v) => v.status === TASK_STATUS.DOING
  );
  const doneList: ITask[] = taskList.filter(
    (v) => v.status === TASK_STATUS.DONE
  );
  const onConfirmDialog = (item) => {
      const task = {
        id: Math.random(),
        status: TASK_STATUS.TODO,
        ...item,
      };
      setTaskList([...taskList, task]);
      Notify.success("保存成功");
      setDialogVisible(false);
  }

  const onCloseDialog = () => {
    setDialogVisible(false);
  }


  const onAddTask = () => {
      setDialogVisible(true);
      setTaskType("add")
  }

  const queryTaskDetail = () => {
    setDialogVisible(true);
    setTaskType("query")
}

  const todoStateChange = (task: ITask) => {
    if(task?.status === TASK_STATUS.DONE) {
        // 弹窗
        queryTaskDetail()
        // 获取当前task内容并传递
        setTaskInfo(task)
        return;
    }
    if(task?.status === TASK_STATUS.DOING || task?.status === TASK_STATUS.TODO) {
        const target = taskList.find(item => item.id === task.id);
        target.status += 1;
        setTaskList([...taskList])
    }
  }

  return (
    <div style={{ padding: "12px" }}>
      <ConfigProvider
        value={{
          rowGutter: 0,
          colGutter: 10,
        }}
      >
        <TodoDialog
          type = {taskType}
          visible={dialogVisible}
          taskInfo={taskInfo}
          onConfirmDialog={onConfirmDialog}
          onCloseDialog={onCloseDialog}
        />
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
                   todoStateChange = {todoStateChange}
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
                   todoStateChange = {todoStateChange}
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
                   todoStateChange = {todoStateChange}
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
                   todoStateChange = {todoStateChange}
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
