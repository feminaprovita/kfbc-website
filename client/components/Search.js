import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostOne from './PostOne';
import fetchSearchResults from '../reducers';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchObj: {}
      // keyword: '',
      // searchResults: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }
  handleChange = evt => {
    const newSearchObj = {keyword: evt.target.value, searchResults: []};
    // console.log('newSearchObj', newSearchObj)
    this.setState({
      searchObj: newSearchObj,
    })
    console.log('handleChange state', this.state)
  }
  async handleSubmit(evt) {
    console.log('handleSubmit state', this.state)
    evt.preventDefault();
    await this.props.fetchSearchResults(this.state);
    this.setState({
      searchObj: {}
    })
    /* The previous state received by the reducer has unexpected type of "String". Expected argument to be an object with the following keys: "archive", "future", "tags"
    Somehow, handleSubmit is destroying the whole way the reducers combine, feeding it a string (keyword?) rather than state.archive.searchObj.keyword, WHICH yields an action of undefined */
  }

  render() {
    console.log('render state', this.state)
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
    componentDidUpdate(prevProps, prevState) {
      const latest = this.state.searchObj.keyword
      // console.log('componentDidUpdate latest', latest)
      const prev = prevState.searchObj.keyword
      console.log('componentDidUpdate prev', prevState)
      if (latest !== prev) this.props.fetchSearchResults(latest)
    }
}

const mapStateToProps = state => {
  console.log('mapState state', state)
  return {
    keyword: state.archive.searchObj.keyword,
    searchResults: state.archive.searchObj.searchResults
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchResults: keyword => {
      // console.log('mapDispatch keyword', keyword)
      // console.log('mapDispatch keyword', keyword)
      return dispatch(fetchSearchResults(keyword))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);
