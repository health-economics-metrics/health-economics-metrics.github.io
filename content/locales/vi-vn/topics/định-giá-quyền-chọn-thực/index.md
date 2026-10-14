# Định giá quyền chọn thực

Định giá quyền chọn thực áp dụng logic định giá quyền chọn tài chính cho các quyết định đầu tư thực (không giao dịch trên thị trường tài chính) — cụ thể là *quyền chọn mở rộng* để mở rộng một dự án sau này nếu nó thành công, mà không bị bắt buộc phải làm. Một mô hình nhị thức một giai đoạn đơn giản (Cox, Ross, Rubinstein, 1979) định giá tính linh hoạt này trực tiếp, biến "triển khai nhỏ rồi xem" từ linh cảm thành một con số có thể định giá.

## Tại sao điều này quan trọng

Tính giá trị hiện tại tĩnh định giá dự án như một canh bạc tất cả hoặc không có gì: tài trợ hoặc không, ở quy mô hôm nay, mãi mãi. Dự án thực — đặc biệt là các đợt triển khai y tế số theo giai đoạn — hiếm khi được cấu trúc như vậy: một hệ thống y tế có thể tài trợ một thí điểm nhỏ, xem điều gì xảy ra và chỉ cam kết thêm tiền nếu nó hiệu quả. Tính linh hoạt đó có giá trị thật, và bỏ qua nó đánh giá thấp một cách có hệ thống các khoản đầu tư theo giai đoạn so với khoản đầu tư một lần, hoàn toàn ngược với các quy trình mua sắm thưởng cho đề xuất theo giai đoạn trông an toàn hơn. Định giá quyền chọn thực định giá chính tính linh hoạt, để một đề xuất theo giai đoạn được so sánh công bằng với phương án cam kết toàn bộ, thay vì bị phạt vì trông nhỏ hơn trên dòng giá trị hiện tại ngây thơ.

## Toán học

```
Xác suất trung tính rủi ro của trạng thái "lên":
  p = ((1 + lãi_suất_phi_rủi_ro) − hệ_số_xuống) / (hệ_số_lên − hệ_số_xuống)

Khoản chi trả mở rộng ở mỗi trạng thái (chặn dưới bằng không — mở rộng là tùy chọn):
  chi_trả_lên  = max(giá_trị_dự_án × hệ_số_lên − chi_phí_mở_rộng, 0)
  chi_trả_xuống = max(giá_trị_dự_án × hệ_số_xuống − chi_phí_mở_rộng, 0)

Giá trị quyền chọn (chi trả kỳ vọng đã chiết khấu):
  giá_trị_quyền_chọn = (p × chi_trả_lên + (1 − p) × chi_trả_xuống) / (1 + lãi_suất_phi_rủi_ro)

NPV mở rộng = npv_tĩnh + giá_trị_quyền_chọn
```

Giá trị dự án hoặc tăng (`hệ_số_lên`) hoặc giảm (`hệ_số_xuống`) đến điểm quyết định tiếp theo. Chỉ thực hiện mở rộng khi nó có lãi ở trạng thái đó — chặn dưới bằng không của khoản chi trả chính là điều khiến nó thành một *quyền chọn* thật sự, không phải nghĩa vụ. Về cách định giá quyền chọn thu thập thông tin trước thay vì quyền chọn mở rộng sau, xem [giá trị kỳ vọng của thông tin hoàn hảo](../giá-trị-kỳ-vọng-của-thông-tin-hoàn-hảo/). Về chi phí của việc chờ quyết định này, xem [chi phí trì hoãn](../chi-phí-trì-hoãn/).

## Ví dụ đã giải

Một thí điểm dịch vụ số với `giá_trị_dự_án = £1.000.000`, có thể tăng 1,5 lần hoặc giảm còn 0,5 lần đến điểm quyết định tiếp theo, lãi suất phi rủi ro 8% và chi phí mở rộng £600.000:

```
p = (1,08 − 0,5) / (1,5 − 0,5) = 0,58

chi_trả_lên   = max(1.000.000 × 1,5 − 600.000, 0) =  900.000
chi_trả_xuống = max(1.000.000 × 0,5 − 600.000, 0) = max(−100.000, 0) = 0

Chặn dưới có tác dụng: quyền chọn SẼ KHÔNG được thực hiện nếu thị trường
gây thất vọng — chi phí mở rộng £600.000 vượt £500.000 mà dự án đáng giá
ở trạng thái "xuống".

giá_trị_quyền_chọn = (0,58 × 900.000 + 0,42 × 0) / 1,08
                   = 522.000 / 1,08
                   ≈ £483.333,33
```

Cộng giá trị quyền chọn vào NPV tĩnh cơ sở £200.000: NPV mở rộng = 200.000 + 483.333,33 ≈ **£683.333,33**. Chỉ báo cáo NPV tĩnh £200.000 mà không có giá trị của quyền chọn này sẽ đánh giá thấp giá trị thực của dự án theo giai đoạn hơn hai lần.

## Mối liên hệ với kỹ thuật phần mềm

Đây là phiên bản chính thức của "giao ngay bản tối thiểu, giữ quyền đầu tư thêm nếu nó phát huy" — liên quan trực tiếp đến việc triển khai sản phẩm y tế số theo giai đoạn, song song về cấu trúc với khung sắp thứ tự dưới bất định trong [chi phí trì hoãn](../chi-phí-trì-hoãn/) và [WSJF và CD3](../wsjf-và-cd3/), và bổ sung cho [giá trị kỳ vọng của thông tin hoàn hảo](../giá-trị-kỳ-vọng-của-thông-tin-hoàn-hảo/) và [giá trị kỳ vọng của thông tin mẫu](../giá-trị-kỳ-vọng-của-thông-tin-mẫu/) — cả ba đều định giá tính linh hoạt hay thông tin dưới bất định từ các góc khác nhau.

## Những cạm bẫy

- **Mượn định giá trung tính rủi ro mà không có giả định tài sản giao dịch được mà nó dựa vào**: mô hình quyền chọn thực mượn xác suất trung tính rủi ro từ định giá quyền chọn tài chính, vốn giả định giá trị cơ sở là tài sản *giao dịch được* — với một dự án thực thật sự không giao dịch được, đó là sự tiện lợi khi mô hình hóa, không phải sự thật thị trường theo nghĩa đen.
- **Coi `hệ_số_lên`/`hệ_số_xuống` là tham số tự do**: các đầu vào lên/xuống của nhị thức tự chúng là giả định cần được biện minh, không phải tham số tự do chọn để có đáp số mong muốn.
- **Chỉ báo cáo giá trị quyền chọn**: giá trị của một quyền chọn thực *cộng thêm* vào NPV tĩnh của dự án độc lập — sai sót phổ biến là chỉ báo cáo giá trị quyền chọn và bỏ trường hợp cơ sở, làm phóng đại lập luận khi NPV tĩnh âm, và đánh giá thấp nó (như trong ví dụ trên) khi bỏ hẳn NPV tĩnh.

## Nguồn tham khảo

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — liên hệ trực tiếp quyền chọn thực với bối cảnh quyết định kinh tế y tế. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
