import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './Components/Header'

export default function App() {
  const [todos, setTodos] = useState([
    {text:"Buy coffe", key:"1"},
    {text:"Create an app", key:"2"},
    {text:"Make money", key:"3"} 
  ]);
  
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/*Form*/}
        <View style={styles.list}>
          <FlatList
            data={todos}
              renderItem={( { item } ) => <Text>{item.text}</Text> }         
          />
        </View>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    margin: 20
  },

  list: {
    padding: 40
  }
});
