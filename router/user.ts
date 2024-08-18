import express from 'express'

const router = express.Router()

router.get('/register', (req, res) => {
  res.send('用户注册')
})

router.post('/login', (req, res) => {
  res.send('用户登录')
})

export default router