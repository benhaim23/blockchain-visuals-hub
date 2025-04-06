# 13. BTC Coin Days Destroyed — What HODLers Tell Us About the Market

Bitcoin may be pseudonymous, but it’s far from opaque.

One of the most powerful behavioral signals in Bitcoin’s onchain world is **Coin Days Destroyed (CDD)**—a metric that goes deeper than simple transaction volume by factoring in the *age* of coins being moved.

This article explains how CDD works, why it matters, how to build a dashboard for it on Dune, and what it tells us about long-term holders and market shifts.

---

## 🧠 What Is Coin Days Destroyed?

Coin Days Destroyed measures the *weighted activity* of Bitcoin based on how long coins have been held.

**Formula:**

Coin Day = 1 BTC * 1 day held
 CDD = Coin Days accumulated by coins * destroyed when those coins are spent

- If 10 BTC sit untouched for 100 days, they accumulate **1,000 Coin Days**.
- If they are then moved in a transaction, those 1,000 Coin Days are **destroyed**.

Thus, a large CDD spike signals that **older, dormant BTC has moved**—often interpreted as early investors or long-term holders taking action.

---

## 🧭 Why CDD Matters

- **Smart Money Signal:** Long-term holders are considered more informed. When they move, it may indicate shifts in conviction.
- **Market Timing Insight:** Historical CDD spikes often align with local tops or trend reversals.
- **Liquidity Pressure:** Coins moving to exchanges (combined with CDD) can signal sell-side pressure.
- **Activity with Context:** Instead of raw transaction volume, CDD tells you *who is moving*—short-term or long-term holders.

---

## 🔢 CDD vs Transaction Volume

| Metric              | Measures                  | Insight Type       |
| ------------------- | ------------------------- | ------------------ |
| Transaction Volume  | Total BTC moved           | Activity level     |
| Coin Days Destroyed | Volume × holding duration | Behavioral quality |

---

## ⚙️ How BTC Works: UTXO Refresher

To understand CDD, you need to understand Bitcoin’s UTXO model:

- BTC doesn’t have balances—only **Unspent Transaction Outputs (UTXOs)**.
- When a wallet spends BTC, it consumes one or more UTXOs as inputs and creates new UTXOs as outputs.
- CDD is calculated from the *inputs* of each transaction: how long the consumed UTXOs had been sitting idle.

---

## 🔍 CDD Dashboard Design on Dune

### Key Tables:
- `bitcoin.inputs` — where the BTC came from (used to calculate CDD)
- `bitcoin.outputs` — where the BTC went

### Key Fields:
- `value` — amount of BTC in the UTXO
- `block_time` — when the input/output occurred
- `spent_tx_id` — helps trace UTXOs back to their origin

### Basic Steps to Calculate CDD:
1. For each input (spent UTXO), calculate how many days it was held since creation.
2. Multiply that duration by the BTC value.
3. Sum over all inputs in a day.

---

## 📈 Sample SQL (Simplified Concept)

```sql
SELECT
  DATE_TRUNC('day', inputs.block_time) AS day,
  SUM(inputs.value * DATE_DIFF('day', outputs.block_time, inputs.block_time)) AS coin_days_destroyed
FROM bitcoin.inputs AS inputs
JOIN bitcoin.outputs AS outputs
  ON inputs.spent_tx_id = outputs.tx_id
WHERE inputs.block_time > NOW() - INTERVAL '90 days'
GROUP BY 1
ORDER BY 1
```

> This assumes one-to-one mapping of spent outputs—real queries may need deduplication and finer handling.

------

## 🧰 Dashboard Modules to Include

### ✅ Historical Trend (all-time or past 365 days)

- Shows long-term CDD movement
- Identify macro market turning points

### ✅ Recent Spikes (past 7 days)

- Catch short-term anomalies or distribution events

### ✅ Hourly Breakdown (last 24 hours)

- Analyze intraday activity and sudden large movements

### ✅ By Initiating Wallet Address

- Helps attribute large CDD movements to specific actors

### ✅ By Transaction ID

- Verifies unusual CDD events by inspecting on-chain txs

------

## 🔧 Advanced Decomposition Ideas

- **Target address analysis:** Are old coins moving to exchanges or to cold wallets?
- **Wallet type analysis:** Are the senders labeled as long-term investors, miners, or OTC desks?
- **Probability modeling:** Assign weights to wallets based on past behavior after CDD spikes—did they lead to selling?

------

## 📊 Full Dashboard

You can find a full implementation of this logic in the dashboard by Sixdegree here:

👉 [Bitcoin Coin Days Destroyed Matrix](https://dune.com/sixdegree/bitcoin-coin-day-destroyed-matrix)

------

## 💡 Interpreting CDD

- 📉 **High CDD → Bearish?** Large amounts of old coins moving can precede sell-offs.
- 📈 **Low CDD → Bullish?** Dormant coins staying put while short-term coins churn may show conviction.
- ⚠️ **But not always.** Not all coin movement = selling. Some may be custody reshuffling, internal cold wallet ops, or wrapped BTC conversions.

------

## 📚 Key Takeaways

- Coin Days Destroyed is one of Bitcoin’s most important native behavioral metrics.
- It surfaces hidden activity by tracking the *age* of BTC being moved.
- Analysts use CDD to understand the conviction, profit-taking, and psychological state of long-term holders.
- You can track, chart, and segment CDD on Dune using `bitcoin.inputs` and `outputs`.

------

## ➡️ Coming Up Next

We’ve now explored how to monitor HODLer behavior with Bitcoin’s CDD.

In the next few articles, we move into **infrastructure-level tooling**—starting with how to write reusable models using **Spellbook**, the shared analytics layer that powers Dune’s most scalable queries.

**Next: 14. Building with Spellbook — How to Contribute Reusable Models to the Community**