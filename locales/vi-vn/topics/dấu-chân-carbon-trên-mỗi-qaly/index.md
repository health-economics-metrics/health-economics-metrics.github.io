# Dấu chân carbon trên mỗi QALY

Carbon trên mỗi QALY là một tỷ số hiệu quả — lượng phát thải carbon của một can thiệp (hoặc lượng tránh được) chia cho số QALY mà can thiệp đó tạo ra. Nó song song trực tiếp với chi phí trên mỗi QALY và cho phép đánh giá hiệu quả carbon bên cạnh hiệu quả chi phí. "NMB điều chỉnh carbon" đi thêm một bước: quy đổi tác động carbon ra tiền bằng giá carbon phi thị trường chính thức trong Green Book của Vương quốc Anh, rồi trừ vào [lợi ích tiền tệ ròng](../lợi-ích-tiền-tệ-ròng/) tiêu chuẩn.

## Tại sao điều này quan trọng

NICE và NHS England hiện kỳ vọng tác động môi trường được cân nhắc cùng với chi phí và QALY. NHS có cam kết công khai về phát thải ròng bằng không: phát thải trực tiếp ròng bằng không vào năm 2040 và toàn bộ dấu chân chuỗi cung ứng vào năm 2045. Sổ tay đánh giá công nghệ y tế của NICE (PMG36) nêu tính bền vững môi trường như một cân nhắc đang nổi lên khi đánh giá công nghệ. Với sản phẩm y tế số, điều này nghĩa là carbon đang trở thành trụ cột thứ tư của lập luận giá trị, bên cạnh chi phí, QALY và [tính trội trên biên giới hiệu quả](../tính-trội-và-biên-giới-hiệu-quả/) — không thay thế cái nào, mà là một chiều mà một business case tốt ngày càng phải báo cáo.

## Toán học

```
carbon_trên_qaly = tổng_phát_thải_tấn_co2e / tổng_qaly
  (giá trị âm nghĩa là phát thải ròng tránh được trên mỗi QALY đạt được —
  lợi cả đôi đường: sức khỏe tốt hơn và ít carbon hơn)

tác_động_carbon_quy_tiền = phát_thải_tấn_co2e × giá_carbon_mỗi_tấn
  (phát thải âm × giá dương = chi phí âm, tức là lợi ích)

NMB_điều_chỉnh_carbon = lợi_ích_tiền_tệ_ròng − tác_động_carbon_quy_tiền
```

Điều này mở rộng ý tưởng biên giới hiệu quả chi phí/QALY bằng trục thứ hai — carbon trên mỗi QALY — theo cùng logic "vẽ mọi phương án và xem phương án nào bị trội" của [tính trội và biên giới hiệu quả](../tính-trội-và-biên-giới-hiệu-quả/), nhưng áp dụng cho carbon thay vì chi phí.

## Ví dụ đã giải

Một dịch vụ khám từ xa thay thế các lượt khám trực tiếp, loại bỏ 5.000 chuyến đi ô tô mỗi năm, mỗi chuyến khoảng 8 kg CO2e — tránh được 40 tấn CO2e, biểu diễn là phát thải âm (−40,0 tấn) — và mang lại 25 QALY mỗi năm:

```
carbon_trên_qaly = −40,0 / 25,0 = tránh được 1,6 tấn CO2e trên mỗi QALY đạt được
```

Dùng giá carbon phi thị trường của Green Book (con số minh họa, giá trị trung tâm phi thị trường năm 2023 ≈ £269/tấn CO2e — Green Book cập nhật giá carbon hằng năm, hãy kiểm tra lại trước khi trích dẫn trong phân tích thực):

```
tác_động_carbon_quy_tiền = −40,0 × £269 = −£10.760
```

"Chi phí" −£10.760 là khoản lợi ích £10.760. Nếu lợi ích tiền tệ ròng riêng của can thiệp là £500.000:

```
NMB_điều_chỉnh_carbon = £500.000 − (−£10.760) = £510.760
```

Khoản tiết kiệm carbon làm tăng sức nặng của lập luận chứ không làm giảm — đúng là lợi cả đôi đường mà khung phát thải âm sinh ra để làm hiện rõ.

## Mối liên hệ với kỹ thuật phần mềm

Đây là điểm giao cắt thời sự với kinh tế học AI và đám mây: dấu chân carbon của điện toán dùng để huấn luyện và chạy mô hình AI đã là một hạng mục thật trong mua sắm của NHS, vì các hợp đồng nhà cung cấp NHS vượt một ngưỡng nhất định phải có Kế hoạch giảm carbon (Carbon Reduction Plan). [Kinh tế đơn vị của đám mây](../kinh-tế-đơn-vị-của-đám-mây/) đã theo dõi chi phí trên mỗi đơn vị đầu ra điện toán; carbon trên mỗi QALY là khuôn mẫu tự nhiên cho một chỉ số "chi phí carbon trên mỗi lần suy luận" trong tương lai, mở rộng mô-đun đó và kinh tế đơn vị của suy luận sang chiều môi trường, dù chỉ số đó hiện chưa tồn tại.

## Những cạm bẫy

- **Chơi với ranh giới hệ thống**: chỉ đếm phát thải trực tiếp (Scope 1) và bỏ phát thải chuỗi cung ứng (Scope 3), vốn thường là phần lớn dấu chân thực của một sản phẩm y tế số.
- **Dùng giá carbon lỗi thời**: Green Book cập nhật giá carbon phi thị trường hằng năm, nên con số £/tấn được trích dẫn phải ghi ngày, không được trình bày như một hằng số.
- **Coi "tiết kiệm carbon" là thay thế cho "hiệu quả chi phí"**: một can thiệp phát thải thấp nhưng giá trị thấp vẫn là cách dùng nguồn lực NHS kém. Carbon là trụ cột thứ tư bên cạnh chi phí và QALY, không phải thế chỗ cho bất kỳ trụ cột nào.

## Nguồn tham khảo

- NHS England, "Delivering a Net Zero National Health Service" (2020, cập nhật 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (cập nhật hằng năm; giá trị trung tâm phi thị trường ≈ £269/tCO2e, 2023 — ghi ngày mọi trích dẫn). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
