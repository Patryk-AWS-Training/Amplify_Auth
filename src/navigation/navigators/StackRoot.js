import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Auth from '../screens/Auth';

const StackNav = createStackNavigator();

export default function StackRoot({userToken}) {
  // userToken = 'asdf';

  return (
    <StackNav.Navigator>
      {userToken ? (
        <StackNav.Screen name="App" component={Home} />
      ) : (
        <StackNav.Screen name="Auth" component={Auth} />
      )}
    </StackNav.Navigator>
  );
}
