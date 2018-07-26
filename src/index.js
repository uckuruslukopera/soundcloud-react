import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/Stream';
import Provider from 'react-redux';
import * as actions from './actions';
import configureStore from './stores/configureStore';

const tracks = [
    { title: 'Another One Bites the Dust' },
    { title: 'All Along the Watchtower' },
    { title: 'Foxy Lady' },
    { title: 'Mr. Tambourine Man' },
    { title: 'Giorgio By Moroder' },
    { title: 'Bitch Please' },
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
    <Provider store={store}>
        <Stream />
    </Provider>,
    document.getElementById('app')
);
