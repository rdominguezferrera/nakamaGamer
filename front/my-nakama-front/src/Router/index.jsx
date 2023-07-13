import { createBrowserRouter } from 'react-router-dom'
import Root from '../Layout/indexsignupandlogin'
import Home from '../Pages/Home/Home'
import Signup from '../Pages/Signup/Signup'
import Login from '../Pages/Login/Login'
import Main from '../Layout/indexmain'
import Dashboard from '../Pages/Dashboard/Dashboard'
import SelectGame from '../Pages/SelectGame/SelectGame'
import ViewPlayers from '../Pages/ViewPlayers/ViewPlayers'



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