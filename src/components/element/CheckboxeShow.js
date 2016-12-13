import React,{Component} from 'react';
import {
  ScrollView ,
  StyleSheet,
  Dimensions,
Text,
View,
} from 'react-native';
import { CheckBox } from 'react-native-elements'

import Title from '../../utils/title';
const titleParam = {
    leftFlag: '1',
    leftIcon:{
        iconType:'entypo',
        iconName:'chevron-thin-left'
    },
    center: '',
    rightFlag: '',
};
export default class CheckboxeShow extends Component {
        constructor(props){
            super(props);
              titleParam.center=this.props.name;
              this.state=({
                  checked:false
              })
        }
    pressButton(){
        this.setState({
              checked:!this.state.checked
        })
    }

    render(){
       return(
           <View><Title {...titleParam} />
                <CheckBox
                    title='Click Here'
                    checked={this.state.checked}
                    onPress={()=>this.pressButton()}
                    />
                <CheckBox
                    center
                    title='Click Here'
                    checked={this.state.checked}
                   onPress={()=>this.pressButton()}
                />
                <CheckBox
                    right
                    title='Click Here'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.checked}
                     onPress={()=>this.pressButton()}     
                />
                <CheckBox
                center
                title='Click Here to Remove This Item'
                iconRight
                iconType='material'
                checkedIcon='clear'
                uncheckedIcon='add'
                checkedColor='red'
                checked={this.state.checked}
                 onPress={()=>this.pressButton()}
                />
                </View>
       )
   }    
     
}