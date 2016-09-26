import React, { Component } from 'react';
import {
	View,
	Image
} from 'react-native';


export default class Graph extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={require('./demo-graph.png')} />
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
