import React from "react";
import { Text ,View, StyleSheet } from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';

const SelectScan = (props) => {
	
	
    return(
		<View>
		<Card onPress={() => props.navigation?.navigate('scanbin')} style={Styles.container}  >
		<Card.Content>
			<Title>BIN</Title>
		</Card.Content>
		
	     <Card.Content>
		<Paragraph>Select Bin For Scan</Paragraph>
		</Card.Content>
		<Card.Actions>
		<Button ></Button>
		</Card.Actions>
	</Card>
    <Card onPress={() => props.navigation?.navigate('scanitem')}  style={Styles.container}>
		<Card.Content>
			<Title>ITEM</Title>
		</Card.Content>
		
	     <Card.Content>
		<Paragraph>Select Item For Scan</Paragraph>
		</Card.Content>
		<Card.Actions>
		<Button></Button>
		</Card.Actions>
	</Card>
	
	
	
    </View>
	)
}
export default SelectScan;

const Styles = StyleSheet.create({
	container :{
	    // display:"flex",
		alignContent:'center',
		
		margin:27,
        backgroundColor:"#D6EAF8"
	},

})
