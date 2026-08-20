# Nexus IT Asset Management System (ITAM)

> **Hệ thống Quản lý & Kiểm kê Tài sản Hạ tầng CNTT Doanh Nghiệp (v3.2 Modular Enterprise)**  
> *Dự án Web Portfolio cá nhân ấn tượng dành riêng cho CV/Resume*

![ITAM Preview](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![Architecture](https://img.shields.io/badge/Architecture-Modular%20Multi--Page-blue?style=for-the-badge)
![Deployment](https://img.shields.io/badge/Deployment-GitHub%20Pages%20Ready-purple?style=for-the-badge)

---

## 💡 Cấu Trúc Độc Lập Theo Từng Tính Năng (Modular Multi-Page)

Dự án được phân tách trực quan thành **5 tệp HTML chuyên biệt** tương ứng với từng chức năng độc lập của hệ thống. Bạn có thể dễ dàng quản lý, giải thích và trình bày với nhà tuyển dụng:

```text
PROJECT_CV/
├── 📊 index.html       --> Module Dashboard & KPI Thống Kê Tổng Quan
├── 💻 hardware.html    --> Module Quản Lý Thiết Bị Phần Cứng & Khấu Hao
├── 🔑 licenses.html    --> Module Quản Lý Bản Quyền Phần Mềm & SaaS
├── 🔧 maintenance.html --> Module Nhật Ký Bảo Trì & Xử Lý Sự Cố
├── 📜 audit.html       --> Module Lịch Sử Hoạt Động & Audit Logs
├── 🎨 style.css        --> Bộ Áo Giao Diện Chuẩn Enterprise (Dark/Light)
├── ⚡ app.js          --> Bộ Não Xử Lý Dữ Liệu Đồng Bộ Qua LocalStorage
└── 📝 README.md        --> Tài Liệu Hướng Dẫn & Mẫu Phỏng Vấn CV
```

---

## ✨ 5 Module Tính Năng Chính

1. **📊 Module Dashboard (`index.html`)**:
   - Thống kê chỉ số KPI: Tổng số thiết bị, Tổng định giá ($), Giá trị hiện tại sau khấu hao ($), Tỷ lệ cấp phát sử dụng (%) và Số lượng bản quyền SaaS.
   - Biểu đồ tương tác **Chart.js**: Phân bổ tài sản theo danh mục (Doughnut Chart) & Trạng thái vận hành (Bar Chart).

2. **💻 Module Phần Cứng & Khấu Hao (`hardware.html`)**:
   - Thuật toán tự động tính toán **Khấu hao tài sản** theo thời gian thực (Laptop 3 năm, Server 5 năm...).
   - Nhập dữ liệu hàng loạt từ file Excel CSV (Bulk Import).
   - Tự động tạo nhãn QR Code kiểm kê & In **Phiếu Kiểm Kê Bàn Giao Phòng Ban chuẩn A4**.

3. **🔑 Module Bản Quyền Phần Mềm (`licenses.html`)**:
   - Theo dõi số seat đã cấp / tổng seat của Microsoft 365, Adobe CC, Figma, JetBrains... kèm thanh cảnh báo phần trăm sử dụng.

4. **🔧 Module Bảo Trì & Sự Cố (`maintenance.html`)**:
   - Khởi tạo phiếu bảo trì mới, theo dõi tiến độ sửa chữa, chi phí hư hỏng và tự động cập nhật trạng thái thiết bị.

5. **📜 Module Nhật Ký Hệ Thống (`audit.html`)**:
   - Lịch sử ghi chép minh bạch tất cả thao tác thêm, sửa, xóa, gán thiết bị và cập nhật bản quyền.

---

## 🚀 Hướng Dẫn Chạy Dự Án

1. Tải thư mục dự án về máy.
2. Nhấp đôi chuột vào [index.html](file:///c:/Users/7420/Downloads/PROJECT_CV/index.html) để mở trang Dashboard chính.
3. Sử dụng thanh Menu bên trái để chuyển đổi giữa các Module (`hardware.html`, `licenses.html`, `maintenance.html`, `audit.html`).

---

## 🌐 Hướng Dẫn Đưa Lên GitHub Pages Để Lấy Link Demo Đưa Vào CV

1. Đăng nhập vào [GitHub.com](https://github.com).
2. Tạo Repository mới đặt tên là `it-asset-management`, chọn **Public**.
3. Upload toàn bộ các tệp HTML, CSS, JS, README lên Repository.
4. Vào **Settings** -> **Pages** -> Chọn Branch `main` -> Chọn `/ (root)` -> Bấm **Save**.
5. Sau 1 phút bạn sẽ nhận được Link Demo trực tuyến (dạng `https://<user>.github.io/it-asset-management`) để dán vào CV!

---

## 🗣️ Mẫu Trả Lời Khi Phỏng Vấn

> *"Dự án IT Asset Management System của em được thiết kế theo kiến trúc Modular Multi-Page chuyên biệt gồm các module Dashboard thống kê, Quản lý thiết bị phần cứng & khấu hao, Quản lý bản quyền SaaS, Nhật ký bảo trì và Audit Trail. Hệ thống tích hợp thuật toán tính khấu hao tự động, camera quét QR code, nhập/xuất file Excel CSV và xuất phiếu bàn giao A4. Dữ liệu được đồng bộ liên thông giữa các module thông qua LocalStorage API."*
