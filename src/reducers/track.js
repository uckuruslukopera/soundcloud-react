import * as actionsTypes from '../constants/actionTypes';

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case actionsTypes.TRACKS_SET:
            return setTracks(state, action);
    }
    return state;
}

function setTracks(state, action) {
    const { tracks } = action;
    return [...state, ...tracks];
}

