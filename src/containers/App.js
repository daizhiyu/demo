/**
 * Created by daizhiyu on 2016/11/25.
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Blog from './Index';
import configureStore from '../store/configureStore';

const store = configureStore();

    export default class App extends Component {

    render (){
        return (
            <Provider store={store}>
            <Blog />
            </Provider>
       )
    }
}

/*
 <Provider store> 使组件层级中的 connect() 方法都能够获得 Redux store。
主组件 Blog 嵌套在 <Provider> 中才能使用 connect() 方法。
 <Provider /> 是由 React Redux 提供的高阶组件，用来让你将 Redux 绑定到 React


 */
