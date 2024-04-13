import { FC } from 'react'
import { useGetUsersQuery } from '../api/userApi'

interface IUserListProps {}

export const UserList: FC<IUserListProps> = () => {
  const { data: users, isSuccess } = useGetUsersQuery(null)
  return (
    <div>
      <h1>Users</h1>
      {isSuccess && users?.map(user => <div key={user.id}>{user.name}</div>)}
    </div>
  )
}
