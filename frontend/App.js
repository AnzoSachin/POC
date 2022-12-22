import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './components/login';
import Operation from './components/selectOperation';
import Storage from './components/storage';
import Retrive from './components/retrive';
import SelectScan from './components/selectScan';
import QRGenration from './components/generateqr';
import ItemQR from './components/itemQR';
import BinQR from './components/binQR';
import InsertItem from './components/insertItem';
import FechItem from './components/fetchitem';
import BinScan from './components/scanBin';
import ItemScan from './components/scanItem';

const Stack = createNativeStackNavigator();

const MyApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectOperation"
          component={Operation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="storage"
          component={Storage}
          //options={{headerShown: false}}
        />
        <Stack.Screen
          name="retrive"
          component={Retrive}
          //options={{headerShown: false}}
        />
        <Stack.Screen
          name="qr"
          component={QRGenration}
          //options={{headerShown: false}}
        />
        <Stack.Screen
          name="itemqr"
          component={ItemQR}
          options={{title: 'Item QR Generation'}}
        />
        <Stack.Screen
          name="binqr"
          component={BinQR}
          options={{title: 'Bin QR Generation'}}
        />
        <Stack.Screen
          name="insertitem"
          component={InsertItem}
          options={{title: 'Save Item To Bin'}}
        />
        <Stack.Screen
          name="fetchitem"
          component={FechItem}
          options={{title: 'Fetch Item From Bin'}}
        />
        <Stack.Screen
          name="selectscan"
          component={SelectScan}
          options={{title: 'Select For Scan'}}
        />
        <Stack.Screen
          name="scanbin"
          component={BinScan}
          options={{title: 'Select Bin For Scan'}}
        />
        <Stack.Screen
          name="scanitem"
          component={ItemScan}
          options={{title: 'Select Item For Scan'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyApp;
