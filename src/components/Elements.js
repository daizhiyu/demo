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
    ScrollView,
} from 'react-native';
import Title from '../utils/title';
import ButtonShow from './element/ButtonShow';
import SocialIconShow from './element/SocialIconShow';
import IconShow from './element/IconShow';
import ListsViewShow from './element/ListsViewShow';
import SideMenuShow from './element/SideMenuShow';
import SearchBarShow from './element/SearchBarShow';
import CrossPlatformTabBarShow from './element/CrossPlatformTabBarShow';
import CheckboxeShow from './element/CheckboxeShow';
import ButtonGroupShow from './element/ButtonGroupShow';
import FormShow from './element/FormShow';
import CardShow from './element/CardShow';
import PricingComponentShow from './element/PricingComponentShow';
import SwipeListViewShow from './element/SwipeListViewShow';
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
    subtitle: 'Element CrossPlatformTabBarShow',
    comp:SearchBarShow
  },
  {
    name:'跨平台Tab Bar',
    subtitle: 'Element Tab Bar',
    comp:CrossPlatformTabBarShow
  },
  {
    name:'ButtonGroup',
    subtitle: 'Element ButtonGroup',
    comp:ButtonGroupShow
  },
  {
      name:'Checkboxes',
       subtitle: 'Element Checkboxes',
       comp:CheckboxeShow
  },
  {
      name:'Forms',
      subtitle: 'Element Forms',
      comp:FormShow
  },
  {
      name:'Card',
      subtitle: 'Element Card',
       comp:CardShow
  },
  {
      name:'付款单',
      comp:PricingComponentShow
  },
  {
      name:'SwipeList',
      comp:SwipeListViewShow
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
          <ScrollView>
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

          </ScrollView>
    )
    }
}

