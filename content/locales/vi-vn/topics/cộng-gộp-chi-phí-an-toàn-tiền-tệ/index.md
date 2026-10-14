# Cộng gộp chi phí an toàn tiền tệ

Cộng nhiều khoản tiền — hóa đơn hằng tháng, chi phí theo địa điểm, số liệu tác động ngân sách nhiều năm — bằng số dấu phẩy động nhị phân thông thường (`f64`) tích lũy các sai số biểu diễn nhỏ, vì hầu hết phân số thập phân (như $1.234,56) không thể biểu diễn chính xác trong dấu phẩy động nhị phân. Mỗi sai số đều nhỏ, nhưng một mô hình lớn cộng hàng trăm hay hàng nghìn khoản qua nhiều năm có thể lệch một phần của xu — và sai lệch phụ thuộc vào *thứ tự* cộng, khiến nó không tái lập được. Cộng gộp tiền tệ làm bằng số học thập phân chính xác (hoặc đơn vị nhỏ nhất dạng số nguyên) cộng chính xác, khớp với cách hệ thống kế toán và ghi sổ kép phải khớp đến từng xu.

## Tại sao điều này quan trọng

Đây là loại lỗi phần mềm được ghi chép đầy đủ và mang tính nền tảng: bài báo năm 1991 của Goldberg trong ACM Computing Surveys, "What Every Computer Scientist Should Know About Floating-Point Arithmetic", là tài liệu tham chiếu chuẩn cho việc vì sao dấu phẩy động nhị phân không biểu diễn chính xác hầu hết số tiền thập phân và vì sao cộng nhiều giá trị như vậy làm sai số chồng chất. Các mô hình kinh tế y tế và tài chính của NHS thường xuyên cộng nhiều năm và nhiều loại chi phí — [tổng chi phí sở hữu](../tổng-chi-phí-sở-hữu/) và [phân tích tác động ngân sách](../phân-tích-tác-động-ngân-sách/) đều cộng nhiều khoản chi phí `f64` trong nhiều năm. Khi một mô hình phải khớp đến từng xu — một cuộc kiểm toán tính tổng bằng tay phải ra con số *giống hệt* — thì chính phép tính phải là số thập phân chính xác, không phải dấu phẩy động.

## Toán học

```
Cộng gộp ngây thơ:           tổng = Σ f64(khoản_i)       — sai lệch phụ thuộc thứ tự
Cộng gộp an toàn tiền tệ:    tổng = Σ Decimal(khoản_i)   — chính xác, tái lập được

Áp dụng điều chỉnh theo phần trăm (ví dụ dự phòng):
  đã_điều_chỉnh = tổng × hệ_số           — kết quả Decimal chính xác, có thể có
                                           nhiều chữ số thập phân hơn số mũ đơn vị
                                           nhỏ nhất của đồng tiền
  đã_làm_tròn = làm_tròn(đã_điều_chỉnh, số_mũ_tiền_tệ, quy_tắc_làm_tròn)
                                         — quy tắc làm tròn (half-up so với
                                           half-even/làm tròn kiểu ngân hàng)
                                           phải được nêu tường minh
```

Lưu ý kỷ luật hai bước: nhân một số `Decimal` chính xác với một hệ số có thể cho nhiều chữ số thập phân hơn đồng tiền thực sự dùng (ví dụ ba chữ số thập phân từ một số có hai chữ số nhân với hệ số có hai chữ số) — độ chính xác trung gian đó *không* tự động bị cắt bỏ; chỉ một bước làm tròn tường minh với quy tắc làm tròn được nêu mới đưa nó về số mũ đơn vị nhỏ nhất thực của đồng tiền.

## Ví dụ đã giải

Mười hai hóa đơn hằng tháng giống hệt nhau, mỗi hóa đơn $1.234,56, cộng bằng số học thập phân chính xác: $1.234,56 × 12 = **$14.814,72** chính xác, so với cộng hằng số `f64` `1234.56` mười hai lần theo độ chính xác kép IEEE-754, có thể lệch một phần của xu tùy thứ tự cộng — loại lỗi có thật và được ghi chép, không phải vấn đề với mô hình xây trên số học `Money` thập phân chính xác.

Bây giờ áp khoản dự phòng tác động ngân sách chuẩn 5% (hệ số 1,05) lên tổng $14.814,72 đó: $14.814,72 × 1,05 = $15.555,456 — ba chữ số thập phân, vì phép nhân chính xác và không tự động làm tròn về hai chữ số của đồng tiền. Khi làm tròn tường minh về 2 chữ số bằng làm tròn kiểu ngân hàng (half-even) ta được **$15.555,46** chính xác.

## Mối liên hệ với kỹ thuật phần mềm

Đây là bài học nền tảng trực tiếp đằng sau nguyên tắc "phần mềm tài chính dùng `Decimal`, không dùng `float`" — liên kết tường minh với các mô-đun [tổng chi phí sở hữu](../tổng-chi-phí-sở-hữu/) và [phân tích tác động ngân sách](../phân-tích-tác-động-ngân-sách/) của kho này, hiện cả hai đều cộng gộp chi phí dấu phẩy động thường. Lập luận về tính đúng đắn không đòi hỏi di chuyển ngay các mô hình đó; nó chỉ ra chính xác *khi nào* một hệ thống phải khớp đến từng xu và do đó không được dùng dấu phẩy động nhị phân cho số học tiền của mình. Xem [phân bổ chi phí chính xác đến từng xu](../phân-bổ-chi-phí-chính-xác-đến-từng-xu/) cho bài toán đối ngẫu là chia (thay vì cộng) một tổng mà không mất xu nào.

## Những cạm bẫy

- **Chuyển sang `float` giữa chừng**: rút giá trị tiền ra thành số dấu phẩy động giữa phép tính (một số thư viện `Money` thậm chí đặt tên phương thức chuyển đổi này là "lossy" như lời cảnh báo rõ ràng) lặng lẽ bỏ bảo đảm chính xác cho mọi phép tính sau thời điểm đó.
- **"Decimal quá chậm để quan tâm"**: coi số học thập phân chính xác là gánh nặng không cần thiết, trong khi báo cáo tài chính cần tính đúng đắn và khả năng kiểm toán, không phải thông lượng thô.
- **Áp phần trăm dự phòng mà không nêu quy tắc làm tròn**: half-up so với half-even (làm tròn kiểu ngân hàng) có thể đổi xu cuối cùng; bản thân quy ước làm tròn phải là một lựa chọn được nêu và kiểm toán được — xem [phân tích chi phí-lợi ích](../phân-tích-chi-phí-lợi-ích/) cho hướng dẫn của HM Treasury Green Book về điều chỉnh dự phòng và thiên lệch lạc quan, loại con số mà bước làm tròn này áp dụng.

## Nguồn tham khảo

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — mẫu `Money`.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — hướng dẫn về thiên lệch lạc quan và dự phòng cho mô hình hóa tác động ngân sách. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
