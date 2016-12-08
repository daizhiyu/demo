
import React, { Component } from 'react';

import {
    View ,
    ScrollView,
    Text,
    StyleSheet,
    ListView,
    Image,
    Dimensions,
    TouchableOpacity,
    InteractionManager,
} from 'react-native';
import Title from '../utils/title';
import RequestUtils from '../utils/RequestUtils';
import baseStyles from '../utils/BaseStyles';
import ItemList from './ItemList';
import SingList from './SingList';
const pros = {
    left: '',
    center: '干货集中营',
    right: '',
    leftFlag: '1',
    rightFlag: '0',
};
let self;
let imgUrl;
let requestData;
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class Index extends Component{
    constructor (props) {
        super(props);
      
        this.state = ({
            isLoading: true,
            dataSource: ds.cloneWithRows([]),
         });
        self=this;
    }

   async  componentWillMount () {
         
    try {
      this.dateArray = (await RequestUtils.getDateArray()).results;  
      requestData=await RequestUtils.getContents(this.dateArray.slice(0, 1));
      imgUrl=(requestData[0].results.福利)[0].url;
      this.setState({dataSource: ds.cloneWithRows( requestData[0].category)});
     
    } catch (error) {
      console.log('request content  faile: ', error)
    }   
   
    }
    /**在组件传递过程中一点要  {...this.props}把navigation对象传递过去*/
    _onPressButton(category){
        const {navigator} =self.props;
        InteractionManager.runAfterInteractions(()=>{
         navigator.push({
             component:ItemList,
             params:{
                 data:requestData[0].results,
                 name :category.rowData,
             },
         })
     })
    }

    _renderRow(rowData, sectionID, rowID){
        let text;
        if(rowData!="福利"){
              text=(
           <SingList 
            handler={()=>self._onPressButton({rowData})}
             data={rowData}
             />
            )
        }
        return (
             <View>
                {text}
             </View>
        )

    }


render () {        
    return (
    <ScrollView style={styles.container}>
    <Title {...pros} ></Title>
   <View><Image style={styles.img} source={{url:imgUrl}}/></View>
     <ListView    
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
       />     


    </ScrollView>
      )
}



}

const styles = StyleSheet.create({
      container: {
        flexDirection :'column',
        width: Dimensions.get("window").width,  
    },
    flex1:{
      flex:1
    },
    img:{
        width: Dimensions.get("window").width,
        height: 300, 
       
        alignItems: 'center',
    },
  list:{
      width: Dimensions.get("window").width,
       justifyContent: 'center',
       alignItems: 'center',
      flexDirection :'column',
      backgroundColor:"#fff",
      padding:20,
      borderColor:'#ececec',
      borderBottomWidth:.7,
  },
  
   
})