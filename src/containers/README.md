# 容器组件存放入口

>1.负责管理数据和业务逻辑，不负责 UI 的呈现
2.带有内部状态
3.使用 Redux 的 API

 容器组件负责管理数据和逻辑。
你可能会问，如果一个组件既有 UI 又有业务逻辑，那怎么办？回答是，将它拆分成下面的结构：外面是一个容器组件，里面包了一个UI 组件。前者负责与外部的通信，将数据传给后者，由后者渲染出视图。
React-Redux 规定，所有的 UI 组件都由用户提供，容器组件则是由 React-Redux 自动生成。也就是说，用户负责视觉层，状态管理则是全部交给它。
容器组件（Container Component）是指使用了 react-redux 的 connect 从 store 订阅了 state 的组件。用 Provider 包起来的叫Redux App。

-----------
有个办法能让组件更易懂、更容易复用，那就是 将组件分成两类 。我称之为 容器组件 和 展示组件 ，但也有人叫胖组件和瘦组件（Fat and Skinny）、智能组件和非智能组件（Smart and Dumb）、状态组件和纯组件（Stateful and Pure）、画面和组件（Screen and Component）等等。尽管它们并不 完全 相同，但基本的理念是一致的。
[文档参考->[react]展示组件和容器组件](http://www.tuicool.com/articles/ymEruma)

展示组件 如下：
>
- 关心组件的外观
- 内部可能包含展示组件和容器组件，并且通常有自己的DOM标签和自己的样式。
- 通常可以用 this.props.children 包含其他组件。
- 不依赖于app的其他部分，如Flux action或store等。
- 不需要指定如何加载或操作数据。
- 通过 props 明确地接收数据、发起回调。
- 绝大部分情况下自己没有状态（即使有，也通常是UI状态，而不是数据）
- 可以写成 函数型组件 ，除非需要状态、生命周期钩子函数，或者需要性能优化等
- 例如： Page ， Sidebar ， Story ， UserInfo ， List

容器组件 如下:
>
- 关心组件如何 工作
- 可以包含展示组件和容器组件，但一般不会有自己的DOM标签（除了一些wrapping div之外），绝对不会有样式
- 为展示组件或其他容器组件提供数据
- 调用Flux action并将其作为回调函数提供给展示组件
- 通常是有状态的（stateful），因为通常被作为数据源使用
- 通常不是手写，而是由 高阶组件 生成，如React Redux的 connect() ，Relay的 createContainer() ，Flux Utils的 Container.create() 等
- 例如： UserPage ， FollowersSidebar ， StoryContainer ， FollowedUserList 。

好处
>
- 更好的任务分离。用这种方式写组件可以加深对app和UI的理解。
- 更好的可复用性。同一个展示组件可以搭配不同的状态数据源使用，并且这样构成的容器组件还可以再次复用。
- 展示组件实际上是app的“调色板”。你可以把所有组件都放在一个页面上，让设计师去尝试各种组合，而无需顾忌app的逻辑，还可以在这个页面上运行截图回归测试（screenshot regression test）。
- 强制将“布局组件”如 Sidebar ， Page ， ContextMenu 等分离出来并用 this.props.children 包含，无需在多个容器组件中重写同样的标签和布局。
**  记住， 容器不一定要构造DOM 。从UI的角度来说，它们只需要提供组合的边界.
--------

何时应该使用容器组件？
> 我建议先从展示组件开始构建app。最终你会发现某些中间层组件接收的属性（props）太多了。你会发现，一些组件从来不会使用传给它们的属性，而仅仅是将其传递给下层组件，而且每次下层组件需要更多数据时，你都得重写这些中间层组件。这时就该引入容器组件了。这样，数据和行为属性可以传给底层的叶组件，而不会给组件树中层那些无关的组件带来压力。

|   |	容器组件 | 展示组件
|---|
| Location	  |最顶层，路由处理  |中间和子组件
| Aware of Redux	  |	是  |否
| 读取数据	  |	从 Redux 获取 state  |从 props 获取数据
| 修取数据	  |	从 Redux 获取 actions  |从 props 调用回调函数

容器组件负责以下几件事情
>
- 处理数据逻辑
- 将store中的state转变为props传递给展示组件，对应 mapStateToProps
- 将注入了dispatch的函数作为props传递给展示组件，对应 mapDispatchToProps
- 有状态的(展示组件则是无状态的)
- 发起action，更新state
- 没有DOM标签，没有样式

----
### 展示组件
可复用的组件，又称为“傻瓜组件”，仅仅通过容器组件传进来的props进行UI展示，以及操作回调。感知不到redux的存在，脱离redux框架也能使用，尽量保持无状态(可包含少量的UI状态)，有以下几条原则：
>
- 不理解数据逻辑：不关心数据是如何得到的，也不关心数据是如何改变的
- 只通过props获取数据和操作回调
- 基本是无状态的：必须有的话，可以是UI的状态
