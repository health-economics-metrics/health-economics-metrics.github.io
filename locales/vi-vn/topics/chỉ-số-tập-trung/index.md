# Chỉ số tập trung

Chỉ số tập trung (Wagstaff, Paci, van Doorslaer, 1991) là thước đo thống kê tiêu chuẩn cho bất bình đẳng kinh tế-xã hội trong một biến sức khỏe. Nó nằm trong khoảng từ −1 đến 1: giá trị âm nghĩa là biến sức khỏe tập trung ở nhóm thiệt thòi hơn về kinh tế-xã hội, giá trị dương nghĩa là tập trung ở nhóm khá giả hơn, và bằng không nghĩa là không có gradient kinh tế-xã hội có hệ thống. Nó biến nghi ngờ về phân bố không đồng đều thành một con số so sánh được.

## Tại sao điều này quan trọng

Một chương trình có thể trông hiệu quả nói chung nhưng đem gần như toàn bộ lợi ích cho những người vốn đã khá giả. Đó chính là mối quan tâm về phân phối mà [độ phủ và công bằng](../độ-phủ-và-công-bằng/) theo dõi theo cách mô tả — độ phủ phân tầng theo ngũ phân vị thiếu thốn, khoảng cách công bằng giữa nhóm trên cùng và dưới cùng — nhưng một bảng phân tầng không thể rút gọn thành một đường xu hướng, và khó so sánh giữa hai thước đo hoàn toàn khác nhau đo trên các thang khác nhau. Chỉ số tập trung giải quyết cả hai: nó được tính theo cùng một cách cho bất kỳ biến sức khỏe nào so với bất kỳ thứ hạng kinh tế-xã hội nào, nên một dịch vụ y tế quốc gia có thể theo dõi bất bình đẳng của một dịch vụ số cụ thể đang rộng ra hay hẹp lại qua từng bản phát hành, và so sánh tính công bằng phân phối của một đợt triển khai ứng dụng với, chẳng hạn, một chương trình sàng lọc, trên một thang đã chuẩn hóa.

## Toán học

```
CI = (2 / trung_bình(giá_trị_sức_khỏe)) × Cov(giá_trị_sức_khỏe, thứ_hạng_kinh_tế_xã_hội)

Cov(X, Y) = trung_bình(X × Y) − trung_bình(X) × trung_bình(Y)   (hiệp phương sai tổng thể)

thứ_hạng_kinh_tế_xã_hội: thứ hạng phân số của mỗi người trong phân bố kinh tế-xã hội,
trong [0, 1] (0 = thiệt thòi nhất, 1 = thuận lợi nhất; với dữ liệu nhóm/phân
khoảng thì thường dùng thứ hạng điểm giữa của mỗi nhóm)
```

Đây là "công thức hiệp phương sai tiện dụng" (O'Donnell, van Doorslaer, Wagstaff, Lindelow, Ngân hàng Thế giới 2008) — lối tắt tiêu chuẩn của người thực hành để tính chỉ số tập trung trực tiếp từ dữ liệu quan sát được ghép cặp, mà không cần vẽ rồi lấy tích phân dưới đường cong tập trung.

## Ví dụ đã giải

Điểm sức khỏe tự báo cáo (1 = tệ nhất, 4 = tốt nhất) quan sát qua bốn tứ phân vị kinh tế-xã hội có kích thước bằng nhau, mỗi tứ phân vị được biểu diễn bằng thứ hạng điểm giữa:

```
giá_trị_sức_khỏe            = [1,0, 2,0, 3,0, 4,0]
thứ_hạng_kinh_tế_xã_hội     = [0,125, 0,375, 0,625, 0,875]

trung_bình(giá_trị_sức_khỏe)       = 2,5
trung_bình(sức_khỏe × thứ_hạng)    = trung_bình([0,125, 0,75, 1,875, 3,5]) = 1,5625
trung_bình(thứ_hạng)               = 0,5

Cov = 1,5625 − 2,5 × 0,5 = 0,3125

CI = 2 × 0,3125 / 2,5 = 0,25
```

Giá trị dương `0,25` nghĩa là điểm sức khỏe này tập trung ở nhóm thuận lợi hơn về kinh tế-xã hội — người trả lời có điểm cao hơn nghiêng về đầu khá giả hơn của bảng xếp hạng.

## Mối liên hệ với kỹ thuật phần mềm

Đây là thước đo bất bình đẳng dựa trên hiệp phương sai, cùng họ với những thước đo trong kinh tế học nói chung (họ hàng của hệ số Gini), và nó chuyển sang việc đo xem lợi ích của một sản phẩm phần mềm tập trung ở nhóm người dùng vốn đã thuận lợi hay được phân bố công bằng — một phần mở rộng trực tiếp của [độ phủ và công bằng](../độ-phủ-và-công-bằng/) (chiều "reach" của RE-AIM) thành một thước đo thống kê chính thức thay cho khoảng cách mô tả. Trong khi độ phủ và công bằng báo cáo tác động theo từng tầng, chỉ số tập trung nén toàn bộ phân bố thành một con số có dấu duy nhất, hợp làm một KPI đơn theo dõi qua các bản phát hành — thực tế cho một bảng điều khiển nơi một phân bố phân tầng đầy đủ không vừa.

## Những cạm bẫy

- **Quy ước dấu bị lệch**: dấu phụ thuộc vào cách định nghĩa cả biến sức khỏe lẫn thứ hạng — đảo một trong hai sẽ đảo dấu, nên luôn nêu rõ quy ước đã dùng khi báo cáo giá trị.
- **Dùng thứ hạng biên thay cho thứ hạng điểm giữa**: dữ liệu kinh tế-xã hội đã nhóm hoặc phân khoảng (ví dụ ngũ phân vị) phải dùng thứ hạng phân số của mỗi nhóm tại *điểm giữa*, không phải tại biên, nếu không chỉ số sẽ bị chệch.
- **Đọc "gần không" thành "không có bất bình đẳng"**: chỉ số tập trung gần không nghĩa là "không có gradient kinh tế-xã hội có hệ thống", không phải "không có bất bình đẳng" theo nghĩa tuyệt đối — các bất bình đẳng ngược chiều nhau có thể triệt tiêu.

## Nguồn tham khảo

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — sổ tay tiêu chuẩn của người thực hành, nguồn của công thức hiệp phương sai tiện dụng dùng ở đây. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
