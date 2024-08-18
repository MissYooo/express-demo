# Express 快速入门 Demo

一个简单的示例项目用于展示如何使用 Express.js 构建 Web 应用程序。

## 目录结构

```
- index.ts     # 主应用程序文件
- router       # 路由文件夹
- middleware   # 中间件文件夹
- public       # 静态资源文件夹
```

## 安装与运行

```sh
pnpm install
pnpm start
```

## 特性

### 基本使用

- 设置基本的路由处理

### Request 对象

- 如何访问请求头、查询参数、POST 数据等

### Response 对象

- 发送 HTTP 响应、设置状态码和头部信息

### 路由

- 定义不同的路由来处理不同的 URL 请求

### 中间件

- 内置中间件
- 自定义中间件
- 错误处理中间件
