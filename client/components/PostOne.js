import React, { Component } from 'react'

class PostOne extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const post = this.props.post.post
    const postUrl = this.props.post.url
    return (
      <div className='post-container'>
        <a href={postUrl} target='blank'>{post}</a>
      </div>
    )
  }
}

export default PostOne;
