# Tối ưu hóa nguồn lực hạ nguồn

Tối ưu hóa nguồn lực hạ nguồn tập trung vào việc mở khóa vai trò hoặc quy trình mà tất cả những người khác đang chờ đợi, thay vì tối ưu hóa một cách ngẫu nhiên.

## Tại sao điều này quan trọng

Việc cải thiện các bước không phải nút thắt cổ chai trong một lộ trình chăm sóc không ảnh hưởng đến tổng thời gian thực hiện — chỉ có nút thắt cổ chai mới quyết định năng lực hệ thống.

## Toán học

```
Thông lượng hệ thống = thông lượng của bước giới hạn (nút thắt cổ chai)
```

## Ví dụ đã giải

Một lộ trình chẩn đoán có năm bước; bước 3 (diễn giải hình ảnh) có thời gian chờ dài nhất. Việc đẩy nhanh các bước 1, 2, 4, và 5 không ảnh hưởng đến tổng thời gian thực hiện cho đến khi bước 3 được giải quyết.

## Mối liên hệ với kỹ thuật phần mềm

Tương tự trực tiếp với lý thuyết ràng buộc được áp dụng cho các pipeline CI/CD — đẩy nhanh bước chậm nhất, không phải một bước ngẫu nhiên.

## Những cạm bẫy

- **Đầu tư nguồn lực vào các quy trình không phải nút thắt cổ chai vì chúng dễ cải thiện hơn.**
- **Không xác định lại nút thắt cổ chai sau khi nút thắt trước đó được giải quyết (nút thắt cổ chai di chuyển).**

## Nguồn tham khảo

- Goldratt EM, The Goal.
- NHS Improvement, process improvement guidance.
