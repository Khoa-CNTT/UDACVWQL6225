const express = require('express');
const bodyParser = require('body-parser');
const conn = require('./db');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/login.html'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const sql = 'SELECT * FROM users WHERE username = ? AND password = ? AND role = "admin"';
    conn.query(sql, [username, password], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            res.send('<h2>✅ Đăng nhập thành công với tư cách Admin!</h2>');
        } else {
            res.send('<h2>❌ Sai tài khoản hoặc không phải admin!</h2>');
        }
    });
});

app.listen(3000, () => {
    console.log('🚀 Server chạy tại http://localhost:3000');
});
