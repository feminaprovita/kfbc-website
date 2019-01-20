import axios from 'axios';

export const RECEIVE_POSTS_LIST = 'RECEIVE_POSTS_LIST';
export const RECEIVE_TAG_LIST = 'RECEIVE_TAG_LIST';
export const DISPLAY_TAG_ARCHIVE = 'DISPLAY_TAG_ARCHIVE';
export const SEARCH_ARCHIVE = 'SEARCH_ARCHIVE';

export const receivePostsList = posts => ({ type: RECEIVE_POSTS_LIST, posts });
export const receiveTagList = tags => ({ type: RECEIVE_TAG_LIST, tags });
export const displayTagArchive = tag => ({type: DISPLAY_TAG_ARCHIVE, tag});
export const searchArchive = keyword => ({type: SEARCH_ARCHIVE, keyword});

export const fetchAllPosts = posts => {
  return async dispatch => {
    const response = await axios.get('/api/archive', posts);
    const archiveList = response.data;
    const action = receivePostsList(archiveList);
    dispatch(action);
  };
};

export const fetchTagList = tags => {
  return async dispatch => {
    const response = await axios.get('/api/archive/tags',tags);
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!
    const tagList = response.data;
    const action = receiveTagList(tagList);
    dispatch(action);
  }
}

export const fetchTagArchive = tag => {
  return async dispatch => {
    const response = await axios.get('/api/archive/tags', tag);
    const tagArchive = response.data;
    const action = displayTagArchive(tagArchive);
    dispatch(action);
  }
}

export const fetchSearchResults = keyword => {
  console.log('fetching...')
  return async dispatch => {
    console.log('keyword', keyword)
    const slug = keyword.encodeURIComponent.toLowerCase();
    const response = await axios.get(`/api/archive/${slug}`);
    console.log('response', response)
    const searchResults = response.data;
    const action = searchArchive(searchResults);
    dispatch(action);
  }
}

const initialState = {
  posts: [],
  tags: [],
  currentPost: {},
  keyword: '',
  searchResults: []
};

const archiveReducer = (state = initialState, action) => {
  console.log('action', action)
  switch (action.type) {
    case RECEIVE_POSTS_LIST:
      return { ...state, posts: action.posts };
    case RECEIVE_TAG_LIST:
      return {...state, tags: action.tags};
    case DISPLAY_TAG_ARCHIVE:
      return {...state, tags: action.tags};
    case SEARCH_ARCHIVE:
      const relevantPosts = state.posts.filter(post => post.post.includes(action.keyword));
      if (relevantPosts) return {...state, searchResults: relevantPosts};
      else return {...state, searchResults: []}
    default:
      return state;
  }
};

export default archiveReducer;
