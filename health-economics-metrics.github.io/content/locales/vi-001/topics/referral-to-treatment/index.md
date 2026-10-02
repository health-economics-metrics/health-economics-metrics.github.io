# Chuyển tuyến điều trị (RTT)

RTT đo thời gian từ lần chuyển tuyến đầu tiên đến khi bắt đầu điều trị, với tiêu chuẩn 18 tuần là thước đo hiệu suất quốc gia quan trọng nhất.

## Tại sao điều này quan trọng

RTT về cơ bản là một thước đo thời gian thực hiện triển khai được áp dụng cho chăm sóc bệnh nhân — mất bao lâu để cung cấp giá trị (điều trị) sau một yêu cầu (chuyển tuyến).

## Toán học

```
Tuân thủ RTT = Số bệnh nhân được điều trị trong vòng 18 tuần / Tổng số bệnh nhân trong hàng đợi RTT × 100%
```

## Ví dụ đã giải

Một chuyên khoa với 5.000 bệnh nhân trên lộ trình RTT, trong đó 4.100 được điều trị trong vòng 18 tuần: tuân thủ 82%, dưới tiêu chuẩn quốc gia 92%.

## Mối liên hệ với kỹ thuật phần mềm

Tương tự trực tiếp với [thời gian thực hiện DORA](../dora-metrics/) — thời gian từ commit (chuyển tuyến) đến triển khai (điều trị).

## Những cạm bẫy

- **Áp dụng sai các lần dừng đồng hồ (sáng kiến bệnh nhân) để làm sai lệch số liệu tuân thủ.**
- **Chỉ chú ý đến giá trị trung bình trong khi đuôi của phân phối mới là vấn đề thực sự.**

## Nguồn tham khảo

- NHS England, referral to treatment statistics.
- NHS Digital, RTT data quality guidance.
