import React,{Component} from 'react';
import {
  ScrollView ,
  StyleSheet,
  Dimensions,
Text,
View,
} from 'react-native';
import { Tabs, Tab, Icon } from 'react-native-elements'

import Title from '../../utils/title';
import commonStyles from '../../utils/commonStyles';
const titleParam = {
    leftFlag: '1',
    leftIcon:{
        iconType:'entypo',
        iconName:'chevron-thin-left'
    },
    center: '',
    rightFlag: '',
};

 
export default class CrossPlatformTabBarShow extends Component{
      constructor (props){
          
      super(props);
       titleParam.center=this.props.name;
       this.state = ({ selectedTab:"home"});
       
  }

 changeTab (selectedTab) {
  this.setState({selectedTab:selectedTab})
}

 render(){
       const  selectedTab  = this.state.selectedTab
     return(

       
         <Tabs>
  <Tab
    tabStyle={selectedTab !== 'home' &&  [styles.tabSelectedstyle ]}
    titleStyle={[styles.titleStyle]}
    selectedTitleStyle={[styles.titleSelected]}
    selected={selectedTab === 'home'}
    title={ 'HOME'}
    renderIcon={() => <Icon name='whatshot'  size={26} />}
    renderSelectedIcon={() => <Icon name='whatshot' color={"red"} size={26} />}
    onPress={() => this.changeTab('home')}>
   <View style={[commonStyles.demoViewCenter]}><Text >home</Text></View>
  </Tab>
  <Tab
    tabStyle={selectedTab !== 'about' && [ styles.tabSelectedstyle ]}
    titleStyle={[styles.titleStyle]}
    selectedTitleStyle={[styles.titleSelected]}
    selected={selectedTab === 'about'}
    title={ 'ABOUT' }
    renderIcon={() => <Icon name='important-devices'  size={26} />}
    renderSelectedIcon={() => <Icon name='important-devices'color={"red"}   size={26} />}
    onPress={() => this.changeTab('about')}>
   <View style={[commonStyles.demoViewCenter]}><Text>about</Text></View>
  </Tab>
  </Tabs>

     )
 }



}

const styles=StyleSheet.create({

titleSelected:{
   color:"red"
},
titleStyle:{
  color:"black"
}
 
})