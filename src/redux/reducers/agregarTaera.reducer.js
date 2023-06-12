import { NAVIGATE_TO_AGREGAR_TAREA } from '../types';

const initialState = {
  screen: 'Home',
};

const agregarTareaReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATE_TO_AGREGAR_TAREA:
      return { ...state, screen: 'AgregarTarea' };
    default:
      return state;
  }
};

export default agregarTareaReducer;
