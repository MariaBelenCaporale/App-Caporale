import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { registroReducer, agregarTareaReducer } from './reducers/index';

const rootReducer = combineReducers({
  registro: registroReducer,
  AgregarTarea: agregarTareaReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
