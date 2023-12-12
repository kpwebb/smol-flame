import { Context } from "hono";
import { HtmlEscapedString } from "hono/utils/html";

export function pageTemplate (c:Context, content:HtmlEscapedString) {
return c.html(
        <html>
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            {/* uncomment for client-side code
            {import.meta.env.PROD ? (
            <>
                <script type='module' src='/static/client.js'></script>
            </>
            ) : (
            <>
                <script type='module' src='/src/client.ts'></script>
            </>
            )}
            */}
            <link href="/main.css" rel="stylesheet"/>
        </head>
        <body>
            {content}
        </body>
        </html>
    );
}