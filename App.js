import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }){
return (
  <View>
    <Text>Home Screen</Text>
    <Button
    title="Stand in User Profile"
    onPress={() => navigation.navigate('UserProfile')}
    />

    <Button
    title="Add New User"
    onPress={() => navigation.navigate("AddNewUser")}
    />
  </View>
);
}

function UserProfileScreen({ navigation }){
return (
  <View>
    <Text>User Profile Screen</Text>
    <Button
    title="Edit profile"
    onPress={() => navigation.navigate('UpdateUser')}
    />
  </View>
);
}

function UpdateUserScreen({ navigation }){
return(
  <View>
    <Text>Update User Screen</Text>
  </View>
);
}

function AddNewUserScreen({ navigation }){
return(
  <View>
    <Text>Add New User Screen</Text>
  </View>
)
}

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