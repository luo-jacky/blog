---
title: Nuxt使用说明（一）
date: 2022-08-04 12:00:00
sidebar: 'auto'
categories:
  - frontend
tags:
  - nuxt
  - frontend
author: 吴秀华
publish: true
---


# Nuxt 3 使用
## markdown插件
markdown-preview-enhanced：
使用参考：https://www.cnblogs.com/LuckyZLi/p/9776143.html

## 参考文档

官方文档：https://v3.nuxtjs.org/api/composables/use-async-data/

中文文档：http://57code.gitee.io/nuxt3-docs-zh/   http://57code.github.io/nuxt3-docs-zh/

支持库：https://modules.nuxtjs.org/?version=3.x

PM2文档：https://pm2.keymetrics.io/docs/usage/quick-start/


### 创建项目

打开 Visual Studio Code , 打开内置终端并输入下面命令创建一个nuxt项目(node版本需要高于v14.16.0)

```
npx nuxi init nuxt3-app
```

### 安装依赖

```
yarn install
```

### 启动

```
yarn dev
```
浏览器会自动打开：http://localhost:3000


### 页面
app.vue 去除欢迎页面，新增路由出口：
```
<template>
  <div>
    <NuxtPage></NuxtPage>
  </div>
</template>
```
在nuxt3 根目录下创建pages目录，创建一个index页面，nuxt会根据pages下的目录和文件名自动生成路由。

```
<template>
  <div>
    <h2>Hello World</h2>
  </div>
</template>
```

<!-- ![helloworld](./assets/use/1.jpg) -->


### 路由跳转
使用 <NuxtLink to="/"></NuxtLink> 进行路由跳转（等同于a标签使用href）

pages目录下创建product/list.vue

```
<template>
  <div>
    productlist
  </div>
</template>
```

pages下的index.vue修改为：

```
<template>
  <div>
    <h2>Hello World</h2>
    <NuxtLink to="/product/list">goto productList</NuxtLink>
  </div>
</template>
```

<!-- ![2](./assets/use/2.jpg) -->

<!-- ![3](./assets/use/3.jpg) -->

### 动态路由
如果我们在文件名或者文件夹名称里面包含了方括号，它们将被转换为动态路由参数

```
-| pages/
---| users-[group]/
-----| [id].vue
```

上面案例我们可以在组件[id].vue中访问group、id这两个参数:

```
<template>
  {{ $route.params.group }}
  {{ $route.params.id }}
</template>
```

通过 /users-admins/123 导航即可:

```
<NuxtLink to="/users-admins/123">管理员123</NuxtLink>
```

### 嵌套路由
目录和文件同名，就制造了嵌套路由。

比如下面目录结构：

```
-| pages/
---| parent/
------| child.vue
---| parent.vue
```

parent.vue
```
<template>
  <div>
    <h2>我是爸爸</h2>
    <NuxtChild></NuxtChild>
  </div>
</template>
```

parent/child.vue
```
<template>
  <div>
    <p>我是宝宝</p>
  </div>
</template>
```

等同于创建了路由：
```
{
  path: '/parent',
  children: [
    {
      path: 'child'
    }
  ]
}
```


## layout布局

### 默认布局
那些放在layouts/目录下的SFC会被自动加载进来，如果我们创建的SFC名为default.vue，将会被用于项目所有页面中作为布局模板。

layouts/default.vue：
```
<template>
  <div>
    通用布局页，default.vue:
    <slot />
  </div>
</template>
```

### 自定义布局
如果我们的布局文件名不叫default，而是别的，比如custom.vue，想要使用它们，就必须在某个页面中设置页面属性layout。

custom.vue：
```
<template>
  <div>
    内容来自自定义布局页custom.vue！
    <slot />
  </div>
</template>
```

可以在helloworld.vue中试试custom这个布局，helloworld.vue：
```
<script>
export default {
  layout: "custom"
}
</script>
```

### 使用NuxtLayout
可以使用NuxtLayout组件结合slots获得完全控制力，同时需要设置组件选项layout: false。

helloworld.vue
```
<template>
  <NuxtLayout name="custom">
    <template #header>
     <h1>hello page</h1>
    </template>
    some content...
  </NuxtLayout>
</template>
<script>
export default {
  layout: false,
};
</script>
```

修改一下custom.vue
```
<template>
  <div>
    内容来自自定义布局页custom.vue！
    <slot name="header"/>
    <slot />
  </div>
</template>
```
我们甚至能组合多个布局页：
```
<template>
  <div>
    <NuxtLayout name="custom">
      <template #header>
        <h1>hello page</h1>
      </template>
      some content...
    </NuxtLayout>

    <NuxtLayout name="default">
      some content...
    </NuxtLayout>
  </div>
</template>
```

## 组件 Components
### 自动导入组件

我们把Vue组件放在components/目录，这些组件可以被用在页面和其他组件中，以往我们使用这些组件需要导入并注册它们，但Nuxt会自动导入components/目录中的任意组件。比如：
```
| components/
--| TheHeader.vue
--| TheFooter.vue
```

