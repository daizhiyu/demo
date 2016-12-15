import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Text,
  Button
} from 'react-native-elements'

let styles = {}

const log = () => {
  console.log('hello!')
}

export default class Home extends Component {
  constructor (props) {
        super(props);
       
    }
  render () {
     const { toggleSideMenu } = this.props
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
       
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  hero: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    
  },
  titleContainer: {
  },
  button: {
    marginTop: 15
  },
  title: {
    textAlign: 'center',
  
    ...Platform.select({
      ios: {
       
      }
    })
  }
})


