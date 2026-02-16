;; Risk Manager
;; Manages risk across DeFi positions

(impl-trait .pausable-trait.pausable-trait)

(define-constant contract-owner tx-sender)
(define-data-var max-risk-score uint u100)
(define-constant MAX-LTV u8000) ;; 80% LTV threshold (BIPS)
(define-data-var is-paused bool false)
(define-constant event-risk-alert "risk-alert")

(define-map position-risks principal uint)

(define-read-only (get-risk-score (user principal))
  (default-to u0 (map-get? position-risks user))
)

;; Calculate Loan-to-Value Ratio in Basis Points
(define-read-only (calculate-ltv (collateral uint) (debt uint))
  (if (is-eq collateral u0)
      (if (is-eq debt u0) u0 u10000) ;; If debt > 0 but no collateral, 100% risk (max)
      (/ (* debt u10000) collateral)
  )
)

(define-public (check-health (collateral uint) (debt uint))
  (let (
      (ltv (calculate-ltv collateral debt))
    )
    ;; Emit alert if risk threshold exceeded
    (if (> ltv MAX-LTV)
        (print { event: event-risk-alert, ltv: ltv, collateral: collateral, debt: debt })
        true
    )
    ;; Returns true if healthy, false if at risk
    (ok (<= ltv MAX-LTV))
  )
)

(define-public (assess-risk (user principal) (score uint))
  (begin
    (asserts! (is-eq tx-sender contract-owner) (err u100))
    (map-set position-risks user score)
    (ok score)
  )
)

(define-public (update-max-risk-score (new-score uint))
  (begin
    (asserts! (is-eq tx-sender contract-owner) (err u100))
    (var-set max-risk-score new-score)
    (ok new-score)
  )
)

;; Circuit Breaker Logic
(define-public (pause-protocol)
  (begin
    (asserts! (is-eq tx-sender contract-owner) (err u100))
    (var-set is-paused true)
    (ok true)
  )
)

(define-public (resume-protocol)
  (begin
    (asserts! (is-eq tx-sender contract-owner) (err u100))
    (var-set is-paused false)
    (ok true)
  )
)

(define-read-only (is-system-active)
  (ok (not (var-get is-paused)))
)
