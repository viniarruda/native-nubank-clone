import React from 'react';
import {useScreens} from 'react-native-screens';
import {SafeAreaView, StatusBar} from 'react-native';
import Navigator from './src/routes';

useScreens();

export default () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
      <Navigator />
    </SafeAreaView>
  );
};
