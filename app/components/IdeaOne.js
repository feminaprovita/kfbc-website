import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class IdeaOne extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('IdeaOne props',this.props.idea)
    const idea = this.props.idea
    // const ideaUrl = this.props.idea.url
    return (
      <div>
        <div className='idea-short' key={`idea-${idea.id}`}>
        <Link to={`/future/${idea.id}`}>
        ❦ {idea.idea}
        </Link>
        <br />
        <br />
        </div>
      </div>
    )
  }
}

export default IdeaOne;
