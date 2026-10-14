# Phân tích chi phí-lợi ích (CBA)

Phân tích chi phí-lợi ích chuyển đổi cả chi phí và lợi ích thành giá trị tiền tệ, cho phép tính toán trực tiếp giá trị hiện tại ròng.

## Tại sao điều này quan trọng

CBA cho phép so sánh giữa các lĩnh vực (sức khỏe so với giáo dục so với hạ tầng) vì mọi thứ được thể hiện bằng cùng một đơn vị: tiền.

## Toán học

```
NPV = Σ(t=0 đến khung thời gian) (Lợi ích_t − Chi phí_t) / (1+r)^t
```

## Ví dụ đã giải

Một chương trình phòng ngừa của chính phủ với chi phí hiện tại £10 triệu và lợi ích hiện tại (chi phí y tế tránh được cộng với lợi ích năng suất) £15 triệu: NPV = +£5 triệu.

## Mối liên hệ với kỹ thuật phần mềm

Giống như việc biện minh cho một khoản đầu tư nền tảng bằng cách chuyển đổi tất cả các lợi ích (tốc độ, độ tin cậy, giảm sự cố) thành giá trị tiền tệ ước tính.

## Những cạm bẫy

- **Chuyển đổi giá trị sức khỏe thành tiền với các giả định gây tranh cãi mà không nêu rõ chúng.**
- **Bỏ qua các lợi ích phi thị trường (như phúc lợi) khó định giá.**

## Nguồn tham khảo

- HM Treasury, The Green Book.
- Drummond MF, et al., Methods for the Economic Evaluation of Health Care Programmes.
