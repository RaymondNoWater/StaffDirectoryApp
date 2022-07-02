import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './app/screens/HomeScreen';
import UserProfileScreen from './app/screens/UserProfileScreen';
import UpdateUserScreen from './app/screens/UpdateUserScreen';
import AddNewUserScreen from './app/screens/AddNewUserScreen';

//const masterKey = "$2b$10$IZPT0hQ6WGS3T/lqOrfd.OUV.tJz33ey9X3mD2RkHJHpASm.EYrjq";
//const binId = "62b1ae0d449a1f3821137006";
//const root = "https://api.jsonbin.io/v3/b/"62b1ae0d449a1f3821137006/latest";

let rawData;

// let req = new XMLHttpRequest();
// req.onreadystatechange = () => {
//   if (req.readyState == XMLHttpRequest.DONE) {
//     var response = req.responseText;
//     var employeeData = JSON.parse(response);
//     console.log(employeeData.id);
//   }
// };
// req.open("GET", root, true);
// req.setRequestHeader("X-Master-Key" : "$2b$10$IZPT0hQ6WGS3T/lqOrfd.OUV.tJz33ey9X3mD2RkHJHpASm.EYrjq";
// );
// req.send();

fetch("https://api.jsonbin.io/v3/b/62b1ae0d449a1f3821137006/latest",
{ method : "GET", headers:{ "X-Master-Key" : "$2b$10$IZPT0hQ6WGS3T/lqOrfd.OUV.tJz33ey9X3mD2RkHJHpASm.EYrjq", "X-Bin-Meta" : false	}})
.then(res => res.json())
.then(data => displayTest(data))

function displayTest(testData){
  console.log(testData[0].id);
};


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