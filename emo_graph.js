import React, { Component } from 'react';
import {
	View,
	Image,
	StyleSheet,
	Text
} from 'react-native';


export default class Graph extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.container}>
					<Image source={require('./demo-graph.png')} />
				</View>
				<View>
					<Text style={styles.welcome}>
						Being happy never goes out of style.
					</Text>
					<Text> - Lily Pulitzer</Text>
				</View>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	dimensions: {
		width: 10,
		height: 8
	}
});
