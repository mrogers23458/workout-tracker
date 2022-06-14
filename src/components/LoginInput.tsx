import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, View } from "react-native";

interface LoginObject {
    username: string,
    password: string
}

const UselessTextInput = () => {
    const [ userName, setUserName ] = useState('')
    const [ password, setPassword ] = useState('')

    function handleUsernameChange(value) {
        setUserName(value)
    }

    function handlePasswordChange(value) {
        setPassword(value)
    }

    console.log('username here', userName)
    console.log('password here', password)

    const LoginInfo: LoginObject = {
        username: userName,
        password: password
    }

    console.log(LoginInfo)

  return (
    <SafeAreaView>
        <View>
            <Text>Login</Text>
        </View>
        
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={handleUsernameChange}
                placeholder='Username'
            />
            <TextInput
                style={styles.input}
                onChangeText={handlePasswordChange}
                secureTextEntry={true}
                placeholder='Password'
                
            />
        </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    marginTop: 100
  }
});

export default UselessTextInput;