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
const titleParam = {
    left: '1',
    center: '',
    right: '',
    leftFlag: '1',
    rightFlag: '0',
};
const iconType=
   [  {name:'rowing'},
      {name:'g-translate',color:'#00aced'},
      {name:'sc-telegram',color:'#517fa4',type:'evilicon'},
      {name:'ios-american-football',type:'ionicon',color:'#517fa4'}, 
      {name:'heartbeat',type:'font-awesome',color:'#f50'},   
   ];



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
     return( <Icon  light type={rowData.type}  name={rowData.name} color={rowData.color}/> )
   }
  render(){
      return(
            <ScrollView >
               <Title {...titleParam} />
             <View style={[styles.row]}>
                <ListView 
                contentContainerStyle={styles.listShow}
                initialListSize={20}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                />
            </View>
          </ScrollView >
      )
  }


}


const styles = StyleSheet.create({
row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
 listShow:{
    justifyContent:'space-around',
    flexDirection:'row',
    flexWrap:'wrap',
    width:Dimensions.get('window').width
 }

})

/**
ListView的 contentContainerStyle 里设置的是每一个列表显示方式，
 flexWrap:wrap flex容器为多行。该情况下flex子项溢出的部分会被放置到新行，子项内部会发生断行
 */ 
