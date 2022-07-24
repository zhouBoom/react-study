import { useCallback } from "react";
import { Button, Dialog, Form, FormInputField, FormStrategy, Validators } from "zent";

interface IFormValue {
    title: string;
    description: string;
}

interface IProps {
    type: string;
    visible: boolean;
    onConfirmDialog: (value: IFormValue) => void;
    onCloseDialog: () => void;
    taskInfo: any;
}

function TodoDialog(props: IProps) {
    const form = Form.useForm(FormStrategy.View);
    const {visible, onConfirmDialog, onCloseDialog, taskInfo} = props;
    setTimeout(() => {
    if (props.type === "query") {
        form.initialize(props.taskInfo);
    } else {
        form.clear();
    }
    }, 0);
    const onSubmit = useCallback((form) => {
        const value = form.getValue();
        console.log(value)
        onConfirmDialog(value)
    },[props])

    const resetForm = useCallback(() => {
        form.clear();
        form.model.clearError()
        onCloseDialog();
    },[props])
    return (
        <Dialog
          className="zent-dialog-demo-basic-dialog"
          visible={visible}
          onClose={() => resetForm()}
          title="提示"
        >
          <Form layout="horizontal" form={form} disabled={props.type === "query"} onSubmit={onSubmit}>
            <FormInputField
                name="title"
                label="任务名称:"
                validators={[
                Validators.minLength(2, "任务名称至少 2 个字"),
                Validators.maxLength(20, "任务名称最多 20 个字"),
                ]}
                helpDesc="任务名称为2-20个字"
                required="必填"
            />
            <FormInputField
                name="description"
                label="任务描述:"
                helpDesc="说说自己要干什么"
                validateOccasion={
                Form.ValidateOccasion.Blur | Form.ValidateOccasion.Change
                }
                required="必填"
            />
            {props.type === "add" ? (
                <div className="zent-form-actions">
                <Button type="primary" htmlType="submit">
                    确定
                </Button>
                <Button type="primary" outline onClick={resetForm}>
                    取消
                </Button>
                </div>
            ) : (
                ""
            )}
            </Form>
        </Dialog>
    )
}

export default TodoDialog;