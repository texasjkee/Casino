import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  endpoints: () => ({})
})

export default mainApi
