import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card, Button, Title, Paragraph} from 'react-native-paper';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BinQR from './binQR';
import ItemQR from './itemQR';

const Tab = createMaterialTopTabNavigator();

const QRGenration = props => {
  return (
    <Tab.Navigator>
      <Tab.Screen style={Styles.btn} component={BinQR} name="BIN" />
      <Tab.Screen component={ItemQR} name="ITEM" />
    </Tab.Navigator>
  );
};
export default QRGenration;

const Styles = StyleSheet.create({
  container: {
    // display:"flex",
    alignContent: 'center',

    margin: 27,
    backgroundColor: '#D6EAF8',
  },
  btn: {
    borderRadius: 30,
  },
});
