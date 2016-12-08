# react-native-demo
使用react-native和redux构建的项目

#redux 环境搭建
>安装依赖
npm install react-redux --save
npm install redux-thunk --save

npm install react-native-xtabbar --save
npm install react-native-drawer-layout --save
npm i react-native-elements --save
npm i react-native-vector-icons --save && react-native link react-native-vector-icons




#redux-redux
   react-redux是官方的react和redux链接工具
>##redux介绍
####Provider
一个很简单的React组件，它主要的作用是把store放到context中，connect就可以获取store，使用store的方法，比如dispatch。其实没有被connect的组件通过声明contextTypes属性也是可以获取store，使用store的方法的，但是这个时候，如果使用dispatch修改了store的state，React-Redux并不能把修改后的state作为props给React组件，可能会导致UI和数据不同步，所以这个时候一定要清楚自己在做什么。
####Connect
一个柯里化函数，函数将被调用两次。第一次是设置参数，第二次是组件与 Redux store 连接。connect 函数不会修改传入的 React 组件，返回的是一个新的已与 Redux store 连接的组件，而且你应该使用这个新组件。connect的使用方式是connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])(Component)，第一次调用的时候4个参数都是可选。
mapStateToProps在store发生改变的时候才会调用，然后把返回的结果作为组件的props。
mapDispatchToProps主要作用是弱化Redux在React组件中存在感，让在组件内部改变store的操作感觉就像是调用一个通过props传递进来的函数一样。一般会配合Redux的bindActionCreators使用。如果不指定这个函数，dispatch会注入到你的组件props中。
mergeProps用来指定mapStateToProps、mapDispatchToProps、ownProps(组件自身属性)的合并规则，合并的结果作为组件的props。如果要指定这个函数，建议不要太复杂。
options里面主要关注pure，如果你的组件仅依赖props和Redux的state，pure一定要为true，这样能够避免不必要的更新。
Component就是要被连接的React组件，组件可以是任意的，不一定是AppRoot。一般会是需要更新store、或者是依赖store中state的最小组件。因为被连接的组件在Redux的state改变后会更新，大范围的更新对性能不友好，而且其中有些组件可能是没必要更新也会更新，所以要尽量拆分、细化，connect仅仅要更新store或依赖store的state的最小组件。
####Reselect
 mapStateToProps也被叫做selector，在store发生变化的时候就会被调用，而不管是不是selector关心的数据发生改变它都会被调用，所以如果selector计算量非常大，每次更新都重新计算可能会带来性能问题。Reselect能帮你省去这些没必要的重新计算。
 Reselect 提供 createSelector 函数来创建可记忆的 selector。createSelector 接收一个 input-selectors 数组和一个转换函数作为参数。如果 state tree 的改变会引起 input-selector 值变化，那么 selector 会调用转换函数，传入 input-selectors 作为参数，并返回结果。如果 input-selectors 的值和前一次的一样，它将会直接返回前一次计算的数据，而不会再调用一次转换函数。这样就可以避免不必要的计算，为性能带来提升。
####文件目录介绍
 src ------------------------------------redux开发目录
>
    action -----------------------------actions的文件
    components -------------------------内部组件
    constants --------------------------常量
    containers -------------------------容器组件
    lib --------------------------------第3方库
    reducers ---------------------------相当于state的状态机,每个类代表一个state
    store ------------------------------控制中心,一般不做改变
    util -------------------------------工具类

[文档参考->Redux系列01：从一个简单例子了解action、store、reducer](https://segmentfault.com/a/1190000004208610)
[文档参考->Redux源码解析](https://github.com/chyingp/redux-source-insight)



redux的核心概念就是store、action、reducer，从调用关系来看如下所示
``
 store.dispatch(action) --> reducer(state, action) --> final state
``

可以先看下面的极简例子有个感性的认识，下面会对三者的关系进行简单介绍
>
    // reducer方法, 传入的参数有两个
    // state: 当前的state
    // action: 当前触发的行为, {type: 'xx'}
    // 返回值: 新的state
    var reducer = function(state, action){
        switch (action.type) {
            case 'add_todo':
                return state.concat(action.text);
            default:
                return state;
        }
    };
    // 创建store, 传入两个参数
    // 参数1: reducer 用来修改state
    // 参数2(可选): [], 默认的state值,如果不传, 则为undefined
    var store = redux.createStore(reducer, []);
    // 通过 store.getState() 可以获取当前store的状态(state)
    // 默认的值是 createStore 传入的第二个参数
    console.log('state is: ' + store.getState());  // state is:
    // 通过 store.dispatch(action) 来达到修改 state 的目的
    // 注意: 在redux里,唯一能够修改state的方法,就是通过 store.dispatch(action)
    store.dispatch({type: 'add_todo', text: '读书'});
    // 打印出修改后的state
    console.log('state is: ' + store.getState());  // state is: 读书

------
1.store：store在这里代表的是数据模型，内部维护了一个state变量，用例描述应用的状态。store有两个核心方法，分别是getState、dispatch。前者用来获取store的状态（state），后者用来修改store的状态。
>
    // 创建store, 传入两个参数
    // 参数1: reducer 用来修改state
    // 参数2(可选): [], 默认的state值,如果不传, 则为undefined
    var store = redux.createStore(reducer, []);
    // 通过 store.getState() 可以获取当前store的状态(state)
    // 默认的值是 createStore 传入的第二个参数
    console.log('state is: ' + store.getState());  // state is:
    // 通过 store.dispatch(action) 来达到修改 state 的目的
    // 注意: 在redux里,唯一能够修改state的方法,就是通过 store.dispatch(action)
    store.dispatch({type: 'add_todo', text: '读书'});

2.action：对行为（如用户行为）的抽象，在redux里是一个普通的js对象。redux对action的约定比较弱，除了一点，action必须有一个type字段来标识这个行为的类型。所以，下面的都是合法的action
>   {type:'add_todo', text:'读书'}
    {type:'add_todo', text:'写作'}
    {type:'add_todo', text:'睡觉', time:'晚上'}

3.reducer：一个普通的函数，用来修改store的状态。传入两个参数 state、action。其中，state为当前的状态（可通过store.getState()获得），而action为当前触发的行为（通过store.dispatch(action)调用触发）。reducer(state, action) 返回的值，就是store最新的state值。
>   // reducer方法, 传入的参数有两个
    // state: 当前的state
    // action: 当前触发的行为, {type: 'xx'}
    // 返回值: 新的state
    var reducer = function(state, action){
        switch (action.type) {
            case 'add_todo':
                return state.concat(action.text);
            default:
                return state;
        }
    };


#redux-thunk
>    redux-thunk 是一个比较流行的redux异步action中间件,比如action中有setTimeout或者通过fetch通用远程API这些场景,那么就应该使用redux-thunk了
     redux-thunk 帮助你统一了异步和同步 action 的调用方式，把异步过程放在 action 级别解决

#redux-logger
