import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Operation from './selectOperation';

const Stack = createNativeStackNavigator();
class Login extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    email: '',
    password: '',
  };
  handleEmail = text => {
    this.setState({email: text});
  };
  handlePassword = text => {
    this.setState({password: text});
  };

  login = (email, pass) => {
    console.warn('email=', email);

    axios.post('http://192.168.31.207:5000/userlogin', {
      Email: email,
      Password: pass,
    });
    this.props.navigation.navigate('SelectOperation');
    //    .then(function (response) {

    //    })
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.imgbox}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.logo}
              resizeMode="stretch"
            />
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.subtext}>Login to your account</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handleEmail}
          />

          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={this.handlePassword}
          />

          <TouchableOpacity>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.login(this.state.email, this.state.password)}>
            <Text style={styles.submitButtonText}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    flex: 1,
    backgroundColor: '#e73b4e',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgbox: {
    width: 130,
    height: 130,
    backgroundColor: '#fff',
    borderRadius: 100
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 100,
    top: 5,
    left: 5,
  },
  title: {
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
  subtext: {
    display: 'flex',
    alignItems: 'center',
  },
  footer: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 10,
  },
  input: {
    borderRadius: 20,
    margin: 15,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
  },
  submitButton: {
    borderRadius: 25,
    backgroundColor: '#e73b4e',
    margin: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    paddingBottom: 3,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 20,
  },
});
