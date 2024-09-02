import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Signup from "../pages/Signup";
import SignIn from "../pages/Signin";
import Payment from "../pages/Payment";
import FAQs from "../pages/FAQs";
import Support from "../pages/Support";
import TermsAndConditions from "../pages/TermsAndConditions";
import TrainingResources from "../pages/TrainingResources";


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
    },
    {
        path: "/payment",
        element: <Payment/>
    },
    {
        path: "/faqs",
        element: <FAQs/>
    },
    {
        path: "/support",
        element: <Support/>
    },
    {
        path: "/term",
        element: <TermsAndConditions/>
    },
    {
        path: "/trainingresources",
        element: <TrainingResources/>
    }
])