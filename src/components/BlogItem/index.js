// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {data} = props
  const {id, author, avatarUrl, imageUrl, title, topic} = data

  return (
    <Link className="itemLink" to={`/blogs/${id}`}>
      <div className="listItem">
        <img className="image" src={imageUrl} alt={title} />
        <div className="metaData">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="authorProfile">
            <img className="avatarImage" src={avatarUrl} alt="author" />
            <p className="authorName">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
