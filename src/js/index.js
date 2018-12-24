import '../scss/all.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/';
import { Route, HashRouter  } from 'react-router-dom';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


import WebPage from './WebPage'
import InCinema from './InCinema'
import Header from './Header'
import DetailMovie from "./DetailMovie";


ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Route path="/" component={Header} />
                <Route exact path="/" component={WebPage} />
                <Route exact path="/film:id"
                    render = { ({match}) => {
                        const id = match.params.id;
                        return <DetailMovie itemId={id}/>
                    }}/>
                <Route path="/incinema" component={InCinema} />
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);