import React,{Component} from 'react';
import {
  View ,
    Text,
    Navigator,
    StyleSheet,
    TouchableOpacity,
    ListView,
} from 'react-native';
import Title from '../utils/title';
import commonStyles from '../utils/commonStyles';
import SingList from './SingList';
const titleParam = {
     leftFlag: '1',
     leftIcon:{
        iconType:'entypo',
        iconName:'chevron-thin-left'
    },
    center: '',
    rightFlag: '',
};

 let self;
 const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default  class ItemList extends Component{
   constructor(props){
       super(props);
        self=this;
          let category=self.props.name;
          titleParam.center=category;
          this.state = ({
             dataSource:ds.cloneWithRows((self.props.data)[category]) 
         });
   }
   componentWillMount () {
      
      }
  _renderRow(rowData,rowID){ 
      return (
            <SingList 
             data={rowData.desc}
             />           
      )
  }

    render(){
        
        return (
            <View>
            <Title {...titleParam} />
            <View style={commonStyles.container}>
           <ListView    
            dataSource={self.state.dataSource}
            renderRow={(rowData, sectionID, rowID)=>this._renderRow(rowData,rowID)}
       />       
            </View>
         
        </View>
    )
    }
}

