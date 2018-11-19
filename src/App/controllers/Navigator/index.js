//-- Dependencies --//
import React, {Component} from 'react';
import {reduxifyNavigator} from 'react-navigation-redux-helpers';
import {connect} from 'react-redux';
import Provider from 'react-redux/es/components/Provider';

//-- Application Configuration --//
import config from '../../config';

//-- Store --//
import store from '../../store';

//-- Routes --//
import routes from '../../routes';

const App = reduxifyNavigator(routes(config.navigationOptions), 'root');

const mapStateToProps = (state) => ({state: state.nav});

const AppWithNavigationState = connect(mapStateToProps)(App);

export default class Navigator extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState/>
      </Provider>
    );
  }
};
