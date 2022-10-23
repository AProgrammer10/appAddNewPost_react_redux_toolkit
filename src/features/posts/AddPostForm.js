import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {postAdded} from './postsSlice'
import {selectedAllUsers} from '../users/usersSlice'

export const AddPostForm = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectedAllUsers)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const onTitleChanched = e => setTitle(e.target.value)
  const onContentChanched = e => setContent(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)

  const onSavePostClicked = () => {
    if(title && content){
      dispatch(postAdded(title, content, userId))
      setTitle('')
      setContent('')
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))
  return (
    <section>
      <form>
        <h2>Add a new post</h2>
        <label htmlFor="postTitle">Post title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanched}
        />

        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option disabled value=""></option>
          {usersOptions}
        </select>

        <label htmlFor="postContent">Post title:</label>
        <textarea
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanched}
        />
      </form>
      <button disabled={!canSave} type="button" onClick={onSavePostClicked}>Save post</button>       
    </section>
  )
}