import { IPost } from '../model/Post'

// export type RequestCreatePostApi = Pick<IPost, 'body' | 'title' | 'userId'>
export type RequestCreatePostApi = Omit<IPost, 'id'>
