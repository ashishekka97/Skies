import {SET_PREFERENCE, SET_FIRST_LAUNCH} from '../actions/types';

const initialState = [0, 0, 0, 0, 0, 0];

const preferenceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PREFERENCE:
      return state.map((item, index) => {
        if (index !== action.preferenceId - 1) {
          return item;
        }
        return action.optionIndex;
      });

    case SET_FIRST_LAUNCH:
      return state.map((item, index) => {
        if (index !== initialState.length - 1) {
          return item;
        }
        return 1;
      });

    default:
      return state;
  }
};

export default preferenceReducer;
