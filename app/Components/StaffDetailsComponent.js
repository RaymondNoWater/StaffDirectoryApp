import React from "react";
import { View, Text, StyleSheet } from "react-native";

function StaffDetailsComponent({ heading, userDetail }) {
  return (
    <View style={styles.container}>
      <View style={styles.TextContainer}>
        <Text style={styles.headingText}>{`${heading}:`}</Text>
        <Text style={styles.userDetailText}>{userDetail}</Text>
      </View>
    </View>
  );
}

export default StaffDetailsComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    borderRadius: 25,
    backgroundColor: "gainsboro",
  },
  headingText: {
    fontSize: 20,
    width: '45%',
    padding: 8,
  },
  userDetailText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 8,
  },
  TextContainer: {
    width: "100%",
    flexDirection: "row",
  },
});
