import * as React from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';
import {Card, Button, Title, Paragraph} from 'react-native-paper';
import styles from './scanstyle';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BinScan from './scanBin';
import ItemScan from './scanItem';
const Tab = createMaterialTopTabNavigator();

const SelectScan = props => {
  return (
    <Tab.Navigator>
      <Tab.Screen component={BinScan} name="BIN" />
      <Tab.Screen component={ItemScan} name="ITEM" />
    </Tab.Navigator>
    /* <View style={Styles.btnbox}>
        <Button
          style={Styles.select}
          onPress={() => props.navigation?.navigate('scanbin')}>
          <Text style={Styles.text}>BIN</Text>
        </Button>
        <Button
          style={Styles.select}
          onPress={() => props.navigation?.navigate('scanitem')}>
          <Text style={Styles.text}>ITEM</Text>
        </Button>
      </View> */
  );
};
export default SelectScan;

const Styles = StyleSheet.create({
  container: {
    // display:"flex",
    alignContent: 'center',

    margin: 27,
    backgroundColor: '#D6EAF8',
  },
  nav: {
    paddingTop: 10,
    backgroundColor: '#f3f',
  },
  select: {
    width: 150,
    backgroundColor: '#e73b4e',
    borderRadius: 30,
  },
  btnbox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 30,
  },
  text: {
    color: '#fff',
  },
});
