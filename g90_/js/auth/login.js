// Tải modal HTML
fetch('../../components/modal.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('modalContainer').innerHTML = data;
    });

function openModal(title, content, onConfirm) {
    const modal = new bootstrap.Modal(document.getElementById('commonModal'));
    document.getElementById('commonModalLabel').innerText = title;
    document.querySelector('.modal-body').innerText = content;

    const confirmBtn = document.getElementById('modalConfirmBtn');
    confirmBtn.onclick = function () {
        onConfirm();
        modal.hide();
    };

    modal.show();
}

// Xử lý hiển thị/ẩn mật khẩu
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.toggle-password').addEventListener('click', function () {
        const passwordInput = document.getElementById('password');
        const icon = this.querySelector('i');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });

   // Xử lý form đăng nhập
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Lấy danh sách người dùng đã đăng ký từ localStorage
    const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // Kiểm tra xem tài khoản có tồn tại không
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        openModal('Xác Nhận Đăng Nhập', `Bạn có muốn đăng nhập với email ${email} không?`, function () {
            window.location.href = '../home.html';
        });
    } else {
        openModal('Đăng Nhập Thất Bại', 'Email hoặc mật khẩu không đúng hoặc tài khoản chưa được đăng ký.', function () {});
    }

    });
});
