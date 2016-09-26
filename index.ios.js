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
import Camera from 'react-native-camera';
import { Takepic } from './ios/components/camera';
import { Emotions } from './ios/components/buttons'

class SelfSee extends Component {
  render() {
    return (
      <Emotions />
      )
  }
}

AppRegistry.registerComponent('SelfSee', () => SelfSee);