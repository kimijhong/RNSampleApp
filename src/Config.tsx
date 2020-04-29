import { Platform } from 'react-native';

export default {
  isAndroid: Platform.OS === 'android',
  version:Platform.Version,
  logGeneral: false,
  logNetworkErrors: false
};