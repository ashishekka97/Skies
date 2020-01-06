import {SET_PREFERENCE} from '../actions/types';

const initialState = [0, 0, 0, 0, 0];

const preferenceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PREFERENCE:
      return state.map((item, index) => {
        if (index !== action.preferenceId - 1) {
          return item;
        }
        return action.optionIndex;
      });

    default:
      return state;
  }
};

export default preferenceReducer;
