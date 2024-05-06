// Write your JS code here
import {Component} from 'react'
import './index.css'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const statusCode = await response.status
    console.log(statusCode)
    const data = await response.json()
    console.log(data)

    const updatedBlogList = data.map(each => ({
      author: each.author,
      avatarUrl: each.avatar_url,
      id: each.id,
      imageUrl: each.image_url,
      title: each.title,
      topic: each.topic,
    }))

    this.setState({blogList: updatedBlogList, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    console.log(blogList)
    return (
      <div className="listItemContainer">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogList.map(each => <BlogItem key={each.id} data={each} />)
        )}
      </div>
    )
  }
}
export default BlogList
