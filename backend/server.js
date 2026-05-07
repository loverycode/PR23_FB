const express = require('express');
const app = express();
const PORT = 3000;
const SERVER_ID = process.env.SERVER_ID || '?';

app.get('/', (req, res) => {
    res.json({
        server: `backend-${SERVER_ID}`,
        port: PORT,
        time: new Date().toISOString()
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ backend-${SERVER_ID} запущен на порту ${PORT}`);
});