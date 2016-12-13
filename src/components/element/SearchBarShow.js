import React,{Component} from 'react';
import {
View,
Text,
} from 'react-native';
import { SearchBar} from 'react-native-elements';
import Title from '../../utils/title';
const titleParam = {
    leftFlag: '1',
    leftIcon:{
        iconType:'entypo',
        iconName:'chevron-thin-left'
    },
    center: '',
    rightFlag: ''
};

let self;
export default class SearchBarShow extends Component{
    constructor (props){
        super(props);
         titleParam.center=this.props.name;
           this.state = {
               changeValue:" "
           }
           self=this;
    };
    _change(value){
         self.setState({ changeValue:"您输入的是:"+value});
        
         
    }

render(){
      return(
        <View>
         <Title {...titleParam} />
            <SearchBar
               ref={"searchBar1"}
               onChangeText={self._change}
                placeholder='Type Here...' />

            <SearchBar
                noIcon
                 onChangeText={self._change}
                placeholder='Type Here...' />

            <SearchBar
                onChangeText={self._change}
                round
                placeholder='Type Here...' />

            <SearchBar
                onChangeText={self._change}
                lightTheme
                placeholder='Type Here...' />

            <View>
                <Text>{self.state.changeValue}</Text>
            </View>
    </View>
        )
    }

}

/*
autoCapitalize : 枚举类型，可选值有none,sentences,words,characters.当用户输入时，用于提示。
placeholder：占位符，在输入前显示的文本内容。
value ： 文本输入框的默认值。
placeholdertTextColor : 占位符文本颜色。
password ： 如果为ture ， 则是密码输入框，文本显示＊＊＊*。
multiline ： 如果为true ， 则是多行输入。
editable ： 如果为false ， 文本框不可输入。其默认值事true。
autoFocus : 如果为true， 将自动聚焦。
clearButtonMode : 枚举类型，可选值有never，while－enditing , unless-editing,always.用于显示清除按钮。
maxLength : 能够输入的最长字符数。
enablesReturnKeyAutomatically :默认值为false， 如果值为true，则表示没有文本时键盘是不能有返回键的。
returnKeyType : 枚举类型，可选值有default,go,google,join,next,route,search,send,yahoo,done,emergency-call。表示软键盘返回键显示的字符串。
onChangeText : 当文本输入框的内容发生变化时，调用该函数。onChangeText接收一个文本的参数对象。
onChange : 当文本变化时，调用该函数。
onEndEditing : 当结束编辑时，调用该函数。
onBlur : 失去焦点出发事件。
onFocus : 获得焦点出发事件。
onSubmitEditing : 当结束编辑后，点击键盘的提交按钮出发该事件。
*/