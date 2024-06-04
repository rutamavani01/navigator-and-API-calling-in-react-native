
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './Components/Login';
import { Home } from './Components/Home';
import { Main } from './Components/Main';
import { Register } from './Components/Register';
import { Api } from './Components/Api';

const stack = createNativeStackNavigator();

const App = () => {

  const btnAction = () => {
    console.warn("done")
  }

  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={
          {
            headerStyle: {
              backgroundColor: 'white'
            },
            headerTitleStyle: {
              fontSize: 20
            }
          }
        }
      >

        <stack.Screen name='Api' component={Api} options={{ headerShown: false }} />
        <stack.Screen name='Main' component={Main} options={{ headerShown: false }} />
        <stack.Screen name='Register' component={Register} />

        <stack.Screen name='Login' component={Login} options={{
          // headerTitle: () => <Button title='Left' onPress={btnAction} />,
          // headerRight: () => <Header />
        }} />

        <stack.Screen name='Home' component={Home} options={
          {
            headerStyle:
              { backgroundColor: 'white' },
            headerTitleStyle: { fontSize: 20 }
          }} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const Header = () => {
  return (
    <View>
      <TextInput placeholder='menu' />
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
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginVertical: 10,
    borderRadius: 4,
    color: 'black'
  },
})

export default App;
