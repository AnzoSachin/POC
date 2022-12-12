import React, { useState } from "react";
import { View, Platform, PermissionsAndroid,ToastAndroid, Text, TouchableOpacity, TextInput, StyleSheet,SafeAreaView } from 'react-native'
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import QRCode from "react-native-qrcode-svg";
import RNFS from "react-native-fs"

import { CameraRoll } from "@react-native-camera-roll/camera-roll";


const BinQR = () => {
    const [itemDescription, setInput] = useState('');
    const [manufacturing, setManufacturing] = useState('');
    const [qrValue, setQRValue] = useState('')
    const [productQRref, setProductQRref] = useState();
    const iteminfo = {
        name: itemDescription,
    expiryDate: '2023-12-31',
    manufacturer: manufacturing
    }
    const saveQrToDisk = async() => {
        setQRValue(itemDescription)
        if (Platform.OS === "android" &&
         !(await hasAndroidPermission())) {
             return;
        }
        
        if(productQRref){
        
        productQRref.toDataURL((data) => {
        
        let filePath =  RNFS.CachesDirectoryPath+`/${itemDescription}.png`;
        RNFS.writeFile(filePath, data, 'base64')
          .then((success) => {
            return CameraRoll.save(filePath, 'photo')
          })
         .then(() => {
        ToastAndroid.show('QRCode saved to gallery', ToastAndroid.LONG);
                  });
           });
           }
         }
        
         const hasAndroidPermission = async() => {
        const permission=
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
        
          const hasPermission = 
        await PermissionsAndroid.check(permission);
          if (hasPermission) {
            return true;
          }
        
          const status = await PermissionsAndroid.request(permission);
          return status === 'granted';
        }
    return (
      <SafeAreaView>
         <Text style={styles.header}></Text>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            setInput(text)
          }}
          placeholder="Select Bin Number"
        //  value={text}
        />
         <TextInput
          style={styles.input}
          onChangeText={text => {
            setInput(text)
          }}
          placeholder="Number of item in Bin"
        //  value={text}
        />
       
        
        <TouchableOpacity  onPress={() => { saveQrToDisk() }}>
        <Button>Generate QR</Button>
        </TouchableOpacity>

        <QRCode
        value={qrValue ? qrValue : "NA" }
        size={200}
        color="black"
        backgroundColor="white"
        getRef={(c) => setProductQRref(c)}

        />
        
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
  
  export default BinQR;