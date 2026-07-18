const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
const startedAt = new Date().toISOString();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>PipeOps Hello App</title></head>
      <body style="font-family: sans-serif; text-align: center; margin-top: 10%;">
        <h1>Hello from PipeOps 👋</h1>
        <p>Deployed via the PipeOps MCP tool.</p>
        <p>Server started at: ${startedAt}</p>
        <p>Current time: ${new Date().toISOString()}</p>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', startedAt, now: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`pipeops-hello-app listening on port ${port}`);
});
