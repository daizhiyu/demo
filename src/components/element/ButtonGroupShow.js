import React,{Component} from 'react';
import {
  ScrollView ,
  StyleSheet,
  Dimensions,
Text,
View,
} from 'react-native';
import { ButtonGroup } from 'react-native-elements'
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

export default class ButtonGroupShow extends Component {
        constructor(props){
            super(props);
              titleParam.center=this.props.name;
              this.state = {
                     selectedIndex: 2
                    }
            this.updateIndex = this.updateIndex.bind(this)
            
        }

    updateIndex (selectedIndex) {
    this.setState({selectedIndex})
    }


    render(){
            const component1 = () => <Text>Hello</Text>
const component2 = () => <Text>World</Text>
const component3 = () => <Text>ButtonGroup</Text>

             const buttons1 = ['Hello', 'World', 'Buttons']
             const buttons2 = [{ element: component1 }, { element: component2 }, { element: component3 }]
            const { selectedIndex } = this.state
           

       return(
           <View><Title {...titleParam} />
            <ButtonGroup
            containerStyle={{ width:Dimensions.get('window').width,height:30}}
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            selectedBackgroundColor={"red"}
            buttons={buttons1}/>

      <ButtonGroup
            containerStyle={{ width:Dimensions.get('window').width,height:30}}
            onPress={this.updateIndex}
            textStyle={{alignItems: 'center', justifyContent:'center'}}
            selectedIndex={selectedIndex}
            selectedBackgroundColor={"yellow"}
            buttons={buttons2}/>
               </View>
       )
   }    
     
}