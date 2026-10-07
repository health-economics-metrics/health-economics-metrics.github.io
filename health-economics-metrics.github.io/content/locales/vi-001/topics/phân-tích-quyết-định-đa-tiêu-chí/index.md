# Phân tích quyết định đa tiêu chí (MCDA)

Phân tích quyết định đa tiêu chí (MCDA) là mô hình chấm điểm tổng có trọng số dùng trong đánh giá công nghệ y tế khi một ngưỡng ICER/sẵn sàng chi trả duy nhất không nắm bắt mọi điều người ra quyết định quan tâm: công bằng, nhu cầu chưa được đáp ứng, đổi mới, tác động ngân sách, mức độ nặng của bệnh. Mỗi tiêu chí được gán một trọng số phản ánh tầm quan trọng (lấy từ các bên liên quan, cộng lại bằng 1), mỗi phương án nhận một điểm chuẩn hóa theo từng tiêu chí (thường 0–1), và điểm tổng là tổng có trọng số — cùng dạng toán học với phiếu chấm đánh giá nhà cung cấp phần mềm.

## Tại sao điều này quan trọng

MCDA được dùng trong các khung như EVIDEM và ở một số cơ quan HTA cho thuốc mồ côi/bệnh hiếm, nơi cách tiếp cận ngưỡng chi phí trên mỗi QALY nghiêm ngặt bị coi là quá hẹp để nắm hết điều quan trọng với quyết định. Nhóm công tác ISPOR MCDA Emerging Good Practices Task Force đã chính thức hóa thực hành tốt để lấy trọng số và điểm có thể bảo vệ được, chính vì một quyết định có trọng số không chính thức rất dễ dựng và dễ bị thao túng. Khi một công nghệ y tế thật sự có các chiều giá trị mà một [ngưỡng sẵn sàng chi trả](../ngưỡng-sẵn-sàng-chi-trả/) duy nhất không biểu diễn được — mức độ nặng, đổi mới, công bằng — MCDA cho người ra quyết định một cấu trúc tường minh, kiểm toán được để kết hợp chúng, thay vì một phán đoán không được nói ra.

## Toán học

```
Điểm MCDA = Σ_i (trọng_số_i × điểm_i)

các trọng số nên cộng bằng 1 (lấy từ các phương pháp bên liên quan như
swing weighting hoặc Analytic Hierarchy Process)
```

## Ví dụ đã giải

Một hội đồng HTA đánh giá một liệu pháp số theo bốn tiêu chí:

```
Tiêu chí                            Trọng số   Điểm   Trọng số × Điểm
Lợi ích lâm sàng                    0,4        0,8    0,32
Tác động chi phí                    0,3        0,5    0,15
Mức độ nặng / nhu cầu chưa đáp ứng  0,2        0,9    0,18
Đổi mới                             0,1        0,6    0,06
                                    ─────             ─────
                                    1,0               0,71
```

Các trọng số cộng bằng 1,0 (0,4 + 0,3 + 0,2 + 0,1) và điểm MCDA là 0,71 (0,32 + 0,15 + 0,18 + 0,06). Hội đồng so 0,71 với một ngưỡng đã thỏa thuận trước, hoặc xếp hạng nó với các công nghệ cạnh tranh được chấm theo cùng cách.

## Mối liên hệ với kỹ thuật phần mềm

Đây chính là toán học của phiếu chấm lựa chọn nhà cung cấp có trọng số, ma trận đánh giá RFP hay mô hình chấm điểm ưu tiên tính năng — xem [xây dựng so với mua](../xây-dựng-so-với-mua/) cho ca sử dụng kinh điển của phiếu chấm có trọng số trong mua sắm phần mềm. Cũng nên đối chiếu với [WSJF và CD3](../wsjf-và-cd3/): WSJF/CD3 là phương pháp ưu tiên dựa trên *tỷ số* (chi phí trì hoãn chia cho kích thước hoặc thời lượng công việc), trong khi MCDA là một *tổng* có trọng số. MCDA và WSJF/CD3 là hai câu trả lời khác nhau về cấu trúc cho câu hỏi "ta xếp hạng các lựa chọn cạnh tranh thế nào", và biết một quyết định cụ thể thực sự cần cái nào — giá trị cộng gộp trên các tiêu chí độc lập, hay mật độ giá trị trên mỗi đơn vị năng lực khan hiếm — quan trọng hơn việc công thức nào trông chặt chẽ hơn.

## Những cạm bẫy

- **Thiên lệch khi lấy trọng số**: người đặt trọng số thực tế đã định trước thứ hạng, nên "công thức" có thể rửa một quyết định chính trị hay thương mại thành một phép tính tưởng khách quan. Hãy ghi lại ai đặt trọng số và bằng cách nào.
- **Đếm đôi một tiêu chí đã được phản ánh ở nơi khác**: chấm "hiệu quả chi phí" như một tiêu chí *và* chấm riêng "tác động chi phí" khiến tiền bị cân quá nặng so với các tiêu chí khác mà không ai chủ ý.
- **Độ chính xác giả tạo**: một điểm có trọng số hai chữ số thập phân (0,71) gợi sự chặt chẽ hơn mức các đánh giá của bên liên quan trên thang 0–10 thực sự hỗ trợ, và biến thiên giữa các người chấm trong các đánh giá đó thường không được báo cáo.

## Nguồn tham khảo

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
