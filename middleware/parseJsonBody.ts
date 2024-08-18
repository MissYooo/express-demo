import { Request, Response, NextFunction } from 'express'
/**
 * 处理JSON的中间件
 */
const parseJsonBody = (req: Request, res: Response, next: NextFunction) => {
  if (req.header('content-type') !== 'application/json') return next()
  let result: string = ''
  req.on('data', chunk => result += chunk.toString())
  req.on('end', () => {
    try {
      req.body = JSON.parse(result)
    } catch (error) {
      res.status(400).send('Invalid JSON')
    }
    next()
  })
}
export default parseJsonBody