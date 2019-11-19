import { GET_TEXT, UPDATE_TEXT } from "../actions/text";

// 1st parameter(state = initial state)
// 2nd patameter (action)
const text = (state = { text: "Hi there" }, action) => {
  switch (action.type) {
    case GET_TEXT:
      return state;
    case UPDATE_TEXT:
      // do something here to update store => state
      return Object.assign({}, state, {
        text: action.payload
      });
    default:
      return state;
  }
};

export default text;
