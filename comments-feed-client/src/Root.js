import { Provider } from 'react-redux';
import store from './store'
import {
    HashRouter,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import React from 'react';//import injectTapEventPlugin from 'react-tap-event-plugin';
//injectTapEventPlugin();

import CommentsFeedForm from './CommentsFeedForm';


export default () => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/comments-feed" component={CommentsFeedForm} />
                <Redirect from='/' to='/comments-feed' />
            </Switch>
        </HashRouter>
    </Provider>
)




