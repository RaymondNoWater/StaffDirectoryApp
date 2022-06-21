import {View,Text,Button} from 'react-native';

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

export default UserProfileScreen;