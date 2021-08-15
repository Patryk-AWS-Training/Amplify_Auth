import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as UIProvider} from 'react-native-paper';

import store from './redux';
import StackRoot from './navigation';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <UIProvider>
          <NavigationContainer>
            <StackRoot />
          </NavigationContainer>
        </UIProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
