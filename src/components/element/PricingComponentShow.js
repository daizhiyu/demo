import React,{Component} from 'react';
import {
  ScrollView ,
  StyleSheet,
  Dimensions,
Text,
View,
} from 'react-native';
import { PricingCard } from 'react-native-elements'
import commonStyles from '../../utils/commonStyles'
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


export default class PricingComponentShow extends Component {
        constructor(props){
            super(props);
              titleParam.center=this.props.name;
        }

    render(){
       return(
           <View style={{backgroundColor: 'white',height:Dimensions.get('window').height}}><Title {...titleParam}/>
           <PricingCard
  color='#4f9deb'
  title='Free'
  price='$0'
  info={['1 User', 'Basic Support', 'All Core Features']}
  button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
/></View>
       )
   }    
     
}