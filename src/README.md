# redux开发目录
![](file:////Users/daizhiyu/Desktop/zhengwei/blog/src/img/redux.png)
------
# redux的三大原则
## 单一数据源
 整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。严格的单向数据流是 Redux 架构的设计核心。
> 这让同构应用开发变得非常容易。来自服务端的 state 可以在无需编写更多代码的情况下被序列化并注入到客户端中。由于是单一的 state tree ，调试也变得非常容易。在开发中，你可以把应用的 state 保存在本地，
从而加快开发速度。此外，受益于单一的 state tree ，以前难以实现的如“撤销/重做”这类功能也变得轻而易举。

## State 是只读的
惟一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。
> 这样确保了视图和网络请求都不能直接修改 state，相反它们只能表达想要修改的意图。因为所有的修改都被集中化处理，且严格按照一个接一个的顺序执行，因此不用担心 race condition 的出现。 Action 就是普通对象而已，因此它们可以被日志打印、序列化、储存、后期调试或测试时回放出来。

## 使用纯函数来执行修改
为了描述 action 如何改变 state tree ，你需要编写 reducers。
> Reducer 只是一些纯函数，它接收先前的 state 和 action，并返回新的 state。刚开始你可以只有一个 reducer，随着应用变大，你可以把它拆成多个小的 reducers，分别独立地操作 state tree 的不同部分，因为 reducer 只是函数，你可以控制它们被调用的顺序，传入附加数据，甚至编写可复用的 reducer 来处理一些通用任务，如分页器。

###用代码来描述
    // 创建store, 传入两个参数
    // 参数1: reducer 用来修改state
    // 参数2(可选): [], 默认的state值,如果不传, 则为undefined
     var store = redux.createStore(reducer, []);
    // 通过 store.getState() 可以获取当前store的状态(state)
    // 默认的值是 createStore 传入的第二个参数
    console.log('state is: ' + store.getState());  // state is:;
    //**单一数据源描述**//
    var addTodo = function(text){
        return {
            type: 'add_todo',
            text: text
        };
    };
    //**使用纯函数来执行修改 描述**//
    // reducer方法, 传入的参数有两个
    // state: 当前的state
    // action: 当前触发的行为, 当前是{type: 'add_todo'}
    // 返回值: 新的state
    var reducer = function(state, action){
        switch (action.type) {
            case 'add_todo':
                return state.concat(action.text);
            default:
                return state;
        }
    };
    //** 以下State 是只读的描述 **//
    // 通过 store.dispatch(action) 来达到修改 state 的目的
    // 注意: 在redux里,唯一能够修改state的方法,就是通过 store.dispatch(action)
    store.dispatch({type: 'add_todo', text: '读书'});
    // 打印出修改后的state
    console.log('state is: ' + store.getState());  // state is: 读书;
    store.dispatch({type: 'add_todo', text: '写作'});
    console.log('state is: ' + store.getState());  // state is: 读书,写作;
    store.dispatch(addTodo('睡觉'));
    console.log('state is: ' + store.getState());  // state is: 读书,写作,睡觉;


