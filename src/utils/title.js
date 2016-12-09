import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableHighlight,
    InteractionManager,
    Image,
    BackAndroid,
    DeviceEventEmitter,
    TouchableWithoutFeedback,
} from 'react-native';
import { Icon } from 'react-native-elements';

export default class title extends Component {
    constructor(props){
        super(props);
     }

    render() {
       
        let leftIcon;
        let rightIcon
          if(this.props.leftFlag){
              leftIcon=( <View style={styleTitle.leftIcon} >
                   <Icon light type={this.props.leftIcon.iconType} color={"#fff"} name={this.props.leftIcon.iconName} /> 
                            </View>)
          }else{
             leftIcon=(<View style={styleTitle.leftIcon}></View>)
          }
         if(this.props.rightFlag){
              rightIcon=( <View style={styleTitle.rightIcon}>
                   <Icon light type={this.props.rightIcon.iconType} color={"#fff"} name={this.props.rightIcon.iconName} /> 
                            </View>)
          }else{
             rightIcon=(<View style={styleTitle.rightIcon}></View>)
          }

                return (
                    <View style={styleTitle.container}>
                       <TouchableWithoutFeedback >
                         {leftIcon}
                       </TouchableWithoutFeedback>
                   <View style={{flex:1,alignItems: 'center',}}>
                       <Text style={styleTitle.textcolor}>{this.props.center}</Text>
                        </View>
                        {rightIcon}
                        </View>

            );

       }
}


const styleTitle = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007ddc',
        flexDirection:'row',
        width:Dimensions.get('window').width,
        height:54,

    },
    textcolor:{
        fontFamily:'Cochin',
        color:"#ffffff",
        fontWeight:'bold',
        fontSize:17,
    },
    leftIcon:{
        flex:1,alignItems: 'flex-start',paddingLeft:15
    },
   rightIcon:{
       flex:1,alignItems: 'center'
   }
});



