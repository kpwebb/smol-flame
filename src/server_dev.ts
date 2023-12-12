
import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import app from './main'

const worker = new Hono()
worker.use('/favicon.ico', serveStatic({ path: '/static/favicon.ico' }))
app.use('/static/*', serveStatic({ root: './' }))

worker.route('/', app)
//worker.notFound(app.notFoundHandler)

export default worker