layouts/default.vue:
```
<template>
  <div>
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>
```
### 组件名称约定
没有嵌套的组件会以文件名直接导入，但如果存在嵌套关系哪？例如下面的路径：
```
| components/
--| base/
----| foo/
------| Button.vue
```

那么组件名称将会基于路径和文件名连起来，比如上面的base/foo/Button.vue注册名称将会是BaseFooButton，将来用起来会像下面这样：
```
<BaseFooButton />
```

### 组件懒加载
如果在组件名前面加上Lazy前缀，则可以按需懒加载该组件，可用于优化打包尺寸；
```
<template>
  <div>
    <h1>Mountains</h1>
    <LazyMountainsList/>
  </div>
</template>
```

## 数据获取
所有的请求发送到nuxt3 server端，然后由nuxt3 server端去请求后端的真实接口
nuxt3中提供的数据获取函数有以下四个(它们都必须在setup或生命周期钩子中使用):

* useFetch
* useLazyFetch
* useAsyncData
* useLazyAsyncData

### useAsyncData

在页面、组件或插件中都可以使用useAsyncData获取那些异步数据。比如：
```
const {
  data: Ref<DataT>, // 返回的数据
  pending: Ref<boolean>, // 加载状态指示器
  refresh: (force?: boolean) => Promise<void>, // 强制刷新函数
  error?: any // 请求失败的错误信息
} = useAsyncData(
  key: string,// 唯一键用于多次请求结果去重
  fn: () => Object,// 返回数值的异步函数
  // lazy - 是否在路由之后才请求数据，server - 是否在服务端请求数据
  options?: { lazy: boolean, server: boolean } 
)
```
获取待办事项数据，index.vue：
```
<template>
  <div>
    <!-- 待办列表 -->
    <div v-for="todo in todos" :key="todo.id">
      <input type="checkbox" v-model="todo.completed">
      <strong>{{todo.title}}</strong>
    </div>
  </div>
</template>
<script setup lang="ts">
const { data: todos } = await useAsyncData(
  'count', () => $fetch('/api/todos'))
</script>
```

### useLazyAsyncData

该方法等效于useAsyncData，仅仅设置了lazy选项为true，也就是它不会阻塞路由导航，这意味着我们需要处理data为null的情况（或者通过default选购给data设置一个默认值）

### useFetch
页面、组件或者插件中可以使用useFetch获取任意URL资源。

useFetch是对useAsyncData包装，自动生成key同时推断响应类型，用起来更简单。

看下面方法签名，基本完全相同：
```
const {
  data: Ref<DataT>,
  pending: Ref<boolean>,
  refresh: (force?: boolean) => Promise<void>,
  error?: any
} = useFetch(url: string, options?)
```

### useLazyFetch
该方法等效于useFetch，仅设置了lazy选项为true，所以它不会阻塞路由导航，这意味着我们需要处理data为null的情况（或者通过default选购给data设置一个默认值）

### 最佳实践

由于请求回来的数据会存储在页面payload中，甚至包括那些没有用到的字段，所以文档中明确建议大家只选择那些组件用到的数据，我们可以设置$fetch的pick选项。

比如，下面的用法：
```
const { data: mountain } = await useFetch('/api/mountains/everest', { 
  pick: ['title', 'description'] 
})
```

## 状态共享
Nuxt3提供了 useState 创建响应式且服务端友好的跨组件状态共享能力。
useState 是服务端友好的 ref 替换。它的值在服务端渲染（客户端注水的过程中）将被保留并通过唯一key在组件间共享。

方法签名: key：唯一键用于去重; init：提供初始值的函数
```
useState<T>(key: string, init?: () => T): Ref<T>
```

### useState实践
声明一个状态，index.vue
```
const counter = useState("counter", () => Math.round(Math.random() * 1000))
```

```
<button @click="counter++">+</button>
{{ counter }}
<button @click="counter--">-</button>
```

### 共享状态
我们的全局状态当然想要在组件之间共享，此时可以利用nuxt的composables自动导入特性，把它们定义在composables目录中，这样他们将成为全局类型安全的状态。

composables/useCounter.ts
```
export const useCounter = () =>
  useState("counter", () => Math.round(Math.random() * 1000));
```

## 插件机制
plugins目录
Nuxt3会自动读取plugins目录下的文件并加载它们。我们可以在文件名上使用.server或者.client前缀使他们仅作用域服务端或者客户端。

### 创建插件
使用defineNuxtPlugin()注册一个插件
```
import { defineNuxtPlugin } from '#app'
// 唯一的参数是nuxt实例
export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
})
```

插件用例：自动提供帮助方法
一个常见应用是给NuxtApp实例提供一些额外的帮助方法，我们可以通过编写一个插件，返回一个对象，在里面设置providekey，比如：
```
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: () => 'world'
    }
  }
})
```

使用这个helper，index.vue：
```
// 会自动加上$前缀
const { $hello } = useNuxtApp();
console.log($hello())
```

