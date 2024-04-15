import { createBrowserRouter } from 'react-router-dom'
import { PATHES } from './pathes'
import { UsersPage, PostsPage, LoginPage, RegisterPage } from '../pages'

export const router = createBrowserRouter([
  {
    path: PATHES.POSTS,
    element: <PostsPage />
  },
  {
    path: PATHES.USERS,
    element: <UsersPage />
  },
  {
    path: PATHES.LOGIN,
    element: <LoginPage />
  },
  {
    path: PATHES.REGISTER,
    element: <RegisterPage />
  }
])
