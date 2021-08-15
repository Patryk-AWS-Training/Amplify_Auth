import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import store from './src/redux';

import {getDummyData} from './src/redux/features/thunks';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  const dispatch = useDispatch();
  const dummyData = useSelector(state => state.main.dummyData);

  React.useEffect(() => {
    dispatch(getDummyData());
  }, [dispatch]);

  return (
    <View>
      <Text>Home</Text>
      <ScrollView>
        {dummyData.map((item, index) => {
          return <Text key={index}>{item.title}</Text>;
        })}
      </ScrollView>
    </View>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
