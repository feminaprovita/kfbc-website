import React, {Component} from 'react'

class IdeaShort extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('IdeaShort props',this.props.idea)
    const idea = this.props.idea.idea
    // const ideaUrl = this.props.idea.url
    return (
      <div>
        <div className='idea-short'>
        {/* <Link to=`/future/${}` */}
        ❦ {idea}
        <br />
        <br />
        </div>
      </div>
    )
  }
}

export default IdeaShort;
