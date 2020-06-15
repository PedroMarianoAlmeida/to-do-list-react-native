import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, Alert} from 'react-native';

const AddTodo = ({ addItem }) => {
    
    const [text, setText] = useState(""); 

    const changeHandler = (val) => {
        setText(val);
    }
    
    const addTodoError = () => {
        Alert.alert('OOPS!', 'min 3 chars', [{text: 'Understood'}])
    }

    const pressHandler = (text) => {
        text.length > 3 ? addItem(text) : addTodoError();
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="add to do..."
                onChangeText={changeHandler}
            />

            <Button 
                title='Add Todo'
                color='coral'
                onPress={ () => pressHandler(text) } //Without the arrow function doesn't work
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})
 
export default AddTodo;