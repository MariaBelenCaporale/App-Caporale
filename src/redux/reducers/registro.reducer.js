import { registroTypes } from '../types';

const { SIGN_IN, SIGN_UP } = registroTypes;

const initialState = {
  token: null,
  userId: null,
};

const registroReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    case SIGN_IN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    default:
      return state;
  }
};

export default registroReducer;
