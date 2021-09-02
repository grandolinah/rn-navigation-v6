/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';

const App = () => {
  const isDarkMode = true; // TODO: themes

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>page</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
