import axios from 'axios';

export const RECEIVE_POSTS_LIST = 'RECEIVE_POSTS_LIST';
export const RECEIVE_TAG_LIST = 'RECEIVE_TAG_LIST';
export const DISPLAY_TAG_ARCHIVE = 'DISPLAY_TAG_ARCHIVE';

export const receivePostsList = posts => ({ type: RECEIVE_POSTS_LIST, posts });
export const receiveTagList = tags => ({ type: RECEIVE_TAG_LIST, tags });
export const displayTagArchive = tag => ({type: DISPLAY_TAG_ARCHIVE, tag});

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

const initialState = {
  posts: [],
  tags: [],
  currentPost: {},
};

const archiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_POSTS_LIST:
      return { ...state, posts: action.posts };
    case RECEIVE_TAG_LIST:
      return {...state, tags: action.tags};
    case DISPLAY_TAG_ARCHIVE:
      return {...state, tags: action.tags};
    default:
      return state;
  }
};

export default archiveReducer;
