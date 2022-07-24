// todo item组件
import { useCallback } from "react";
import {
    Button,
    Card
  } from "zent";
import { TASK_BTN_STYLE, TASK_BTN_TEXT } from "../../config/todo";

function TaskCard(props) {
    const onStateChange = useCallback((index: number) => {
        props.todoStateChange(props.taskList[index])
    },[props])
    return props.taskList.map((item, index) => {
        return (
            <Card
                title={item.title}
                key={index}
                style={{ marginTop: "10px" }}
                type="nested"
                action={
                    <Button
                    outline
                    bordered={false}
                    onClick={() => {
                        onStateChange(index)
                    }}
                    type={TASK_BTN_STYLE[item.status]}
                    >
                    {TASK_BTN_TEXT[item.status]}
                  </Button>
                }
                >
                { item.description }
            </Card>
        ) 
    })
}

export default TaskCard;