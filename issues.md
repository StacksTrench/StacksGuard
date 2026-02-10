# Project Roadmap & Issues - StacksGuard 🛡️

This document tracks the development of the StacksGuard risk management protocol.

---

## 🚀 Priority: Critical

### Issue #1: Collateral Health Check
**Status:** ✅ COMPLETED
**Description:** Implement LTV calculation and health check logic.
- **Tasks:**
  - [x] Implement `calculate-ltv`.
  - [x] Implement `check-health` against `MAX-LTV`.

### Issue #2: Admin Controls
**Status:** ✅ COMPLETED
**Description:** Allow admin to update risk parameters.
- **Tasks:**
  - [x] Implement `update-max-risk-score`.

### Issue #3: Protocol Pause (Circuit Breaker)
**Status:** ❌ PENDING
**Description:** Add ability to pause operations in emergency.
- **Tasks:**
  - [ ] Define `pausable-trait`.
  - [ ] Implement `pause-protocol` function.

---

## 🛠️ Smart Contract Tasks

### Issue #4: Oracle Integration
**Status:** ❌ PENDING
**Description:** Fetch real-time prices for LTV calculation.
- **Tasks:**
  - [ ] Integrate Pyth or RedStone oracle trait.
  - [ ] Update `calculate-ltv` to use oracle price.

### Issue #5: Liquidation Alert
**Status:** ❌ PENDING
**Description:** Emit events when positions are at risk.
- **Tasks:**
  - [ ] Define alert event.
  - [ ] Trigger event in `check-health` if risky.

---

## 🎨 Frontend Tasks

### Issue #6: Risk Dashboard
**Status:** ❌ PENDING
**Description:** Admin dashboard to view system health.
- **Tasks:**
  - [ ] Connect wallet.
  - [ ] Display global risk metrics.

---

## ✅ Completed Milestones
- [x] Project Scaffold
- [x] Initial Contract Logic
- [x] Admin Features
