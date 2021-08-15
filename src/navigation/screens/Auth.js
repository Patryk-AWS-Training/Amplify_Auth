import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {Auth} from 'aws-amplify';

const AuthScreen = () => {
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
