import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const Login = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30 }}>
      <Text style={{ color: 'black', fontSize: 35, marginBottom: 30, fontWeight: 900 }}>Welcome back! Glad to see you, Again!! </Text>
      {/* <View style={styles.container}> */}
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        placeholderTextColor="#303030"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#303030"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#303030"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {/* </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginVertical: 10,
    borderRadius: 4,
    color: 'black'
  },
  button: {
    width: '80%',
    backgroundColor: '#303030',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    fontWeight: 900
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
})