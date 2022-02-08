import React from 'react';
import Router from './app/Router'
import store from './app/store/configureStore';
import {Provider} from 'react-redux';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

class App extends React.Component{
  render() {
    return (
      <Provider store={store}>
        <Router/>
      </Provider>   
    );
  }
}

export default App;
