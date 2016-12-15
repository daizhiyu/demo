/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */


import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/containers/App';

console.disableYellowBox = true;
AppRegistry.registerComponent('demo', () => App);
/*
 AppRegistry是JS运行所有React Native应用的入口。
 应用的根组件应当通过AppRegistry.registerComponent方法注册自己，
 然后原生系统才可以加载应用的代码包并且在启动完成之后通过调用AppRegistry.runApplication来真正运行应用。

 源码在node_modules/react-native/Libraries/ReactNative/AppRegistry.js
 static registerComponent(appKey: string, getComponentFunc: ComponentProvider)
    appKey 就是上述代码中的'demo' 是我们执行 react-native init demo命令后的,如果不清楚这个可以打开当前工程下的ios文件,或者
 android文件夹,ios的目录有 demo,demo.xcodeproj 有xcode的可以用xcode打开demo.xcodeproj,android的在settings.gradle文件中rootProject.name的值就是,
 getComponentFunc 主程序入口的组件

 应用内的警告会以全屏黄色显示在应用中（调试模式下），我们称为黄屏（yellow box）报错。点击警告可以查看详情或是忽略掉。 和红屏报警类似，你可以使用console.warn()来手动触发黄屏警告。 在默认情况下，开发模式中启用了黄屏警告。可以通过以下代码关闭：
console.disableYellowBox = true;

在运行RN应用时，可以在终端中运行如下命令来查看控制台的日志：
$ react-native log-ios
$ react-native log-android

开发者菜单中Pref Monitor 显示应用的当前帧数 测试性能的
 */






