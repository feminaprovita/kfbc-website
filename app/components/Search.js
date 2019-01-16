import React, {Component} from 'react';
import {connect} from 'react-redux';
// import search thunk from '../reducers';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: {},
      currentSearch: ''
    }
  }
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.searchThunk({
      currentSearch: this.state.currentSearch
    });
    this.setState({
      currentSearch: ''
    })
  }
  render() {
    return (
      <div className='search-component'>
        <h3>Search archive by keyword:</h3>
        <form onSubmit={this.handleSubmit}>
        <input type='text' id='keyword-search' name='keyword' value={this.state.currentSearch} onChange={this.handleChange} required></input>
        <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchThunk: keyword => dispatch(searchThunk(keyword))
  }
}

export default connect(null,mapDispatchToProps)(Search);
