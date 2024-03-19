
import { useRouteError } from "react-router-dom"

const Error = () => {

    const error  = useRouteError();

    return (
        <div>
            <h1>Opps Error</h1>
            <img src="https://http.cat/images/400.jpg"></img>
            <h2>
                {error.status}:{error.statusText}
            </h2>
        </div>
    )
}

export default Error;