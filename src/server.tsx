import { Context, Hono } from 'hono'

import {serveStatic as serveStaticCf }  from 'hono/cloudflare-pages'
import {serveStatic as serveStaticBun}  from 'hono/bun'
  
import { HtmlEscapedString } from "hono/utils/html";

import { pageTemplate } from './template';

const serveStatic = import.meta.env.PROD ? serveStaticCf : serveStaticBun;


const app = new Hono()

app.get('/', (c:Context) => {
  return pageTemplate(c, (( 
    <h1 class="text-2xl text-orange-400 p-10">🕯️ smol flame</h1>
  ) as HtmlEscapedString));
});



// add static resources here
app.use('/main.css', serveStatic({ root: '/static/' }))
app.use('/favicon.ico', serveStatic({ path: '/static/favicon.ico' }))

// static wildcard server
app.use('/static/*', serveStatic({ root: '/static/' }))

//app.notFound(app.notFoundHandler);

export default app;
