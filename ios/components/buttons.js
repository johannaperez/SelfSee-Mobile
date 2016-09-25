import React from 'react';
const MK = require('react-native-material-kit');
const appStyles = require('./styles');

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';

const {
  MKButton,
  MKColor,
} = MK;

import { setTheme, MKColor, Button } from 'react-native-material-kit';

// customize the material design theme
setTheme({
  primaryColor: MKColor.BlueGrey,
  primaryColorRGB: MKColor.RGBIndigo,
  accentColor: MKColor.Grey,
});

const styles = Object.assign({}, appStyles, StyleSheet.create({
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  fab: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
}));

const PlainFab = MKButton.plainFab()
  .withText('BUTTON')
  .withOnPress(() => {
    console.log("Hi, it's a colored button!");
  })
  .withStyle(styles.fab)
  .build();