import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './app/screens/HomeScreen';
import UserProfileScreen from './app/screens/UserProfileScreen';
import UpdateUserScreen from './app/screens/UpdateUserScreen';
import AddNewUserScreen from './app/screens/AddNewUserScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen}/>
        <Stack.Screen name="UpdateUser" component={UpdateUserScreen}/>
        <Stack.Screen name="AddNewUser" component={AddNewUserScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}