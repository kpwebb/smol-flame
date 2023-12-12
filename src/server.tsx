import { Context, Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { HtmlEscapedString } from "hono/utils/html";

import { pageFormat } from './page';

const app = new Hono()

app.get('/', (c:Context) => {
  return pageFormat(c, (( 
    <h1 class="text-2xl text-orange-400 p-10">🕯️ smol flame</h1>
  ) as HtmlEscapedString));
});

// add static resources here
app.use('/main.css', serveStatic({ root: './static/' }))
app.use('/favicon.ico', serveStatic({ path: './favicon.ico' }))

// static wildcard server
app.use('/static/*', serveStatic({ root: './static/' }))



export default app;
