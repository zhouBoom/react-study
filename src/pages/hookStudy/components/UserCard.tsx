import React from "react";
import { Button } from "zent";

function UserCard({userInfo, addAge, children}) {
    return (
        <>
        <p>
            {JSON.stringify(userInfo)}
        </p>
        <Button onClick={addAge}>{children}</Button>
        <span>{Math.random()}</span>
        </>
    )
}

export default React.memo(UserCard)