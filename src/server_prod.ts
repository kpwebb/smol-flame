import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-pages'
import app from './main'

const worker = new Hono()
worker.get('/favicon.ico', serveStatic())
worker.get('/static/*', serveStatic())

worker.route('/', app)
//worker.notFound(app.notFoundHandler)

export default worker