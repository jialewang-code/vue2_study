## vuex

#### 1.actions 可以返回一个 Promise

#### 2.vuex 各属性函数可以映射到组件

- component.vue

```js
组件内
import {mapActions,mapGetters} from 'vuex'
//...
methods:{
  ...mapActions(['addCount']);
  ...mapGetters(['addToCart','addCount'])
}
```

## \$bus 事件总线

#### 兄弟组件，或是没有关系组件之间传递事件

- Main.js

```js
//main.js注册
Vue.prototype.$bus = new Vue();
```

- componentA.vue

```js
//组件内传递
this.$bus.$emit("addCount", params);
```

- componentB.vue

```js
//组件内使用
this.$bus.$on("addCount", params);
//...
destroyed: {
	//组件销毁时要取消$BUS事件
	this.$bus.$off("addCount");
}
```
