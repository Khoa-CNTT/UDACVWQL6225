import { apiRequest } from './api.js';

async function loadServices(query = '') {
    const result = await apiRequest(`/services?search=${query}`);
    if (result.success) {
        const serviceList = document.getElementById('serviceList');
        serviceList.innerHTML = '';
        result.data.forEach(service => {
            serviceList.innerHTML += `
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <img src="${service.image || '../../assets/images/pet-icon.png'}" class="card-img-top" alt="${service.name}">
                        <div class="card-body">
                            <h5 class="card-title">${service.name}</h5>
                            <p class="card-text">${service.description}</p>
                            <p class="card-text"><strong>Giá:</strong> ${service.price} VND</p>
                            <button class="btn btn-primary" onclick="viewService('${service.id}')">Xem Chi Tiết</button>
                        </div>
                    </div>
                </div>
            `;
        });
    }
}

function searchServices() {
    const query = document.getElementById('searchInput').value;
    loadServices(query);
}

function viewService(id) {
    alert(`Xem chi tiết dịch vụ/sản phẩm ID: ${id}`);
    // Có thể chuyển hướng đến trang chi tiết nếu cần
}

loadServices();