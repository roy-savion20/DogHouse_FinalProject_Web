import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Signup from "../pages/Signup";
import SignIn from "../pages/Signin";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />  
    },
    {
        path: "/services",
        element: <Services/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
    {
        path: "/signup",
        element: <Signup/>
    },
    {
        path: "/signin",
        element: <SignIn/>
    }
])