插件用例：访问Vue实例
如果想要扩展Vue，我们通常要访问Vue实例，引入Vue插件。在nuxt3中可以通过插件访问nuxtApp.vueApp.use(xxx)做到。
我们引入vue-devui试一下，前面我们曾经试图自动导入失败了，这里我们手动导入：
```
npm i vue-devui
```
创建一个插件vue-devui-plugin.ts：
```
import { defineNuxtPlugin } from "#app";
import { Button } from "vue-devui";
import 'vue-devui/button/style.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Button);
});
```

使用组件测试一下：
```
<d-button>按钮</d-button>
```

## 部署
运行 yarn build， 打包后的所有文件都在 .output 文件夹中。 静态资源在 public 子目录中， 服务及其依赖在 server 子目录中。

这个 .output 文件夹可以部署到你的 Node.js 服务上 ，服务器可以用 pm2。

要以生产模式启动服务，请运行：
```
node .output/server/index.mjs
```

### pm2 部署
pm2是可以用于生产环境的Nodejs的进程管理工具，并且它内置一个负载均衡。它不仅可以保证服务不会中断一直在线，并且提供0秒reload功能，还有其他一系列进程管理、监控功能。并且使用起来非常简单。

根目录下创建pm2配置文件 ecosystem.config.js
```
module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
};
```

```
pm2 start ecosystem.config.js --env production
netstat -ano |findstr 3000
```

```
apps:json结构，apps是一个数组，每一个数组成员就是对应一个pm2中运行的应用

name:应用程序名称"app"

cwd:应用程序所在的目录"./"

script:应用程序的脚本路径"./"

log_date_format: 日志文件名输出日期格式"YYYY-MM-DD HH:mm Z"

error_file:自定义应用程序的错误日志文件"./logs/app-err.log",

out_file:自定义应用程序日志文件"./logs/app-out.log"

instances: 应用启动实例个数，仅在cluster模式有效 默认为fork；或者 max

min_uptime:最小运行时间，这里设置的是60s即如果应用程序在60s内退出，pm2会认为程序异常退出，此时触发重启max_restarts设置数量

max_restarts:设置应用程序异常退出重启的次数，默认15次（从0开始计数）

cron_restart:定时启动，解决重启能解决的问题

watch:是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件。

"ignore_watch": [                           // 不用监听的文件
            "node_modules",
            "logs"
        ],
merge_logs:// 设置追加日志而不是新建日志

exec_interpreter:应用程序的脚本类型，这里使用的shell，默认是nodejs

exec_mode:应用程序启动模式，这里设置的是cluster_mode（集群），默认是fork

autorestart:启用/禁用应用程序崩溃或退出时自动重启,默认为true, 发生异常的情况下自动重启

vizion:启用/禁用vizion特性(版本控制)

"args": "", // 传递给脚本的参数

env: {
        PM2_SERVE_PATH: "./apidoc",    //静态服务路径
        PM2_SERVE_PORT: 8080,   //静态服务器访问端口
        NODE_ENV: 'development' //启动默认模式
      },

env_production : {
        NODE_ENV: 'production'  //使用production模式 pm2 start ecosystem.config.js --env production
      },
```

pm2用法：
```
npm install pm2 -g     # 命令行安装 pm2 
pm2 start app.js -i 4 #后台运行pm2，启动4个app.js 
# 也可以把'max' 参数传递给 start
# 正确的进程数目依赖于Cpu的核心数目
pm2 start app.js --name my-api # 命名进程
pm2 list               # 显示所有进程状态
pm2 monit              # 监视所有进程
pm2 logs               #  显示所有进程日志
pm2 stop all           # 停止所有进程
pm2 restart all        # 重启所有进程  pm2 reload all         # 0秒停机重载进程 (用于 NETWORKED 进程)
pm2 stop 0             # 停止指定的进程
pm2 restart 0          # 重启指定的进程
pm2 startup            # 产生 init 脚本 保持进程活着
pm2 web                # 运行健壮的
pm2 delete 0           # 杀死指定的进程
pm2 delete all         # 杀死全部进程


运行进程的不同方式：
pm2 start app.js -i max  # 根据有效CPU数目启动最大进程数目
pm2 start app.js -i 3      # 启动3个进程
pm2 start app.js -x        #用fork模式启动 app.js 而不是使用 cluster
pm2 start app.js -x -- -a 23   # 用fork模式启动 app.js 并且传递参数 (-a 23)
pm2 start app.js --name serverone  # 启动一个进程并把它命名为 serverone
pm2 stop serverone       # 停止 serverone 进程
pm2 start app.json        # 启动进程, 在 app.json里设置选项
pm2 start app.js -i max -- -a 23                   #在--之后给 app.js 传递参数
pm2 start app.js -i max -e err.log -o out.log  # 启动 并 生成一个配置文件
你也可以执行用其他语言编写的app  ( fork 模式):
pm2 start my-bash-script.sh    -x --interpreter bash
pm2 start my-python-script.py -x --interpreter python

```