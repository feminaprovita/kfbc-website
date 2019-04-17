import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostOne from './PostOne';
import {fetchSearchResults} from '../reducers';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      searchResults: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)
  }
  handleChange = evt => {
    this.setState({
      keyword: evt.target.value,
    })
    console.log('handleChange state', this.state)
  }
  async handleSubmit(evt) {
    console.log('handleSubmit state', this.state)
    evt.preventDefault();
    await this.props.fetchSearchResults(this.state);
    // this.setState({
    //   keyword: ''
    // })
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
      {(this.state.searchResults.length >= 1) && (
        <div className='search-results'>
          this.state.searchResults.map(result =>(
            <PostOne key={result.id} post={result} />
          ))
        </div>)}
      </div>
    )
  }
    componentDidUpdate(prevProps, prevState) {
      const latest = this.state
      console.log('componentDidUpdate latest', latest)
      const prev = prevState
      console.log('componentDidUpdate prev', prevState)
      if (latest !== prev) this.props.fetchSearchResults(latest)
      console.log('componentDidUpdate in action', this.props.fetchSearchResults(latest))
    }
}

const mapStateToProps = state => {
  console.log('mapState state', state)
  return {
    keyword: state.archive.keyword,
    searchResults: state.archive.searchResults
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchResults: keyword => {
      // const keyword = searchObj.keyword
      // console.log('mapDispatch keyword', keyword)
      console.log('mapDispatch keyword', keyword)
      //the problem is here!! the thunk takes in an object, but the dispatch is taking in only a keyword
      return dispatch(fetchSearchResults(keyword))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);
