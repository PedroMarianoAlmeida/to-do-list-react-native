import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button} from 'react-native';

const AddTodo = ({ addItem }) => {
    
    const [text, setText] = useState(""); 

    const changeHandler = (val) => {
        setText(val);
    }

    //When I put this on "onPress" in the Button doesn't works, I don't know why (because is equal to "changeHandler")
    const pressHandler = (text) => {
        addItem(text);
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
                onPress={ () => addItem(text) }
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