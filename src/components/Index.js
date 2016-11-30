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
    left: '',
    center: '首页',
    right: '',
    leftFlag: '1',
    rightFlag: '0',
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