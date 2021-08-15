import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import {Auth} from 'aws-amplify';

import {setUser} from '../../redux/features/auth';

import HomeScreen from '../screens/Home';
import AuthScreen from '../screens/Auth';

const StackNav = createStackNavigator();

export default function StackRoot() {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.auth.user);

  React.useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => {
        dispatch(setUser({user: {username: user.username}}));
      })
      .catch(() => console.log('Not signed in'));
  }, [dispatch]);

  return (
    <StackNav.Navigator>
      {userState ? (
        <StackNav.Screen name="App" component={HomeScreen} />
      ) : (
        <StackNav.Screen name="Auth" component={AuthScreen} />
      )}
    </StackNav.Navigator>
  );
}
