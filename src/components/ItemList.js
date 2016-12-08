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
    left: '',
    center: '',
    right: '',
    leftFlag: '1',
    rightFlag: '0',
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
            <Title {...titleParam} {...this.props}/>
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

