(define-trait pausable-trait
  (
    (pause-protocol () (response bool uint))
    (resume-protocol () (response bool uint))
    (is-system-active () (response bool uint))
  )
)
