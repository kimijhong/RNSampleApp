
import React, { Component, Fragment } from 'react';
import {
  SafeAreaView, StatusBar,
} from 'react-native';
import { Root, Container } from 'native-base';
import { Provider } from 'react-redux';
import Navigator from '~/screens/Navigator'
import Store from './store';



class App extends Component {

  render() {
    return (
      <Provider store={Store}>
        <Root>
          <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent={true} />
          <Navigator></Navigator>
        </Root>
      </Provider>
    );
  }
}

export default App;
