import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Button,View, TouchableHighlight,TextInput,ScrollView} from 'react-native';
import { useState } from 'react';

export default function Form({addHandler}) {

    const [text,setValue] = useState('');



    const onChange = (text) => {
        setValue(text);
    }

  return (
    <View>
        <TextInput style={styles.input} onChangeText={onChange} placeholder={'Write your task...'} placeholderTextColor={'red'}/>
        <View style={styles.box}>
            <Button color='yellow' onPress={()=> addHandler(text)} title='ADD TASK'/>
        </View>
    </View>
  );
}





const styles = StyleSheet.create({
    input:{
        fontSize:18,
        backgroundColor: 'yellow',
        color: 'red',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1, 
        borderColor: 'red',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: 85,
        width: 250,
        height: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    box:{
        backgroundColor: 'red',
        marginRight: 100,
        marginLeft: 100,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1, 
        borderColor: 'red',
    }


    

  
});
