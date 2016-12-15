import React, { Component } from 'react'
import { Navigator } from 'react-native'
import HomeComp from '../components/Home'
import navigationBar from 'HSNavBar'

const initialRoute = {component: HomeComp, name: 'home'}

export default class Home extends Component {
  constructor () {
    super()
    this.renderScene = this.renderScene.bind(this)
  }
  renderScene (route, navigator) {
    route.title="首页";
    route.iconName="menu";
    const { toggleSideMenu } = this.props
    return (
      <route.component toggleSideMenu={toggleSideMenu} navigator={navigator} {...route.passProps} />
    )
  }
  render () {
    const { toggleSideMenu } = this.props
    return (
      <Navigator
        navigationBar={navigationBar(toggleSideMenu)}
        initialRoute={initialRoute}
        renderScene={this.renderScene.bind(this)} />
    )
  }
}


