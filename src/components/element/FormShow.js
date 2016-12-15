import React,{Component} from 'react';
import {
  ScrollView ,
  StyleSheet,
  Dimensions,
Text,
View,
} from 'react-native';
import { FormLabel, FormInput ,Button} from 'react-native-elements';
import commonStyles from '../../utils/commonStyles';
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
let self;
export default class FormShow extends Component {
        constructor(props){
            super(props);
              titleParam.center=this.props.name;
              self=this;
              self.state=({
                  textInputFirst:'',
                  textInputSecond:''
              })
            
        }
changeTextFirst(){
   
// self.setState({textInputFirst:+self.refs.forminput.refs.phone})
}
changeTextSecond(text){
    
 self.setState({textInputSecond:+text})
}

    render(){

       return(
           <View style={{backgroundColor: 'white'}}><Title {...titleParam} />
                <FormLabel>Phone</FormLabel>
                <FormInput 
                autoFocus={true}
                 placeholder='Type Name Here...' 
                  ref='forminput'
                  textInputRef='phone'
                  keyboardType="phone-pad" 
                  onChange={() => this.changeTextFirst()}
                 />
                <FormLabel>email </FormLabel>
                <FormInput
                textInputRef='email'
                placeholder='Type Password Here...'
                keyboardType="email-address"
                clearButtonMode
                autoCapitalize="none"
                onChangeText={this.changeTextSecond}
                // 与上面的onChangeText功能一样 onChangeText={(text)=>this.changeTextSecond(text)}
                />
         
                <View style={{justifyContent:'center',alignSelf:'center'}}><Text>{this.state.textInputSecond}</Text>
               </View>
               </View>
       )
   }    
     
}




/*
键盘类型
ascii-capable  字母表
decimal-pad    Decimal十进制
default
email-address  电子邮箱键盘
name-phone-pad 没有符号的英文键盘
number-pad     纯数字键盘
numbers-and-punctuation 全键盘的数字+符号键盘
numeric 数字键盘+点 用于输入金额方面的
phone-pad  带符号的数字键盘
twitter  推特键盘
url   用于输入URL的键盘，有.com按钮
web-search  搜索键盘右下角显示有 go 

autoCapitalize enum('none', 'sentences', 'words', 'characters') 

控制TextInput是否要自动将特定字符切换为大写：

characters: 所有的字符。
words: 每个单词的第一个字符。
sentences: 每句话的第一个字符（默认）。
none: 不自动切换任何字符为大写。

onChangeText function 
    当文本框内容变化时调用此回调函数。改变后的文字内容会作为参数传递。
autoFocus bool 
    如果为true，在componentDidMount后会获得焦点。默认值为false。
 secureTextEntry bool 
    如果为true，文本框会遮住之前输入的文字，这样类似密码之类的敏感文字可以更加安全。默认值为false。

clearButtonMode enum('never', 'while-editing', 'unless-editing', 'always') 

是否要在文本框右侧显示“清除”按钮。

clearTextOnFocus bool (ios)

如果为true，每次开始输入的时候都会清除文本框的内容。

enablesReturnKeyAutomatically bool  (ios)

如果为true，键盘会在文本框内没有文字的时候禁用确认按钮。默认值为false。

keyboardAppearance enum('default', 'light', 'dark')  (ios)

指定键盘的颜色。

onKeyPress function 

当一个键被按下的时候调用此回调。被按下的键会作为参数传递给回调函数。会在onChange之前调用。

returnKeyType enum('default', 'go', 'google', 'join', 'next', 'route', 'search', 'send', 'yahoo', 'done', 'emergency-call') 

决定“确定”按钮显示的内容。
*/