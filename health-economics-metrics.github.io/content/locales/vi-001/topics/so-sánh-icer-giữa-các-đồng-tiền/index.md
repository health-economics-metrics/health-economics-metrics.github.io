# So sánh ICER giữa các đồng tiền

So sánh một [ICER](../tỷ-số-hiệu-quả-chi-phí-gia-tăng/) tính bằng đồng tiền của một nước với [ngưỡng sẵn sàng chi trả](../ngưỡng-sẵn-sàng-chi-trả/) của nước khác — hoặc gộp dữ liệu chi phí thu thập từ một thử nghiệm đa quốc gia — đòi hỏi một bước quy đổi tiền tệ tường minh, kiểm toán được. Chọn sai cách quy đổi có thể đảo ngược quyết định chấp nhận từ cùng một bằng chứng, dù dữ liệu lâm sàng hay chi phí không đổi.

## Tại sao điều này quan trọng

Hướng dẫn phương pháp của ISPOR cho các thử nghiệm lâm sàng đa quốc gia (Willke và cộng sự, *Health Economics*, 1998) khuyến nghị quy đổi chi phí nguồn lực bằng **ngang giá sức mua (PPP)** — không phải tỷ giá thị trường — khi so sánh giá trị kinh tế thực của nguồn lực giữa các nước, và dành tỷ giá hối đoái thị trường cho mục đích thật của nó: mô hình hóa các dòng thanh toán tiền mặt xuyên biên giới thực sự. Nhầm lẫn hai thứ này là một trong những sai sót phương pháp phổ biến nhất trong HTA đa quốc gia, vì với người chưa đọc hướng dẫn thì cả hai đều trông như "một tỷ giá", và bảng tính sẽ không ngăn bạn làm sai.

## Toán học

```
icer_nội_tệ = quy_đổi(icer_gốc, hệ_số_quy_đổi)

hệ_số_quy_đổi nên là:
  hệ số PPP        — để so sánh giá trị kinh tế thực của nguồn lực giữa
                     các nước (ISPOR khuyến nghị cho CEA đa quốc gia)
  tỷ giá thị trường — chỉ cho các khoản thanh toán tiền mặt xuyên biên giới thực

chấp_nhận nếu icer_nội_tệ < ngưỡng_nội_địa
```

Quy tắc quyết định chính là [quy tắc ICER](../ngưỡng-sẵn-sàng-chi-trả/) thông thường — `chấp nhận nếu ICER < λ` — còn câu hỏi phương pháp của chủ đề này là *hệ số quy đổi nào* tạo ra `icer_nội_tệ` mà quy tắc ấy áp dụng.

## Ví dụ đã giải

Một loại thuốc có ICER từ thử nghiệm ở Hoa Kỳ là $45.000/QALY. Một nước nhập khẩu giả định đặt ngưỡng riêng là £34.000/QALY (con số giả định theo từng nước, chỉ dành cho ví dụ này — ngưỡng thực khác nhau theo nước và thay đổi theo thời gian, luôn phải ghi nguồn và ngày).

**Dùng hệ số quy đổi PPP bằng 0,72** (con số minh họa, chỉ cho ví dụ này): $45.000 × 0,72 = £32.400/QALY. £32.400 < £34.000 → **chấp nhận**.

**Dùng tỷ giá thị trường 0,79** (con số minh họa): $45.000 × 0,79 = £35.550/QALY. £35.550 > £34.000 → **từ chối**.

Cùng một ICER $45.000/QALY cho ra quyết định chấp nhận khi quy đổi bằng PPP và quyết định từ chối khi quy đổi bằng tỷ giá thị trường. Đây là minh họa cụ thể vì sao hướng dẫn của ISPOR coi việc chọn hệ số quy đổi là có ý nghĩa về phương pháp — không phải chi tiết làm tròn, và không phải thứ để ngầm định trong một công thức bảng tính chẳng ai soát lại.

## Mối liên hệ với kỹ thuật phần mềm

Đây là bản sao trong kinh tế y tế của một bài toán kỹ thuật quen thuộc: tính đúng đắn của định giá đa tiền tệ i18n/l10n trong phần mềm thương mại, nơi một trang giá SaaS không được lặng lẽ so sánh số tiền `$` với giá `£`. Bảo đảm ở cấp kiểu dữ liệu mà một kiểu `Money` thiết kế tốt cung cấp — phương thức so sánh từ chối các đồng tiền không khớp và buộc phải có bước quy đổi tường minh trước — là phiên bản kỹ thuật phần mềm song song trực tiếp với điểm phương pháp kinh tế y tế ở đây: đừng so sánh các con số chưa quy đổi giữa các đồng tiền, và đừng để bước quy đổi ngầm hoặc không được ghi lại.

## Những cạm bẫy

- **Lặng lẽ so sánh số tiền ở các đồng tiền khác nhau**: một công việc HTA tạm thời trong bảng tính trừ hoặc so sánh số đô la với số bảng mà không quy đổi trước — loại lỗi mà kiểu `Money` nhận biết tiền tệ thật sự bắt được theo cấu trúc, thay vì để thành lỗi im lặng.
- **Nhầm tỷ giá thị trường với PPP**: sai sót phương pháp phổ biến nhất trong HTA đa quốc gia theo hướng dẫn của ISPOR — hai con số có thể khác nhau nhiều và trả lời các câu hỏi khác nhau (giá trị kinh tế thực so với dòng tiền mặt thực).
- **Không ghi ngày của tỷ giá hay chỉ số PPP đã dùng**: cả hai đều thay đổi theo thời gian, nên mọi hệ số quy đổi được trích dẫn phải ghi ngày theo cách kho này ghi ngày cho các con số tham chiếu khác (giá carbon của Green Book, giá trị của một ca tử vong tránh được, v.v.).

## Nguồn tham khảo

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
