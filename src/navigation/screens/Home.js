import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {Auth} from 'aws-amplify';

const Home = () => {
  const userState = useSelector(state => state.auth.user);

  return (
    <View>
      <Text>Home</Text>
      <Button mode="contained" onPress={() => Auth.signOut()}>
        Log out - {userState?.user?.username}
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
  },
});
