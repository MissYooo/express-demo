import express from 'express'
import { resolve } from 'path'
const router = express.Router()


router.get('/:id', (req, res) => {
  // req
  /* console.log(req.params)
  console.log(req.query)
  console.log(req.url)
  console.log(req.path)
  console.log(req.headers)
  console.log(req.get('user-agent'))
  console.log(req.header('user-agent')) */

  // res
  res.sendFile(resolve('public', 'index.html'))
  // res.send('hello express')
  // res.send('<h1>hello express</h1>')
  // res.status(404).send('Not Found')
  /* res.send({
    code: 200,
    msg: '成功'
  }) */
  // res.header('Access-Control-Allow-Origin', '*').send('试试跨域')
})

export default router