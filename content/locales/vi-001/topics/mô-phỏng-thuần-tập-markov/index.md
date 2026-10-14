# Mô phỏng thuần tập Markov

Mô hình thuần tập Markov là kỹ thuật mô hình hóa tiêu chuẩn của HTA cho các can thiệp mà tác động diễn ra qua nhiều giai đoạn (chu kỳ) chứ không xảy ra một lần. Một thuần tập giả định bắt đầu hoàn toàn ở một trạng thái sức khỏe, và mỗi chu kỳ một bộ xác suất chuyển trạng thái cố định dịch chuyển các phần của thuần tập giữa các trạng thái; chi phí và QALY tích lũy mỗi chu kỳ tỷ lệ với phần thuần tập chiếm mỗi trạng thái, rồi được chiết khấu về giá trị hiện tại. Mọi kỹ sư phần mềm mô hình hóa một business case y tế số nhiều năm — nơi người dùng hoặc bệnh nhân di chuyển giữa các trạng thái như "tham gia", "bỏ dở" hay "hủy" theo thời gian — đang xây đúng cấu trúc này.

## Tại sao điều này quan trọng

Hầu hết quyết định công nghệ y tế thực không phải so sánh chi phí và kết cục một giai đoạn. Một bệnh mạn tính tiến triển, tái phát, đáp ứng điều trị hay gây tử vong qua nhiều năm — và một [phân tích hiệu quả chi phí](../phân-tích-hiệu-quả-chi-phí/) một giai đoạn không thể biểu diễn điều đó. Các hồ sơ nộp cho NICE, ICER và CADTH về can thiệp bệnh mạn tính được đánh giá qua [đánh giá công nghệ y tế](../đánh-giá-công-nghệ-y-tế/) gần như luôn được dựng như mô hình thuần tập Markov với chân trời thời gian suốt đời, vì phương án thay thế — mô hình hóa mọi lộ trình bệnh nhân cá thể có thể có — không giải được ở quy mô lớn. Mô hình Markov mức thuần tập đánh đổi một phần tính hiện thực ở mức cá nhân (khó biểu diễn trí nhớ về các trạng thái trước, nguồn gốc của chữ "Markov": tương lai chỉ phụ thuộc trạng thái hiện tại) lấy một mô hình minh bạch, kiểm toán được và đủ nhanh để chạy hàng nghìn lần trong [phân tích độ nhạy xác suất](../phân-tích-độ-nhạy-xác-suất/).

## Toán học

```
Cập nhật thuần tập một chu kỳ (vectơ hàng × ma trận chuyển trạng thái):
  trạng_thái_mới[j] = tổng_i trạng_thái[i] * ma_trận_chuyển[i][j]

Chi phí của một chu kỳ:
  chi_phí_chu_kỳ = tổng_s trạng_thái[s] * chi_phí_mỗi_chu_kỳ[s]

QALY của một chu kỳ:
  qaly_chu_kỳ = tổng_s trạng_thái[s] * độ_thỏa_dụng[s] * độ_dài_chu_kỳ_năm

Mô phỏng đầy đủ qua `chu_kỳ` chu kỳ, chiết khấu ở `tỷ_lệ_chiết_khấu`:
  tổng_chi_phí_chiết_khấu = tổng_{t=0}^{chu_kỳ-1} chi_phí_chu_kỳ(trạng_thái_t) / (1 + tỷ_lệ_chiết_khấu)^t
  tổng_qaly_chiết_khấu    = tổng_{t=0}^{chu_kỳ-1} qaly_chu_kỳ(trạng_thái_t) / (1 + tỷ_lệ_chiết_khấu)^t
  với trạng_thái_0 = phân bố ban đầu, trạng_thái_{t+1} = tiến_thuần_tập(trạng_thái_t, ma_trận_chuyển)
```

Chiết khấu từng chu kỳ về giá trị hiện tại dùng đúng công thức của [chiết khấu và ưu tiên thời gian](../chiết-khấu-và-ưu-tiên-thời-gian/), áp dụng theo từng chu kỳ chứ không theo từng năm.

## Ví dụ đã giải

**Lâm sàng**: mô hình 2 trạng thái — `Khỏe` và `Tử vong` — trong đó 10% thuần tập chết mỗi chu kỳ và `Tử vong` là trạng thái hấp thụ (xác suất ở lại chính nó là 1,0; bỏ vòng lặp này thì khối lượng thuần tập biến mất sau một chu kỳ trong `Tử vong`). Thuần tập bắt đầu hoàn toàn `Khỏe`, tốn £1.000 mỗi chu kỳ khi còn `Khỏe` (£0 khi `Tử vong`) và thu 0,8 QALY mỗi năm khi còn `Khỏe`. Mô phỏng 3 chu kỳ một năm với mức chiết khấu 3,5% của NICE:

