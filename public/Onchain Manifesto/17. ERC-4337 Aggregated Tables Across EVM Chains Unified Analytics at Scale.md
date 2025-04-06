# 17. ERC-4337 Aggregated Tables Across EVM Chains: Unified Analytics at Scale

Account Abstraction isn’t happening on just one chain—it’s rolling out across the entire EVM ecosystem.

To understand its impact, we need to look across networks. That’s where **Dune’s ERC-4337 Aggregated Tables** come in. These spellbook-powered views give you a unified lens on wallet deployment, user operations, bundler behavior, and paymaster activity—**across nine chains**, with just one query.

Let’s explore how they work—and what you can do with them.

---

## 🌍 What Chains Are Covered?

The aggregated Spellbook tables combine AA data from:

- Ethereum
- Polygon
- Optimism
- Arbitrum
- BNB Chain
- Base
- Avalanche
- Gnosis
- Celo

Both **EntryPoint v0.5 and v0.6** are supported.

---

## 🔧 The Two Key Tables

### 1. `account_abstraction_erc4337.userops`

Each row = one `UserOperationEvent`

Fields include:

- `blockchain`: chain name
- `version`: EntryPoint version
- `block_time`, `block_month`: timestamps
- `entrypoint_contract`: contract address
- `userop_hash`: unique op ID
- `sender`: the smart wallet
- `paymaster`: sponsor address (if any)
- `bundler`: EOA that submitted the batch
- `op_fee`, `op_fee_usd`: gas paid for the op
- `tx_fee`, `tx_fee_usd`: total gas cost of the bundler
- `beneficiary`: who received the gas refund

> 💡 Use this table for: adoption trends, bundler profitability, paymaster spend, chain-by-chain usage, gas modeling

---

### 2. `account_abstraction_erc4337.account_deployed`

Each row = one smart wallet created via `AccountDeployed`

Fields include:

- `blockchain`, `version`, `block_time`
- `userop_hash`, `tx_hash`
- `sender`: the new wallet
- `factory`: wallet factory contract
- `paymaster`: sponsor (if any)
- `entrypoint_contract`

> 💡 Use this table for: wallet growth trends, factory tracking, protocol-level adoption metrics

---

## 🔍 Sample Queries

### 🚀 Wallet Growth by Chain

```sql
sql

SELECT 
  blockchain,
  COUNT(*) AS wallets_created
FROM account_abstraction_erc4337.account_deployed
GROUP BY 1
ORDER BY 2 DESC
```

### 💸 Bundler Revenue

```sql
sql

WITH ops AS (
  SELECT
    tx_hash,
    SUM(op_fee_usd) AS op_usd,
    SUM(tx_fee_usd) AS tx_usd
  FROM account_abstraction_erc4337.userops
  GROUP BY tx_hash
),
profit AS (
  SELECT
    tx_hash,
    op_usd - tx_usd AS bundler_profit_usd
  FROM ops
)
SELECT 
  COUNT(*) AS txs_analyzed,
  SUM(bundler_profit_usd) AS total_profit_usd,
  AVG(bundler_profit_usd) AS avg_per_tx
FROM profit
```

### 📈 Daily User Operations

```sql
sql

SELECT 
  DATE_TRUNC('day', block_time) AS day,
  COUNT(*) AS ops
FROM account_abstraction_erc4337.userops
GROUP BY 1
ORDER BY 1
```

------

## 📊 What You Can Analyze

These tables open the door to rich, cross-chain analytics:

- **Adoption heatmaps** — Which chains and factories are growing fastest?
- **Bundler performance** — Who’s making money? Who’s subsidizing?
- **Paymaster usage** — Which protocols are funding users?
- **Protocol-level tracking** — Who’s deploying wallets, and how are they used?

You can also **filter by EntryPoint version** to compare performance pre- and post-v0.6.

------

## 🧠 Why Aggregated Views Matter

Without these tables, analysts would need to manually join decoded event logs across 9+ chains. Every dashboard would require redundant logic.

With Spellbook models, Dune abstracts that pain away.

You get:

- Uniform schemas
- Consistent field naming
- Pre-joined price and transaction data
- Scalable multichain insights

And because these are **dbt-backed models**, they update automatically.

------

## 🛠 Bonus Tip: Label Your Entities

Bundlers, paymasters, and wallet factories are just addresses.

If you want real-world context, consider joining with public labeling tables (like community spreadsheets or Flipside address tags) to show:

- Protocol names (e.g., zkSync, ZeroDev)
- dApp usage (e.g., CyberConnect wallets vs Stackup wallets)
- Role classification (e.g., relayer, factory, exploit address)

------

## 🧪 Dashboard Inspiration

Looking to build something? Here are ideas:

- **Daily Smart Wallet Adoption Tracker** (across all chains)
- **Bundler Leaderboard by Profitability**
- **Paymaster Subsidy Heatmap**
- **Factory Growth Comparison (e.g., Argent vs Biconomy vs Safe)**

The beauty of Spellbook is that you only need to build it once.

------

## ➡️ Next: Bringing It All Together

Account Abstraction is just one frontier.

Whether you’re analyzing NFTs, DeFi, or wallets—onchain analysts are the ones decoding behavior, quantifying risk, and building the data tools that power decentralized systems.

In the next (and final) article, we’ll zoom out and ask: **Why is this all so important?**

**Next: 18. Why the Future Belongs to Onchain Analysts**