# Giá trị kỳ vọng của thông tin mẫu (EVSI)

EVSI là giá trị của *một nghiên cứu cụ thể được đề xuất* — với thiết kế và cỡ mẫu cho trước — trước khi tiến hành, khác với [EVPI](../giá-trị-kỳ-vọng-của-thông-tin-hoàn-hảo/) vốn đánh giá việc loại bỏ hoàn toàn mọi bất định. EVSI trả lời câu hỏi mà nhà tài trợ nghiên cứu thực sự gặp: "nghiên cứu *này*, ở cỡ *này*, có đáng chi phí của nó không?"

## Tại sao điều này quan trọng

EVPI cho một trần về giá trị mà bất kỳ nghiên cứu nào có thể có; nó không bao giờ nói liệu nghiên cứu trước mặt có vượt ngưỡng hay không. Một nhà tài trợ nghiên cứu quốc gia phải chọn giữa thí điểm 50 bệnh nhân và thử nghiệm quyết định 500 bệnh nhân cần biết giá trị của *từng thiết kế*, không chỉ giá trị của việc biết tất cả. EVSI cho con số đó, và vì nó thay đổi theo cỡ mẫu, nhà tài trợ có thể tìm cỡ mẫu tối đa hóa lợi ích ròng kỳ vọng thay vì đoán.

Đó cũng là lý do EVSI luôn nhỏ hơn hoặc bằng EVPI: một mẫu hữu hạn chỉ giải quyết một phần bất định, và một nghiên cứu có vẻ đáng giá hơn thông tin hoàn hảo là dấu hiệu tính toán sai, không phải một kết quả thật.

## Toán học

```
Trường hợp tổng quát:
EVSI(n) = E_dữ_liệu[ max_d E_θ|dữ_liệu[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (kỳ vọng lồng nhau: lớp ngoài trên các kết quả nghiên cứu có thể xảy ra,
  lớp trong trên niềm tin hậu nghiệm về θ sau khi thấy kết quả đó — thường
  ước lượng bằng Monte Carlo lồng nhau / cập nhật Bayes trên các mẫu của
  phân tích độ nhạy xác suất)

Xấp xỉ dạng đóng bằng phân phối chuẩn (một tham số bất định, mô hình
chuẩn-chuẩn liên hợp — lối tắt phổ biến, không chính xác cho mọi mô hình):
EVSI(n) = EVPI × n / (n + n0)

n  = cỡ mẫu của nghiên cứu đề xuất
n0 = "cỡ mẫu tương đương của tiên nghiệm" — cỡ mẫu giả định mang cùng
     lượng thông tin như niềm tin hiện tại, suy ra từ tỷ số phương sai
     dữ liệu trên phương sai tiên nghiệm
ENBS(n) = EVSI(n) − Chi_phí(n)
EVSI_quần_thể = EVSI_mỗi_quyết_định × số_quyết_định_bị_ảnh_hưởng
```

Dạng tổng quát là kỳ vọng lồng nhau vì kết quả nghiên cứu tương lai cũng bất định: phải lấy trung bình trên mọi tập dữ liệu có thể có, và với mỗi tập tính lại quyết định tốt nhất theo niềm tin đã cập nhật (hậu nghiệm). Xấp xỉ chuẩn đánh đổi chi phí tính toán đó lấy một tỷ số duy nhất, đúng khi tham số bất định và dữ liệu (xấp xỉ) chuẩn và liên hợp — một sự tiện lợi, không phải quy luật phổ quát. Monte Carlo lồng nhau đầy đủ là phương pháp tổng quát khi giả định này không đúng. Xem [phân tích độ nhạy xác suất](../phân-tích-độ-nhạy-xác-suất/) cho các mẫu PSA mà EVSI thường được ước lượng từ đó.

## Ví dụ đã giải

Tiếp nối ví dụ của [EVPI](../giá-trị-kỳ-vọng-của-thông-tin-hoàn-hảo/) — triển khai trợ lý ghi chép tài liệu bằng AI cho 5.000 phòng khám, trong đó EVPI là £1,2 triệu — ở đây viết EVPI đó đầy đủ: **EVPI = £1.200.000**.

Một thí điểm đề xuất bao gồm 50 phòng khám. Từ tỷ số phương sai niềm tin tiên nghiệm trên độ chính xác đo lường của thí điểm, cỡ mẫu tương đương của tiên nghiệm là `n0 = 75`:

```
EVSI(50) = 1.200.000 × 50 / (50 + 75)
         = 1.200.000 × 50 / 125
         = 1.200.000 × 0,4
         = £480.000
```

Thí điểm tốn £120.000:

```
ENBS = EVSI − Chi_phí = 480.000 − 120.000 = £360.000
```

ENBS dương rõ rệt: hãy tài trợ thí điểm. Nếu cùng quyết định mua sắm lặp lại ở 3 trust vùng tương tự, giá trị của thí điểm tăng theo:

```
EVSI_quần_thể = 480.000 × 3 = £1.440.000
```

## Mối liên hệ với kỹ thuật phần mềm

EVSI là kinh tế học của việc một dự án thí điểm hay A/B test nên lớn *đến đâu*, không chỉ có nên làm hay không:

- **Cỡ mẫu là một quyết định đầu tư.** Beta 50 người dùng và triển khai theo giai đoạn đến 5.000 người dùng là những "nghiên cứu" khác nhau với EVSI và chi phí khác nhau — EVSI cho phép so sánh chúng trên cùng cơ sở thay vì quay về mặc định "nhiều dữ liệu hơn luôn tốt hơn".
- **Thử nghiệm đăng ký là ENBS, không chỉ EVSI.** Một nghiên cứu có EVSI cao nhưng chi phí ăn gần hết là một đề xuất yếu; quy tắc quyết định là lợi ích ròng kỳ vọng của mẫu, đúng như business case đặt lợi ích đối diện chi phí chứ không chỉ báo cáo lợi ích.
- **Lợi suất cận biên giảm dần thấy rõ.** Vì EVSI(n) tăng theo `n/(n+n0)`, nhân đôi cỡ thí điểm không bao giờ nhân đôi giá trị của nó — dạng chính thức của trực giác kỹ sư rằng thí nghiệm lớn hơn có giá trị thông tin cận biên giảm dần.

## Những cạm bẫy

- **Dùng xấp xỉ chuẩn ngoài các giả định của nó.** Nó chỉ đúng xấp xỉ cho bất định một tham số liên hợp; một mô hình quyết định thật sự phi tuyến hoặc nhiều tham số cần Monte Carlo lồng nhau đầy đủ, không phải lối tắt này.
- **So EVSI chỉ với chi phí tiền mặt.** EVSI phải được cân với chi phí *đầy đủ* của nghiên cứu, gồm cả chi phí của việc trì hoãn quyết định — xem [chi phí trì hoãn](../chi-phí-trì-hoãn/) — không chỉ hóa đơn nghiên cứu.
- **Coi EVSI > EVPI là một phát hiện thật.** Theo cấu trúc EVSI không bao giờ vượt EVPI; một phép tính cho ra điều đó là lỗi mô hình, không phải khám phá.

## Nguồn tham khảo

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
