CREATE DATABASE IF NOT EXISTS petcare;
USE petcare;

-- Table: LichSu (History)
CREATE TABLE LichSu (
    ID_LichSu INT(20) PRIMARY KEY,
    ID_ThuCuong INT(20),
    ID_TaiKhoan INT(20),
    NgayNhanDon DateTime,
    DienGiai Text,
    TrangThai Varchar(20),
    FOREIGN KEY (ID_ThuCuong) REFERENCES ThuCuong(ID_ThuCuong),
    FOREIGN KEY (ID_TaiKhoan) REFERENCES TaiKhoan(ID_TaiKhoan)
) CHARACTER SET utf8mb4;

-- Table: PhanHoi (Feedback)
CREATE TABLE PhanHoi (
    ID_PhanHoi INT(20) PRIMARY KEY,
    ID_TaiKhoan INT(20),
    NoiDung Varchar(100),
    NgayPhanHoi DateTime,
    TrangThai Varchar(20),
    FOREIGN KEY (ID_TaiKhoan) REFERENCES TaiKhoan(ID_TaiKhoan)
) CHARACTER SET utf8mb4;

-- Table: CoSoThucY (Healthcare Facility)
CREATE TABLE CoSoThucY (
    ID_CoSoThucY INT(20) PRIMARY KEY,
    TenCoSo Varchar(50),
    DiaChi Varchar(100),
    MoTa Text,
    TrangThai Varchar(20)
) CHARACTER SET utf8mb4;

-- Table: DichVuThucY (Healthcare Service)
CREATE TABLE DichVuThucY (
    ID_DichVu INT(20) PRIMARY KEY,
    TenDichVu Varchar(50),
    MoTa Text,
    Gia Decimal(10,2),
    TrangThai Varchar(20)
) CHARACTER SET utf8mb4;

-- Table: ChatBot
CREATE TABLE ChatBot (
    ID_ChatBot INT(20) PRIMARY KEY,
    ID_TaiKhoan INT(20),
    NoiDungNhan Text,
    NgayGui DateTime,
    DienGiai Varchar(100),
    TrangThai Varchar(20),
    FOREIGN KEY (ID_TaiKhoan) REFERENCES TaiKhoan(ID_TaiKhoan)
) CHARACTER SET utf8mb4;

-- Table: TaiKhoan (Account)
CREATE TABLE TaiKhoan (
    ID_TaiKhoan INT(20) PRIMARY KEY,
    HoTen Varchar(50),
    NamSinh DateTime,
    GioiTinh INT(11),
    DiaChi Varchar(100),
    DienThoai Varchar(10),
    Gmail Varchar(50),
    ID_ChucVu INT(20),
    TenDangNhap Varchar(100),
    MatKhau Varchar(255),
    FOREIGN KEY (ID_ChucVu) REFERENCES ChucVu(ID_ChucVu)
) CHARACTER SET utf8mb4;
INSERT INTO TaiKhoan (ID_TaiKhoan, HoTen, NamSinh, GioiTinh, DiaChi, DienThoai, Gmail, ID_ChucVu, TenDangNhap, MatKhau)
VALUES (
    1,
    'Quản Trị Viên',
    '1980-01-01 00:00:00',
    1, -- 1: Nam, 0: Nữ
    '23 Đường Núi Thành , TP Đà Nẵng',
    '0395560056',
    'admin@gmail.com',
    1, -- Liên kết với ChucVu Admin
    'admin',
    'admin123' -- Sẽ thay bằng mật khẩu băm
);

-- Table: ThuCung 
CREATE TABLE ThuCung (
    ID_ThuCuong INT(20) PRIMARY KEY,
    ID_TaiKhoan INT(20),
    TenThuCuong Varchar(20),
    Loai Varchar(20),
    Giong Varchar(20),
    Tuoi INT(11),
    CanNang Decimal(10,2),
    TrangThai Varchar(20),
    FOREIGN KEY (ID_TaiKhoan) REFERENCES TaiKhoan(ID_TaiKhoan)
) CHARACTER SET utf8mb4;

-- Table: TiemPhong (Vaccination)
CREATE TABLE TiemPhong (
    ID_TiemPhong INT(20) PRIMARY KEY,
    ID_ThuCuong INT(20),
    NgayTiem DateTime,
    NgayNhac DateTime,
    ID_CoSo INT(20),
    MoTa Text,
    TrangThai Varchar(20),
    FOREIGN KEY (ID_ThuCung) REFERENCES ThuCuong(ID_ThuCung),
    FOREIGN KEY (ID_CoSo) REFERENCES CoSoThucY(ID_CoSoThucY)
) CHARACTER SET utf8mb4;

-- Table: BaoCao
CREATE TABLE BaoCao (
    ID_BaoCao INT(20) PRIMARY KEY,
    LoaiBaoCao Varchar(50),
    NoiDung Text,
    NgayBaoCao DateTime,
    MoTa Text,
    TrangThai Varchar(20)
) CHARACTER SET utf8mb4;

