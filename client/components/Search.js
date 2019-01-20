import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostOne from './PostOne';
import fetchSearchResults from '../reducers';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      searchResults: []
    }
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }
  handleChange = evt => {
    console.log(this.state.keyword)
    this.setState({
      keyword: evt.target.value
    })
  }
  handleSubmit = evt => {
    console.log('handleSubmit state', this.state)
    evt.preventDefault();
    this.props.fetchSearchResults({
      keyword: this.state.keyword
    });
    this.setState({
      keyword: ''
    })
  }

  render() {
    console.log('initialRender state', this.state)
    return (
      <div id='search-page'>
      <div className='search-component'>
        <h3>Search archive by keyword:</h3>
        <form onSubmit={this.handleSubmit}>
        <input type='text' id='keyword-search' name='keyword' value={this.state.keyword} onChange={this.handleChange} required ></input>
        <button type='submit'>Search</button>
        </form>
      </div>
      {/* {(this.state.searchResults) ?
        <div className='search-results'>
        this.state.searchResults.map(result =>(<PostOne key={result.id} post={result} />
        ))
        </div>
        : <span></span>} */}
      </div>
    )
  }
  //   componentDidMount() {
  //     this.props.fetchSearchResults()
  // }
}

const mapStateToProps = state => {
  console.log('mapState state', state)
  return {
    keyword: state.archiveReducer.keyword,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchResults: keyword => {
      console.log('mapDispatch keyword', keyword)
      return dispatch(fetchSearchResults(keyword))
    }
  }
}

export default connect(null,mapDispatchToProps)(Search);
