import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PostOne from './PostOne'
import {fetchAllPosts} from '../reducers'

class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  };
  render() {
    const posts = this.props.posts
    console.log('ArchiveList props',this.props)

    return (
      <div>
        <h1>All Archived Posts:</h1>
        {posts.map(post => (
          <PostOne key={post.id} post={post} />
        ))}
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchAllPosts()
  }
}

const mapStateToProps = state => {
  return {
    posts: state.archiveReducer.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPosts: posts => dispatch(fetchAllPosts(posts))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Archive))
