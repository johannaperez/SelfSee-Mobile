const MK = require('react-native-material-kit');
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight
} from 'react-native';
import Takepic from './camera';

const {
  MKButton,
  MKColor,
} = MK;
const Fab = MKButton.coloredFab()
  .withBackgroundColor(MKColor.Yellow)
  .build();

export default class SelfSee extends Component {
  constructor(){
    super();
    this.state= {
      selected: ''
    }
  }

  render() {
    if(this.state.selected === ''){
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            How are you feeling today?
          </Text>
          <View>
            <View style={styles.row}>
            <Fab style={styles.Buttonstyle} onPress={() => {this.setState({selected: 'Happy'})}}>
                  <Image pointerEvents="none" source={require('./happy.png')} />
            </Fab>
            <Fab style={styles.Buttonstyle} onPress={() => {this.setState({selected: 'Sad'})}}>
                  <Image pointerEvents="none" source={require('./sad.png')} />
            </Fab>
            </View>
            <View style={styles.row}>
            <Fab style={styles.Buttonstyle} onPress={() => {this.setState({selected: 'Surprised!'})}}>
                  <Image pointerEvents="none" source={require('./surprise.png')} />
            </Fab>
            <Fab style={styles.Buttonstyle} onPress={() => {this.setState({selected: 'Angry'})}}>
                  <Image pointerEvents="none" source={require('./images/angry.png')} />
            </Fab>
            </View>
            <View style={styles.row}>
            <Fab style={styles.Buttonstyle} onPress={() => {this.setState({selected: 'Disgusted'})}}>
                  <Image pointerEvents="none" source={require('./disgusting.png')} />
            </Fab>
            <Fab style={styles.Buttonstyle} onPress={() => {this.setState({selected: 'Scared!'})}}>
                  <Image pointerEvents="none" source={require('./images/fear.png')} />
            </Fab>
            </View>
              <Text style={styles.welcome}>
                  {this.state.selected}
              </Text>
          </View>
            
        </View>
      );
    }
    return (
      <View>
        <Takepic />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  Buttonstyle:{
     justifyContent: 'space-between',
  },
  Buttontext:{
    textAlign: 'center',
    color: '#000000',
    fontSize: 10,
  }
});

AppRegistry.registerComponent('SelfSee', () => SelfSee);