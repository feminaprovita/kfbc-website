import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class IdeaOne extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    // console.log('IdeaOne props',this.props.idea)
    const idea = this.props.idea
    // const ideaUrl = this.props.idea.url
    return (
        <div className='idea-short' key={idea.id}>
          {/* <Link to={`/future/${idea.id}`}> */}
          ❦ {idea.idea}<br />
          #{idea.tag}
          {/* </Link> */}
          <br />
        </div>
    )
  }
}

export default IdeaOne;
