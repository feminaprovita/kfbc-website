import axios from 'axios';

export const RECEIVE_IDEAS_LIST = 'RECEIVE_IDEAS_LIST';
export const DISPLAY_TAG_FUTURE = 'DISPLAY_TAG_FUTURE';
export const DISPLAY_ONE_IDEA = 'DISPLAY_ONE_IDEA';
// export const ADD_IDEA = 'ADD_IDEA';
// export const DELETE_IDEA = 'DELETE_IDEA';

export const receiveIdeasList = ideas => ({ type: RECEIVE_IDEAS_LIST, ideas });
export const displayTagFuture = tag => ({type: DISPLAY_TAG_FUTURE, tag});
export const displayOneIdea = ideaId => ({ type: DISPLAY_ONE_IDEA, ideaId })
// export const addIdea = idea => ({ type: ADD_IDEA, idea });
// export const deleteIdea = ideaId => ({ type: DELETE_IDEA, ideaId });

export const fetchAllIdeas = ideas => {
  return async dispatch => {
    const response = await axios.get('/api/future/', ideas);
    const futureList = response.data;
    const action = receiveIdeasList(futureList);
    dispatch(action);
  };
};

export const fetchTagFuture = tag => {
  return async dispatch => {
    const response = await axios.get('/api/future/tags',tag);
    const tagFuture = response.data;
    const action = displayTagFuture(tagFuture);
    dispatch(action);
  }
}

export const fetchOneIdea = ideaId => {
  return async dispatch => {
    const response = await axios.get(`/api/future/${ideaId}`,ideaId);
    const thisIdea = response.data;
    const action = displayOneIdea(thisIdea);
    dispatch(action);
  }
}

const initialState = {
  ideas: [],
  tags: [],
  currentIdea: {},
};

const futureReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_IDEAS_LIST:
      return { ...state, ideas: action.ideas };
    case DISPLAY_TAG_FUTURE:
      return {...state, tags: action.tags};
    case DISPLAY_ONE_IDEA:
      return {...state, currentIdea: action.ideaId}
    default:
      return state;
  }
};

export default futureReducer;

/*
export const fetchIdeas = ideas => {
  return async (dispatch) => {
    const response = await axios.get('/api/future', ideas)
    const futureList = response.data
    const action = receiveIdeas(futureList)
    dispatch(action)
  }
}

export const fetchOneCampus = campusId => {
  return async (dispatch) => {
    const response = await axios.get(`/api/campuses/${campusId}`, campusId)
    const oneCampus = response.data
    const action = displayOneCampus(oneCampus)
    dispatch(action)
  }
}

export const suggestNewCampus = campus => {
  return async (dispatch) => {
    const response = await axios.post('/api/campuses', campus)
    const suggestedCampus = response.data
    const action = addCampus(suggestedCampus)
    dispatch(action)
  }
}

export const goodbyeCampus = campusId => {
  return async (dispatch) => {
    await axios.delete(`/api/campuses/${campusId}`, campusId)
    const action = deleteCampus(campusId)
    dispatch(action)
  }
}

const initialState = {
  campuses: [],
  currentCampus: {}
}

const campusReducer = (state = initialState, action) => {
  const newState = { ...state }
  switch (action.type) {
    case DISPLAY_ONE_CAMPUS:
      return { ...state, currentCampus: action.campusId }
    case ADD_CAMPUS:
      newState.campuses = [...state.campuses, action.campus]
      return newState;
    case DELETE_CAMPUS:
      const stateAfterDeletion = state.campuses.filter((campus) => campus.id !== action.campusId);
      return { ...state, campuses: stateAfterDeletion }
    default:
      return state
  }
}

*/
