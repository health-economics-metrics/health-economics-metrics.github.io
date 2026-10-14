# Tỷ phần quy trách nhiệm quần thể (PAF)

PAF là tỷ phần gánh nặng bệnh tật hoặc kết cục trong quần thể có thể quy cho phơi nhiễm với một yếu tố nguy cơ cụ thể — tỷ phần sẽ biến mất nếu loại bỏ hoàn toàn phơi nhiễm đó. Nó biến "yếu tố nguy cơ này làm tăng gấp đôi khả năng của bạn" thành một con số ở cấp quần thể mà người lập kế hoạch thực sự dùng được: phơi nhiễm này đáng để chống lại đến đâu về số ca và chi phí.

## Tại sao điều này quan trọng

Levin đưa PAF ra năm 1953 để trả lời một câu hỏi hẹp, cụ thể: nếu không ai hút thuốc thì ung thư phổi sẽ biến mất bao nhiêu? Cùng phép tính đó hiện quyết định quy mô của việc lập kế hoạch phòng ngừa quốc gia trên toàn thế giới, từ chiến lược thuốc lá và béo phì đến bảng xếp hạng yếu tố nguy cơ của nghiên cứu Gánh nặng Bệnh tật Toàn cầu của WHO, vì riêng nguy cơ tương đối nói rất ít về tác động — một yếu tố nguy cơ có thể nhân đôi khả năng một sự kiện hiếm mà hầu như không làm gánh nặng bệnh của quần thể nhúc nhích, hoặc chỉ tăng nhẹ khả năng một sự kiện phổ biến mà vẫn giải thích phần lớn số ca. PAF biến "yếu tố nguy cơ X nguy hiểm" thành "loại bỏ yếu tố nguy cơ X sẽ ngăn được chừng này ca mỗi năm", con số mà business case của một chương trình phòng ngừa thực sự cần. Xem [kinh tế học phòng ngừa](../kinh-tế-học-phòng-ngừa/) cho việc tính chi phí hành động dựa trên con số đó khi đã có.

## Toán học

```
PAF = tỷ_lệ_phơi_nhiễm × (nguy_cơ_tương_đối − 1) / (1 + tỷ_lệ_phơi_nhiễm × (nguy_cơ_tương_đối − 1))

tỷ_lệ_phơi_nhiễm   = phần quần thể bị phơi nhiễm yếu tố nguy cơ (0–1)
nguy_cơ_tương_đối  = nguy cơ kết cục ở người phơi nhiễm so với không phơi nhiễm (ví dụ 2,5 = gấp 2,5 lần)

số_ca_quy_trách_nhiệm = tổng_số_ca × PAF
```

PAF tăng theo cả tỷ lệ phơi nhiễm lẫn nguy cơ tương đối — một nguy cơ tương đối tăng vừa phải (giả sử 1,5 lần) gắn với phơi nhiễm rất phổ biến có thể cho PAF lớn hơn một nguy cơ tương đối gây ấn tượng (giả sử 5 lần) gắn với phơi nhiễm hiếm. Đó là toàn bộ lý do nó tồn tại như một con số riêng bên cạnh nguy cơ tương đối.

## Ví dụ đã giải

Một yếu tố nguy cơ có ở 30% quần thể (`tỷ_lệ_phơi_nhiễm = 0,3`) và làm tăng nguy cơ kết cục gấp 2,5 lần (`nguy_cơ_tương_đối = 2,5`):

```
PAF = 0,3 × (2,5 − 1) / (1 + 0,3 × (2,5 − 1))
    = 0,3 × 1,5 / (1 + 0,3 × 1,5)
    = 0,45 / 1,45
    ≈ 0,3103 (31,0%)

Với 1.000 ca mỗi năm trong quần thể:
số_ca_quy_trách_nhiệm = 1.000 × 0,3103 ≈ 310 ca mỗi năm
```

Gần một phần ba gánh nặng hằng năm của kết cục này có thể quy cho phơi nhiễm — loại bỏ hoàn toàn nó (trần lý thuyết; không can thiệp thực nào đạt 100% loại bỏ phơi nhiễm) sẽ ngăn khoảng 310 trong 1.000 ca mỗi năm.

## Mối liên hệ với kỹ thuật phần mềm

PAF là phiên bản dịch tễ học của câu hỏi "tỷ phần khối lượng sự cố của chúng ta quy cho nguyên nhân gốc này là bao nhiêu?" — cùng loại câu hỏi các nhóm đặt ra khi đo một loại triển khai hay phụ thuộc cụ thể so với tập sự cố production, thay vì coi mọi sự cố đáng sửa như nhau. Một loại nguyên nhân gốc xuất hiện ở phần lớn các lần triển khai và chỉ có nguy cơ tương đối gây sự cố vừa phải có thể vượt một loại hiếm có nguy cơ tương đối cao về việc nên dồn công sức kỹ thuật vào đâu trước — đúng nhận xét của PAF, được diễn đạt lại.

## Những cạm bẫy

- **Cộng các PAF qua nhiều yếu tố nguy cơ**: PAF của nhiều yếu tố cùng ảnh hưởng một kết cục không cộng thành 100% — tổng có thể vượt, vì các yếu tố tương tác và dùng chung đường nhân quả. Hãy coi mỗi PAF là "nếu chỉ loại bỏ yếu tố này", không bao giờ là sự chia nhỏ toàn bộ nguy cơ.
- **Chuyển nguy cơ tương đối giữa các quần thể**: nguy cơ tương đối ước lượng ở một quần thể (tỷ lệ phơi nhiễm nền khác, yếu tố gây nhiễu khác) cho PAF gây hiểu lầm khi áp vào tỷ lệ phơi nhiễm của quần thể khác.
- **Nhầm PAF với nguy cơ quy trách nhiệm ở người phơi nhiễm**: PAF ở cấp quần thể và phụ thuộc tỷ lệ phơi nhiễm; nguy cơ quy trách nhiệm ở người phơi nhiễm ở cấp cá nhân và không phụ thuộc. Chúng trả lời các câu hỏi khác nhau — đừng dùng cái này để trả lời câu hỏi của cái kia.

## Nguồn tham khảo

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
