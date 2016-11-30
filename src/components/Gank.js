import React, { Component } from 'react';

import {
    View ,
    Text,
    StyleSheet,
} from 'react-native';
import Title from '../utils/title';
import Ajax from '../utils/Ajax'

const pros = {
    left: '',
    center: '干货集中营',
    right: '',
    leftFlag: '1',
    rightFlag: '0',
};

export default class Index extends Component{
    constructor (props) {
        super(props)
    }

     componentWillMount () {
            Ajax.post("http://gank.io/api/day/history",'',cb);
    }
    cb(data){
        console.log("......."+data)
    }


render () {
       let content;
        let homePageContent = this.contentDataGroup[0].results
        content = (<View style={styles.container}>
    <View style={styles.headerWrapper}>
    <Image source={{uri: homePageContent.福利[0].url}} style={{flex: 1}}/>
    <View style={styles.editorWrapper}>
    <Text style={styles.imageEditors}>{'via.' + homePageContent.福利[0].who}</Text>
        </View>
        </View>
        <View style={styles.contentWrapper}>
    <TouchableHighlight style={{flex: 2, marginTop: 17}}
        underlayColor={'#333333'}
       >
    <View style={styles.content}>
    <Text style={styles.videoTitle} numberOfLines={4}>{homePageContent.休息视频[0].desc}</Text>
        <Text style={styles.dateAuthor}>{this.contentDataGroup[0].date + ' via.' + homePageContent.休息视频[0].who}</Text>
        <Text style={styles.toVideo}>--> 去看视频～</Text>
        </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonStyle}
        underlayColor={'#333333'}
      >
    <Text style={styles.toHistory}>查看往期</Text>
        </TouchableHighlight>
        </View>
        </View>)


    return (
        <View style={styles.content} needsOffscreenAlphaCompositing renderToHardwareTextureAndroid >
    {content}
    {this._welcome()}
</View>
)
}

}