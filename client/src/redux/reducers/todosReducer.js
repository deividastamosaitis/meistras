import * as actionTypes from "../actions/type";

export const todosReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADDNEW_DARBAS:
      return [action.payload, ...state];
    case actionTypes.GETALL_DARBAS:
      return action.payload;
    case actionTypes.TOGGLE_DARBAS:
      return state.map((todo) =>
        todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
      );
    case actionTypes.UPDATE_DARBAS:
      return state.map((todo) =>
        todo._id === action.payload._id
          ? {
              ...todo,
              data: action.payload.data,
              username: action.payload.data,
            }
          : todo
      );
    case actionTypes.DELETE_DARBAS:
      return state.filter((todo) => todo._id !== action.payload._id);

    default:
      return state;
  }
};
