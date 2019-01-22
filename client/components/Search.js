import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostOne from './PostOne';
import fetchSearchResults from '../reducers';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchObj: {
        keyword: '',
        searchResults: []
      }
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
    // this.setState({
    //   searchObj: {}
    // })
    /* The previous state received by the reducer has unexpected type of "String". Expected argument to be an object with the following keys: "archive", "future", "tags"
    Unexpected key "searchObj" found in previous state received by the reducer. Expected...
    Somehow, handleSubmit's componentDidUpdate is destroying the whole way the reducers combine? seems to feed the state whatever i set to 'latest' (the string keyword or the obj searchObj) when it wants state.archive.whatever, WHICH yields an action of undefined */
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
      {/* {<div className='search-results'>
        this.state.searchResults.map(result =>(<PostOne key={result.id} post={result} />
        ))
        </div>} */}
      </div>
    )
  }
    componentDidUpdate(prevProps, prevState) {
      const latest = this.state
      console.log('componentDidUpdate latest', latest)
      const prev = prevState
      console.log('componentDidUpdate prev', prevState)
      // when comparing state, they're the same shape, but when comparing state.searchObj.keyword, prevState still gives the whole obj, not the requested key, so will never be equal
      if (latest !== prev) this.props.fetchSearchResults(latest)
      console.log('componentDidUpdate in action', this.props.fetchSearchResults(latest))
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
