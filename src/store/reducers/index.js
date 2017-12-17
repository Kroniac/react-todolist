import * as actionTypes from '../actions/actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.MOVE_UP:
      console.log(state);
      return state;
  }
};

export default reducer;
