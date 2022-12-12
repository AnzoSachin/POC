import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './components/login'
import Operation from './components/selectOperation'
import Storage from './components/storage'
import Retrive from './components/retrive'
import QRGenration from './components/generateqr'
import ItemQR from './components/itemQR'
import BinQR from './components/binQR'
import InsertItem from './components/insertItem'
import FechItem from './components/fetchitem'




const Stack = createNativeStackNavigator();

const MyApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }}/>
         <Stack.Screen name="SelectOperation" component={Operation} options={{ title: 'Select Operation' }}/>
        <Stack.Screen name="storage" component={Storage} options={{ title: 'Storage Request' }}/>
        <Stack.Screen name="retrive" component={Retrive} options={{ title: 'Retrive Request' }}/>
        <Stack.Screen name="qr" component={QRGenration} options={{ title: 'QR Generation' }}/>
        <Stack.Screen name="itemqr" component={ItemQR} options={{ title: 'Item QR Generation' }}/>
        <Stack.Screen name="binqr" component={BinQR} options={{ title: 'Bin QR Generation' }}/>
        <Stack.Screen name="insertitem" component={InsertItem} options={{ title: 'Save Item To Bin' }}/>
        <Stack.Screen name="fetchitem" component={FechItem} options={{ title: 'Fetch Item From Bin' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyApp