import React,{Component} from 'react';
import {
  ListView,
  View,
} from 'react-native';

import { SideMenu, List, ListItem  } from 'react-native-elements'
import Title from '../../utils/title';
import Home from '../Home'
const titleParam = {
    leftFlag: '1',
    leftIcon:{
        iconType:'entypo',
        iconName:'chevron-thin-left'
    },
    center: '',
    rightFlag: '',
};

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
]
export default class SideMenuShow extends Component{
    constructor(props){
        super(props);
        this.state = { toggled: false }
    }

toggleSideMenu () {
  this.setState({
    toggled: !this.state.toggled
  })
}

render () {
  // SideMenu takes a React Native element as a prop for the actual Side Menu
  const MenuComponent = (
    <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
      <List containerStyle={{marginBottom: 20}}>
      {
        list.map((item, i) => (
          <ListItem
            roundAvatar
            onPress={() => console.log('something')}
            avatar={{uri:item.avatar_url}}
            key={i}
            title={item.name}
            subtitle={item.subtitle} />
        ))
      }
      </List>
    </View>
  )
  return (
    <SideMenu
      MenuComponent={MenuComponent}
      toggled={this.state.toggled}>
      
    </SideMenu>
  )
}
    

}