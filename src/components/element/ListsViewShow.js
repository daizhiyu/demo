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

ListView初始化渲染太慢以及列表过长时滚动性能太差
   因为iOS配备了UITableView，通过重用底层的UIViews实现了非常高性能的体验（相比之下ListView的性能没有那么好）。
   用React Native实现相同效果的工作仍正在进行中，但是在此之前，我们有一些可用的方法来稍加改进性能以满足我们的需求。

initialListSize

   这个属性定义了在首次渲染中绘制的行数。如果我们关注于快速的显示出页面，可以设置initialListSize为1，
   然后我们会发现其他行在接下来的帧中被快速绘制到屏幕上。而每帧所显示的行数由pageSize所决定。

pageSize

   在初始渲染也就是initialListSize被使用之后，ListView将利用pageSize来决定每一帧所渲染的行数。
   默认值为1 —— 但是如果你的页面很小，而且渲染的开销不大的话，你会希望这个值更大一些。稍加调整，你会发现它所起到的作用。

scrollRenderAheadDistance

   “在将要进入屏幕区域之前的某个位置，开始绘制一行，距离按像素计算。”
    如果我们有一个2000个元素的列表，并且立刻全部渲染出来的话，无论是内存还是计算资源都会显得很匮乏。
    还很可能导致非常可怕的阻塞。因此scrollRenderAheadDistance允许我们来指定一个超过视野范围之外所需要渲染的行数。

removeClippedSubviews

    “当这一选项设置为true的时候，超出屏幕的子视图（同时overflow值为hidden）会从它们原生的父视图中移除。 
    这个属性可以在列表很长的时候提高滚动的性能。默认为false。（0.14版本后默认为true）”
    这是一个应用在长列表上极其重要的优化。Android上，overflow值总是hidden的，所以你不必担心没有设置它。
    而在iOS上，你需要确保在行容器上设置了overflow: hidden。
    
 
    如果你正在使用一个ListView，你必须提供一个rowHasChanged函数，它通过快速的算出某一行是否需要重绘，
    来减少很多不必要的工作。如果你使用了不可变的数据结构，这项工作就只需检查其引用是否相等。
    同样的，你可以实现shouldComponentUpdate函数来指明在什么样的确切条件下，你希望这个组件得到重绘。
    如果你编写的是纯粹的组件（返回值完全由props和state所决定），你可以利用PureRenderMixin来为你做这个工作。
    再强调一次，不可变的数据结构在提速方面非常有用 —— 当你不得不对一个长列表对象做一个深度的比较，它会使重绘你的整个组件更加快速，
    而且代码量更少。
 */ 
