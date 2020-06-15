import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ToDoItem = ( { item, deleteItem } ) => {
    const handlePress = () => {
        deleteItem(item.key)
    }
    
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={18} color='#333'/>
                <Text style={StyleSheet.textItem}> {item.text} </Text>
            </View>            
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
        borderRadius: 10,
        flexDirection: 'row',
    },

    textItem: {
        marginLeft: 10
    }
})
 
export default ToDoItem;