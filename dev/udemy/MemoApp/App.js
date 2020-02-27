import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        title: 'MemoPad',
        headerStyle: {
          backgroundColor: '#f5deb3',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 20,
        },
      }}
      >
        <Stack.Screen
          name="MemoList"
          component={MemoListScreen}
        />
        <Stack.Screen
          name="MemoDetail"
          component={MemoDetailScreen}
        />
        <Stack.Screen
          name="MemoEdit"
          component={MemoEditScreen}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
