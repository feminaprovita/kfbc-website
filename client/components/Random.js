import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PostOne from './PostOne'
import {fetchAllPosts} from '../reducers'

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  render() {
    // console.log('render props', this.props)
    const allPosts = this.props.posts
    console.log('allPosts', allPosts)

    const randomize = (arr, num) => {
      let counter = 1;
      const randomArr = [];
      while(counter <= num) {
        let idx = Math.floor(Math.random() * (793 - 1) + 1)
        // console.log('idx', idx)
        randomArr.push(arr[idx])
        // console.log('randomArr', randomArr)
        counter++
      }
      return randomArr
    }

    const randomPosts = randomize(allPosts,5)

    return (
      <div id='random-component'>
        <h2>A Few Random Posts:</h2>
        <div id='random-list'>
          {randomPosts.map(post => (
            <PostOne key={post.id} post={post} />
            ))}
        </div>
      </div>
    )
  }
  componentDidMount() {
    this.props.fetchAllPosts()
  }
}

const mapStateToProps = state => {
  return {
    posts: state.archive.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPosts: posts => dispatch(fetchAllPosts(posts))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Random))
