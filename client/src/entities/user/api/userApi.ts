import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../model/User'

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  endpoints: builder => ({
    getUsers: builder.query<IUser[], null>({
      query: () => 'users'
    })
  })
})

export const { useGetUsersQuery } = userApi

export default userApi
