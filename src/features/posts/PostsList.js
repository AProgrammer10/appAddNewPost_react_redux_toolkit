import {useSelector} from 'react-redux'
import {selectedAllPosts} from './postsSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'

export const PostsList = () => {
  const posts = useSelector(selectedAllPosts)

  const orderedPost = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPost.map(post => {
    return (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
      </p>
    </article>
  )})

  return (
    <section>
      <h2>Posts:</h2>
      {renderedPosts}
    </section>
  )
}