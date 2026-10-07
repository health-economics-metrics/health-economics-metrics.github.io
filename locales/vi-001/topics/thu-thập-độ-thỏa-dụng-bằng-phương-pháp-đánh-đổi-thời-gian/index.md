# Thu thập độ thỏa dụng bằng phương pháp đánh đổi thời gian (TTO)

TTO là phương pháp tiêu chuẩn để lấy giá trị độ thỏa dụng của một trạng thái sức khỏe trực tiếp từ người trả lời, thay vì tự nghĩ ra. Nó là một trong các phương pháp thu thập — cùng với standard gamble và các thí nghiệm lựa chọn rời rạc — tạo ra các bộ giá trị (value set) đằng sau những công cụ như [EQ-5D](../eq-5d/) và do đó đằng sau hầu hết các phép tính [QALY](../năm-sống-điều-chỉnh-theo-chất-lượng/) ở hạ nguồn.

## Tại sao điều này quan trọng

Mọi trọng số độ thỏa dụng đi vào một phép tính QALY đều phải đến từ đâu đó. TTO là "bằng cách nào": với một trạng thái được coi là tốt hơn tử vong, người trả lời được hỏi cần bao nhiêu năm `X` ở sức khỏe hoàn hảo để thấy tương đương với `T` năm ở trạng thái suy giảm (`X < T`); độ thỏa dụng là `X / T`. Với một trạng thái mà một số người trả lời coi là tệ hơn tử vong, công thức chuẩn không còn dùng được (nó không biểu diễn sạch độ thỏa dụng dưới không), nên dùng TTO mở rộng. Một kỹ sư phần mềm hay nhà phân tích coi trọng số độ thỏa dụng là đầu vào cho sẵn, không biết rằng nó cần một giao thức thu thập đã được kiểm chứng để có được, chỉ còn một bước nữa là sẽ có một con số không bảo vệ được khi bị chất vấn.

## Toán học

```
TTO chuẩn (trạng thái tốt hơn tử vong):
  độ_thỏa_dụng = thời_gian_ở_sức_khỏe_hoàn_hảo / thời_gian_ở_trạng_thái_suy_giảm

TTO mở rộng (trạng thái tệ hơn tử vong):
  độ_thỏa_dụng = -thời_gian_đánh_đổi_lấy_tử_vong / (tổng_thời_lượng - thời_gian_đánh_đổi_lấy_tử_vong)
```

`thời_gian_ở_sức_khỏe_hoàn_hảo` / `thời_gian_ở_trạng_thái_suy_giảm` — `X` năm ở sức khỏe hoàn hảo được coi là tương đương `T` năm ở trạng thái suy giảm. `thời_gian_đánh_đổi_lấy_tử_vong` / `tổng_thời_lượng` — trong cách đặt câu hỏi tệ-hơn-tử-vong, trong `T` năm đời còn lại, số năm `a` mà người trả lời chịu đánh đổi lấy cái chết ngay lập tức, thích `T − a` năm ở sức khỏe hoàn hảo rồi chết hơn `T` năm ở trạng thái tệ hơn tử vong. Kết quả âm, neo sao cho tử vong = 0.

## Ví dụ đã giải

**Chuẩn**: người trả lời ở trạng thái suy giảm 10 năm và thấy không khác biệt với 7 năm ở sức khỏe hoàn hảo: độ thỏa dụng = 7 / 10 = **0,7**.

**Tệ hơn tử vong**: trong 10 năm đời còn lại, người trả lời chịu đánh đổi 2 năm lấy cái chết ngay lập tức — họ thích 8 năm ở sức khỏe hoàn hảo rồi chết hơn 10 năm ở trạng thái tệ hơn tử vong: độ thỏa dụng = −2 / (10 − 2) = −2 / 8 = **−0,25**.

## Mối liên hệ với kỹ thuật phần mềm

Cùng điểm mà một khảo sát DevEx hay mức độ gắn kết gặp phải khi nhờ mọi người chấm điểm một thứ trên thang 0–10 chưa được kiểm chứng áp dụng ngược lại ở đây: TTO tồn tại chính vì "cứ nhờ mọi người chấm điểm" tự nó không phải một phương pháp thu thập đã kiểm chứng. Trước khi dựng một chỉ số tổng hợp — điểm DevEx, chỉ số gắn kết, thang kiệt sức — trên một con số tự báo cáo, hãy hỏi nó được thu thập bằng gì và phương pháp đó đã được kiểm chứng chưa; cùng câu hỏi mà các nhà kinh tế y tế đặt cho một trọng số độ thỏa dụng trước khi nó vào QALY.

## Những cạm bẫy

- **Khái quát từ một giá trị đơn lẻ**: giá trị TTO lấy từ một *mẫu* công chúng (hoặc bệnh nhân), không phải từ người mà việc chăm sóc đang được quyết định — dùng giá trị TTO của một người trả lời như thể nó khái quát hóa được là lỗi lấy mẫu.
- **Đặt câu hỏi sai dạng cho trạng thái**: công thức TTO chuẩn giả định trạng thái rõ ràng tốt hơn tử vong; áp nó cho trạng thái mà một số người trả lời coi là tệ hơn tử vong mà không chuyển sang dạng mở rộng sẽ lặng lẽ cho độ thỏa dụng sai (dương).
- **Thời lượng không so sánh được**: giá trị TTO thu được từ các đời còn lại `T` khác nhau cho so sánh tệ-hơn-tử-vong không so sánh trực tiếp được nếu không kiểm tra rằng thiết kế nghiên cứu giữ `T` không đổi.

## Nguồn tham khảo

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
