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

async function editUser(id) {
    alert(`Chỉnh sửa người dùng ID: ${id}`);
}

async function deleteUser(id) {
    if (confirm('Bạn có chắc muốn xóa người dùng này?')) {
        const result = await apiRequest(`/users/${id}`, 'DELETE');
        if (result.success) loadUsers();
    }
}

loadUsers();