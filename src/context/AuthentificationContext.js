import { AsyncStorage } from 'react-native';
import dataContextCreator from '../context/dataContextCreator';
import trackerApi from '../api/trackerApi';
import { navigate } from '../helpers/navigationRef';

const authentificationReducer = (state, action) => {
    switch (action.type) {
        case 'sign_in':
            return {
                errorMessage: '',
                token: action.payload
            }
        case 'error':
            return {
                ...state,
                errorMessage: action.payload
            }
        case 'sign_out':
            return {
                token: null
            }
        case 'clear_error_message':
            return {
                ...state,
                errorMessage: ''
            }
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'sign_in', payload: token });
        navigate('TrackList');
    }
    else {
        navigate('Signup')
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' });
}

const signUp = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'sign_in', payload: response.data.token });
        navigate('TrackList');
    } catch (err) {
        dispatch({ type: 'error', payload: 'Could not sign up.' });
    }
};

const signIn = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'sing_in', payload: response.data.token });
        navigate('TrackList');
    } catch (err) {
        dispatch({ type: 'error', payload: 'Could not log in.' });
    }
};

const signOut = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'sign_out' });
    navigate('loginFlow');
};

export const { Provider, Context } = dataContextCreator(
    authentificationReducer,
    {
        signIn,
        signUp,
        signOut,
        clearErrorMessage,
        tryLocalSignin
    },
    {
        token: null,
        errorMessage: ''
    }
);