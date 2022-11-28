import React, { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import SimpleUserCards from "../Components/SimpleUserCards";
import { Feather } from "@expo/vector-icons";

export default StaffDirectoryScreen = ({ navigation, route }) => {
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/62b1ae0d449a1f3821137006/latest", {
      method: "GET",
      headers: {
        "X-Master-Key":
          "$2b$10$IZPT0hQ6WGS3T/lqOrfd.OUV.tJz33ey9X3mD2RkHJHpASm.EYrjq",
        "X-Bin-Meta": false,
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  }, [navigation, route]);

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <View style={styles.buttonContainer}>
            <Feather
              name="plus"
              size={50}
              color="black"
              onPress={() => navigation.navigate("New Staff Member", users)}
            />
          </View>
          <View style={styles.screenContainer}>
            <FlatList
              data={users}
              keyExtractor={(user) => user.id.toString()}
              renderItem={({ item: user }) => (
                <SimpleUserCards
                  name={user.name}
                  phoneNum={user.phone}
                  onPress={() => {
                    navigation.navigate("Staff Details", {
                      users,
                      currentUserId: user.id,
                    });
                  }}
                />
              )}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  screenContainer: {
    height: "100%",
  },
});
