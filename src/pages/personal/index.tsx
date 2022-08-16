import { useState } from "react";
import { BlockLoading } from "zent";

function Personal() {
    const [loading, setLoading] = useState(true);
    const lifecycle = "https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"
    const onLoading = () => {
        setLoading(false)
    }
    return (
        <div>
            <BlockLoading loading={loading} iconSize={64} ></BlockLoading>
            <iframe
            src={lifecycle}
            title="navigation"
            width="100%"
            height="800px"
            onLoad={onLoading}
            onError={onLoading}
            >

            </iframe>
        </div>
    )
}

export default Personal;