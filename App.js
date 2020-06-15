import React, {useState} from 'react';
import { StyleSheet, View, FlatList, TouchableWithoutFeedback, Keyboard} from 'react-native';

import Header from './Components/Header'
import ToDoItem from './Components/ToDoItem'
import AddTodo from './Components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text:"Buy coffee", key:"1"},
    {text:"Create an app", key:"2"},
    {text:"Make money", key:"3"} 
  ]);

  const [currentKey, setCurrentKey] = useState(4);

  const deleteItem = (key) => {
    const newList = todos.filter( (item) => item.key !== key);
    setTodos(newList);
  }

  const addItem = (text) => {
    const prevTodos = [...todos];
    const myKey = currentKey;
    setTodos([ { text: text, key: myKey.toString() }, ...prevTodos ]);
    setCurrentKey(myKey + 1);
  }
  
  return (
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    margin: 20,
    flex: 1
  },

  list: {
    padding: 40,
    flex: 1
  }
});
