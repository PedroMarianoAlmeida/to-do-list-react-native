import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './Components/Header'
import ToDoItem from './Components/ToDoItem'

export default function App() {
  const [todos, setTodos] = useState([
    {text:"Buy coffee", key:"1"},
    {text:"Create an app", key:"2"},
    {text:"Make money", key:"3"} 
  ]);

  const deleteItem = (key) => {
    const newList = todos.filter( (item) => item.key !== key);
    setTodos(newList);
  }
  
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/*Form*/}
        <View style={styles.list}>
          <FlatList
            data={todos}
              renderItem={( { item } ) => <ToDoItem item={ item } deleteItem={ deleteItem }/> }         
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
