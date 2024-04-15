import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_PUBLIC_KEY, API_URL } from '../../app/store/network'
import { IRequestRegisterApi, IResponseRegisterApi } from './types'

export const _userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL
  }),
  endpoints: builder => ({
    login: builder.mutation<any, any>({
      query: body => ({
        url: '/login',
        method: 'POST',
        body
      }),
      transformResponse: (response: IResponseRegisterApi) => {
        localStorage.setItem('access_token', response.access_token)
        localStorage.setItem('refresh_token', response.refresh_token)
        localStorage.setItem('isAuth', 'true')

        return response
      }
    }),
    register: builder.mutation<IResponseRegisterApi, IRequestRegisterApi>({
      query: body => ({
        url: `${API_PUBLIC_KEY}/register`,
        method: 'POST',
        body
      }),
      transformResponse: (response: IResponseRegisterApi) => {
        localStorage.setItem('access_token', response.access_token)
        localStorage.setItem('refresh_token', response.refresh_token)
        localStorage.setItem('isAuth', 'true')

        return response
      }
    })
  })
})

export const { useLoginMutation, useRegisterMutation } = _userApi
