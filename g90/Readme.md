Petcare
├── assets/                # Tài nguyên tĩnh
│   ├── images/            # Hình ảnh
│   │   ├── logo.png       # Logo hệ thống
│   │   └── pet-icon.png   # Icon thú cưng
│   ├── fonts/             # Font tùy chỉnh (nếu có)
│   └── icons/             # Icon SVG hoặc font icons
├── css/                   # CSS tùy chỉnh
│   └── custom.css         # Tùy chỉnh giao diện Bootstrap
├── js/                    # JavaScript
│   ├── api.js             # Xử lý gọi API
│   ├── utils.js           # Hàm tiện ích (validate, format, v.v.)
│   ├── auth.js            # Logic đăng nhập, đăng ký, quên mật khẩu
│   ├── profile.js         # Quản lý thông tin cá nhân
│   ├── pet.js             # Quản lý hồ sơ thú cưng
│   ├── vaccination.js     # Theo dõi tiêm phòng
│   ├── services.js        # Tìm kiếm và xem dịch vụ/sản phẩm
│   ├── booking.js         # Đặt lịch khám bệnh
│   ├── cart.js            # Đặt đơn hàng và thanh toán
│   ├── order.js           # Theo dõi trạng thái đơn hàng
│   ├── promotion.js       # Xem ưu đãi và khuyến mãi
│   ├── review.js          # Gửi đánh giá và phản hồi
│   ├── project.js         # Quản lý dự án (PB13 - Quản lý)
│   ├── chatbot.js         # Quản lý chatbot AI
│   ├── user.js            # Quản lý tài khoản người dùng
│   ├── report.js          # Quản lý báo cáo và thống kê
│   ├── security.js        # Quản lý bảo mật và phân quyền
│   ├── invoice.js         # Quản lý hóa đơn và mã QR
│   ├── category.js        # Quản lý danh mục sản phẩm/dịch vụ
│   ├── clinic.js          # Quản lý cơ sở thú y
│   ├── inventory.js       # Quản lý kho hàng
│   ├── promo.js           # Quản lý chương trình khuyến mãi
│   ├── customer.js        # Quản lý khách hàng
│   ├── health.js          # Cập nhật sức khỏe thú cưng
│   ├── appointment.js     # Quản lý lịch hẹn và dịch vụ thú y
│   ├── order-process.js   # Xử lý đơn hàng
│   ├── chatbot-support.js # Hỗ trợ tư vấn qua chatbot
│   └── payment.js         # Xác nhận thanh toán và hóa đơn
├── pages/                 # Các trang HTML
│   ├── auth/              # Trang liên quan đến xác thực
│   │   ├── login.html     # PB01 - Đăng nhập
│   │   ├── register.html  # PB02 - Đăng ký tài khoản
│   │   └── forgot-password.html # PB03 - Quên mật khẩu
│   ├── user/              # Trang người dùng
│   │   ├── profile.html   # PB04 - Quản lý thông tin cá nhân
│   │   ├── pet-profile.html # PB05 - Quản lý hồ sơ thú cưng
│   │   ├── vaccination.html # PB06 - Theo dõi tiêm phòng
│   │   ├── services.html  # PB07 - Tìm kiếm và xem dịch vụ/sản phẩm
│   │   ├── booking.html   # PB08 - Đặt lịch khám bệnh
│   │   ├── cart.html      # PB09 - Đặt đơn hàng và thanh toán
│   │   ├── orders.html    # PB10 - Theo dõi trạng thái đơn hàng
│   │   ├── promotions.html # PB11 - Xem ưu đãi và khuyến mãi
│   │   ├── review.html    # PB12 - Gửi đánh giá và phản hồi
        ├── chatbot-suport.html   # PB13 - Nhận tư vấn từ chatbot

│   ├── admin/             # Trang quản trị
│   │   ├── project.html   # PB - Quản lý dự án
│   │   ├── users.html     # PB14 - Quản lý tài khoản người dùng
│   │   ├── reports.html   # PB15 - Quản lý báo cáo và thống kê
│   │   ├── security.html  # PB16 - Quản lý bảo mật và phân quyền
│   │   ├── invoices.html  # PB17 - Quản lý hóa đơn và mã QR
│   │   ├── categories.html # PB18 - Quản lý danh mục sản phẩm/dịch vụ
│   │   ├── clinics.html   # PB19 - Quản lý cơ sở thú y
│   │   ├── inventory.html # PB20 - Quản lý kho hàng
│   │   ├── promos.html    # PB21 - Quản lý chương trình khuyến mãi
│   │   ├── customers.html # PB22 - Quản lý khách hàng
│   │   ├── pet-health.html # PB23 - Cập nhật sức khỏe thú cưng
│   │   ├── appointments.html # PB24 - Quản lý lịch hẹn và dịch vụ thú y
│   │   ├── order-process.html # PB25 - Xử lý đơn hàng
│   │   ├── chatbot.html # PB26 - Hỗ trợ tư vấn qua chatbot
│   │   └── payments.html   # PB27 - Xác nhận thanh toán và hóa đơn
│   ├── home.html          # Trang chủ
│   └── 404.html           # Trang lỗi
├── components/            # Thành phần tái sử dụng
│   ├── header.html        # Thanh điều hướng
│   ├── footer.html        # Chân trang
│   ├── sidebar.html       # Menu bên (cho admin)
│   └── modal.html         # Modal chung (xác nhận, thông báo)
├── index.html             # Trang chính (redirect đến login)
├── package.json           # Quản lý dependencies (nếu dùng Node.js)
└── README.md              # Tài liệu dự án
