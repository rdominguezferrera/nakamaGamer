import { createBrowserRouter } from "react-router-dom";
import Root from '../Layout/indexsignupandlogin'
import Login from '../Pages/Login/Login'
import Signup from '../Pages/Signup/Signup'
import Main from '../Layout/indexmain'
import Dashboard from '../Pages/Dashboard/Dashboard'
import SelectGame from '../Pages/SelectGame/SelectGame'
import ViewPlayers from '../Pages/ViewPlayers/ViewPlayers'
import Profile from '../Pages/Profile/Profile'
import Message from '../Pages/Message/Message'
import Home from '../Pages/Home/Home'



const router = createBrowserRouter([
  {

    // LOGIN AND SIGN UP

    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/login',
        element: <Login />,
      },

      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },

  // MAIN

  {
    path: '/dashboard',
    element: <Main />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/dashboard/category/:category',
        element: <SelectGame />,
      },
      {
        path: '/dashboard/game/:game',
        element: <ViewPlayers />,
      },
    ],
  },
  {
    path: '/profile',
    element: <Main />,
    children: [
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/invitation',
    element: <Main />,
    children: [
      {
        path: '/invitation',
        element: <Message />,
      },
    ],
  }, 
])



export default router