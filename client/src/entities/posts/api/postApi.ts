import { IPost } from '../model/Post'
import { RequestCreatePostApi } from './types'
import mainApi from '../../../app/store/mainApi'

enum TAGS {
  POST = 'POST'
}

const enchanceApi = mainApi.enhanceEndpoints({
  addTagTypes: [TAGS.POST]
})

const postApi = enchanceApi.injectEndpoints({
  endpoints: builder => ({
    getPosts: builder.query<IPost[], null>({
      query: () => 'posts',
      providesTags: [TAGS.POST]
    }),
    createPost: builder.mutation<IPost, RequestCreatePostApi>({
      query: ({ body }) => ({
        url: 'posts',
        method: 'POST',
        body
      }),
      invalidatesTags: [TAGS.POST]
    })
  })
})

//provider
//invalidator

export const { useGetPostsQuery, useCreatePostMutation } = postApi

export default postApi
