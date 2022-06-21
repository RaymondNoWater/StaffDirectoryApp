import {View,Text,Button} from 'react-native';

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

export default HomeScreen;