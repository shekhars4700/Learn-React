import { useRouteError } from "react-router"
const Error = ()=> {
    const err = useRouteError();
    return (
        <div>
            <h1>OOPS!!!</h1>
            <h2>Wrong Turn</h2>
            <h3>{err.status} :  {err.statusText}</h3>
        </div>
    )
}

export default Error