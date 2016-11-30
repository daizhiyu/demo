#Store

>题外话:action 是用来描述“发生了什么”， reducers 是根据 action 来更新 state 的。 那么store呢 ???

回答上面的问题 ->   **Store 就是把它们联系到一起的对象**。

Store的职责是:
>
- 维持应用的 state；
- 提供 getState() 方法获取 state；
- 提供 dispatch(action) 方法更新 state；
- 通过 subscribe(listener) 注册监听器;
- 通过 subscribe(listener) 返回的函数注销监听器。

###### Redux 应用只有一个单一的 store。当需要拆分数据处理逻辑时，你应该使用 reducer 组合(combineReducers()) 而不是创建多个 store。
----
在reducers中我们用 combineReducers 方法 将多个 reducer 合并成为一个, 那我们在store下就得管理这些,redux 提供了createStore()方法来实现我们的需求

    redux.createStore(reducer, initialState)

第一个参数是 combineReducers 合并的多个 reducer 一般是在 直接import 过来的 如:import reducer from './reducers',第二个参数是可选的, 用于设置 state 初始状态







