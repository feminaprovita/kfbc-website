import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchOneIdea} from '../reducers'

class IdeaPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('IdeaPage props test',this.props.currentIdea.idea)
    const currentIdea = this.props.currentIdea
    const ideaId = this.props.match.params.ideaId

    return (
      <div className='idea-one'>
        <h5>{currentIdea.idea}</h5>
        <p>{currentIdea.tag}</p>
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchOneIdea(this.props.match.params.ideaId)
  }
}

const mapStateToProps = state => {
  return {
    currentIdea: state.future.currentIdea,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOneIdea: ideaId => dispatch(fetchOneIdea(ideaId))
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(IdeaPage));
