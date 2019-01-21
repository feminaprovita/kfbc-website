import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import IdeaOne from './IdeaOne'
import {fetchAllIdeas} from '../reducers'

class Future extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: []
    }
  };
  render() {
    console.log('state',this.state)
    const ideas = this.props.ideas
    console.log('FutureList props', this.props)

    return (
      <div id='idea-component'>
        <h1>All Future Ideas:</h1>
        <div id='idea-list'>
        {ideas.map(idea => (
          <IdeaOne key={idea.id} idea={idea} />
          ))}
          </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchAllIdeas()
  }
}

const mapStateToProps = state => {
  return {
    ideas: state.future.ideas
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllIdeas: ideas => dispatch(fetchAllIdeas(ideas))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Future))
