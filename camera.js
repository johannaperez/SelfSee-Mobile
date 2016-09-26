import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Camera from 'react-native-camera';
import Graph from './emo_graph.js';

export default class Takepic extends Component {
  constructor() {
    super();
    this.state = {
      graphed: false
    }
  }

  getEmotions() {
    let apiReqUrl = 'https://api.projectoxford.ai/emotion/v1.0/recognize';
    return fetch(apiReqUrl, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '94d515677e3a410c9ce8792baeb53c6c'
      },
      // body: JSON.stringify(data) + add data as parameter to getEmotions
      body: JSON.stringify({ url: 'http://i.dailymail.co.uk/i/pix/2015/01/05/246F155500000578-2898060-image-a-1_1420501245853.jpg' })
    })
    .then((res) => res.json())
    .then((resJson) => {
      console.log('RESPONSE', resJson)
      this.sestState({ graphed: true });
      return resJson;
    })
    .catch((error) => {
      console.error(error);
    })
  }

  render() {
    if (this.state.graphed === false) {
      return (
        <View style={styles.container}>
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}
            type={Camera.constants.Type.front}
            keepAwake={true}>
            <Text style={styles.capture} onPress={this.takePicture.bind(this)}>SelfSee</Text>
          </Camera>
        </View>
      );
    }
    else {
      return (
        <View>
        <Graph />
      </View>
      )
    }

  }

  takePicture() {
    this.camera.capture()
    .then((data) => {
      // console.log(typeof data)  // object
      console.log(data)         // data.path gets internal photo path
      // console.log('OBJ?????', init?(data: data.path, scale: 1));
      // this.getEmotions(data.path) for binary image (too large!)
      this.getEmotions()
    })
    .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
