import React,{Component} from 'react';
import { List, ListItem } from 'react-native-elements'
import {
  View ,
    Text,
    Navigator,
    StyleSheet,
    TouchableOpacity,
    ListView,
    InteractionManager,
} from 'react-native';
import Title from '../utils/title';
import ButtonShow from './element/ButtonShow';
import SocialIconShow from './element/SocialIconShow';
import IconShow from './element/IconShow';
import ListsViewShow from './element/ListsViewShow';
import SideMenuShow from './element/SideMenuShow';
import SearchBarShow from './element/SearchBarShow';
const titleParam = {
   leftFlag: '',
    center: '饿了么组件',
    rightFlag: '',
};

const list = [
  {
    name: '按钮组件',
    subtitle: 'Element Button',
    comp: ButtonShow,
   
  },
  {
    name:'社交图标',
    subtitle: 'Element SocialIconShow',
    comp:SocialIconShow
  },
    {
    name:'图标',
    subtitle: 'Element Icon',
    comp:IconShow
  },
  {
    name: '列表组件',
    subtitle: 'Element Lists',
     comp:ListsViewShow
  }
   ,{
    name: '抽屉布局',
    subtitle: 'Element SideMenu',
    comp:SideMenuShow
  }
  ,{
    name: '搜索按钮',
    subtitle: 'Element SearchBarShow',
    comp:SearchBarShow
  },
  {
      name:'Cross Platform Tab Bar',
      subtitle: 'Element Tab Bar'
  },{
      name:'Checkboxes',
       subtitle: 'Element Checkboxes'
  },
  {
      name:'Forms',
      subtitle: 'Element Forms'
  },
  {
      name:'Card',
      subtitle: 'Element Card'
  },
  {
      name:'Pricing Component'

  }

]

 let self;

export default  class Elements extends Component{
   constructor(props){ 
       super(props);
        self=this;
       
   }

_onPressButton(i){
      const {navigator} =self.props;
   InteractionManager.runAfterInteractions(()=>{
      navigator.push({
          component:list[i].comp,
          params:{
            name:list[i].name
          }
      })
   })
}

    render(){
    
        return (
          <View>
           <Title {...titleParam} />
          <List >
  {
    list.map((l, i) => (
       
      <ListItem
        roundAvatar      
        key={i}
        title={l.name}
        onPress={()=>self._onPressButton(i)} 
      />
    ))
  }
</List>

          </View>
    )
    }
}

