import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView,Button,Alert, Image, View, TouchableOpacity} from 'react-native';

export default function ListItem({el, deleteHandler}) {

  return (
    <TouchableOpacity onPress={()=> deleteHandler(el.key)}>
        <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}





const styles = StyleSheet.create({
    text: {
        color:'red',
        padding: 20,
        textAlign: 'center',
        backgroundColor: 'yellow',
        borderColor: 'red',
        marginTop: 20,
        width: '60%',
        marginLeft: '20%',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1, 
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    }

    

  
});
