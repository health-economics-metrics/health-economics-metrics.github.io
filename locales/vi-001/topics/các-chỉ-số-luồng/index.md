# Các chỉ số luồng

Các chỉ số luồng đo cách công việc di chuyển qua một hệ thống triển khai: thời gian chu kỳ, thời gian thực hiện, thông lượng, và công việc đang tiến hành (WIP).

## Tại sao điều này quan trọng

Phần lớn thời gian triển khai là chờ đợi, không phải làm việc.

## Toán học

```
Định luật Little: WIP trung bình = thông lượng × thời gian chu kỳ trung bình
```

## Ví dụ đã giải

Một nhóm có 40 mục đang tiến hành: giảm WIP xuống 15 đưa thời gian chu kỳ trở lại **1,5 tuần**.

## Mối liên hệ với kỹ thuật phần mềm

Các chỉ số luồng là ngôn ngữ chung giữa kỹ thuật triển khai và vận hành y tế.

## Những cạm bẫy

- **Sùng bái tỷ lệ sử dụng.**

## Nguồn tham khảo

- Little's Law and flow metrics overviews.
- Reinertsen DG.
