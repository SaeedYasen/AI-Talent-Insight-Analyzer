const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// هذا هو الـ Route الذي سنناديه من الـ Frontend
app.get('/api/status', (req, res) => {
    res.json({ message: "مرحباً بك! السيرفر يعمل وجاهز لاستقبال البيانات 🚀" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});