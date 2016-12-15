/**
 * @providesModule HSNavTitleComponent
 */

import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'

const NavTitleComponent = (props) => (
  <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
    <Text style={{color:'#fff',fontSize:17}}>{props.title}</Text>
  </View>
)

export default NavTitleComponent
