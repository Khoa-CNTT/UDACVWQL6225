// --- Tải modal HTML ---
fetch('../../components/modal.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('modalContainer').innerHTML = data;
  });

// --- Hàm mở modal chung ---
function openModal(title, content, onConfirm = null) {
  const modal = new bootstrap.Modal(document.getElementById('commonModal'));
  document.getElementById('commonModalLabel').innerText = title;
  document.querySelector('#commonModal .modal-body').innerText = content;

  const confirmBtn = document.getElementById('modalConfirmBtn');
  if (onConfirm) {
    confirmBtn.style.display = 'inline-block';
    confirmBtn.onclick = () => {
      onConfirm();
      modal.hide();
    };
  } else {
    confirmBtn.style.display = 'none';
  }

  modal.show();
}

// --- Khi DOM sẵn sàng ---
document.addEventListener('DOMContentLoaded', () => {
  // Toggle hiển thị/ẩn mật khẩu
  document.querySelector('.toggle-password').addEventListener('click', function () {
    const pw = document.getElementById('password');
    const icon = this.querySelector('i');
    if (pw.type === 'password') {
      pw.type = 'text';
      icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
      pw.type = 'password';
      icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
  });

  // Xử lý form đăng nhập
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
      openModal('Lỗi', 'Vui lòng nhập đầy đủ email và mật khẩu');
      return;
    }

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (data.success) {
        openModal('Thành công', 'Đăng nhập thành công!', () => {
          window.location.href = '/home.html';
        });
      } else {
        openModal('Lỗi', 'Sai tài khoản hoặc mật khẩu.');
      }
    } catch (err) {
      console.error('Lỗi khi gửi yêu cầu đăng nhập:', err);
      openModal('Lỗi máy chủ', 'Không thể kết nối đến máy chủ. Vui lòng thử lại sau.');
    }
  });
});
