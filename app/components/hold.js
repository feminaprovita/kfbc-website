import React, { Component } from 'react'
import { connect } from 'react-redux'
import { enrollNewStudent } from '../reducers'

class NewStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.enrollNewStudent({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
    });
    this.setState({
      firstName: '',
      lastName: '',
      email: ''
    })
  }
  render() {
    return (
      <div>
        <h3>Enroll a new student at MHAJS!</h3>
        <form onSubmit={this.handleSubmit}>
          <label>First Name:</label>
          <input
            value={this.state.firstName}
            onChange={this.handleChange}
            name='firstName'
            type='text'
          />
          <br />
          <label>Last Name:</label>
          <input
            value={this.state.lastName}
            onChange={this.handleChange}
            name='lastName'
            type='text'
          />
          <br />
          <label>Email:</label>
          <input
            value={this.state.email}
            onChange={this.handleChange}
            name='email'
            type='text'
          />
          <br />
          <button type='submit'>Enroll</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    enrollNewStudent: student => dispatch(enrollNewStudent(student))
  }
}

export default connect(null, mapDispatchToProps)(NewStudentForm)
