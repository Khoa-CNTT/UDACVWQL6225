// db.js
const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '201200', // Đổi thành mật khẩu MySQL của bạn
    database: 'petcare'
});

conn.connect(err => {
    if (err) throw err;
    console.log('✅ Kết nối MySQL thành công!');
});

module.exports = conn;
