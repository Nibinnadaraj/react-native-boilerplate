import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import Home from '../screen/home/Home';
import About from '../screen/about/About';
import SignUp from '../screen/signUp/SignUp';
import Login from '../screen/login/Login';
import Details from '../screen/details/Details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const RootNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation;