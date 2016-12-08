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
import TabBar from 'react-native-xtabbar';
import DrawerLayout from 'react-native-drawer-layout';
import SliderBar from './SliderBar';
import Index from './Index';
import Gank from './Gank';
import Elements from './Elements';
export default class Home extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <DrawerLayout
        ref={(ref) => this._drawer = ref}
        drawerWidth={300}
        drawerPosition={DrawerLayout.positions.Left}
        renderNavigationView={()=><SliderBar {...this.props} closeDrawer={this.closeDrawer}/>}>

            <TabBar>
                <TabBar.Item title='首页'>
                     <View >
                        <Index />
                    </View>
                </TabBar.Item>

                <TabBar.Item title='干货'>
  
                    <View >
                        <Gank {...this.props}/>
                    </View>
                </TabBar.Item>

                <TabBar.Item title='组件一'>
                <Elements  {...this.props}/>
               </TabBar.Item>

               <TabBar.Item title='我'>
                    <View style={styles.text}>
                        <Text style={{fontSize: 18}}>Me</Text>
                    </View>
               </TabBar.Item>
        </TabBar>
        </DrawerLayout>
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

