
import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import LoginInput from './src/components/LoginInput';

const App = () => {
  const title = "MIKES 5X5"
  const subTitle = "WORKOUT TRACKER"
  return (
    <SafeAreaView>
        <Header title={title} subtitle={subTitle}/>
        <LoginInput />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  body: {
    flex: 3,
    height: 500,
    
  }
})

export default App;