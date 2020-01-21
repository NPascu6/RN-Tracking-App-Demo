import dataContextCreator from './dataContextCreator';
import trackerApi from '../api/trackerApi';

const trackReducer = (state, action) => {
    switch (action.type) {
        case "create_track":
            return {

            }
        default:
            return state;
    }
};

const createTrack = dispatch => (name, locations) => {
    console.log(name, locations.length)
    dispatch({ type: "create_track" })
};

const fetchTracks = dispatch => () => {
    dispatch({ type: "fetch_tracks" })
};

export const { Context, Provider } = dataContextCreator(
    trackReducer,
    {
        fetchTracks,
        createTrack
    },
    {

    }
);