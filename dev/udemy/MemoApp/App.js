import React from 'react';
import { StyleSheet, View } from 'react-native';
import MemoEditScreen from './src/screens/MemoEditScreen';
import Appbar from './src/components/Appbar';


export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />

      <MemoEditScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },


});
