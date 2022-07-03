import {View,Text,Button} from 'react-native';
import { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }){
  const [isLoading, setLoading] = useState(false);
  const [users, setUser] = useState([]);

  function getUsers(){
    fetch("https://api.jsonbin.io/v3/b/62b1ae0d449a1f3821137006/latest",
    { method : "GET", headers:{ "X-Master-Key" : "$2b$10$IZPT0hQ6WGS3T/lqOrfd.OUV.tJz33ey9X3mD2RkHJHpASm.EYrjq", "X-Bin-Meta" : false	},})
    .then(res => res.json())
    .then(data => setUser(data))
    .finally(() => setLoading(false));
  }

  useEffect(() => {
    setLoading(true);
    getUsers();
  },[])

  
  
  return(
    <View>
      {isLoading ? <Text>Page is loading</Text> :
      (
        <Text>{users[0].name}</Text>
      )}
    </View>
  )
};
export default HomeScreen;