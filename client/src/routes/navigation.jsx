import Account from "../pages/account/account";
import Dashboard from "../pages/dashboard/dashboard";
import Home from "../pages/home/home";
import SignIn from "../pages/signin/signin";
import SignUp from "../pages/signup/signup";


export const nav = [
     { path:     "/",         name: "Home",        element: <Home />,       isMenu: true,     isPrivate: false  },
     { path:     "/signup",    name: "About",       element: <SignUp />,      isMenu: true,     isPrivate: false  },
     { path:     "/signin",    name: "Login",       element: <SignIn />,      isMenu: false,    isPrivate: false  },
     { path:     "/dashboard",  name: "Private",     element: <Dashboard />,    isMenu: true,     isPrivate: true  },
     { path:     "/account",  name: "Account",     element: <Account />,    isMenu: true,     isPrivate: true  },
]