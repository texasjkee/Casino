import { FC } from 'react'
import { Link } from 'react-router-dom'
import { UserList } from '../../entities/user/ui/UserList'
import { PATHES } from '../../routes/pathes'

interface IUsersPageProps {}

export const UsersPage: FC<IUsersPageProps> = () => {
  return (
    <div>
      <Link to={PATHES.POSTS}>go to Posts</Link>
      <UserList />
    </div>
  )
}
