### 防抖函数 debounce

```js
//防抖函数debounce
function debounce(func, delay) {
	let time = null;
	return function (...args) {
		if (time) clearTimeout(time);
		time = setTimeout(() => {
			func.apply(this, args);
		}, delay);
	};
}
```
