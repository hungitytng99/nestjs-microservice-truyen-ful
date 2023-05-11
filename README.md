**Các bước cài đặt base của project**

1. Cài đặt traefik để làm gateway ✓\
   Đã được implement trong docker-compose
2. Cài đặt grpc để làm liên lạc giữa các service ✓\
   Đã được implement trong các module của service
3. Qui định chuẩn đặt tên của API endpoints
   - `/api/:version/:auth-mechanism[auth|public]/:service-handler/:logic-major`
4. Hoàn thiện base của 1 service
5. Tạo cụm mongo replica
6. Thêm kafka để xử lý tiến trình bất đồng bộ

**Chạy ứng dụng trong môi trường development**

1. Khởi tạo môi trường:\
   - `docker compose -f "docker-compose.dev.yaml" up -d --build`
2. Nếu là lần đầu khởi động thì chạy lệnh sau. Mục đích để tạo cụm DB
   - `docker exec -it mongo1 mongosh`
   - `rs.initiate({_id:"rs0", members: [{_id:0, host:"mongo1:27017", priority:3}, {_id:1, host:"mongo2:27017", priority:2}, {_id:2, host:"mongo3:27017", priority:1}]}, { force: true })`
3. Chạy service:\
   - `num run dev`
