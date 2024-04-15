import { useGetPostsQuery } from '../entities/_posts/api/_postsApi'

export const PostsPage = () => {
  const { data: posts } = useGetPostsQuery(null)

  return (
    <div>
      <h2>Posts Page</h2>
      <ul>
        {posts?.map(post => (
          <li>{post.title}</li>
        ))}
      </ul>
      <div></div>
    </div>
  )
}
