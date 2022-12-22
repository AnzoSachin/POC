import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card, Button, Title, Paragraph} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Storage from './storage';
import Retrive from './retrive';
import SelectScan from './selectScan';
import QRGenration from './generateqr';

const Tab = createBottomTabNavigator();

const Operation = props => {
  return (
    //   <View>
    //     <Card
    //       onPress={() => props.navigation?.navigate('storage')}
    //       style={Styles.container}>
    //       <Card.Content>
    //         <Title>SAVE</Title>
    //       </Card.Content>

    //       <Card.Content>
    //         <Paragraph>Save Data To Store</Paragraph>
    //       </Card.Content>
    //       <Card.Actions>
    //         <Button></Button>
    //       </Card.Actions>
    //     </Card>
    //     <Card
    //       onPress={() => props.navigation?.navigate('retrive')}
    //       style={Styles.container}>
    //       <Card.Content>
    //         <Title>FETCH</Title>
    //       </Card.Content>

    //       <Card.Content>
    //         <Paragraph>Fetch Data From Store</Paragraph>
    //       </Card.Content>
    //       <Card.Actions>
    //         <Button></Button>
    //       </Card.Actions>
    //     </Card>
    //     <Card
    //       onPress={() => props.navigation?.navigate('qr')}
    //       style={Styles.container}>
    //       <Card.Content>
    //         <Title>QR</Title>
    //       </Card.Content>

    //       <Card.Content>
    //         <Paragraph>Generate QR For Item OR Bin</Paragraph>
    //       </Card.Content>
    //       <Card.Actions>
    //         <Button></Button>
    //       </Card.Actions>
    //     </Card>
    //     <Card
    //       onPress={() => props.navigation?.navigate('selectscan')}
    //       style={Styles.container}>
    //       <Card.Content>
    //         <Title>SCAN</Title>
    //       </Card.Content>

    //       <Card.Content>
    //         <Paragraph>Scan Any Item OR Bin</Paragraph>
    //       </Card.Content>
    //       <Card.Actions>
    //         <Button></Button>
    //       </Card.Actions>
    //     </Card>

    //     {/* <Card style={Styles.container}>
    //   	<Card.Content>
    //   		<Title>Search</Title>
    //   	</Card.Content>

    //        <Card.Content>
    //   	<Paragraph></Paragraph>
    //   	</Card.Content>
    //   	<Card.Actions>
    //   	<Button></Button>
    //   	</Card.Actions>
    //   </Card> */}
    //   </View>
    // );
    <Tab.Navigator>
      <Tab.Screen
        name="Storage"
        component={Storage}
        options={{
          tabBarLabel: 'Storage',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="archive" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={SelectScan}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="scan-helper"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Retrieve"
        component={Retrive}
        options={{
          tabBarLabel: 'Retrieve',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="cloud-search"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Generate QR"
        component={QRGenration}
        options={{
          tabBarLabel: 'Generate QR',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Operation;

const Styles = StyleSheet.create({
  container: {
    // display:"flex",
    alignContent: 'center',

    margin: 27,
    backgroundColor: '#D6EAF8',
  },
  scan: {
    width: 100,
    height: 40,
    paddingTop: 0,
    //padding:-1,
    marginTop: 610,
    //alignContent:'center',
    //margin:27,
    backgroundColor: '#D6EAF8',
  },
});
