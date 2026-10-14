# Phương pháp vốn con người so với phương pháp chi phí ma sát

Đây là hai phương pháp cạnh tranh để định giá năng suất bị mất do bệnh tật, khuyết tật hoặc tử vong trong các nghiên cứu chi phí bệnh tật và chi phí-lợi ích. Phương pháp vốn con người (HCA) định giá toàn bộ sản lượng bị mất trong suốt thời gian vắng mặt theo mức lương; phương pháp chi phí ma sát (FCM) chỉ định giá khoảng thời gian ngắn hơn mà chủ lao động thực sự cần để khôi phục sản xuất. Lựa chọn giữa hai phương pháp thay đổi ước tính chi phí gián tiếp gấp hai lần hoặc hơn.

## Tại sao điều này quan trọng

Chi phí gián tiếp (năng suất) là một trong những mục gây tranh cãi nhất trong kinh tế y tế, chính vì hai phương pháp chuẩn khác nhau quá xa. HCA coi mỗi ngày vắng mặt là một ngày sản lượng mà nền kinh tế thực sự mất, định giá bằng lương đầy đủ trong suốt thời gian — hoặc trong phần đời lao động còn lại nếu tử vong hay tàn tật vĩnh viễn. FCM lập luận rằng trong một nền kinh tế có thất nghiệp và lao động dư thừa, phần lớn các đợt vắng mặt dài không thực sự làm giảm sản lượng quốc gia, vì chủ lao động đào tạo người thay thế hoặc phân bổ lại công việc; chỉ "giai đoạn ma sát" — thời gian khôi phục sản xuất về mức cũ — là tổn thất thật. Vì vậy FCM cho ước tính chi phí gián tiếp thấp hơn, thận trọng hơn HCA một cách có hệ thống, và hai phương pháp không phải là chú thích thay thế được cho nhau: chúng là hai lý thuyết kinh tế khác nhau về việc "năng suất bị mất" nghĩa là gì. Đó cũng là lý do [trường hợp tham chiếu của NICE](../đánh-giá-công-nghệ-y-tế/) mặc định loại chi phí năng suất ra và nếu có thì báo cáo riêng như phân tích độ nhạy theo góc nhìn xã hội, thay vì trộn vào ICER của trường hợp tham chiếu — xem [góc nhìn phân tích](../góc-nhìn-phân-tích/).

## Toán học

```
Phương pháp vốn con người:
chi_phí_HCA = lương_ngày × số_ngày_mất

Phương pháp chi phí ma sát (dạng đơn giản, bị chặn bởi giai đoạn ma sát):
chi_phí_FCM = lương_ngày × min(số_ngày_mất, số_ngày_giai_đoạn_ma_sát)

số_ngày_giai_đoạn_ma_sát = ước tính theo từng nước/ngành về thời gian khôi phục
                           sản xuất (trong lịch sử khoảng 85 ngày trong hướng
                           dẫn chi phí iMTA của Hà Lan; khác nhau theo nước
                           và được đánh giá lại định kỳ)
```

Toàn bộ bất đồng giữa hai phương pháp nằm ở `min()`: HCA không bao giờ chặn `số_ngày_mất` nên chi phí tăng suốt thời gian vắng mặt, còn FCM chặn số ngày được tính ở giai đoạn ma sát bất kể thời gian vắng mặt thực kéo dài bao lâu.

## Ví dụ đã giải

Một nhân viên vắng mặt `số_ngày_mất = 180` ngày, lương `lương_ngày = £150`.

**Phương pháp vốn con người**:

```
chi_phí_HCA = 150 × 180 = £27.000
```

**Phương pháp chi phí ma sát** với `số_ngày_giai_đoạn_ma_sát = 85` (mốc lịch sử iMTA của Hà Lan, theo lần đánh giá lại định kỳ của hướng dẫn):

```
chi_phí_FCM = 150 × min(180, 85) = 150 × 85 = £12.750
```

£12.750 của FCM ít hơn một nửa £27.000 của HCA cho *cùng* đợt vắng mặt — riêng lựa chọn phương pháp đã làm thay đổi đáng kể lập luận chi phí bệnh tật, trước khi chạm đến bất kỳ giả định nào khác.

## Mối liên hệ với kỹ thuật phần mềm

Điều này ánh xạ trực tiếp vào cách một nhóm ước tính chi phí khi một kỹ sư nghỉ việc:

- **Tính chi phí nghỉ việc kiểu HCA**: định giá tổn thất bằng lương đầy đủ của kỹ sư đã nghỉ trong suốt thời gian vị trí bỏ trống. Đây là phiên bản ngây thơ của hầu hết mô hình chi phí nghỉ việc, và nó ước tính quá cao vì cùng lý do HCA ước tính quá cao tổn thất năng suất — giả định năng suất trống đó đã hoàn toàn hiệu quả và không có gì khác hấp thụ khoảng trống. Xem [giữ chân nhân lực](../giữ-chân-nhân-lực/), nơi định lượng chuỗi tuyển dụng/hòa nhập/lấp chỗ trống mà phương pháp này cấp dữ liệu vào.
- **Tính chi phí nghỉ việc kiểu FCM**: định giá tổn thất chỉ theo thời gian thực sự cần để tìm và hòa nhập người thay thế — "giai đoạn ma sát" của kỹ thuật. Đây là con số bảo vệ được hơn cho business case, đúng như FCM là lựa chọn thận trọng hơn trong nghiên cứu chi phí bệnh tật.
- Kỷ luật nền tảng giống [chi phí cơ hội](../chi-phí-cơ-hội/): định giá nguồn lực bị chiếm chỗ theo cái thực sự mất, không phải theo tích của thời lượng tiêu đề với mức lương.

## Những cạm bẫy

- **Trộn HCA và FCM trong một phân tích, hoặc chỉ báo cáo một phương pháp mà không công khai lựa chọn.** Cùng dữ liệu vắng mặt có thể cho chi phí báo cáo chênh 2 lần hoặc hơn tùy phương pháp; lựa chọn phải được nêu, không được giấu.
- **Dùng HCA trong trường hợp góc nhìn xã hội mà không ghi là phân tích độ nhạy.** Trường hợp tham chiếu của NICE loại chi phí năng suất một cách tường minh; ước tính HCA theo góc nhìn xã hội thuộc về phân tích kịch bản, không phải ICER tiêu đề.
- **Áp dụng một trong hai phương pháp cho lao động không lương hoặc phi thị trường (ví dụ chăm sóc) mà không điều chỉnh.** Cả hai dùng mức lương làm đại diện giá trị, không chuyển sạch sang công việc không có lương thị trường.

## Nguồn tham khảo

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — chương về chi phí năng suất.
- NICE health technology evaluations manual (PMG36) — góc nhìn trường hợp tham chiếu và hướng dẫn góc nhìn xã hội tùy chọn. <https://www.nice.org.uk/process/pmg36>
