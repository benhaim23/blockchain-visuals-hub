# 09. DeFi Analysis — Liquidity, Incentives, and TVL Dynamics

At the core of DeFi is a simple loop: deposit assets, earn yield, move capital.

But beneath the surface, liquidity providers, traders, and protocols are locked in a constant dance of incentives, token emissions, and governance decisions. As an onchain analyst, your job is to measure those dynamics—and help others make sense of what’s moving the markets.

This article covers how to analyze DeFi protocols using onchain data.

---

## 🧠 What Is DeFi?

DeFi (Decentralized Finance) refers to financial protocols built on public blockchains. Instead of banks, there are smart contracts. Instead of intermediaries, there’s math.

Common DeFi protocol types include:

- 🏦 **Lending Markets** (Aave, Compound)
- 🔁 **DEXs (Decentralized Exchanges)** (Uniswap, Curve)
- 💰 **Staking / Yield Protocols** (Lido, RocketPool)
- 🎛️ **CDPs & Stablecoins** (Maker, Frax)
- 🧾 **Derivatives & Perpetuals** (GMX, Synthetix)

These systems move **billions in daily volume**, all onchain.

---

## 📊 Key Metrics to Track

| Metric                       | Meaning                                        |
| ---------------------------- | ---------------------------------------------- |
| **TVL (Total Value Locked)** | Total assets deposited in the protocol         |
| **Volume**                   | Trading volume or borrowing volume over time   |
| **Fees Generated**           | How much the protocol earns from usage         |
| **Liquidity Incentives**     | Token emissions for users or LPs               |
| **Retention / Stickiness**   | Do users stay or exit after incentives dry up? |
| **Asset Composition**        | What tokens are deposited / traded?            |

You can find these in decoded tables, or calculate them yourself with Dune queries.

---

## 🏦 Example: TVL Over Time

Let’s measure TVL on a simple protocol using a cumulative sum of deposits – withdrawals:

```sql
sql

WITH deposits AS (
  SELECT 
    DATE_TRUNC('day', evt_block_time) AS day,
    SUM(amount / 1e18) AS total_deposit
  FROM my_defi_protocol.Deposit
  GROUP BY 1
),
withdrawals AS (
  SELECT 
    DATE_TRUNC('day', evt_block_time) AS day,
    SUM(amount / 1e18) AS total_withdraw
  FROM my_defi_protocol.Withdraw
  GROUP BY 1
)

SELECT 
  d.day,
  COALESCE(d.total_deposit, 0) - COALESCE(w.total_withdraw, 0) AS net_tvl
FROM deposits d
LEFT JOIN withdrawals w ON d.day = w.day
ORDER BY 1
```

🧠 Note: More advanced TVL models will track by asset and convert to USD using token price joins.

------

## 🧮 Example: DEX Volume

Let’s see Uniswap swap volume by day:

```sql
sql

SELECT 
  DATE_TRUNC('day', evt_block_time) AS day,
  SUM(amount0 * price0_usd + amount1 * price1_usd) AS daily_volume_usd
FROM uniswap_v3_ethereum.Swap
WHERE evt_block_time > NOW() - INTERVAL '30 days'
GROUP BY 1
ORDER BY 1
```

You can also group by `pool_address` or `token` to break down where volume is happening.

------

## 🧠 Understanding Incentives

Many protocols emit their native token to attract users:

- Aave emissions: `stkAAVE`
- Curve gauges: `CRV`
- Uniswap: LP tokens, no emissions
- GMX: `esGMX`, fee revenue, and escrowed tokens

You can analyze **how incentives flow**, to whom, and whether usage remains after emissions stop.

Example:

- Identify wallets farming rewards
- Measure their TVL → reward → exit behavior
- Build dashboards tracking retention vs mercenary capital

------

## 📉 Are Incentives Working?

Compare:

- 🟢 Protocols with sticky usage: Lido, Maker
- 🔴 Protocols with vampire-like liquidity farming: (many have failed)

A great analysis includes:

- Usage before incentives
- Usage during emissions
- Usage after incentives ended

This helps DAOs make smarter decisions about token emissions and sustainable growth.

------

## 📚 Dashboards to Learn From

- TVL Trends
- Uniswap Protocol Revenue
- Synthetix Weekly Stats
- Balancer Emissions Tracker

------

## 💡 Tips for Great DeFi Dashboards

✅ Group metrics by protocol and chain
 ✅ Always convert to USD using price joins
 ✅ Show changes over time (30d, 7d, daily diffs)
 ✅ Use clear labels: “Volume (USD)”, “TVL (ETH)”, etc
 ✅ Cross-reference with governance proposals or tokenomics changes

------

## 🧠 Final Thoughts

DeFi is constantly evolving. Protocols fork, token incentives change, and new yield strategies emerge every week. But behind all of it is user behavior—and that behavior is visible, in real time, through onchain data.

As an analyst, your role is to demystify these flows:

- Where is liquidity moving?
- What incentives are working?
- What risks are hiding in plain sight?

DeFi isn’t just code—it’s a financial system powered by human decisions.

Measure them.

------

**Next: 10. MEV on Uniswap — Understanding and Quantifying Extracted Value**