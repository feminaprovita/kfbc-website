import React, {Component} from 'react'

class TagShort extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('TagShort props',this.props.tag)

    return (
      <div>
        <div className='tag-short'>
        {/* <Link to='/archive/tag/:tagName'>TagName</Link> (maybe with a switch?) */}
        ✏ {this.props.tag}
        <br />
        </div>
      </div>
    )
  }
}

export default TagShort;
