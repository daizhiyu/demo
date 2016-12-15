/**
 * Created by daizhiyu on 2016/11/26.
 */
import React, { Component } from 'react';
import {
    View ,
    Text,
    Navigator,
    StyleSheet,
} from 'react-native';
import { Tabs, Tab, Icon } from 'react-native-elements'
import DrawerLayout from 'react-native-drawer-layout';
import SliderBar from './SliderBar';
import Home from '../containers/Home';
import Gank from '../containers/Gank';
import Elements from './Elements';
import Title from '../utils/title';
const titleParam = {
   leftFlag: '',
    center: '',
    rightFlag: '',
};
let self;
export default class Index extends Component {
    constructor(props){
        super(props)
        this.state = ({
             selectedTab:"Home", 
             title:"首页"
            });
        titleParam.center= this.state.title;
        self=this;
        this.changeTab = this.changeTab.bind(this)
    }

     changeTab (selectedTab,titleName) {
       
     this.setState({
         selectedTab:selectedTab,
       
        })
  }


    render(){
          const { toggleSideMenu } = this.props
       const  selectedTab  = this.state.selectedTab
        return (
            
           <Tabs hidesTabTouch>
                <Tab
                    tabStyle={selectedTab !== 'Home' &&  [styles.tabSelectedstyle ]}
                    titleStyle={[styles.titleStyle]}
                    selectedTitleStyle={[styles.titleSelected]}
                    selected={selectedTab === 'Home'}
                    title={'首页'}
                    renderIcon={() => <Icon name='home'  type="entypo" size={26} />}
                    renderSelectedIcon={() => <Icon name='home' type="entypo" color={"red"} size={26} />}
                    onPress={() => this.changeTab('Home')}>
                    <Home toggleSideMenu={toggleSideMenu}  />
                </Tab>

                <Tab
                    tabStyle={selectedTab !== 'Gank' &&  [styles.tabSelectedstyle ]}
                    titleStyle={[styles.titleStyle]}
                    selectedTitleStyle={[styles.titleSelected]}
                    selected={selectedTab === 'Gank'}
                    title={ '干货'}
                    renderIcon={() => <Icon name='mood'  size={26} />}
                    renderSelectedIcon={() => <Icon name='mood' color={"red"} size={26} />}
                    onPress={() => this.changeTab('Gank')}>
                    <Gank toggleSideMenu={toggleSideMenu} />
                </Tab>

                <Tab
                    tabStyle={selectedTab !== 'Elements' &&  [styles.tabSelectedstyle ]}
                    titleStyle={[styles.titleStyle]}
                    selectedTitleStyle={[styles.titleSelected]}
                    selected={selectedTab === 'Elements'}
                    title={ '组件'}
                    renderIcon={() => <Icon name='menu' size={26} />}
                    renderSelectedIcon={() => <Icon name='menu' color={"red"} size={26} />}
                    onPress={() => this.changeTab('Elements')}>
                    <Elements  {...this.props}/>
                </Tab>
                <Tab
                    tabStyle={selectedTab !== 'Me' &&  [styles.tabSelectedstyle ]}
                    titleStyle={[styles.titleStyle]}
                    selectedTitleStyle={[styles.titleSelected]}
                    selected={selectedTab === 'Me'}
                    title={ '我'}
                    renderIcon={() => <Icon name='person'   size={26} />}
                    renderSelectedIcon={() => <Icon name='person' color={"red"} size={26} />}
                    onPress={() => this.changeTab('Me')}>
                    <Elements  {...this.props}/>
            </Tab>
  </Tabs>
    )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        marginTop: 64,
        paddingLeft:10,
        paddingRight: 10,
    },
    titleSelected:{
        color:'red'
    }

})
