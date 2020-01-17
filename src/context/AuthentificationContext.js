import { AsyncStorage } from 'react-native';
import dataContextCreator from '../context/dataContextCreator';
import trackerApi from '../api/trackerApi';
import { navigate } from '../helpers/navigationRef';

const authentificationReducer = (state, action) => {
    switch (action.type) {
        case 'sign_up':
            return {
                errorMessage: '',
                token: action.payload
            }
        case 'signup_error':
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state;
    }
};

const signUp = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'sign_up', payload: response.data.token });
        navigate('TrackList');
    } catch (err) {
        dispatch({ type: 'signup_error', payload: 'Could not sign up.' });
    }
};

const signIn = (dispatch) => {
    return ({ email, password }) => {

    };
};

const signOut = (dispatch) => {
    return () => {

    };
};


export const { Provider, Context } = dataContextCreator(
    authentificationReducer,
    {
        signIn,
        signUp,
        signOut
    },
    {
        token: null,
        errorMessage: ''
    }
);