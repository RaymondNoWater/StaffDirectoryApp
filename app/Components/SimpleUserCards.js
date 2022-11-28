import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Feather } from "@expo/vector-icons";

function SimpleUserCards({ name, phoneNum, onPress }) {
  return (
    <TouchableHighlight underlayColor={"white"} onPress={onPress}>
      <View style={styles.cardContainer}>
        <Feather name="user" size={80} style={styles.userIcon} />

        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subText}>Phone: {phoneNum}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "dodgerblue",
    flexDirection: "row",
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
  },
  userIcon: {
    color: "black",
    padding: 10,
    flex: 1,
  },
  textContainer: {
    flex: 3,
    marginTop: 10,
  },

  name: {
    fontSize: 28,
    marginBottom: 10,
  },
});

export default SimpleUserCards;
