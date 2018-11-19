//-- Dependencies --//
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Root} from 'native-base';

//-- Navigator --//
import {Navigator as AppNavigator} from './controllers';

//-- Store --//
import store from './store';

export default class App extends Component {
  render() {
    return (
      <Root>
        <Provider store={store}>
          <AppNavigator/>
        </Provider>
      </Root>
    );
  }
};
