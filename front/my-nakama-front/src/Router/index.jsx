import { createBrowserRouter } from 'react-router-dom'
import Root from '../Layout'
import Home from '../Pages/Home/Home'
import Signup from '../Pages/Signup/Signup'
import Login from '../Pages/Login/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
])

export default router