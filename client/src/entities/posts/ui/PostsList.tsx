import { FC, useState } from 'react'
import { useCreatePostMutation, useGetPostsQuery } from '../api/postApi'

interface IPostsListProps {}

export const PostsList: FC<IPostsListProps> = () => {
  const [turnOn, setTurnOn] = useState(false)
  const { data: posts, isSuccess } = useGetPostsQuery(null, {
    refetchOnMountOrArgChange: true,
    skip: !turnOn
  })
  const [createPost] = useCreatePostMutation()

  const onClick = () => {
    createPost({
      body: 'Description',
      title: 'Test',
      userId: 1
    })
  }

  const onTern = () => {
    setTurnOn(true)
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={onTern}>Turn On Fetch</button>
      <button onClick={onClick}>Add Post</button>
      {isSuccess && posts?.map(post => <div key={post.id}>{post.title}</div>)}
    </div>
  )
}
