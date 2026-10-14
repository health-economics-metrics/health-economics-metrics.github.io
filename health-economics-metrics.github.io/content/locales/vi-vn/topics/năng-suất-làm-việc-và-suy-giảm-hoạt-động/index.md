# Năng suất làm việc và suy giảm hoạt động (WPAI)

WPAI là bảng câu hỏi tự báo cáo đã được kiểm chứng (Reilly, Zbrozek, Dasbach, 1993) đo mức độ một vấn đề sức khỏe ảnh hưởng đến công việc có lương và các hoạt động hằng ngày, thường trong 7 ngày gần nhất. Nó tách tổn thất thành *vắng mặt* (absenteeism) — thời gian làm việc mất đi theo nghĩa đen — và *có mặt nhưng giảm hiệu suất* (presenteeism) — năng suất giảm khi vẫn có mặt tại nơi làm việc, trong đó thành phần sau thường là phần chi phí lớn hơn và ẩn hơn.

## Tại sao điều này quan trọng

Việc đếm ngày nghỉ ốm đơn giản chỉ thấy vắng mặt. Một bác sĩ hay nhân viên tri thức không bao giờ nghỉ nhưng làm việc ở 60% công suất vì một bệnh mạn tính không thêm gì vào sổ vắng mặt mà vẫn tạo ra tổn thất năng suất lớn, thật — WPAI được thiết kế chính để làm hiện ra chi phí vô hình đó. Vì là một công cụ đã kiểm chứng chứ không phải khảo sát làm riêng, điểm của nó có thể dùng trong các gói bằng chứng [kết quả do bệnh nhân báo cáo](../kết-quả-do-bệnh-nhân-báo-cáo/) và các nghiên cứu chi phí bệnh tật mà người đánh giá không phải kiểm chứng lại thước đo. Là một công cụ tự báo cáo, bản thân nó là một dạng PROM, phân biệt chủ yếu bởi tập trung vào công việc và hoạt động hơn là triệu chứng hay chất lượng sống.

## Toán học

```
Vắng mặt % = giờ_mất_do_sức_khỏe / (giờ_mất_do_sức_khỏe + giờ_đã_làm) × 100

Có mặt nhưng giảm hiệu suất % = mức suy giảm tự báo cáo 0–10 khi làm việc × 10
                  (lấy trực tiếp từ bảng câu hỏi, không suy ra ở đây)

Tổng suy giảm công việc % =
    Vắng_mặt% + (1 − Vắng_mặt%/100) × Có_mặt_giảm_hiệu_suất%
    (kết hợp hai phần sao cho tổng không bao giờ vượt 100%)

Chi phí năng suất = Tổng_suy_giảm_công_việc% / 100 × thu_nhập_trong_kỳ
```

Công thức tổng suy giảm cố ý không phải một tổng đơn giản: cộng thẳng hai phần trăm có thể vượt 100%, nên có mặt-nhưng-giảm-hiệu-suất chỉ áp dụng cho phần thời gian làm việc *còn lại* (không vắng mặt).

## Ví dụ đã giải

Một nhân viên bị đau nửa đầu có lịch làm việc 40 giờ một tuần nhưng bỏ lỡ 4 giờ:

```
giờ_mất = 4, giờ_đã_làm = 36
Vắng_mặt% = 4 / (4 + 36) × 100 = 10%
```

Họ tự đánh giá riêng tác động năng suất khi làm việc trong bảng câu hỏi WPAI là 3 trên 10, tức `Có_mặt_giảm_hiệu_suất% = 30%` (bước này là câu trả lời thô của bảng câu hỏi, không suy ra từ các con số khác):

```
Tổng_suy_giảm_công_việc% = 10 + (1 − 10/100) × 30
                         = 10 + 0,9 × 30
                         = 10 + 27
                         = 37%
```

Trong một tuần làm việc 5 ngày với thu nhập £800 (£160/ngày):

```
Chi phí năng suất = 37/100 × 800 = £296
```

Lưu ý việc đếm ngày nghỉ ốm ngây thơ sẽ chỉ ghi nhận 4 giờ mất (10%) — thành phần có-mặt-nhưng-giảm-hiệu-suất gần như nhân ba mức suy giảm thực khi được tính đến.

## Mối liên hệ với kỹ thuật phần mềm

Điều này ánh xạ trực tiếp vào các chỉ số sức khỏe của nhóm kỹ thuật:

- **Vắng mặt** là nghỉ ốm và nghỉ phép có lương — phần nhìn thấy được, đã được theo dõi và dễ.
- **Có mặt nhưng giảm hiệu suất** là kỹ sư kiệt sức hay mệt mỏi vì chuyển ngữ cảnh, có mặt ở mọi buổi stand-up nhưng làm việc ở công suất giảm — thường là chi phí lớn hơn và ẩn hơn, vô hình với dữ liệu đầu người hay chấm công. Nó hiện ra thay vào đó dưới dạng thông lượng giảm trong [DORA](../các-chỉ-số-dora/) và [các chỉ số luồng](../các-chỉ-số-luồng/), hoặc giải quyết chậm hơn đúng vào [nợ kỹ thuật](../nợ-kỹ-thuật/) mà "lãi" của nó làm suy giảm thêm.
- Bài học kỹ thuật giống bài học lâm sàng: chỉ đo vắng mặt rồi gọi đó là "mất năng suất" đánh giá thấp chi phí thực một cách có hệ thống, vì nó bỏ sót mọi người có mặt nhưng bị suy giảm.

## Những cạm bẫy

- **Thiên lệch hồi tưởng trong tự báo cáo.** Cửa sổ nhớ lại 7 ngày chịu cùng các méo mó báo cáo như mọi tự đánh giá hồi cứu.
- **Coi thang 0–10 như phép đo vật lý thật.** Đó là thang thứ tự suy ra từ tự đánh giá, không phải đại lượng vật lý đã kiểm chứng — coi hiệu số trên nó là tuyến tính hay thang khoảng một cách chặt chẽ là sự tiện lợi mô hình hóa, không phải sự thật vật lý đã kiểm chứng.
- **Gộp điểm giữa các biến thể WPAI.** WPAI có nhiều phiên bản theo tình trạng — WPAI:GH (sức khỏe chung), WPAI:SHP (vấn đề sức khỏe cụ thể) và các biến thể theo bệnh — và điểm của các biến thể khác nhau không nên được gộp hay so sánh mà không kiểm tra trước rằng chúng là cùng phiên bản công cụ.

## Nguồn tham khảo

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- Tài liệu công cụ WPAI, Reilly Associates — tham chiếu chấm điểm chính thức. <https://www.reillyassociates.net/>
