#Reducer
 reducer 是指明应用如何更新state的

## 设计 State 结构
在 Redux 应用中，所有的 state 都被保存在一个单一对象中。建议在写代码前先想一下这个对象的结构。如何才能以最简的形式把应用的 state 用对象描述出来？

以 todo 应用为例，需要保存两种不同的数据：

- 当前选中的任务过滤条件；
- 完整的任务列表。

通常，这个 state 树还需要存放其它一些数据，以及一些 UI 相关的 state。这样做没问题，但尽量把这些数据与 UI 相关的 state 分开。

    {
      visibilityFilter : 'SHOW_ALL',
      todos : [
       {
         text :'Consider using Redux',
         completed : true,
       },
       {
         text : 'Keep all state in a single tree',
          completed : false,
       }
      ]
     }

>
#### 处理 Reducer 关系时的注意事项
开发复杂移动应用时,不可避免会有一些数据相互引用。建议大家尽可能地把state[范式化](http://baike.baidu.com/link?url=4_YrAxxNkAHmvi1Qu71rHHlNfWCOHpLYDRee1WykRSgh7kSTSGshSLL58R8AYE14WFaN4ftPIEEQvSkfdhPnGK)不存在嵌套。把所有数据放到一个对象里,每个数据以 ID 为组件,不同实体或列表间通过 ID 相互引用数据。把应用的state想象成数据库。这种方法在[normalizr](https://github.com/gaearon/normalizr)文档里有详细阐述。例如，实际开发中，在 state 里同时存放 todosById: { id -> todo } 和 todos: array<id> 是比较好的方式，

# Action 处理
现在我们已经确定了 state 对象的结构，就可以开始开发 reducer。reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。

    (previousState, action) => newState

之所以称作 reducer 是因为它将被传递给 [Array.prototype.reduce(reducer, ?initialValue)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce_clone) 方法。保持 reducer 纯净非常重要。永远不要在 reducer 里做这些操作：

- 修改传入参数；
- 执行有副作用的操作，如 API 请求和路由跳转；
- 调用非纯函数，如 Date.now() 或 Math.random()。

**只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。**

##### 看看具体的代码

     //引入action (将要做的事或者任务)
    import { actions } from './actions'
    //初始默认状态
    const initialState = {
      action: actions.type1,
       todos: []
    };
    //直白的说下面方法就是 当传入的状态为type2的时候修改该事件的状态为type2
    //todoApp(state = initialState, action) 第一个参数是ES6的最新写法(如果一个形参没有被传入对应的实参或者传入了undefined,则该形参会被赋一个默认值.)此处默认值就是initialState
    function todoApp(state = initialState, action) {
      switch (action.type) {
          case action.type2:
            // 将actions: action.filter拷贝一份给state, 并返回
              return Object.assign({}, state, {
                action: actions.filter
            })
          case action.type3:
          default:
            return state
        }
    }

--------
如果应用不断庞大起来 全部写在一个switch 里面就显的特别庞大,我们可以把 不同的reducer拆分放到不同的文件夹中,redus提供了一个combineReducers() 工具类来处理这些事

    import { combineReducers } from 'redux';
    const todoApp = combineReducers({
      visibilityFilter,
      todos
    })
    export default todoApp;
---
注意上面的写法和下面完全等价：

    export default function todoApp(state = {}, action) {
      return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
      }
    }
----
你也可以给它们设置不同的 key，或者调用不同的函数。下面两种合成 reducer 方法完全等价：

    const reducer = combineReducers({
      a: doSomethingWithA,
      b: processB,
      c: c
    })
----
    function reducer(state = {}, action) {
      return {
        a: doSomethingWithA(state.a, action),
        b: processB(state.b, action),
        c: c(state.c, action)
      }
    }