-- Table: PhanQuyen (Permission)
CREATE TABLE PhanQuyen (
    ID_PhanQuyen INT(20) PRIMARY KEY,
    ID_TaiKhoan INT(20),
    ChucNang Varchar(100),
    TrangThai Varchar(20),
    FOREIGN KEY (ID_TaiKhoan) REFERENCES TaiKhoan(ID_TaiKhoan)
) CHARACTER SET utf8mb4;

-- Table: ChucVu (
CREATE TABLE ChucVu (
    ID_ChucVu INT(20) PRIMARY KEY,
    TenCV Varchar(100),
    MoTaCV Varchar(255),
    TrangThai Varchar(20)
) CHARACTER SET utf8mb4;
INSERT INTO ChucVu (ID_ChucVu, TenCV, MoTaCV, TrangThai)
VALUES (1, 'Admin', 'Quản trị viên hệ thống', 'Hoạt động');

-- Table: CongViec (Task)
CREATE TABLE CongViec (
    ID_CongViec INT(20) PRIMARY KEY,
    NgayGiao DateTime,
    TrangThai Decimal(10,2),
    FOREIGN KEY (ID_DonHang) REFERENCES HoaDon(ID_DonHang)
) CHARACTER SET utf8mb4;

-- Table: HoaDon (Invoice)
CREATE TABLE HoaDon (
    ID_HoaDon INT(20) PRIMARY KEY,
    ID_DonHang INT(20),
    NgayLap DateTime,
    TongTien Decimal(10,2),
    PTTT Varchar(50),
    TrangThai Varchar(20),
    FOREIGN KEY (ID_DonHang) REFERENCES DonHang(ID_DonHang)
) CHARACTER SET utf8mb4;

-- Table: ThanhToanQR (QR Payment)
CREATE TABLE ThanhToanQR (
    ID_ThanhToanQR INT(20) PRIMARY KEY,
    ID_HoaDon INT(20),
    QRCode Varchar(255),
    NgayTao DateTime,
    TrangThai Varchar(20),
    FOREIGN KEY (ID_HoaDon) REFERENCES HoaDon(ID_HoaDon)
) CHARACTER SET utf8mb4;

-- Table: KhoHang (Warehouse)
CREATE TABLE KhoHang (
    ID_KhoHang INT(20) PRIMARY KEY,
    SoLuongTon INT(11),
    TrangThai Varchar(20)
) CHARACTER SET utf8mb4;

-- Table: SanPham (Product)
CREATE TABLE SanPham (
    ID_SanPham INT(20) PRIMARY KEY,
    TenSP Varchar(50),
    MoTa Text,
    Gia Decimal(10,2),
    SoLuong INT(11),
    ID_DonMuc INT(20),
    TrangThai Varchar(20),
    FOREIGN KEY (ID_DonMuc) REFERENCES DonMucSP(ID_DonMuc)
) CHARACTER SET utf8mb4;

-- Table: ChiTietDonHang (Order Detail)
CREATE TABLE ChiTietDonHang (
    ID_ChiTiet INT(20) PRIMARY KEY,
    ID_DonHang INT(20),
    ID_SanPham INT(20),
    SoLuong INT(11),
    DonGia Decimal(10,2),
    NgayDatMua DateTime,
    NgayNhanDuKien DateTime,
    TrangThai Varchar(20),
    FOREIGN KEY (ID_DonHang) REFERENCES DonHang(ID_DonHang),
    FOREIGN KEY (ID_SanPham) REFERENCES SanPham(ID_SanPham)
) CHARACTER SET utf8mb4;

-- Table: KhuyenMai (Promotion)
CREATE TABLE KhuyenMai (
    ID_KhuyenMai INT(20) PRIMARY KEY,
    TenKM Varchar(50),
    MoTa Text,
    PhanTramGiam INT(11),
    NgayBatDau DateTime,
    NgayKetThuc DateTime,
    TrangThai Varchar(20)
) CHARACTER SET utf8mb4;

-- Table: DonMucSP (Product Category)
CREATE TABLE DonMucSP (
    ID_DonMuc INT(20) PRIMARY KEY,
    TenDonMuc Varchar(50),
    MoTa Text,
    TrangThai Varchar(20)
) CHARACTER SET utf8mb4;

-- Table: DonHang (Order)
CREATE TABLE DonHang (
    ID_DonHang INT(20) PRIMARY KEY,
    ID_TaiKhoan INT(20),
    NgayDatHang DateTime,
    TongTien Decimal(10,2),
    TrangThai Varchar(20),
    FOREIGN KEY (ID_TaiKhoan) REFERENCES TaiKhoan(ID_TaiKhoan)
) CHARACTER SET utf8mb4;


