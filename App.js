import * as React from 'react';
 import { Provider } from 'react-redux';
 import store from './Redux/Store/Store';
 import AppNavigator from './Route/Index';
  const App =() =>{
    return(
      <Provider store={store}>
      <AppNavigator/>
      </Provider>
    );
  };
  export default App;