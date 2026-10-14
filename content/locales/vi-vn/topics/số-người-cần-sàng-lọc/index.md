# Số người cần sàng lọc (NNS)

NNS là số người phải được sàng lọc — không chỉ điều trị — để ngăn **một** kết cục bất lợi trong một khoảng theo dõi xác định, dựa trên nguy cơ nền của quần thể và mức giảm nguy cơ tương đối mà phát hiện và điều trị sớm đạt được. Nó là phiên bản ở cấp chương trình sàng lọc của NNT: NNT hỏi phải *điều trị* bao nhiêu người để ngăn một kết cục; NNS hỏi bao nhiêu người phải đi qua toàn bộ con đường *sàng lọc-rồi-điều trị* để đạt đến đó.

## Tại sao điều này quan trọng

Rembold đưa ra NNS năm 1998 chính để các chương trình sàng lọc có thể so sánh trên cùng cơ sở với điều trị, vì con số giảm nguy cơ tương đối của một xét nghiệm sàng lọc che giấu hai điều mà điều trị không che: nguy cơ nền của quần thể thực sự được mời sàng lọc, và việc mọi người được sàng lọc đều gánh chi phí xét nghiệm và gánh nặng dương tính giả, không chỉ thiểu số về sau được lợi. Cổng hiệu quả chi phí của Ủy ban Sàng lọc Quốc gia Vương quốc Anh (xem [kinh tế học sàng lọc](../kinh-tế-học-sàng-lọc/)) được xây trên chính sự phân biệt này — một chương trình sàng lọc có giảm nguy cơ tương đối ấn tượng ở quần thể nguy cơ nền thấp vẫn có thể có NNS hàng nghìn, và khi đó chi phí chương trình trên mỗi kết cục tránh được trở thành câu hỏi thật.

## Toán học

```
NNS = 1 / (nguy_cơ_nền × giảm_nguy_cơ_tương_đối)

nguy_cơ_nền            = xác suất kết cục trong quần thể được sàng lọc
                         qua khoảng theo dõi (0–1)
giảm_nguy_cơ_tương_đối = tỷ lệ giảm nguy cơ mà điều trị sớm nhờ sàng lọc
                         đạt được (0–1)

Chi phí chương trình trên mỗi kết cục tránh được = NNS × chi_phí_mỗi_lần_sàng_lọc
```

So sánh trực tiếp với [NNT](../số-lượng-cần-điều-trị/): NNS gộp hiệu quả của cả phễu sàng lọc → chẩn đoán → điều trị vào một con số, trong khi NNT giả định bệnh nhân đã được chẩn đoán và bắt đầu điều trị.

## Ví dụ đã giải

Quần thể mục tiêu của một chương trình sàng lọc có nguy cơ nền của sự kiện là 2% trong thời gian nghiên cứu (`nguy_cơ_nền = 0,02`) và phát hiện sớm đạt giảm nguy cơ tương đối 25% (`giảm_nguy_cơ_tương_đối = 0,25`):

```
NNS = 1 / (0,02 × 0,25) = 1 / 0,005 = 200

Phải sàng lọc 200 người để ngăn một kết cục.

Với £50 mỗi lần sàng lọc:
Chi phí chương trình trên mỗi kết cục tránh được = 200 × £50 = £10.000
```

£10.000 này nên được đặt cạnh chi phí của chính kết cục và số QALY mà nó sẽ làm mất — cùng phép so sánh mà [kinh tế học phòng ngừa](../kinh-tế-học-phòng-ngừa/) thực hiện cho các chương trình phòng ngừa nói chung.

## Mối liên hệ với kỹ thuật phần mềm

NNS là "bao nhiêu người dùng, sự kiện hay yêu cầu phải đi qua một quy trình phát hiện hoặc phân loại để bắt được một dương tính thật đáng hành động" — liên quan trực tiếp đến các hệ thống giám sát và phân loại dựa trên cảnh báo, nơi một tình trạng đích hiếm làm NNS phình lên giống cách nó làm giá trị dự báo dương sụp đổ (xem [kinh tế học sàng lọc](../kinh-tế-học-sàng-lọc/) và [đánh giá AI lâm sàng](../đánh-giá-ai-lâm-sàng/)). Một quy tắc giám sát phải xử lý 200 sự kiện cho mỗi lần bắt đúng chỉ đáng chạy nếu lần bắt đó đáng giá ít nhất 200 lần chi phí phân loại mỗi sự kiện — cùng phép tính như ví dụ y tế ở trên.

## Những cạm bẫy

- **Bỏ qua sự phụ thuộc vào nguy cơ nền**: cùng một xét nghiệm hay chương trình sàng lọc có NNS — và hiệu quả chi phí — rất khác nhau ở quần thể nguy cơ cao và thấp. Đừng bao giờ nêu NNS mà không nêu quần thể được tính.
- **Đọc sai mẫu số**: NNS đếm những người *được sàng lọc*, không phải những người dương tính hay bắt đầu điều trị — nó đã bao hàm hiệu quả của cả phễu, nên đừng bao giờ so nó với một thước đo chỉ đếm những người dương tính.
- **So sánh giữa các khoảng theo dõi khác nhau**: khoảng theo dõi ngắn hơn thường làm NNS phình lên vì ít sự kiện được quan sát hơn trong cửa sổ đó. Các con số NNS chỉ so sánh được khi tính cho cùng thời gian theo dõi.

## Nguồn tham khảo

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
