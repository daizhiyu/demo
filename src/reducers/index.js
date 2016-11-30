
import {combineReducers} from 'redux';
import main from './main';

const rootReducer = combineReducers({
    main
})



export default rootReducer;

/*
* 上面的combineReducers方法等价于 当然下面的是伪代码
 function rootReducer(state = {}, action) {
   return {
       main: doSomethingWith(state.a, action),
       b: doSomethingWith(state.b, action),
   }
 }
 const rootReducer = combineReducers({
 main,
 b
 })

 combineReducers()只是生成一个函数，这个函数来调用你写的一系列 reducer，
 每个 reducer 根据它们的 key 来筛选出 state 中的一部分数据并处理，
 然后这个生成的函数再将所有 reducer 的结果合并成一个大的对象。
*
*
 */