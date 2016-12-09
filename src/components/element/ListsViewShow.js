import React,{Component} from 'react';
import {
  ScrollView ,
ListView
} from 'react-native';

import { List, ListItem } from 'react-native-elements'
import Title from '../../utils/title';
const titleParam = {
    leftFlag: '1',
    leftIcon:{
        iconType:'entypo',
        iconName:'chevron-thin-left'
    },
    center: '',
    rightFlag: '',
};
const list1 = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
];
const list2 = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  }
];

const list3 = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    subtitlechildren: 'Vice s',
  },
 
];
 var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  let self;    
export default class ListsViewShow extends Component {

  constructor (props){
      super(props);
       titleParam.center=this.props.name;
       this.state = {
           dataSource:ds.cloneWithRows(list3),
       }
      self=this;
  }



_renderRow (rowData, sectionID) {
  return (
    <ListItem
      roundAvatar
      key={sectionID}
      title={rowData.name}
      subtitle={rowData.subtitle}
      avatar={{uri:rowData.avatar_url}}
      onPress={()=>self._pressFunction(rowData)}
    />
  )
}
//列表点击事件
_pressFunction(rowData){
  alert(rowData.name)
}

  render(){
      return(
            <ScrollView >
              <Title {...titleParam} />
          <List containerStyle={{marginBottom: 20}}>
                {
                  list1.map((l, i) => (
                    <ListItem
                      roundAvatar
                      avatar={{uri:l.avatar_url}}
                      key={i}
                      title={l.name}
                    />
                  ))
                }
        </List>

        <List>
          {
            list2.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{name: item.icon}}
              />
            ))
          }
        </List>

    <List>
      <ListView
        renderRow={this._renderRow}
        dataSource={this.state.dataSource}
      />
    </List>
          </ScrollView >
      )
  }


}
/**




具体的 可以看看按钮的圆代码 node_modules/react-native-elements/src/list;
 */ 
