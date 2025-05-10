import { apiRequest } from './api.js';

async function loadUsers() {
    const result = await apiRequest('/users');
    if (result.success) {
        const userList = document.getElementById('userList');
        userList.innerHTML = '';
        result.data.forEach(user => {
            userList.innerHTML += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.status}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="editUser('${user.id}')">Sửa</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteUser('${user.id}')">Xóa</button>
                    </td>
                </tr>
            `;
        });
    }
}

function createDefaultAdmins() {
    const defaultAdmins = [
        {
            email: 'admin@gmail.com',
            password: 'admin123',
            role: 'admin'
        }
    ];

    let users = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    defaultAdmins.forEach(admin => {
        const exists = users.some(user => user.email === admin.email);
        if (!exists) {
            users.push(admin);
            console.log(`✔️ Admin '${admin.email}' đã được thêm.`);
        }
    });

    localStorage.setItem('registeredUsers', JSON.stringify(users));
}

// Gọi khi file `users.js` load
createDefaultAdmins();
function handleLogin(email, password) {
    const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        if (user.role === 'admin') {
            window.location.href = '../admin/project.html';
        } else {
            window.location.href = '../home.html';
        }
    } else {
        alert('Sai tài khoản hoặc mật khẩu!');
    }
}
