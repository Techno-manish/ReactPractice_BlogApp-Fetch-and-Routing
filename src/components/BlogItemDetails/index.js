// Write your JS code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)

    const updatedBlogData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }
    this.setState({blogData: updatedBlogData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    const {author, avatarUrl, content, imageUrl, title, topic} = blogData
    return (
      <div className="bgContainer">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <>
            <h1 className="title">{title}</h1>
            <div className="mainBody">
              <div className="authorProfile">
                <img className="avatarImage" src={avatarUrl} alt="author" />
                <p className="authorName">{author}</p>
              </div>
              <img className="blogImage" src={imageUrl} alt={title} />
              <p>{content}</p>
            </div>
          </>
        )}
      </div>
    )
  }
}
export default BlogItemDetails
