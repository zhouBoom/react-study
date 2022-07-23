// todo item组件
import {
    Button,
    Card
  } from "zent";

function TaskCard(props) {
    return props.taskList.map(item => {
        return (
            <Card
                title={item.title}
                style={{ marginTop: "10px" }}
                type="nested"
                action={
                    <Button
                    outline
                    bordered={false}
                    type={'warning'}
                  >
                    点击开始
                  </Button>
                }
                >
                { item.description }
            </Card>
        ) 
    })
}

export default TaskCard;