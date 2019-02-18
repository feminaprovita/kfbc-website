import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchTagList} from '../reducers'

class TagMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    }
  };
  render () {
    const tags = this.props.tags
    return (
      <div className='tag-dropdown'>
      <button class='dropbtn'>Tags</button>
      <div class='tag-dropdown-list'>
      {tags.map(tag => (
        <Link to={`tags/${tag.id}`}>{tag.tag}</Link>
      ))}
      </div>
      </div>
    )
  }
  componentDidMount() {
    this.props.fetchTagList()
  }
}

const mapStateToProps = state => {
  return {
    tags: state.archive.tags
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTagList: tags => dispatch(fetchTagList(tags))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TagMenu))

