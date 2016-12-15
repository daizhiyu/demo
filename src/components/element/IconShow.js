import React,{Component} from 'react';
import {
  ScrollView ,
  StyleSheet,
  Dimensions,
View,
Text,
ListView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Title from '../../utils/title';
import  iconType from './iconType/materialIconsIconType';
const titleParam = {
    leftFlag: '1',
    leftIcon:{
        iconType:'entypo',
        iconName:'chevron-thin-left'
    },
    center: '',
    rightFlag: '1',
     rightIcon:{
        iconType:'evilIcons',
        iconName:'search'
    },
};



export default class IconShow extends Component {

  constructor (props){
      super(props);
       titleParam.center=this.props.name;
       var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       this.state = {
         dataSource: ds.cloneWithRows(iconType),
      };
  }
  _renderRow(rowData){
     return(   
       <Icon light type={rowData.type} containerStyle={styles.wrapper}  onPress={()=>alert("这是entypoIconType的"+rowData.name) }  name={rowData.name} color={rowData.color}/> 
       )
   }

     
  
  render(){
      return(
            <ScrollView style={{backgroundColor: 'white'}}>
               <Title {...titleParam} />
            
                <ListView 
                contentContainerStyle={styles.listShow}
                initialListSize={20000}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                />
          
          </ScrollView >
      )
  }


}


const styles = StyleSheet.create({
 listShow:{
   justifyContent:'space-around',
    flexDirection:'row',
    flexWrap:'wrap', 
 },
   wrapper: {
    width: 50,
    height: 50
  },

})

/**
ListView的 contentContainerStyle 里设置的是每一个列表显示方式，
 flexWrap:wrap flex容器为多行。该情况下flex子项溢出的部分会被放置到新行，子项内部会发生断行
materialIconsIconType  可以不用写type

 */ 
