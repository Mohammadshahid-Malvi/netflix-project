import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Browse from "./Browse.js";
import Login from "./Login.js";
const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"/login",
            element:<Login/>
        }
    ]);

    return (
        <>
            <RouterProvider router={appRouter}/>
        </>
    );
}
export default Body;