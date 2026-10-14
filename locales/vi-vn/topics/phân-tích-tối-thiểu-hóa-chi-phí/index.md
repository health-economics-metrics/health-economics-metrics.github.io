# Phân tích tối thiểu hóa chi phí (CMA)

Phân tích tối thiểu hóa chi phí chọn phương án rẻ nhất sau khi đã chứng minh rằng các can thiệp được so sánh có hiệu quả tương đương.

## Tại sao điều này quan trọng

Khi hiệu quả đã được chứng minh là tương đương, việc thực hiện các tính toán hiệu quả chi phí phức tạp là không cần thiết — chỉ cần chọn phương án rẻ nhất.

## Toán học

```
Chọn phương án có min(Chi phí), với điều kiện Hiệu quả_A = Hiệu quả_B
```

## Ví dụ đã giải

Hai loại thuốc generic có hiệu lực đã được chứng minh là giống hệt nhau: chọn loại có giá mua thấp nhất, không cần phân tích thêm.

## Mối liên hệ với kỹ thuật phần mềm

Giống như việc chọn nhà cung cấp đám mây rẻ nhất sau khi đã xác nhận cả hai đều đáp ứng cùng một yêu cầu về hiệu suất và độ tin cậy.

## Những cạm bẫy

- **Giả định tính tương đương mà không có bằng chứng vững chắc.**
- **Sử dụng CMA khi các hiệu quả thực sự khác nhau một cách tinh vi.**

## Nguồn tham khảo

- Drummond MF, et al., Methods for the Economic Evaluation of Health Care Programmes.
- NICE, Guide to the methods of technology appraisal.
