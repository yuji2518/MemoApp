import React from 'react';
import {
  StyleSheet, View, TextInput, Text, TouchableHighlight,
}
  from 'react-native';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>ログイン</Text>
        <TextInput
          style={styles.input}
          value="Email Adress"
        />

        <TextInput
          style={styles.input}
          value="Password"
        />

        <TouchableHighlight
          style={styles.button}
          onPress={() => {}}
          underlayColor="#F65820"
        >
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#eee',
    height: 40,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  button: {
    backgroundColor: '#f26939',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default LoginScreen;
