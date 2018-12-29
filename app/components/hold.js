import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { goodbyeCampus } from '../reducers'

class OneCampus extends Component {
  constructor(props) {
    super(props)
  }
  handleClick = campusId => {
    this.props.goodbyeCampus(this.props.campus.id)
    this.setState({ currentCampus: this.props.campus })
  }
  render() {
    const campus = this.props.campus
    const campusId = this.props.campus.id
    return (
      <div>
        <div className="campus" >
          <Link to={`/campuses/${campusId}`}>
            <img className='thumbnail' src={campus.imageUrl} alt={campus.name} />
            <h3>{campus.name}</h3>
          </Link>
          <button className='deleteCampus' id={campusId} onClick={this.handleClick}>X</button>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    campuses: state.campusReducer.campuses,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goodbyeCampus: campusId => dispatch(goodbyeCampus(campusId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OneCampus);

