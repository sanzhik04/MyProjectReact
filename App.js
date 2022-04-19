import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView,Button,Alert, Image, View, FlatList, TouchableHighlight} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { ScrollView } from 'react-native-web';







export default function App() {


  const [ListOfItems,setListOfItems] = useState([
    {text:'Купить молоко', key: '1'},
    {text:'Купить овсянку', key: '2'},
    {text:'Отдать деньги', key: '3'},
    {text:'Забрать часы', key: '4'},
  ]);

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        {text: text, key: Math.random().toString(36).substring(7)},
        ...list
      ]
    })
  }

  const deleteHandler = (key) =>{
    setListOfItems((list) => {
      return list.filter(ListOfItems => ListOfItems.key != key)
    })
  }

  
  return (
    <View>
      <Header/>
      <Form addHandler={addHandler}/>
      <View style={styles.line}>

      </View>
      <View>
        <FlatList data ={ListOfItems} renderItem={({item}) => (
          <ListItem el={item} deleteHandler={deleteHandler}/>
        )}/>
      </View>
      
        
    </View>
  );
  
  

  
}





const styles = StyleSheet.create({
  line:{
    marginTop:20,
    width:1000,
    height:10,
    backgroundColor: 'red'
  }
  
  
  
});
