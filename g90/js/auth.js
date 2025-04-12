import { apiRequest, validateEmail, showMessage } from './utils.js';

// PB01 - Đăng nhập
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!validateEmail(email)) {
        showMessage('error-message', 'Email không hợp lệ');
        return;
    }

    const result = await apiRequest('/login', 'POST', { email, password });
    if (result.success) {
        window.location.href = '../../pages/home.html';
    } else {
        showMessage('error-message', result.message || 'Bạn nhập sai Email hoặc Password');
    }
});

// PB02 - Đăng ký
document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    if (!validateEmail(email)) {
        showMessage('message', 'Email không hợp lệ');
        return;
    }

    const result = await apiRequest('/register', 'POST', { name, email, phone, password });
    if (result.success) {
        showMessage('message', 'Đăng ký thành công! Vui lòng kiểm tra email.', true);
        setTimeout(() => window.location.href = 'login.html', 2000);
    } else {
        showMessage('message', result.message || 'Đăng ký thất bại');
    }
});

// PB03 - Quên mật khẩu
document.getElementById('forgotPasswordForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;

    if (!validateEmail(email)) {
        showMessage('message', 'Email không hợp lệ');
        return;
    }

    const result = await apiRequest('/forgot-password', 'POST', { email });
    if (result.success) {
        showMessage('message', 'Liên kết đặt lại mật khẩu đã được gửi qua email.', true);
    } else {
        showMessage('message', result.message || 'Email không tồn tại');
    }
});