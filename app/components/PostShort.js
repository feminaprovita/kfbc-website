import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PostShort extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const post = this.props.post.post
    const postUrl = this.props.post.url
    return (
      <div>
        <div className='post-link'>
        <a href={postUrl} target='blank'>{post}</a>
        <br />
        <br />
        </div>
      </div>
    )
  }
}

export default PostShort;
