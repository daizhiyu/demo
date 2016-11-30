/*
 */
import { createStore,compose,applyMiddleware } from 'redux'

import thunkMiddleware from 'redux-thunk'

import rootReducer from '../reducers/index';
const finalCreateStore = compose(applyMiddleware(thunkMiddleware))(createStore)

export default function configureStore(initialState) {
    //rootReducer 程序进入后首次进入的页面
  return finalCreateStore(rootReducer, initialState)
}


/*
 createStore 创建单一的store


 compose就是用来将函数组合起来使用 上面的就是将 applyMiddleware 和 thunkMiddleware组合在一起
 当需要把多个 store 增强器 依次执行的时候，需要用到它。
 store 增强器:
        是一个组合 store creator 的高阶函数，返回一个新的强化过的 store creator。这与 middleware 相似，它也允许你通过复合函数改变 store 接口。
 compose 做的只是让你不使用深度右括号的情况下来写深度嵌套的函数。不要觉得它很复杂。

 finalCreateStore = compose(applyMiddleware(thunkMiddleware),createStore);
 等价于
 finalCreateStore =
   applyMiddleware()(
       thunkMiddleware(){
         createStore(){
         }
       }
    );

 源码如下:
 export default function compose(...funcs) {
 return arg => funcs.reduceRight((composed, f) => f(composed), arg);
 }
 compose(f, g, h) --》f(g(h()))
 funcs就是我们传入的中间件，fn1,fn2..






 */