combineReducers() 所做的只是生成一个函数，这个函数来调用你的一系列 reducer，每个 reducer 根据它们的 key 来筛选出 state 中的一部分数据并处理，然后这个生成的函数再将所有 reducer 的结果合并成一个大的对象。
>
###### ES6 用户使用注意
combineReducers 接收一个对象，可以把所有顶级的 reducer 放到一个独立的文件中，通过 export 暴露出每个 reducer 函数，然后使用 import * as reducers 得到一个以它们名字作为 key 的 object：

    import { combineReducers } from 'redux'
    import * as reducers from './reducers'

    const todoApp = combineReducers(reducers)

----------------
##番外片
reduce方法介绍
>
 reduce是JavaScript 1.8中才引入的，中文意思为“减少”、“约简”。
### 概述
reduce() 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始缩减，最终为一个值。
### 语法

    arr.reduce(callback[, initialValue])

###### 参数
callback :执行数组中每个值的函数，包含四个参数:
> previousValue: 上一次调用回调函数返回的值，或者是提供的初始值（initialValue）
  currentValue : 数组中当前被处理的元素
  currentIndex : 当前被处理元素在数组中的索引, 即currentValue的索引.如果有initialValue初始值, 从0开始.如果没有从1开始.
  array        : 调用 reduce 的数组

initialValue :  可选参数, 作为第一次调用 callback 的第一个参数。
###### 返回值
最后一次调用回调函数返回的结果
###### 描述
回调函数第一次执行时，previousValue 和 currentValue可能是两个不同值其中的一个，如果reduce有initialValue参数，那么 previousValue 等于 initialValue ，并且currentValue 等于数组中的第一个值；如果reduce没有 initialValue 参数，那么previousValue 等于数组中的第一个值，currentValue等于数组中的第二个值。
注意: 如果没有initialValue参数, reduce从index为1开始执行回调函数, 跳过第一个index. 如果有initialValue参数, reduce 将从index为 0 开始执行回调.
如果数组是空的并且没有initialValue参数, 将会抛出TypeError错误. 如果数组只有一个元素并且没有初始值initialValue, 或者有initialValue但数组是空的, 这个唯一的值直接被返回而不会调用回调函数.
通常来说提供一个initialValue初始值更安全一点, 因为没有的话会出现3种可能的输出结果,

    var total = [0, 1, 2, 3].reduce(function(a, b) {
        return a + b;
    }, 0);            // total == 6

    //循环执行过程：
    //初始设置 因为initialValue不存在，因此一开始的previous值等于数组的第一个元素,从而current值在第一次调用的时候就是数组的第二个元素.
    previous = initialValue = 0, current = 1
    // 第一次迭代
    previous = (0 + 1) =  1, current = 2
    // 第二次迭代
    previous = (1 + 2) =  3, current = 3
    // 第三次迭代
    previous = (3 + 3) =  4, current = undefined (退出)
---
    var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
        return a.concat(b);
    }, []);
    // flattened is [0, 1, 2, 3, 4, 5]

------------
### Object.assign() 方法介绍
可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。

    Object.assign(target, ...sources)

target: 目标对象 sources:任意源对象
Object.assign() 拷贝的是在 source 里是对象的属性的引用而不是对象本身。

###### 具体描述
Object.assign 方法只会拷贝源对象自身的并且可枚举的属性到目标对象身上。该方法使用源对象的 [ [ Get ] ] 和目标对象的 [ [ Set ] ]，所以它会调用相关 getter 和 setter。因此，它分配属性不仅仅是复制或定义新的属性。如果合并源包含了 getter，那么该方法就不适合将新属性合并到原型里。假如是拷贝属性定义到原型里，包括它们的可枚举性，那么应该使用 Object.getOwnPropertyDescriptor() 和 Object.defineProperty() 。
String类型和 Symbol 类型的属性都会被拷贝。
注意，在属性拷贝过程中可能会产生异常，比如目标对象的某个只读属性和源对象的某个属性同名，这时该方法会抛出一个 TypeError 异常，拷贝过程中断，已经拷贝成功的属性不会受到影响，还未拷贝的属性将不会再被拷贝。
注意， Object.assign 会跳过那些值为 null 或 undefined 的源对象。





