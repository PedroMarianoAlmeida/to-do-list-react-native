import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

import Header from './Components/Header'
import ToDoItem from './Components/ToDoItem'
import AddTodo from './Components/AddTodo';

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

  let currentKey = 4;
  const addItem = (text) => {
    const prevTodos = [...todos];
    setTodos([ { text: text, key: currentKey.toString() }, ...prevTodos ]);
    currentKey++;
  }
  
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo addItem={ addItem }/>
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
