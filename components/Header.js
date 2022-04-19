import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView,Button,Alert, Image, View} from 'react-native';

export default function Header() {

  return (
    <View style={styles.main}>
        <Text style={styles.text}>TO DO LIST</Text>
    </View>
  );
}





const styles = StyleSheet.create({
    main:{
        paddingTop:60,
        height: 100,
        backgroundColor: 'yellow'
    },
    text:{
        fontSize: 25,
        color: 'red',
        textAlign: 'center',
        

    }

  
});
