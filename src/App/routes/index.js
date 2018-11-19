//-- Dependencies --//
import {NavigationActions} from "react-navigation";
import {createStackNavigator} from 'react-navigation';

//-- Containers --//
import {Hotels, Details} from '../views';

//-- Routes --//
const routes = {
  Hotels: {
    screen: Hotels
  },
  Details: {
    screen: Details
  },
};

export default (params) =>
  createStackNavigator(routes, params);
