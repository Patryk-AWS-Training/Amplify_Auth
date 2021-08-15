import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as UIProvider} from 'react-native-paper';

import store from './src/redux';
import StackRoot from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <UIProvider>
        <NavigationContainer>
          <StackRoot />
        </NavigationContainer>
      </UIProvider>
    </Provider>
  );
};

export default App;
