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


export default class title extends Component {
    constructor(props){
        super(props);
     }

    render() {
                return (
                    <View style={styleTitle.container}>
                    <TouchableWithoutFeedback >
                    <View style={{flex:1,alignItems: 'flex-start',paddingLeft:15,}}>
                   <Text></Text>
                            </View>
                            </TouchableWithoutFeedback>
                            <View style={{flex:1,alignItems: 'center',}}>
                    <Text style={styleTitle.textcolor}>{this.props.center}</Text>
                        </View>
                        <View style={{flex:1,alignItems: 'center',}}>
                    <Text style={styleTitle.textcolor}>{this.props.right}</Text>
                        </View>
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
    }
});



