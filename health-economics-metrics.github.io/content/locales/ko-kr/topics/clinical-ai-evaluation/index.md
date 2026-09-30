# 임상 AI 평가

임상 AI 평가는 AI 시스템이 실제 임상 환경에서 안전하고 효과적인지 검증하는 과정입니다.

## 왜 중요한가

일반 AI 품질 지표는 임상적 위해 가능성을 포착하지 못합니다.

## 수식

```
순 임상 편익 = (진정 양성 × 편익) − (위양성 × 위해) − (위음성 × 위해)
```

## 계산 예시

패혈증 조기 경보 AI: 100건 진정 양성 × 편익 10 − 20건 위양성 × 위해 2 − 5건 위음성 × 위해 20 = 860.

## 소프트웨어 공학과의 연관성

[AI 품질 지표](../ai-quality-metrics/)를 임상 결과와 연결하며 [AI 규제 평가](../ai-regulatory-evaluation/)의 전제조건입니다.

## 함정

- **실험실 성능을 실제 배포 성능과 동일시하기.**

## 출처

- FDA, Software as a Medical Device guidance.
- NICE, Evidence Standards Framework for digital health technologies.
