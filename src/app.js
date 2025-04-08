const http = require('http');

const PORT = process.env.PORT || 3000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>DevSecOps Pipeline</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background: linear-gradient(135deg, #1d2b64, #f8cdda);
      color: white;
      text-align: center;
    }
    .container {
      background: rgba(0, 0, 0, 0.3);
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    }
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.2rem;
    }
    .glow {
      color: #fff;
      text-shadow: 0 0 5px #fff, 0 0 10px #00f, 0 0 20px #00f;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 class="glow">Ì∫Ä Hello from your DevSecOps Pipeline!</h1>
    <p>Everything is up and running smoothly. Keep deploying securely! Ì¥ê</p>
  </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

server.listen(PORT, () => {
  console.log(`Ì∫Ä Server running on http://localhost:${PORT}`);
});
