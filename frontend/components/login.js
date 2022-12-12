import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import axios from 'axios'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Operation from './selectOperation'

const Stack = createNativeStackNavigator();
class Login extends Component {
    constructor(props) {
        super(props);
       
      }
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }

  
   login = (email, pass,) => {
   
      console.warn("email=",email)

      axios.post('http://192.168.31.207:5000/userlogin', 
      {
         Email: email,
         Password: pass
       })
     this.props.navigation.navigate('SelectOperation')
    //    .then(function (response) {
       
    //    })
      
 
   

 
    
         
   }
   render() {
      return (
       
      
   
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
            
         </View>
       
        
      )
   }
}
export default Login

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      borderRadius:20,
      margin: 15,
      height: 40,
      borderColor: 'grey',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: 'blue', 
      padding: 10,
      margin: 15,
     // marginTop:250,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})