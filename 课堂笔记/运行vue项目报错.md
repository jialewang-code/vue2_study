#### [Vue项目报错：npm ERR! code ELIFECYCLE npm ERR! errno 126](https://www.cnblogs.com/zhaohui-116/p/12865354.html)

运行vue项目报如下错误：

```
npm ERR! code ELIFECYCLE
npm ERR! errno 126
npm ERR! todos@1.0.0 dev: `webpack-dev-server --inline --progress --config build/webpack.dev.conf.js`
npm ERR! Exit status 126
npm ERR! 
npm ERR! Failed at the todos@1.0.0 dev script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/lijie/.npm/_logs/2020-05-10T13_50_02_149Z-debug.log
```

原因：可能是由于node_modules模块中缺失或者某些东西冲突引起的，我们可以使用如下的方法解决这个问题：

**在项目下依次输入以下命令：先移除原项目的node_modules模块和package-lock.json，再强制清除缓存，然后重新安装，**

```
rm -rf node_modules
rm package-lock.json
npm cache clear --force
npm install
```

最后运行项目，完美解决。

