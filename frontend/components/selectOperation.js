import React from "react";
import { Text ,View, StyleSheet } from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';

const Operation = (props) => {
	
	return(
		<View>
		<Card onPress={() => props.navigation?.navigate('storage')} style={Styles.container}  >
		<Card.Content>
			<Title>SAVE</Title>
		</Card.Content>
		
	     <Card.Content>
		<Paragraph></Paragraph>
		</Card.Content>
		<Card.Actions>
		<Button ></Button>
		</Card.Actions>
	</Card>
    <Card onPress={() => props.navigation?.navigate('retrive')} style={Styles.container}>
		<Card.Content>
			<Title>FETCH</Title>
		</Card.Content>
		
	     <Card.Content>
		<Paragraph></Paragraph>
		</Card.Content>
		<Card.Actions>
		<Button></Button>
		</Card.Actions>
	</Card>
	<Card onPress={() => props.navigation?.navigate('qr')}  style={Styles.container}>
		<Card.Content>
			<Title>QR</Title>
		</Card.Content>
		
	     <Card.Content>
		<Paragraph></Paragraph>
		</Card.Content>
		<Card.Actions>
		<Button></Button>
		</Card.Actions>
	</Card>
	
	{/* <Card style={Styles.container}>
		<Card.Content>
			<Title>Search</Title>
		</Card.Content>
		
	     <Card.Content>
		<Paragraph></Paragraph>
		</Card.Content>
		<Card.Actions>
		<Button></Button>
		</Card.Actions>
	</Card> */}
    </View>
	)
}
export default Operation;

const Styles = StyleSheet.create({
	container :{
	    // display:"flex",
		alignContent:'center',
		
		margin:27,
        backgroundColor:"#D6EAF8"
	},
	scan :{
		width:100,
		height:40,
		paddingTop:0,
		//padding:-1,
		marginTop:610,
		//alignContent:'center',
		//margin:27,
        backgroundColor:"#D6EAF8"
	}
})
