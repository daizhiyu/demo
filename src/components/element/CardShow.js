import React,{Component} from 'react';
import {
  ScrollView ,
  StyleSheet,
  Dimensions,
Text,
View,
} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'
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
const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 }
]

export default class CardShow extends Component {
        constructor(props){
            super(props);
              titleParam.center=this.props.name;
           
            
        }

 


    render(){
       
       return(
           <View style={{backgroundColor: 'white'}}><Title {...titleParam} /><Card containerStyle={{padding: 0}} >
  {
    users.map((u, i) => {
      return (
        <ListItem
          key={i}
          roundAvatar
          title={u.name}
          avatar={{uri:u.avatar}} />

      )
    })
  }
</Card>
<Card
  title='HELLO WORLD'
  >
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={{name: 'code'}}
    backgroundColor='#03A9F4'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card></View>
       )
   }    
     
}