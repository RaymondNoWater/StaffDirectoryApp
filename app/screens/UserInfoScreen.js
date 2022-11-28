import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import StaffDetailsComponent from "../Components/StaffDetailsComponent";

function UserInfoScreen({ route, navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
    const { users, currentUserId } = route.params;
    const currentUser = users.filter((user) => user.id == currentUserId)[0];

    setUser(currentUser);
    setUsers(users);
    setLoading(false);
    
    navigation.setOptions({
      headerRight: () => (
        <FontAwesome5
          name="user-edit"
          size={24}
          color="black"
          style={styles.editButton}
          onPress={() => {
            navigation.navigate("Edit Details", {
              user: currentUser,
              users,
            });
          }}
        />
      ),
    });
  }, [route, navigation]);

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <View style={styles.iconContainer}>
            <View>
              <StaffDetailsComponent heading={'ID'} userDetail={user.id}/>
              <StaffDetailsComponent heading={'Name'} userDetail={user.name}/>
              <StaffDetailsComponent heading={'Phone Number'} userDetail={user.phone}/>
              <StaffDetailsComponent heading={'Department'} userDetail={user.department}/>
              <StaffDetailsComponent heading={'Street'} userDetail={user.address.street}/>
              <StaffDetailsComponent heading={'City'} userDetail={user.address.city}/>
              <StaffDetailsComponent heading={'Zipcode'} userDetail={user.address.zipcode}/>
              <StaffDetailsComponent heading={'State'} userDetail={user.address.state}/>
              <StaffDetailsComponent heading={'Country'} userDetail={user.address.country}/>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  iconContainer: {
  },
  editButton: {
    marginRight: 25,
  }
});

export default UserInfoScreen;
