
import { useRouteError } from "react-router-dom"

const Error = () => {

    const error  = useRouteError();

    return (
        <div>
            <h1>Opps Error</h1>
            <img  className="errorImg" src={"https://http.cat/"+error.status}></img>
            <h2>
                {error.status}:{error.statusText}
            </h2>
        </div>
    )
}

export default Error;