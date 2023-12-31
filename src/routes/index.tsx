import {createBrowserRouter} from "react-router-dom";
import Home from "../page/Home.tsx";
import Login from "../page/Login.tsx";
import App from "../App.tsx";
import NotFound from "../page/NotFound.tsx";

const routes = createBrowserRouter([

    {
        path: "/",
        element: <App/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/login",
        element: <Login/>
    }, {
        path: "/*",
        element: <NotFound/>
    }

])

export default routes