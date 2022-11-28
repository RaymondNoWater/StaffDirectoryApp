import React from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView } from "react-native";

import { Feather } from "@expo/vector-icons";

function FormFieldComponent({ icon, placeholder, handleChangeText}) {
  return (
      <View style={styles.container}>
        {icon && <Feather name={icon} size={24} style={styles.icon}/>}
        <TextInput onChangeText={() => handleChangeText} placeholder={placeholder} style={styles.textInput}/>
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
    padding: 18
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    width: '100%',
    fontSize: 18,

  }
});

export default FormFieldComponent;
