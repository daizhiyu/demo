import React, { Component } from 'react'
import { View,Dimensions } from 'react-native'
import GankComp from '../components/Gank'
import navigationBar from 'HSNavBar'
import Title from '../utils/title'
const initialRoute = {component: GankComp, name: 'gank'}
const titleParam = {
      center: '干货集中营'
};
export default class Gank extends Component {
  constructor () {
    super()
   
  }
  

  render () {
 
    return (
      <View style={ {backgroundColor:'white',height:Dimensions.get('window').height}}>
      <Title {...titleParam} />
     <GankComp {...this.props}/>
     </View>
    )
  }
}


