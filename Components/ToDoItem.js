import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

const ToDoItem = ( { item, deleteItem } ) => {
    const handlePress = () => {
        deleteItem(item.key)
    }
    
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.item}>
                {item.text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})
 
export default ToDoItem;