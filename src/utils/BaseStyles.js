import React  from 'react';
import {
    StyleSheet,
    Dimensions,
} from 'react-native';


export default baseStyles =StyleSheet.create({
    
    ub_row:{
       flexDirection :'row'
    },
    ub_rev:{
       flexDirection :'column'
    },
    ub_fh:{
        width:Dimensions.get('window').width
    },
    ub_fv:{
        height:Dimensions.get('window').height
    },
    ub_ac:{
         alignItems: 'center',
    },
    ub_ae:{
        alignItems: 'flex-end',
    },
    ub_pc:{
        justifyContent:'center'
    },
     ub_pe:{
        justifyContent:'flex-end'
    },
    ub_ps:{
        justifyContent:'flex-start'
    },
    ub_pa:{
        justifyContent:'space-around'
    },
    ub_pb:{
        justifyContent:'space-between'
    },
    ub_f1:{
        flex:1
    },
    ub_f2:{
        flex:2
    },
    ub_f3:{
        flex:3
    },
     ub_f4:{
        flex:4
    },
    uba:{
      borderWidth:1,
    },
    ubt:{
     borderTopWidth:1,
    },
  
  
})


/*
React Native中的Flexbox的工作原理和web上的CSS基本一致，
当然也存在少许差异。首先是默认值不同：flexDirection的默认值是column而不是row，
alignItems的默认值是stretch而不是flex-start，以及flex只能指定一个数字值。

flexDirection 可以决定布局的主轴，子类默认是沿着竖直方向（column排列），水平轴(row)

justifyContent 可以决定子元素沿着主轴的排列方式，

*/
