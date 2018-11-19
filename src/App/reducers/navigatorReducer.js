import {createNavigationReducer} from 'react-navigation-redux-helpers';
import config from '../config';
import routes from '../routes';

const navigator = routes(config.navigationOptions);

export default createNavigationReducer(navigator);
