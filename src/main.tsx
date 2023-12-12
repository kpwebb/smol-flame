import { Context, Hono } from 'hono'
  
import { HtmlEscapedString } from "hono/utils/html";
import { pageTemplate } from './template';

const app = new Hono()

app.get('/', (c:Context) => {
  return pageTemplate(c, (( 
    <h1 class="text-2xl text-orange-400 p-10">🕯️ smol flame</h1>
  ) as HtmlEscapedString));
});


export default app;