```
Chu kỳ 0: trạng_thái = [1,00, 0,00] (100% Khỏe)
  chi phí = £1.000,00, qaly = 0,800, hệ số chiết khấu = 1,000000
  đã chiết khấu: chi phí = £1.000,00, qaly = 0,8000

Chu kỳ 1: trạng_thái = [0,90, 0,10] (90% Khỏe, 10% Tử vong)
  chi phí = £900,00, qaly = 0,720, hệ số chiết khấu = 0,966184
  đã chiết khấu: chi phí = £869,57, qaly = 0,6957

Chu kỳ 2: trạng_thái = [0,81, 0,19] (81% Khỏe, 19% Tử vong)
  chi phí = £810,00, qaly = 0,648, hệ số chiết khấu = 0,933511
  đã chiết khấu: chi phí = £756,14, qaly = 0,6049

Tổng chi phí chiết khấu ≈ £2.625,71
Tổng QALY chiết khấu ≈ 2,1006
```

Trạng thái mỗi chu kỳ là trạng thái chu kỳ trước đi qua ma trận chuyển — 90% trong số 90% còn `Khỏe` ở chu kỳ 1 vẫn `Khỏe` ở chu kỳ 2 (0,9 × 0,9 = 0,81), trong khi 19% còn lại đã chết (0,9 × 0,1 + 0,1 × 1,0 = 0,19). Lưu ý thuần tập không bao giờ làm trống hẳn trạng thái `Khỏe`: với tử suất 10% cố định mỗi chu kỳ và không quay lại, tỷ lệ `Khỏe` giảm theo cấp số nhân, không chạm không sau bất kỳ số chu kỳ hữu hạn nào.

## Mối liên hệ với kỹ thuật phần mềm

Để biết một mô hình HTA nhiều chu kỳ được dùng thế nào trong một đánh giá thực, xem [đánh giá công nghệ y tế](../đánh-giá-công-nghệ-y-tế/) — trường hợp tham chiếu quy định mức chiết khấu, nguồn độ thỏa dụng và chân trời thời gian mà một mô hình Markov nộp lên phải dùng.

Mô hình thuần tập Markov về cấu trúc là một máy trạng thái với chuyển đổi xác suất, chạy một số nhịp cố định, chiết khấu giá trị mỗi nhịp. Cùng dạng đó mô phỏng việc giữ chân/chuyển trạng thái của một thuần tập người dùng theo thời gian — xem [các chỉ số DORA](../các-chỉ-số-dora/) cho phiên bản độ tin cậy: "phần nào của hệ thống ở trạng thái suy giảm trong giai đoạn này và nó tốn bao nhiêu". Cụ thể:

- **Mô hình hóa giữ chân/rời bỏ** là mô hình thuần tập Markov với các trạng thái như "hoạt động", "có nguy cơ", "đã rời bỏ": một ma trận chuyển hằng tháng cố định, chạy 12 hay 24 chu kỳ tháng, cho số người dùng hoạt động kỳ vọng (và doanh thu) ở bất kỳ tháng tương lai nào, đúng như `Khỏe`/`Tử vong` cho số người sống sót kỳ vọng.
- **Độ tin cậy và kinh tế sự cố**: các trạng thái hệ thống (tốt, suy giảm, ngừng) có thể mô hình hóa tương tự, với "chi phí mỗi chu kỳ" cho thiệt hại ngừng hoạt động tích lũy khi hệ thống ở trạng thái suy giảm/ngừng — biến lập luận về tần suất sự cố thành lập luận về chi phí chiết khấu có thể so với chi phí của công việc độ tin cậy sẽ đổi xác suất chuyển.
- **Trạng thái hấp thụ là trạng thái kết thúc**: `Tử vong` trong mô hình lâm sàng chính là "thuê bao đã hủy" hay "ngoại tuyến vĩnh viễn" trong mô hình phần mềm — cả hai cần xác suất ở lại chính nó tường minh bằng 1,0, nếu không mô phỏng sẽ lặng lẽ mất khối lượng.

## Những cạm bẫy

- **Xác suất chuyển không cộng đúng 1 theo hàng.** Một hàng cộng nhiều hơn hoặc ít hơn 1 khiến khối lượng thuần tập lặng lẽ "rò rỉ" hoặc "sinh thêm" mỗi chu kỳ — luôn kiểm tra tổng hàng trước khi tin kết quả mô hình, vì bản thân cấu trúc mô hình không báo lỗi này.
- **Độ dài chu kỳ quá thô so với động học thật của bệnh.** Chu kỳ một năm cho một trạng thái đổi trong vài tuần sẽ đánh giá thấp các chuyển đổi giữa chu kỳ; chọn độ dài chu kỳ ngắn so với tốc độ quá trình được mô hình thực sự diễn tiến.
- **Quên vòng lặp của trạng thái hấp thụ.** Trạng thái hấp thụ (chết, hủy vĩnh viễn) cần xác suất ở lại chính nó đúng bằng 1,0. Bỏ nó thì khối lượng thuần tập bốc hơi khỏi trạng thái đó sau một chu kỳ và đánh giá thấp chi phí tích lũy hoặc mất QALY.
- **Coi mô hình là đã kiểm chứng vì nó chạy được.** Một mô hình thuần tập Markov với xác suất chuyển hợp lý vẫn có thể sai về cấu trúc (thiếu trạng thái, hành vi hấp thụ sai); hãy kiểm chứng với các mốc dịch tễ đã biết (ví dụ sống sót 5 năm mô phỏng có khớp đường cong sống sót đã công bố không) trước khi tin kết quả.

## Nguồn tham khảo

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
