export default ({ body, preloadedState }: { body: string, preloadedState: any }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />
    <title>jsfunfoo &#123; &#125;</title>
    <link href="./static/css/main.83756318.chunk.css" rel="stylesheet">
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">${body}</div>
    <script src="./static/js/runtime-main.f8e04ec7.js"></script>
    <script src="./static/js/2.214a01eb.chunk.js"></script>
    <script src="./static/js/main.94572d00.chunk.js"></script>
  </body>
</html>
`;
