import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { Formik } from "formik";
import { Feather } from "@expo/vector-icons";

function UpdateUserScreen({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const { users, user } = route.params;
    setUsers(users);
    setUser(user);
    setLoading(false);

    navigation.setOptions({
      headerRight: () => (
        <Feather
          name="trash-2"
          size={30}
          color="black"
          style={styles.deleteButton}
          onPress={() => handleUserDelete(users, user.id)}
        />
      ),
    });
  }, [route, navigation]);

  function handleUpdateUserData(values) {
    const updatedUserData = mergeUserData(values);
    const updatedUsersArray = updateUsersArray(users, updatedUserData);

    setUser(updatedUserData);
    setUsers(updatedUsersArray);
    updateJsonBin(updatedUsersArray);

    navigation.navigate("Staff Directory", {
      users: updatedUsersArray,
      currentUserId: user.id,
    });
  }

  function mergeUserData(newData) {
    const mergedUserData = {
      id: user.id,
      name: newData.name || user.name,
      phone: newData.phone || user.phone,
      department: newData.department || user.department,
      address: {
        street: newData.street || user.address.street,
        city: newData.city || user.address.city,
        state: newData.state || user.address.state,
        zipcode: newData.zipcode || user.address.zipcode,
        country: newData.country || user.address.country,
      },
    };
    return mergedUserData;
  }

  function userIndex(array, item) {
    return array.findIndex((user) => user.id === item);
  }

  function updateUsersArray(array, userData) {
    let clonedArray = [...array];
    const index = userIndex(clonedArray, userData.id);
    clonedArray[index] = userData;

    return clonedArray;
  }

  function updateJsonBin(data) {
    let req = new XMLHttpRequest();

    req.open(
      "PUT",
      "https://api.jsonbin.io/v3/b/62b1ae0d449a1f3821137006",
      true
    );
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader(
      "X-Master-Key",
      "$2b$10$IZPT0hQ6WGS3T/lqOrfd.OUV.tJz33ey9X3mD2RkHJHpASm.EYrjq"
    );
    req.send(JSON.stringify(data));
  }

  function handleUserDelete(users, currentUserId) {
    let usersArray = [...users];
    const index = userIndex(usersArray, currentUserId);
    usersArray.splice(index, 1);

    setUsers(usersArray);
    updateJsonBin(usersArray);

    navigation.navigate("Staff Directory", {
      users,
    });
  }

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <Formik
            initialValues={{
              name: "",
              phone: "",
              department: "",
              street: "",
              city: "",
              state: "",
              zipcode: "",
              country: "",
            }}
            onSubmit={(values) => handleUpdateUserData(values)}>
            {({ handleChange, handleSubmit }) => (
              <View>
                <View style={styles.container}>
                  <Feather name={"user"} size={24} style={styles.icon} />
                  <TextInput
                    style={styles.textInput}
                    placeholder={user.name}
                    onChangeText={handleChange("name")}
                  />
                </View>
                <View style={styles.container}>
                  <Feather name={"phone"} size={24} style={styles.icon} />
                  <TextInput
                    style={styles.textInput}
                    placeholder={user.phone}
                    onChangeText={handleChange("phone")}
                  />
                </View>
                <View style={styles.container}>
                  <Feather name={"users"} size={24} style={styles.icon} />
                  <TextInput
                    style={styles.textInput}
                    placeholder={user.department}
                    onChangeText={handleChange("department")}
                  />
                </View>
                <View style={styles.container}>
                  <Feather name={"home"} size={24} style={styles.icon} />
                  <TextInput
                    style={styles.textInput}
                    placeholder={user.address.street}
                    onChangeText={handleChange("street")}
                  />
                </View>
                <View style={styles.container}>
                  <TextInput
                    style={styles.textInput}
                    placeholder={user.address.city}
                    onChangeText={handleChange("city")}
                  />
                </View>
                <View style={styles.container}>
                  <TextInput
                    style={styles.textInput}
                    placeholder={user.address.zipcode}
                    onChangeText={handleChange("zipcode")}
                  />
                </View>
                <View style={styles.container}>
                  <TextInput
                    style={styles.textInput}
                    placeholder={user.address.state}
                    onChangeText={handleChange("state")}
                  />
                </View>
                <View style={styles.container}>
                  <TextInput
                    style={styles.textInput}
                    placeholder={user.address.country}
                    onChangeText={handleChange("country")}
                  />
                </View>
                <View style={styles.submitButtonContainer}>
                <Button title="Submit" color={'white'} onPress={handleSubmit} />
                </View>
              </View>
            )}
          </Formik>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gainsboro",
    borderRadius: 25,
    flexDirection: "row",
    marginTop: 5,
    width: "100%",
    padding: 18,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    width: "100%",
    fontSize: 18,
  },
  deleteButton: {
    marginRight: 30,
  },
  submitButtonContainer:{
    marginTop: 5,
    padding: 10,
    backgroundColor: 'dodgerblue',
    borderRadius: 25,
  }
});

export default UpdateUserScreen;
