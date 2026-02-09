# StacksGuard 🛡️

**The DeFi Risk Management Sentinel for Stacks.**

StacksGuard provides on-chain risk monitoring and automated circuit breakers for lending protocols and stablecoins built on Stacks.

## 🚀 Features

### 📊 Real-Time Risk Monitoring
- **Collateral Health:** Tracks LTV ratios across integrated protocols.
- **Liquidity Depth:** Alerts when DEX liquidity falls below safe thresholds.

### ⚡ Circuit Breakers
- **Auto-Pause:** Automatically triggers protocol pause functions if critical vulnerabilities or price depegs are detected.
- **Flash Crash Protection:** Prevents liquidations during oracle failures.

### 🧮 Risk Scoring
- **User Scoring:** Assigns credit scores based on on-chain behavior.
- **Protocol Scoring:** Rates DeFi protocols based on TVL volatility.

## 🏗️ Technical Architecture

### Smart Contracts (`/smartcontract`)
- **`risk-manager.clar`**: The central logic for assessing risk and triggering alerts.
- **Traits:** `pausable-trait` for integrating with third-party contracts.

### Frontend (`/frontend`)
- **Dashboard:** Visualize system health and active alerts.
- **Admin Panel:** Configuration for risk parameters.

## 📦 Deployment

```bash
git clone https://github.com/StacksTrench/StacksGuard.git
cd StacksGuard/smartcontract
clarinet check
```

## 🤝 Contributing
Please verify all risk calculations with provided test cases.
