// import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Logout from './screens/Logout';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();

import React from 'react';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Logout" component={Logout} />
        {/* <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
