# Kinh tế học sàng lọc

Kinh tế học sàng lọc đề cập đến các tiêu chí Wilson-Jungner về thời điểm sàng lọc có ý nghĩa, và toán học giải thích tại sao giá trị dự đoán sụp đổ khi tỷ lệ hiện mắc thấp.

## Tại sao điều này quan trọng

Ngay cả một xét nghiệm rất chính xác cũng tạo ra vô số kết quả dương tính giả khi bệnh nền hiếm gặp, dẫn đến mệt mỏi vì cảnh báo và các xét nghiệm theo dõi không cần thiết.

## Toán học

```
Giá trị dự đoán dương tính (PPV) = (Độ nhạy × Tỷ lệ hiện mắc) / [(Độ nhạy × Tỷ lệ hiện mắc) + ((1−Độ đặc hiệu) × (1−Tỷ lệ hiện mắc))]
```

## Ví dụ đã giải

Một xét nghiệm có độ nhạy 95% và độ đặc hiệu 95% áp dụng cho một bệnh có tỷ lệ hiện mắc 0,1% chỉ có PPV khoảng 2% — 98% kết quả dương tính là giả.

## Mối liên hệ với kỹ thuật phần mềm

Tương tự trực tiếp với mệt mỏi vì cảnh báo trong các hệ thống giám sát: một bộ phát hiện có độ chính xác cao được áp dụng cho một sự kiện hiếm gặp vẫn tạo ra chủ yếu là cảnh báo giả.

## Những cạm bẫy

- **Trích dẫn độ nhạy và độ đặc hiệu mà không nêu rõ tỷ lệ hiện mắc.**
- **Bỏ qua các tiêu chí Wilson-Jungner và sàng lọc mà không có phương pháp điều trị hiệu quả sẵn có.**

## Nguồn tham khảo

- Wilson JMG, Jungner G, Principles and Practice of Screening for Disease.
- UK National Screening Committee, screening criteria.
