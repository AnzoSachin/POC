import React, { useState } from "react";
import { View, Platform, PermissionsAndroid,ToastAndroid, Text, TouchableOpacity, TextInput, StyleSheet,SafeAreaView } from 'react-native'
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import QRCode from "react-native-qrcode-svg";
import RNFS from "react-native-fs"

import { CameraRoll } from "@react-native-camera-roll/camera-roll";


const FechItem = () => {
    const [itemDescription, setInput] = useState('');
    const [manufacturing, setManufacturing] = useState('');
    const [qrValue, setQRValue] = useState('')
    const [productQRref, setProductQRref] = useState();
    
    const saveQrToDisk = async() => {
        
         }
        
       


    return (
      <SafeAreaView>
         <Text style={styles.header}></Text>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            setInput(text)
          }}
          placeholder="Enter Item"
        //  value={text}
        />
          <TextInput
          style={styles.input}
          onChangeText={text => {
            setInput(text)
          }}
          placeholder="Quantity"
        //  value={text}
        />
          <TextInput
          style={styles.input}
          onChangeText={text => {
            setInput(text)
          }}
          placeholder="Bin"
        //  value={text}
        />
       
        
        <TouchableOpacity  onPress={() => { saveQrToDisk() }}>
        <Button>Fetch</Button>
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
      backgroundColor:'blue'
    },
    header: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
      }
    
  });
  
  export default FechItem;