import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { registroReducer } from './reducers';
const rootReducer = combineReducers({
  registro: registroReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
