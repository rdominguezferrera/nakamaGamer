import { createBrowserRouter } from 'react-router-dom'
import Root from '../Layout/indexsignupandlogin'
import Signup from '../Pages/Signup/Signup'
import Login from '../Pages/Login/Login'
import Main from '../Layout/indexmain'
import Dashboard from '../Pages/Dashboard/Dashboard'
import SelectGame from '../Pages/SelectGame/SelectGame'
import ViewPlayers from '../Pages/ViewPlayers/ViewPlayers'
import Profile from '../Pages/Profile/Profile'



const router = createBrowserRouter([
  {
    // LOGIN AND SIGN UP

    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
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
])

export default router




      // MAIN

      /* path: '/dashboard',
    element: <Main />,
    children: [

      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/selectgame',
        element: <SelectGame />,
      }, 

 */