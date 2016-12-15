import React,{Component} from 'react';
import {
  ScrollView ,
  StyleSheet,

} from 'react-native';
import { Button } from 'react-native-elements';
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

export default class ButtonShow extends Component {

  constructor (props){
      super(props);
       titleParam.center=this.props.name;
  }

  render(){
      return(
            <ScrollView style={{backgroundColor: 'white'}}>
           <Title {...titleParam} />
            <Button 
             large
            secondary
            title='根据 buttonStyle 修改按钮样式' 
            buttonStyle ={[styles.firstButon] }
            />
              
            <Button
              large
              loadingRight
              secondary2
              underlayColor='red'
              icon={{name: 'cached'}}
              buttonStyle ={[styles.secondButon] }
              delayLongPress={2000}
              onLongPress={() => alert("您长按了BUTTON2")}
              title='长按2秒执行事件响应' />

            <Button
              large
              iconRight
              activeOpacity={.3}
              secondary3
              icon={{name: 'code'}}
              title='点击按钮改变透明度' />

            <Button
              large
              primary1
              borderRadius={100}
              icon={{name: 'envira', type: 'font-awesome'}}
              title='圆角按钮 ' />

            <Button
              large
              primary2
              hitSlop ={{top : 30, left: 60, bottom: 30, right: 60}} 
              onPress={()=>alert("您点击了hitSlop属性的按钮")}
              buttonStyle ={[styles.hitSlopButon] }
              title='hitSlop 扩大按钮点击范围' />

               <Button
                large
                primary3
                title='large属性的按钮 变大' />
              
                <Button
                  backgroundColor='#FFFF00'
                  color="black"
                  title='不加large属性的按钮' />

               <Button
                 raised
                title='raised属性按钮 凸起的' />

               <Button
                title='没加raised属性的按钮' />
                
               <Button
                disabled
                title='disabled 按钮' />

          </ScrollView >
      )
  }


}


const styles = StyleSheet.create({
   firstButon:{
   marginLeft:0,
   marginRight:0
   },
   hitSlopButon:{
      marginLeft:60,
      marginRight:60,
      marginTop:30,
      marginBottom:30
   }

 

})
/**
accessibilityComponentType 顾名思义：设置可访问的组件类型
accessibilityTraits 设置可访问的特征
accessible bool 当前组件是否可以访问
delayLongPress number 设置延迟毫秒的时间，从onPressIn方法开始到onLongPress被调用之前
delayPressIn 设置延迟时间，从用户触摸到delayPressIn被调用之间
delayPressOut number 设置延迟时间，从触摸事件释放到delayPressOut被调用这段时间
disabled bool 如果为true，禁用次组件所有的交互
hitSlop {top: number, left: number, bottom: number, right: number} 扩大了按钮的外延范围
onLayout function 当布局加载或者改变时被调用
onLongPress function 长按组件时调用该方法
onPress function 当用户点击时被调用
onPressIn function 当用户开始触摸组件时回调方法
onPressOut function 同上相反，当用户完成触摸时调用
pressRetentionOffset {top: number, left: number, bottom: number, right: number}
  在当前视图不能滚动的前提下指定这个属性，可以决定当手指移开多远距离之后，会不再激活按钮。但如果手指再次移回范围内，按钮会被再次激活。只要视图不能滚动，你可以来回多次这样的操作。确保你传入一个常量来减少内存分配。
activeOpacity number 设置封装的视图在被触摸操作激活时用多少不透明度显示（通常在0到1之间）。
onHideUnderlay function 当底层隐藏后立即调用
onShowUnderlay function 同上面相反，显示时，立即调用
style 风格样式的使用同View的一样，这里就省略了，不知道的去看View的style
underlayColor 当视图被触摸或者点击时，显示的颜色

具体的 可以看看按钮的源代码 node_modules/react-native-elements/src/buttons;
 */ 
