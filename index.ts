import express, { Request, Response, NextFunction } from 'express'
import userRouter from './router/user'
import orderRouter from './router/order'
import parseJsonBody from './middleware/parseJsonBody'
import path from 'path'
const app = express()
// 自定义中间件
app.use(parseJsonBody)
// 内置中间件
// app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
// 提供静态文件
// http://localhost:3000/img.jpg
app.use(express.static(path.resolve('public')))
// http://localhost:3000/static/img.jpg
app.use('/static', express.static(path.resolve('public')))


app.all('/error', (req, res, next) => {
  next(new Error('模拟出错了'))
})
// 错误处理中间件
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.message)
  res.send({
    code: 500,
    msg: err.message
  })
})

// 路由
app.use('/user', userRouter)
app.use('/order', orderRouter)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`express在http://localhost:${PORT}已启动`)
})