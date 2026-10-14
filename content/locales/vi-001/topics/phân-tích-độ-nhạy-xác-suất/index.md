# Phân tích độ nhạy xác suất

Phân tích độ nhạy xác suất (PSA) thay đổi tất cả các tham số không chắc chắn đồng thời thông qua mô phỏng Monte Carlo để tạo ra một phân phối xác suất của các kết quả.

## Tại sao điều này quan trọng

Phân tích độ nhạy đơn giản chỉ kiểm tra một biến tại một thời điểm; PSA nắm bắt sự không chắc chắn kết hợp của tất cả các tham số cùng nhau.

## Toán học

```
Với mỗi mô phỏng i: rút giá trị tham số từ phân phối của chúng, tính kết quả_i
Xác suất hiệu quả chi phí = số mô phỏng dưới ngưỡng / tổng số mô phỏng
```

## Ví dụ đã giải

10.000 mô phỏng Monte Carlo của một công cụ chẩn đoán mới cho thấy nó hiệu quả về chi phí trong 72% các mô phỏng ở ngưỡng £20.000/QALY.

## Mối liên hệ với kỹ thuật phần mềm

Giống như kiểm tra tải Monte Carlo thay đổi nhiều tham số hệ thống không chắc chắn đồng thời.

## Những cạm bẫy

- **Bỏ qua các mối tương quan giữa các tham số khi lấy mẫu.**
- **Diễn giải sai CEAC như một tỷ lệ phần trăm đơn giản thay vì một phân phối xác suất.**

## Nguồn tham khảo

- Briggs AH, et al., Decision Modelling for Health Economic Evaluation.
- NICE DSU Technical Support Documents.
