//-- Dependencies --//
import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from '../reducers';
import {composeWithDevTools} from 'remote-redux-devtools';

//-- Middleware's --//
import {navigationMiddleware} from '../middlewares';

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(navigationMiddleware)));
