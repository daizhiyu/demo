/**
 * Created by daizhiyu on 2016/11/28.
 */
import React, { Component } from 'react';
import {
    View ,
    Text,
    StyleSheet,
} from 'react-native';
import Title from '../utils/title';

const pros = {
    leftFlag: '1',
     leftIcon:{
        iconType:'foundation',
        iconName:'list'
    },
    center: '首页',
    rightFlag: '',
};

export default class Index extends Component{
    constructor(props) {
        super(props);
    };

    render(){
        return (
            <View>
            <Title {...pros} {...this.props}/>
            <Text>
       1
    </Text>
        </View>
    )
    }

}