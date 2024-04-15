import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../../app/store/network'
import { _IResponseGetPostsApi } from '../model/_Post'

export const _postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: headers => {
      const token = localStorage.getItem('access_token')

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      return headers
    }
  }),
  endpoints: builder => ({
    getPosts: builder.query<_IResponseGetPostsApi[], null>({
      query: () => ({
        url: '/posts',
        method: 'GET'
      })
    })
  })
})

export const { useGetPostsQuery } = _postApi
