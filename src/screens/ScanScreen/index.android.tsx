'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
// import QRCodeScanner from './qrcodeScanner';

/*
 onRead(e: Event): void;
  vibrate?: boolean;
  reactivate?: boolean;
  reactivateTimeout?: number;
  fadeIn?: boolean;
  showMarker?: boolean;
  cameraType?: 'front' | 'back';
  customMarker?: JSX.Element;
  containerStyle?: StyleProp<ViewStyle>;
  cameraStyle?: StyleProp<ViewStyle>;
  markerStyle?: StyleProp<ViewStyle>;
  topViewStyle?: StyleProp<ViewStyle>;
  bottomViewStyle?: StyleProp<ViewStyle>;
  topContent?: JSX.Element | string;
  bottomContent?: JSX.Element | string;
  notAuthorizedView?: JSX.Element;
  permissionDialogTitle?: string;
  permissionDialogMessage?: string;
  buttonPositive?: string;
  checkAndroid6Permissions?: boolean;
  cameraProps?: RNCameraProps;
}*/

class ScanScreen extends Component {
  onSuccess(e) {
    
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }

  render() {
    return (
      <QRCodeScanner
        showMarker={true}
        containerStyle={{backgroundColor:'#fff'}}
        onRead={this.onSuccess.bind(this)}
        topViewStyle={{flex:1}}
        topContent={<View style={{flex:1}}><Text>top</Text></View>}
        bottomViewStyle={{flex:1}}
        bottomContent={<View style={{flex:1}}><Text>bottom</Text></View>}
        notAuthorizedView={<View style={{flex:1 , backgroundColor:'#000'}}>ddd</View>}
       
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default ScanScreen