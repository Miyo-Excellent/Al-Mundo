//-- Dependencies --//
import {combineReducers} from 'redux';
import navigatorReducer from './navigatorReducer';
import registerReducer from './registerReducer';

export default combineReducers({
  nav: navigatorReducer,
  register: registerReducer
});
