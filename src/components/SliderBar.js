import React, {Component} from 'react';
import {View,Text,Image,StyleSheet,Dimensions,ListView,StatusBar,Platform} from 'react-native';
import Touch from '../utils/Touch';






export default class SliderBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style= {style.container}><Text >这是SliderBar</Text></View>
    );
  }

}

const style= StyleSheet.create({
    container :{
        flexDirection:'row',flex:1,justifyContent:'center'
    }

})