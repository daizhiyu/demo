import React  from 'react';
import {
    StyleSheet,
    Dimensions,
} from 'react-native';


export default commontyles =StyleSheet.create({
 container: {
        backgroundColor: '#ECF3F7',
        flexDirection :'column',
        width: Dimensions.get("window").width,  
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
  demoViewCenter:{
      flexDirection :'row',
      justifyContent:'center',
      alignItems:'center',
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height
  }

});