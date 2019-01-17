import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import TagShort from './TagShort'
import {fetchTagList, displayTagArchive, displayTagFuture} from '../reducers'

class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    }
  };
  render() {
    const tags = this.props.tags
    console.log('TagList props', this.props.tags)

    return (
      <div>
        <h1>Tags:</h1>
        {tags.map(tag => (
         <TagShort key={tag.id} tag={tag.tag} />
        ))}
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchTagList()
  }
}

const mapStateToProps = state => {
  return {
    tags: state.archiveReducer.tags
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTagList: tags => dispatch(fetchTagList(tags))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Tags))
