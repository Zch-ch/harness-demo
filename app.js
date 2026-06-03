const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: '欢迎使用 Harness Demo 应用！',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.get('/api/info', (req, res) => {
  res.json({
    app: 'Harness Demo',
    environment: process.env.NODE_ENV || 'development',
    uptime: process.uptime()
  });
});

app.listen(PORT, () => {
  console.log(`✅ 服务器运行在 http://localhost:${PORT}`);
  console.log(`📊 健康检查: http://localhost:${PORT}/health`);
  console.log(`ℹ️ 应用信息: http://localhost:${PORT}/api/info`);
});
