# 🛡️ Nexus ITAM - Enterprise IT Asset Management System

> **Hệ thống Quản lý & Tối ưu hóa Tài sản Hạ tầng CNTT Doanh Nghiệp**  
> *A Production-Ready Enterprise IT Asset Management System & Live Portfolio Demo*

![Build Status](https://img.shields.io/badge/Build-Passing-success?style=for-the-badge&logo=github)
![Architecture](https://img.shields.io/badge/Architecture-Modular%20Multi--Page-blue?style=for-the-badge)
![UI Design](https://img.shields.io/badge/Design-Glassmorphism%20Dark%2FSlight-purple?style=for-the-badge)
![Deployment](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen?style=for-the-badge)

---

## 👨‍💻 Tác Giả & Thông Tin Dự Án (Developer & Project Specs)

- **Người phát triển (Developer)**: [Tên Của Bạn / Your Full Name]
- **Vị trí định hướng (Target Role)**: System Administrator / IT Support Engineer / Front-End Developer
- **Link Live Demo**: [https://<ten-user-github>.github.io/it-asset-management/](https://<ten-user-github>.github.io/it-asset-management/)
- **Liên hệ**: [Email của bạn] | [Số điện thoại] | [LinkedIn Profile]

---

## 🎯 Bài Toán Doanh Nghiệp & Giải Pháp (Business Impact & Enterprise Problem)

Trong các doanh nghiệp có quy mô từ vừa đến lớn, việc kiểm soát hàng trăm thiết bị CNTT (Laptop, Server, Mạng), bản quyền phần mềm SaaS và chi phí bảo trì thường gặp phải các thách thức:

1. **Thất thoát & không rõ trách nhiệm tài sản**: Khó theo dõi chính xác thiết bị đang do nhân viên/phòng ban nào nắm giữ.
2. **Lãng phí chi phí phần mềm**: Không kiểm soát được số lượng seat/slot bản quyền (Microsoft 365, Adobe, Figma...) đã cấp phát hay dư thừa.
3. **Thiếu định giá khấu hao chính xác**: Không nắm được giá trị tài sản thực tế còn lại theo thời gian để lập ngân sách nâng cấp IT hàng năm.

👉 **Nexus ITAM** do tôi nghiên cứu và phát triển là giải pháp Web Application toàn diện giúp **Phòng CNTT (IT Department)** và **Ban Giám Đốc** giải quyết triệt để các vấn đề trên thông qua tự động hóa, minh bạch hóa lịch sử và trực quan hóa dữ liệu.

---

## 🚀 Các Tính Năng Đẳng Cấp Dành Cho Doanh Nghiệp (Enterprise Features)

### 1. 📊 Executive Analytics & Depreciation Dashboard (`index.html`)
- **Chỉ số KPI Thời Gian Thực**: Tổng hợp Tổng nguyên giá tài sản ($), **Giá trị còn lại thực tế sau khấu hao ($)**, Tỷ lệ cấp phát (%) và Số lượng bản quyền phần mềm.
- **Biểu đồ trực quan (Chart.js)**: 
  - Biểu đồ tròn (Doughnut Chart) phân bổ tài sản theo Danh mục (Laptop, Server, Monitor, Networking...).
  - Biểu đồ cột (Bar Chart) phân tích trạng thái vận hành toàn đội thiết bị.
- **Trung tâm cảnh báo (Alert Center)**: Cảnh báo tự động thiết bị đang bảo trì và các bản quyền phần mềm sắp chạm ngưỡng 90% seat.

### 2. 💻 Quản Lý Thiết Bị Phần Cứng & Thuật Toán Khấu Hao (`hardware.html`)
- **Thuật toán tính Khấu hao tài sản (Straight-Line Depreciation)**: Tự động tính toán độ tuổi thiết bị và giá trị còn lại theo vòng đời tiêu chuẩn từng loại thiết bị (Laptop 3 năm, Server 5 năm, Mobile 2 năm...).
- **Bộ lọc đa chiều (Multi-Criteria Filter)**: Tìm kiếm tức thì theo Từ khóa, Mã Asset Tag, Số Serial, Phòng ban và Trạng thái (In Use, Available, Maintenance, Retired).
- **Quét Mã QR qua Webcam (Live Camera Scanner)**: Tích hợp trực tiếp Camera nhận diện mã QR dán trên nhãn thiết bị để truy xuất thông tin tài sản trong 1 giây.
- **Nhập/Xuất Dữ Liệu Hàng Loạt (Bulk CSV Import/Export)**: Hỗ trợ nạp 100+ thiết bị từ file Excel/CSV và xuất báo cáo CSV phục vụ báo toán kế toán.
- **In Phiếu Bàn Giao & Kiểm Kê A4 (Printable Audit Sheet)**: Khởi tạo mẫu phiếu kiểm kê tài sản theo từng phòng ban chuẩn khổ A4 sẵn sàng in kèm khu vực chữ ký xác nhận của đại diện IT và Trưởng phòng ban.

### 3. 🔑 Quản Lý Bản Quyền Phần Mềm SaaS (`licenses.html`)
- Theo dõi danh mục bản quyền doanh nghiệp (Microsoft 365 Enterprise, Adobe CC, Figma Org, JetBrains...).
- Giám sát chi tiết số lượng Seat khả dụng / đã cấp phát, chi phí duy trì hàng năm và thời hạn gia hạn.

### 4. 🔧 Nhật Ký Bảo Trì & Xử Lý Sự Cố (`maintenance.html`)
- Khởi tạo phiếu yêu cầu sửa chữa/bảo dưỡng thiết bị.
- Theo dõi chi phí sửa chữa hư hỏng và tự động đồng bộ trạng thái thiết bị sang *Đang bảo trì*.

### 5. 📜 Lịch Sử Hoạt Động & Audit Trail (`audit.html`)
- Lưu trữ minh bạch từng mốc thời gian (Timestamp) của mọi thao tác: Bàn giao thiết bị, cập nhật bản quyền, tạo phiếu bảo trì hay xóa tài sản.

---

## 🛠️ Kiến Trúc Công Nghệ (Technical Architecture & Stack)

- **Frontend Architecture**: Single Page Component & Modular Multi-Page Application (MPA).
- **Core Languages**: HTML5, CSS3 Custom Properties (Design Tokens, Dark/Light Theme System, Glassmorphic Glass UI).
- **Scripting & Logic**: Pure JavaScript ES6+ (Object-Oriented Programming, Event Delegation, DOM Optimization).
- **Data Persistence**: HTML5 LocalStorage API (Liên thông đồng bộ dữ liệu thời gian thực giữa các trang).
- **CDN Libraries Integrated**:
  - `Chart.js` — Data Visualization & Chart Rendering
  - `QRCode.js` — Client-Side QR Code Generator
  - `Html5Qrcode` — WebCam Video Stream Scanning Engine
  - `FontAwesome 6` — Enterprise Vector Icon System

---

## ⚙️ Hướng Dẫn Cài Đặt & Chạy Demo Trực Tiếp (Quick Start)

Dự án được xây dựng theo chuẩn Web tiêu chuẩn, **không cần cài đặt môi trường Node.js hay Build Tools phức tạp**:

1. **Chạy trực tiếp trên máy**:
   - Clone hoặc Tải tệp zip dự án về máy.
   - Nhấp đôi chuột vào file `index.html` để khởi chạy ứng dụng trên trình duyệt.

2. **Chạy qua Local Web Server (Tùy chọn)**:
   ```bash
   # Dùng Python
   python -m http.server 8080

   # Hoặc dùng Node.js
   npx http-server -p 8080
   ```
   Mở trình duyệt truy cập: `http://localhost:8080`

---

## 📷 Screenshots & Demo Flows

| Giao Diện Dashboard | Quản Lý Khấu Hao & QR Tag |
| :---: | :---: |
| *Thống kê KPI & Biểu đồ Chart.js thời gian thực* | *Bảng dữ liệu tính khấu hao & In nhãn QR Code* |

| In Phiếu Kiểm Kê A4 | Quét QR Code Qua Webcam |
| :---: | :---: |
| *Mẫu phiếu bàn giao phòng ban chuẩn khổ A4* | *Nhận diện tự động mã thiết bị từ Camera* |

---

## 📄 License & Contact

Dự án được phát triển độc quyền bởi **[Tên Của Bạn]** làm sản phẩm Portfolio chứng minh năng lực kỹ thuật và tư duy bài toán CNTT doanh nghiệp.

- **Email**: [Email của bạn]
- **LinkedIn**: [Link LinkedIn của bạn]
- **GitHub**: [Link GitHub của bạn]
