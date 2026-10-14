# Giá trị của một sinh mạng thống kê (VSL)

Giá trị của một sinh mạng thống kê (VSL) — trong cách dùng của Vương quốc Anh gọi là "giá trị của một ca tử vong tránh được" (VPF) — là số tiền mà *quần thể* tập thể sẵn sàng chi trả để giảm nguy cơ một ca tử vong thống kê, suy ra từ các nghiên cứu đánh đổi tiền lương-rủi ro (mức lương tăng thêm mà người lao động đòi để làm việc nguy hiểm hơn) và các khảo sát sở thích tuyên bố. Nó không phải giá của sinh mạng một cá nhân xác định; nó là một cấu trúc rủi ro quần thể, và một kỹ sư phần mềm xây hệ thống giảm rủi ro — thuật toán phân loại, điều phối xe cứu thương, giám sát an toàn — nên biết nó đến từ một truyền thống lý thuyết khác với [ngưỡng sẵn sàng chi trả](../ngưỡng-sẵn-sàng-chi-trả/).

## Tại sao điều này quan trọng

VSL/VPF là công cụ chuẩn để quy đổi các mức giảm rủi ro tử vong ra tiền trong phân tích chi phí-lợi ích quy định: an toàn giao thông, quy định môi trường và một số can thiệp y tế công cộng dựng business case qua nó. HM Treasury Green Book công bố một con số VPF suy ra từ dữ liệu thị trường lao động và khảo sát của Vương quốc Anh, và Bộ Giao thông dùng nó trực tiếp khi đánh giá an toàn đường bộ. Đây là một truyền thống thẩm định thực sự khác phương pháp QALY × ngưỡng sẵn sàng chi trả: cách tiếp cận ngưỡng định giá lợi ích sức khỏe theo cái mà *ngân sách y tế* hiện tạo ra ở biên, còn VSL/VPF định giá việc giảm rủi ro theo cái người ta bộc lộ trên thị trường lao động hay khảo sát là họ sẽ trả. Hai khung này không phải lúc nào cũng tương thích, và dùng cả hai trong một trường hợp mà không thừa nhận là một sai sót phân tích phổ biến.

## Toán học

```
Số ca tử vong tránh được = quần_thể × giảm_rủi_ro_mỗi_người
  (giảm_rủi_ro_mỗi_người là một xác suất, ví dụ 0,000001 =
   giảm một phần triệu rủi ro tử vong hằng năm)

Lợi ích tử vong quy tiền = số_ca_tử_vong_tránh_được × giá_trị_ca_tử_vong_tránh_được
```

## Ví dụ đã giải

Một vùng 800.000 người hưởng lợi từ một can thiệp điều phối/phân loại số về an toàn đường bộ giảm rủi ro tử vong hằng năm của mỗi người một phần triệu (0,000001):

```
Số ca tử vong tránh được = 800.000 × 0,000001 = 0,8
```

Với giá trị ca tử vong tránh được của Vương quốc Anh là £2.180.000 (con số HM Treasury/DfT, giá 2023/24 — Green Book cập nhật hằng năm, hãy kiểm tra lại trước khi trích dẫn trong một phân tích đang thực hiện):

```
Lợi ích tử vong quy tiền = 0,8 × £2.180.000 = £1.744.000/năm
```

Gần £1,75 triệu mỗi năm lợi ích tử vong quy tiền, từ một mức giảm rủi ro mà đa số quần thể bị ảnh hưởng sẽ không bao giờ nhận ra ở cấp cá nhân.

## Mối liên hệ với kỹ thuật phần mềm

Các nhóm phần mềm an toàn trọng yếu — phần sụn thiết bị y tế, phần mềm xe tự lái, hệ thống điều khiển công nghiệp — đối mặt chính bài toán định giá này khi dựng business case chi phí-lợi ích cho đầu tư an toàn: định giá "ngăn một sự cố thảm họa" thế nào khi sự cố hiếm, nghiêm trọng và phân tán trên một quần thể người dùng lớn? VSL/VPF là tiền lệ thực, công khai, có hàng chục năm để gán một con số cho mức giảm rủi ro quần thể hiếm và nghiêm trọng — cùng dạng lập luận như định giá khoản đầu tư SRE chống lại sự cố ngừng hoạt động thảm họa hiếm, chỉ là với kết cục tử vong thay vì thời gian ngừng.

## Những cạm bẫy

- **Coi VSL là "giá của một sinh mạng xác định"**: nó không phải vậy. VSL/VPF là một cấu trúc quần thể thống kê, suy ra từ các đánh đổi giảm rủi ro giữa nhiều người, không phải đánh giá về sự sống hay cái chết của một cá nhân cụ thể.
- **Đếm đôi với phép tính lợi ích tiền tệ ròng dựa trên QALY**: dùng một con số VSL/VPF và một phép tính QALY × ngưỡng riêng trong cùng một trường hợp mà không điều hòa chúng, lặng lẽ đếm hai lần giá trị của cùng các ca tử vong tránh được. Chọn một khung cho mỗi trường hợp.
- **Chuyển ước tính VSL giữa các bối cảnh mà không điều chỉnh**: VSL suy ra từ thị trường lao động hay dữ liệu lương-rủi ro của người trong độ tuổi lao động ở một nước, áp vào bối cảnh thu nhập khác hoặc quần thể khác (trẻ em, người cao tuổi) mà không điều chỉnh, là một câu hỏi phương pháp còn tranh cãi thật và lâu dài — không phải chuyện đã giải quyết.

## Nguồn tham khảo

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — hướng dẫn bổ sung về Value of a Prevented Fatality (giá 2023/24; giá trị trong Green Book được cập nhật hằng năm). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (về truyền thống VSL của Hoa Kỳ, nêu để đối chiếu với con số VPF của Vương quốc Anh ở trên). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
