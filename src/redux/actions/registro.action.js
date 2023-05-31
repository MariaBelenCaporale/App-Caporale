import { FIREBASE_AUTH_SIGN_UP_URL } from '../../constants/firebase';
import { registroTypes } from '../types';

const { SIGN_UP } = registroTypes;

export const signUp = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const response = await fetch(FIREBASE_AUTH_SIGN_UP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      if (!response.ok) {
        throw new Error('Ups, algo salió mal');
      }

      const data = await response.json();
      dispatch({
        type: SIGN_UP,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const signIn = ({ email, password }) => {
  console.log('signIn');
};
