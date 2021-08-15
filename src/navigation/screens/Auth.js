import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {Auth, Hub} from 'aws-amplify';

import {setUser} from '../../redux/features/auth';

const AuthScreen = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const subscription = Hub.listen('auth', ({payload: {event, data}}) => {
      switch (event) {
        case 'signIn':
          dispatch(setUser({user: {username: data.username}}));
          break;
        case 'signOut':
          dispatch(setUser({user: null}));
          break;
        default:
          break;
      }
    });

    return subscription;
  }, []);

  return (
    <View>
      <Button
        mode="contained"
        onPress={() => Auth.federatedSignIn({provider: 'Facebook'})}>
        Facebook Login
      </Button>
      <Button
        mode="contained"
        onPress={() => Auth.federatedSignIn({provider: 'Google'})}>
        Google Login
      </Button>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
