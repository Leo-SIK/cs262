import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [newAge, setAge] = useState('0');
  const [birthdays, setBirthdays] = useState([]);
  const [count, setCount] = useState(0);
  
  const clickHandler = () => {
    setCount(count + 1);
    setAge(count);
    setBirthdays(
      birthdays.concat({key: count.toString()})
  );
  }


  return (
    <View style={styles.container}>
      <Text>Enter name: </Text>
      <TextInput 
      style={styles.input}
      placeholder='e.g. Esther Cha'
      onChangeText={(val) => setName(val)} />
      <Text>{name} is {newAge} years old. </Text>
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}>
        <Button title='Birthday' onPress={clickHandler} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={birthdays}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.key}</Text>
          )} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
