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
import Index from './Index';
import Gank from './Gank';
import Elements from './Elements';
import Title from '../utils/title';
const titleParam = {
   leftFlag: '',
    center: '',
    rightFlag: '',
};
export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = ({
             selectedTab:"Index", 
             title:"首页"
            });
        titleParam.center= this.state.title;
    }

     changeTab (selectedTab,titleName) {
     this.setState({
         selectedTab:selectedTab,
         title:titleName
        })
  }


    render(){
       const  selectedTab  = this.state.selectedTab
        return (
           
           <Tabs>
                <Tab
                    tabStyle={selectedTab !== 'Index' &&  [styles.tabSelectedstyle ]}
                    titleStyle={[styles.titleStyle]}
                    selectedTitleStyle={[styles.titleSelected]}
                    selected={selectedTab === 'Index'}
                    title={'首页'}
                    renderIcon={() => <Icon name='home'  type="entypo" size={26} />}
                    renderSelectedIcon={() => <Icon name='home' type="entypo" color={"red"} size={26} />}
                    onPress={() => this.changeTab('Index','首页')}>
                    <Index />
                </Tab>

                <Tab
                    tabStyle={selectedTab !== 'Gank' &&  [styles.tabSelectedstyle ]}
                    titleStyle={[styles.titleStyle]}
                    selectedTitleStyle={[styles.titleSelected]}
                    selected={selectedTab === 'Gank'}
                    title={ '干货'}
                    renderIcon={() => <Icon name='home'  type="entypo" size={26} />}
                    renderSelectedIcon={() => <Icon name='index' color={"red"} size={26} />}
                    onPress={() => this.changeTab('Gank','干货')}>
                    <Gank {...this.props}/>
                </Tab>

                <Tab
                    tabStyle={selectedTab !== 'Elements' &&  [styles.tabSelectedstyle ]}
                    titleStyle={[styles.titleStyle]}
                    selectedTitleStyle={[styles.titleSelected]}
                    selected={selectedTab === 'Elements'}
                    title={ '组件'}
                    renderIcon={() => <Icon name='home'  type="entypo" size={26} />}
                    renderSelectedIcon={() => <Icon name='index' color={"red"} size={26} />}
                    onPress={() => this.changeTab('Elements','组件')}>
                    <Elements  {...this.props}/>
                </Tab>
                <Tab
                    tabStyle={selectedTab !== 'Me' &&  [styles.tabSelectedstyle ]}
                    titleStyle={[styles.titleStyle]}
                    selectedTitleStyle={[styles.titleSelected]}
                    selected={selectedTab === 'Me'}
                    title={ '我'}
                    renderIcon={() => <Icon name='home'  type="entypo" size={26} />}
                    renderSelectedIcon={() => <Icon name='index' color={"red"} size={26} />}
                    onPress={() => this.changeTab('Me','我')}>
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
    }

})
