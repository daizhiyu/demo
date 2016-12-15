import React, { Component } from 'react'
import { Navigator } from 'react-native'
import GankComp from '../components/Gank'
import navigationBar from 'HSNavBar'

const initialRoute = {component: GankComp, name: 'gank'}

export default class Gank extends Component {
  constructor () {
    super()
    this.renderScene = this.renderScene.bind(this)
  }
  renderScene (route, navigator) {
   
    return (
      <route.component  navigator={navigator} />
    )
  }
  render () {
   
    return (
      <Navigator  
        initialRoute={initialRoute}
        renderScene={this.renderScene.bind(this)} />
    )
  }
}


