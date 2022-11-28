import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StaffDirectoryScreen from "./app/Screens/StaffDirectoryScreen";
import UpdateUserScreen from "./app/Screens/UpdateUserScreen";
import AddNewUserScreen from "./app/Screens/AddNewUserScreen";
import UserInfoScreen from "./app/Screens/UserInfoScreen";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Staff Directory" component={StaffDirectoryScreen}/>
        <Stack.Screen name="Staff Details" component={UserInfoScreen} />
        <Stack.Screen name="Edit Details" component={UpdateUserScreen} />
        <Stack.Screen name="New Staff Member" component={AddNewUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );


}
