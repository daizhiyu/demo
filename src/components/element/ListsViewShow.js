import React,{Component} from 'react';
import {
  ScrollView ,
  StyleSheet,

} from 'react-native';
import { List } from 'react-native-elements';
import { SocialIcon } from 'react-native-elements'
import Title from '../../utils/title';
import baseStyles from '../../utils/BaseStyles';
const titleParam = {
    left: '1',
    center: '',
    right: '',
    leftFlag: '1',
    rightFlag: '0',
};

export default class ListsViewShow extends Component {

  constructor (props){
      super(props);
       titleParam.center=this.props.name;
  }

  render(){
      return(
            <ScrollView >
           <Title {...titleParam} />
         
          </ScrollView >
      )
  }


}


const styles = StyleSheet.create({


 

})
/**


具体的 可以看看按钮的圆代码 node_modules/react-native-elements/src/list;
 */ 
