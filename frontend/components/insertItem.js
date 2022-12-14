import React, { useState } from "react";
import { View, Platform, PermissionsAndroid,ToastAndroid, Text, TouchableOpacity, TextInput, StyleSheet,SafeAreaView } from 'react-native'
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import QRCode from "react-native-qrcode-svg";
import RNFS from "react-native-fs"

import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import { useRoute } from "@react-navigation/native";
import saveApi from '../API/saveApi'


const InsertItem = () => {
   const  [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [bin, setBin] = useState('')
    
    const route = useRoute();
    const iteminfo = route.params.data
   
      
    const saveItemToStore = () => {
         saveApi.saveItemToStore({item,quantity,bin})
         .then((res) =>{
          console.log(res)
         })
         }
        
       


    return (
      <SafeAreaView>
         <Text style={styles.header}></Text>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            setItem(text)
          }}
          placeholder="Enter Item"
         // value={iteminfo}
        />
          <TextInput
          style={styles.input}
          onChangeText={text => {
            setQuantity(text)
          }}
          placeholder="Quantity"
          //value={iteminfo}
        />
          <TextInput
          style={styles.input}
          onChangeText={text => {
            setBin(text)
          }}
          placeholder="Bin"
        //  value={text}
        />
       
        
        <TouchableOpacity  onPress={() => { saveItemToStore() }}>
        <Button>Save</Button>
        </TouchableOpacity>

      
        
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor:'white'
    },
    header: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
      }
    
  });
  
  export default InsertItem;