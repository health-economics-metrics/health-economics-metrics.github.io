# Các chỉ số chất lượng AI

Các chỉ số chất lượng AI đo độ chính xác, độ tin cậy, và tính an toàn của đầu ra mô hình: độ chính xác, độ nhạy, tỷ lệ ảo giác.

## Tại sao điều này quan trọng

Ngay cả các hệ thống AI có thông lượng cao cũng có thể có chi phí sửa chữa hạ nguồn vượt quá tiết kiệm nếu chất lượng thấp.

## Toán học

```
Điểm F1 = 2 × (độ chính xác × độ nhạy) / (độ chính xác + độ nhạy)
```

## Ví dụ đã giải

Một công cụ AI để mã hóa lâm sàng: độ chính xác 0,85, độ nhạy 0,78 = F1 0,81.

## Mối liên hệ với kỹ thuật phần mềm

Các chỉ số chất lượng phần mềm chung là nền tảng cho [đánh giá AI lâm sàng](../đánh-giá-ai-lâm-sàng/).

## Những cạm bẫy

- **Chỉ nhìn vào độ chính xác, bỏ qua sự mất cân bằng lớp.**

## Nguồn tham khảo

- Google, ML evaluation best practices.
- Ji Z, et al., Survey of Hallucination in Natural Language Generation.
