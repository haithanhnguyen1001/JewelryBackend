## Hướng dẫn chạy local đồ án SE104

### Khởi tạo database:

- Cài đặt MySQL, khuyến khích sử dụng MySQL Workbench để tiện theo dõi dữ liệu trong database.
- Lưu lại các thông tin người dùng trong quá trình cài đặt MySQL và tạo connection như username, password, hostname, port...
- Tạo schema mới trong MySQL Workbench, lưu lại tên của schema này.

### Hướng dẫn chạy server:

- Sau khi pull code này từ github, tiến hành cài đặt cái module bằng `npm install`.
- Để server có thể kết nối với database, thay đổi các biến trong file `.env`, `config.json` theo các thông tin đã lưu trong quá trình khởi tạo đatabase.
- Chạy server bằng 1 trong 2 lệnh `npm start` hoặc `npm test` (lệnh sau sẽ tự động restart server khi có thay đổi). Sau khi chạy, server sẽ tự động tạo table và các constraint cho database với tên database này trong file `.env` và `config.json` ở bước trên.
- Tạo sql script mới trong MySQL Workbench và copy + chạy đoạn mã trong file `db/init_data.sql` để thực hiện các cài đặt cơ bản và thêm dữ liệu cần thiết.
- _Chạy application front-end_
