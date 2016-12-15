/**
 * Created by daizhiyu on 2016/11/25.
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Navigator,
} from 'react-native';
import Index from '../components/Index';
let self;
//组件声明前面的export default关键字。它的意思是导出(export)当前组件(Blog)，以允许其他组件引入(import)和使用当前组件(Blog)
export default class Blog extends Component {
    // Blog 子类继承 Component 父类,子类必须在constructor方法中调用super方法，
    // 否则新建实例时会报错。这是因为子类没有自己的this对象，
    // 而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。
    //constructor在这里表示父类(Component)的构造函数，用来新建父类(Component)的this对象。
    constructor(props) {
        super(props);
       self=this;
    }
    //route里其实就是我们传递的组件名和component这两个货,
    /*  这里的route 就是这个
       var route = {
         name: 'Blog'
         component: Blog,
         params: {
         id: this.state.id
         }//可以在下个页面拿到这个params
       }
     navigator是一个Navigator的对象,用来跳转页面
     getCurrentRoutes() - 获取当前栈里的路由，也就是push进来，没有pop掉的那些。
     jumpBack() - 跳回之前的路由，当然前提是保留现在的，还可以再跳回来，会给你保留原样。
     jumpForward() - 上一个方法不是调到之前的路由了么，用这个跳回来就好了。
     jumpTo(route) - 跳转到已有的场景并且不卸载。
     push(route) - 跳转到新的场景，并且将场景入栈，你可以稍后跳转过去
     pop() - 跳转回去并且卸载掉当前场景
     replace(route) - 用一个新的路由替换掉当前场景
     replaceAtIndex(route, index) - 替换掉指定序列的路由场景
     replacePrevious(route) - 替换掉之前的场景
     resetTo(route) - 跳转到新的场景，并且重置整个路由栈
     immediatelyResetRouteStack(routeStack) - 用新的路由数组来重置路由栈
     popToRoute(route) - pop到路由指定的场景，在整个路由栈中，处于指定场景之后的场景将会被卸载。
     popToTop() - pop到栈中的第一个场景，卸载掉所有的其他场景。
     */

    renderScene (route, navigator) {
        const { toggleSideMenu } = self.props;
        let Component = route.component;
        //如果传递进来的component存在，那我们就是返回一个这个component，结合上下文 initialRoute 的参数，我们就是知道，这是一个会被render出来给用户看到的component，然后navigator作为props传递给了这个component。
       // 所以我们在Home 组件中 可以通过 props.navigator 拿到 navigator;
        if(route.component) {
              // ...route.params ===> id: this.state.id
            return <Component {...this.props} {...route.params} toggleSideMenu={toggleSideMenu}  navigator={navigator} />
        }
    }
    render() {
         
        return (
                <Navigator
                    renderScene={this.renderScene}
                    //initialRoute ->这个指定了默认的页面，也就是启动app之后会看到界面的第一屏。
                   // 需要填写两个参数: name 跟 component。
                  // （注意这里填什么参数纯粹是自定义的，因为这个参数也是你自己发自己收，自己在renderScene方法中处理。我们这里示例用了两个参数，但其实真正使用的参数只有component）
                    initialRoute={{ component: Index}}
                    //这个是页面之间跳转时候的动画，具体有哪些？可以看这个目录下，有源代码的: node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
                   //允许配置场景动画和手势。将由路线调用，且应该返回一个场景配置对象, PropTypes.func
                    configureScene={(route) => {
                        if (route.sceneConfig) {
                            return route.sceneConfig;
                        }
                        return Navigator.SceneConfigs.FloatFromRight;
                    }}
                />
    )
    }
}
