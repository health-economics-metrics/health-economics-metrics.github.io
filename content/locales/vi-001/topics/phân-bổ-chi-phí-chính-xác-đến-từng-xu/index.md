# Phân bổ chi phí chính xác đến từng xu

Chia một tổng tiền — khoản trợ cấp chung, hóa đơn hạ tầng, con số tác động ngân sách — cho nhiều người nhận bằng số học phần trăm ngây thơ thường cho các phần cộng lại không khớp tổng ban đầu. Phân bổ chính xác đến từng xu là cách khắc phục: một phương pháp số nguyên/thập phân làm việc trong đơn vị nhỏ nhất của đồng tiền (xu) và bảo đảm các phần cộng lại *đúng bằng* tổng, bất kể phép chia không chẵn đến đâu. Mọi kỹ sư phần mềm phải làm cho một tổng đã chia khớp đến từng xu — bảng lương, chi trả trợ cấp, tính phí dịch vụ chung — đều cần mẫu này, không phải phần trăm dấu phẩy động.

## Tại sao điều này quan trọng

Đây là một mẫu nền tảng có tên trong kỹ thuật phần mềm doanh nghiệp: *Patterns of Enterprise Application Architecture* của Martin Fowler (2002) ghi lại `Money` và `Allocate` chính vì "chia $100 làm ba phần" là bài toán mà mã ngây thơ luôn làm sai, và làm sai một cách im lặng — lỗi chỉ lộ ra khi ai đó đối chiếu sổ sách và thấy các phần thiếu (hoặc thừa) tổng một xu. Trong công việc kinh tế y tế và tài chính NHS, điều này không phải chuyện học thuật: một con số tác động ngân sách được chia theo địa điểm, năm hoặc đơn vị; chi phí hạ tầng và giấy phép chung được phân cho các khoa theo số nhân viên hoặc tỷ lệ hoạt động. Mọi phép chia như vậy phải khớp chính xác, vì một giám đốc tài chính nhận các phần không cộng ra tổng sẽ thôi tin cả mô hình.

## Toán học

```
Cách ngây thơ (sai):
  phần_i = làm_tròn(tổng × tỷ_lệ_i / Σ tỷ_lệ)     — làm tròn từng phần riêng rẽ

Cách chính xác (phần dư lớn nhất / "largest remainder allocation"):
  1. cơ_sở_i = làm_tròn_xuống(tổng_đơn_vị_nhỏ_nhất × tỷ_lệ_i / Σ tỷ_lệ)   — chỉ các đơn vị nhỏ nhất nguyên (xu)
  2. phần_dư = tổng_đơn_vị_nhỏ_nhất − Σ cơ_sở_i          — số xu còn lại, luôn < số người nhận
  3. phát thêm 1 đơn vị nhỏ nhất cho `phần_dư` người nhận có phần thập phân
     lớn nhất từ bước 1 cho đến khi hết phần dư

Kết quả: Σ phần_i == tổng luôn luôn, theo cấu trúc
```

Cách chính xác không bao giờ làm tròn riêng một phần nào — nó làm tròn *toàn bộ phép phân bổ* như một thao tác, và đó là điều làm bất biến về tổng đúng.

## Ví dụ đã giải

Chia $100,00 làm ba phần bằng nhau (`tỷ_lệ = [1, 1, 1]`).

Cách ngây thơ: $100,00 ÷ 3 = $33,333… làm tròn riêng về xu gần nhất cho $33,33 mỗi người nhận. Cộng lại: $33,33 × 3 = $99,99 — mất một xu, và không khoản đơn lẻ nào "sai" đủ để nhận ra bằng mắt.

Cách chính xác: `cơ_sở` = $33,33 cho cả ba (tổng 9.999 đơn vị nhỏ nhất từ `làm_tròn_xuống(10.000 / 3) = 3.333` xu mỗi người). Còn dư 1 xu (10.000 − 9.999). Một xu còn lại đó thuộc về người nhận có phần thập phân lớn nhất trong phép chia — người nào cụ thể là chi tiết nội bộ của cách xử lý hòa, không phải thứ người gọi nên dựa vào. Hai người nhận $33,33 và một người nhận $33,34, và ba phần cộng lại đúng $100,00.

Đây là số học mà [phân tích tác động ngân sách](../phân-tích-tác-động-ngân-sách/) cần mỗi khi một con số tác động ngân sách tổng phải được chia theo địa điểm, nhóm dân số hoặc năm tài chính và đối chiếu lại với tổng đã công bố — xem [cộng gộp chi phí an toàn tiền tệ](../cộng-gộp-chi-phí-an-toàn-tiền-tệ/) cho bài toán đối ngẫu là cộng nhiều khoản như vậy mà không lệch.

## Mối liên hệ với kỹ thuật phần mềm

Đây chính là "mẫu Money" từ kiến trúc phần mềm doanh nghiệp — mẫu nền tảng có tên cho đúng loại lỗi này, không phải thủ thuật nhất thời. Các lỗi đối chiếu tài chính có thật đã được đưa lên môi trường thực từ chính loại lỗi này: một phép chia tỷ lệ tính bằng `f64`, làm tròn theo từng người nhận và không bao giờ kiểm tra lại với tổng gốc. Nó liên kết trực tiếp với mô-đun [tổng chi phí sở hữu](../tổng-chi-phí-sở-hữu/) của kho này, hiện cộng gộp chi phí dấu phẩy động thường qua các năm và phương án — cùng kỷ luật chính xác áp dụng khi một tổng TCO hay tác động ngân sách phải được phân bổ, không chỉ cộng gộp.

## Những cạm bẫy

- **Phần trăm rồi làm tròn thay vì phần dư lớn nhất**: phân bổ bằng phần trăm dấu phẩy động rồi làm tròn từng người nhận riêng, làm tích lũy sai số làm tròn và hiếm khi cộng lại bằng tổng, nhất là khi có nhiều người nhận.
- **Bỏ qua số mũ đơn vị nhỏ nhất của đồng tiền**: giả định mọi đồng tiền có 2 chữ số thập phân — yên Nhật có 0, một số đồng tiền có 3 — một phép chia tỷ lệ tự viết thường nhúng cứng số 2 và hỏng im lặng với đồng tiền khác. Hàm phân bổ chính xác đọc số mũ từ chính đồng tiền (ISO 4217).
- **Phân bổ lại phần dư đã phân bổ**: chạy lại hàm phân bổ trên phần còn lại của một lần phân bổ trước mà không kiểm tra tính lũy đẳng, có thể ghi có cùng một xu hai lần cho cùng một người nhận.

## Nguồn tham khảo

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — các mẫu `Money` và `Allocate`.
- ISO 4217 — tiêu chuẩn mã tiền tệ và quỹ, xác định số mũ đơn vị nhỏ nhất của từng đồng tiền.
