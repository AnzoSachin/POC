import React from "react";
import { Text ,View, StyleSheet } from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';

const QRGenration = (props) => {
	
	return(
		<View>
		<Card onPress={() => props.navigation?.navigate('itemqr')} style={Styles.container}  >
		<Card.Content>
			<Title> Generate Item QR Code</Title>
		</Card.Content>
		
	     <Card.Content>
		<Paragraph></Paragraph>
		</Card.Content>
		<Card.Actions>
		<Button ></Button>
		</Card.Actions>
	</Card>
    <Card onPress={() => props.navigation?.navigate('binqr')}  style={Styles.container}>
		<Card.Content>
			<Title>Generate Bin QR Code</Title>
		</Card.Content>
		
	     <Card.Content>
		<Paragraph></Paragraph>
		</Card.Content>
		<Card.Actions>
		<Button></Button>
		</Card.Actions>
	</Card>
	
	
	
    </View>
	)
}
export default QRGenration;

const Styles = StyleSheet.create({
	container :{
	    // display:"flex",
		alignContent:'center',
		
		margin:27,
        backgroundColor:"#D6EAF8"
	},

})
