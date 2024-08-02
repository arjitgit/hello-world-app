const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Hello World</title>
      </head>
      <body style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #282c34;">
        <h1 style="color: #61dafb; font-size: 4rem;">Hello World!</h1>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
