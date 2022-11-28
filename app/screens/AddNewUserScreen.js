import React from "react";
import { View, Button, ScrollView, TextInput, StyleSheet, Text} from "react-native";

import { Formik } from "formik";
import { Feather } from "@expo/vector-icons";


function AddNewUserScreen({ navigation, route }) {
  const users = route.params;

  function handleSubmit(newUserData) {
    const newUserObj = formatUserObj(newUserData);
    const newUserArray = addNewUser(users, newUserObj);

    updateJsonBin(newUserArray);

    navigation.navigate("Staff Directory", { users: newUserArray });
  }

  function formatUserObj(userData) {
    return {
      id: userData.id,
      name: userData.name,
      phone: userData.phone,
      department: userData.department,
      address: {
        street: userData.street,
        city: userData.city,
        state: userData.state,
        zipcode: userData.zipcode,
        country: userData.country,
      },
    };
  }

  function addNewUser(array, userObj) {
    let userArray = [...array];
    userArray.push(userObj);
    return userArray;
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

  return (
    <ScrollView>
      <Formik
        initialValues={{
          id: "",
          name: "",
          phone: "",
          department: "",
          street: "",
          city: "",
          state: "",
          zipcode: "",
          country: "",
        }}
        onSubmit={(values) => handleSubmit(values)}>
        {({ handleChange, handleSubmit }) => (
          <>
            <View style={styles.container}>
              <Feather name={"key"} size={24} style={styles.icon} />
              <TextInput
                style={styles.textInput}
                placeholder={"Employee Id"}
                onChangeText={handleChange("id")}
              />
            </View>
            <View style={styles.container}>
              <Feather name={"user"} size={24} style={styles.icon} />
              <TextInput
                style={styles.textInput}
                placeholder={"Name"}
                onChangeText={handleChange("name")}
              />
            </View>
            <View style={styles.container}>
              <Feather name={"phone"} size={24} style={styles.icon} />
              <TextInput
                style={styles.textInput}
                placeholder={"Phone Number"}
                onChangeText={handleChange("phone")}
              />
            </View>
            <View style={styles.container}>
              <Feather name={"users"} size={24} style={styles.icon} />
              <TextInput
                style={styles.textInput}
                placeholder={"Department Number"}
                onChangeText={handleChange("department")}
              />
            </View>
            <View style={styles.container}>
              <Feather name={"home"} size={24} style={styles.icon} />
              <TextInput
                style={styles.textInput}
                placeholder={"Street"}
                onChangeText={handleChange("street")}
              />
            </View>
            <View style={styles.container}>
              <TextInput
                style={styles.textInput}
                placeholder={"City"}
                onChangeText={handleChange("city")}
              />
            </View>
            <View style={styles.container}>
              <TextInput
                style={styles.textInput}
                placeholder={"State"}
                onChangeText={handleChange("State")}
              />
            </View>
            <View style={styles.container}>
              <TextInput
                style={styles.textInput}
                placeholder={"Zipcode"}
                onChangeText={handleChange("zipcode")}
              />
            </View>
            <View style={styles.container}>
              <TextInput
                style={styles.textInput}
                placeholder={"Country"}
                onChangeText={handleChange("country")}
              />
            </View>
            <View style={styles.submitButtonContainer}>
              <Button
                title="Submit"
                color="white"
                onPress={handleSubmit}
                style={styles.submitButton}
              />
            </View>
          </>
        )}
      </Formik>
    </ScrollView>
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
  submitButton: {
    padding: 15,
  },

  submitButtonContainer:{
    marginTop: 5,
    padding: 10,
    backgroundColor: 'dodgerblue',
    borderRadius: 25,
  }
});

export default AddNewUserScreen;
