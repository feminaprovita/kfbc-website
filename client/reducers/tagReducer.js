import axios from 'axios';

// export const RECEIVE_TAG_LIST = 'RECEIVE_TAG_LIST';
// export const DISPLAY_TAG_ARCHIVE = 'DISPLAY_TAG_ARCHIVE';
// export const DISPLAY_TAG_FUTURE = 'DISPLAY_TAG_FUTURE';
export const ADD_TAG = 'ADD_TAG';

// export const receiveTagList = tags => ({ type: RECEIVE_TAG_LIST, tags });
// export const displayTagArchive = tag => ({type: DISPLAY_TAG_ARCHIVE, tag});
// export const displayTagFuture = tag => ({type: DISPLAY_TAG_FUTURE, tag});
export const addTag = tag => ({type: ADD_TAG, tag});

// export const fetchTagList = tags => {
//   return async dispatch => {
//     const response = await axios.get('/api/archive/tags',tags);
//     // !!!!!!!!!!!!!!!!!!!!!!!!!!!
//     const tagList = response.data;
//     const action = receiveTagList(tagList);
//     dispatch(action);
//   }
// }

// export const fetchTagArchive = tag => {
//   return async dispatch => {
//     const response = await axios.get('/api/archive/tags', tag);
//     const tagArchive = response.data;
//     const action = displayTagArchive(tagArchive);
//     dispatch(action);
//   }
// }

// export const fetchTagFuture = tag => {
//   return async dispatch => {
//     const response = await axios.get('/api/future/tags',tag);
//     const tagFuture = response.data;
//     const action = displayTagFuture(tagFuture);
//     dispatch(action);
//   }
// }

const initialState = {
  tags: [],
}

const tagReducer = (state = initialState,action) => {
  switch(action.type) {
    // case RECEIVE_TAG_LIST:
    //   return {...state, tags: action.tags};
    // case DISPLAY_TAG_ARCHIVE:
    //   return {...state, tags: action.tags};
    // case DISPLAY_TAG_FUTURE:
    //   return {...state, tags: action.tags};
    case ADD_TAG:
      const newState = {...state}
      const newTags = [...state.tags, action.tags]
      return {...newState, tags: newTags}
    default:
      return state;
  }
}

export default tagReducer;





// export const addNewTag = tag => {
//   return async dispatch => {
//     const response = await axios.post('/api/')
//   }
// }
