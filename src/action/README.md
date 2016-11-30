#  Action

## Action的定义
>Action 是把数据从应用（译者注：这里之所以不叫 view 是因为这些数据有可能是服务器响应，用户输入或其它非 view 的数据 ）传到 store 的有效载荷。它是 store 数据的唯一来源。一般来说你会通过 store.dispatch() 将 action 传到 store。

添加新 todo 任务的 action 是这样的：

    const ADD_TODO = 'ADD_TODO'       // ADD_TODO 就是一个action
    {
      type: ADD_TODO,
      text: 'Build my first Redux app'
    }


Action 本质上是 JavaScript 普通对象。我们约定 action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作。多数情况下，type 会被定义成字符串常量。当应用规模越来越大时，建议使用单独的模块或文件来存放 action。

    import { ADD_TODO, REMOVE_TODO } from '../actionTypes'

>
##### 样板文件使用提醒
使用单独的模块或文件来定义 action type 常量并不是必须的，甚至根本不需要定义。对于小应用来说，使用字符串做 action type 更方便些。不过，在大型应用中把它们显式地定义成常量还是利大于弊的。
参照 [减少样板代码](http://cn.redux.js.org//docs/recipes/ReducingBoilerplate.html) 获取更多保持代码简洁的实践经验。

除了 type 字段外，action 对象的结构完全由你自己决定。[参照 Flux 标准 Action](https://github.com/acdlite/flux-standard-action) 获取关于如何构造 action 的建议。

这时，我们还需要再添加一个 action type 来表示用户完成任务的动作。因为数据是存放在数组中的，所以我们通过下标 index 来引用特定的任务。而实际项目中一般会在新建数据的时候生成唯一的 ID 作为数据的引用标识。

    {
      type: TOGGLE_TODO,
      index: 5
    }

**我们应该尽量减少在 action 中传递的数据**。比如上面的例子，传递 index 就比把整个任务对象传过去要好。
最后，再添加一个 action type 来表示当前的任务展示选项

    {
      type: SET_VISIBILITY_FILTER,
      filter: SHOW_COMPLETED
    }

# 同步Action 创建函数
**Action 创建函数** 就是生成 action 的方法。“action” 和 “action 创建函数” 这两个概念很容易混在一起，使用时最好注意区分。

在 Redux 中的 action 创建函数只是简单的返回一个 action:

    function addTodo(text) {
      return {
        type: ADD_TODO,
        text
      }
    }

#源码

##actions.js
    /*
     * action 类型
     */

    export const ADD_TODO = 'ADD_TODO';
    export const TOGGLE_TODO = 'TOGGLE_TODO'
    export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

    /*
     * 其它的常量
     */

    export const VisibilityFilters = {
      SHOW_ALL: 'SHOW_ALL',
      SHOW_COMPLETED: 'SHOW_COMPLETED',
      SHOW_ACTIVE: 'SHOW_ACTIVE'
    }

    /*
     * action 创建函数
     */

    export function addTodo(text) {
      return { type: ADD_TODO, text }
    }

    export function toggleTodo(index) {
      return { type: TOGGLE_TODO, index }
    }

    export function setVisibilityFilter(filter) {
      return { type: SET_VISIBILITY_FILTER, filter }
    }

----------
#高阶Action用法
 具体代码我就不直接拷贝了 详细请参考下面的官方文档
[异步 Action Redux中文文档](http://cn.redux.js.org//docs/advanced/AsyncActions.html)
##描述
上面我们讲的是同步操作每当 dispatch action 时，state 会被立即更新。下面说说异步的。
当调用异步 API 时，有两个非常关键的时刻：发起请求的时刻，和接收到响应的时刻 （也可能是超时）。

这两个时刻都可能会更改应用的 state；为此，你需要 dispatch 普通的同步 action。一般情况下，每个 API 请求都需要 dispatch 至少三种 action：

- 一种通知 reducer 请求开始的 action。
>  对于这种 action，reducer 可能会切换一下 state 中的 isFetching 标记。以此来告诉 UI 来显示加载界面。

- 一种通知 reducer 请求成功的 action。
> 对于这种 action，reducer 可能会把接收到的新数据合并到 state 中，并重置  isFetching。UI 则会隐藏加载界面，并显示接收到的数据。

- 一种通知 reducer 请求失败的 action。
> 对于这种 action，reducer 可能会重置 isFetching。另外，有些 reducer 会保存这些失败信息，并在 UI 里显示出来。

为了区分这三种 action，可能在 action 里添加一个专门的 status 字段作为标记位：

    { type: 'FETCH_POSTS' }
    { type: 'FETCH_POSTS', status: 'error', error: 'Oops' }
    { type: 'FETCH_POSTS', status: 'success', response: { ... } }

又或者为它们定义不同的 type：

    { type: 'FETCH_POSTS_REQUEST' }
    { type: 'FETCH_POSTS_FAILURE', error: 'Oops' }
    { type: 'FETCH_POSTS_SUCCESS', response: { ... } }

究竟使用带有标记位的同一个 action，还是多个 action type 呢，完全取决于你。这应该是你的团队共同达成的约定。使用多个 type 会降低犯错误的机率，但是如果你使用像 [redux-actions](https://github.com/acdlite/redux-actions) 这类的辅助库来生成 action 创建函数和 reducer 的话，这就完全不是问题了。

# 异步 action 创建函数
 如何把同步 action 创建函数和网络请求结合起来呢？标准的做法是使用 [Redux Thunk middleware。](https://github.com/gaearon/redux-thunk)要引入 redux-thunk 这个专门的库才能使用。
  * middleware (通过使用指定的 middleware，action 创建函数除了返回 action 对象外还可以返回函数。)
 这时，这个 action 创建函数就成为了 thunk。

当 action 创建函数返回函数时，这个函数会被 Redux Thunk middleware 执行。这个函数并不需要保持纯净；它还可以带有副作用，包括执行异步 API 请求。这个函数还可以 dispatch action，就像 dispatch 前面定义的同步 action 一样。

## actions.js

    import fetch from 'isomorphic-fetch'    // 类似 XMLHttpRequest的东东


    // 来看一下我们写的第一个 thunk action 创建函数！
    // 虽然内部操作不同，你可以像其它 action 创建函数 一样使用它：
    // store.dispatch(fetchPosts('reactjs'))
    export function fetchPosts() {
        // Thunk middleware 知道如何处理函数。
        // 这里把 dispatch 方法通过参数的形式传给函数，
        // 以此来让它自己也能 dispatch action。

        return function (dispatch) {
            // 首次 dispatch：更新应用的 state 来通知
            // API 请求发起了。Action1 通知 reducer 请求开始的 action

             dispatch(Action1)

            // thunk middleware 调用的函数可以有返回值，
            // 它会被当作 dispatch 方法的返回值传递。
            // 这个案例中，我们返回一个等待处理的 promise。
            // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。

            return fetch('url')
                    .then(response => response.json())
            .then(json =>
            // 可以多次 dispatch！
            // 这里，使用 API 请求结果来更新应用的 state。
           //Action2 一种通知 reducer 请求成功的 action。
            dispatch(Action2)
            )
            // 在实际应用中，还需要
            // 捕获网络请求的异常。
        }
    }
----------
相信观看到此的都基本明白了action的作用和基本用法了, 只要明白 --> **Action 只是描述了有事情发生了这一事实**


