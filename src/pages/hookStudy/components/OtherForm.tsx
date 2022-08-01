import React from "react";
import { Button } from "zent";

function OtherForm({onSubmit}) {
    return (
        <>
        <Button onClick={onSubmit}>otherForm组件</Button>
        <span>{Math.random()}</span>
        </>
    )
}

export default React.memo(OtherForm)