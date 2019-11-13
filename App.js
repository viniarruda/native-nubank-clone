import React from 'react';
// import {useScreens} from 'react-native-screens';
import {SafeAreaView} from 'react-native';
import Navigator from './src/routes';

// useScreens();

export default () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Navigator />
    </SafeAreaView>
  );
};
