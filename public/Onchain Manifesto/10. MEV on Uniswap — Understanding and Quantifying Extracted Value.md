# 10. MEV on Uniswap — Understanding and Quantifying Extracted Value

MEV—Miner (or Maximal) Extractable Value—is one of the most important, misunderstood, and data-rich frontiers in onchain analysis.

It’s where bots race for profit, arbitrage transactions, and reorder blocks. It’s where liquidity providers are frontrun, slippage is weaponized, and users unknowingly pay a hidden tax.

As an onchain analyst, understanding MEV is critical for protocol design, user protection, and infrastructure insights.

Let’s unpack what MEV is, how to analyze it on Uniswap, and what it reveals about the invisible incentives shaping DeFi.

---

## 🤔 What Is MEV?

MEV refers to the value a validator (or block producer) can extract by:

- Reordering transactions
- Inserting their own transactions
- Censoring or delaying others

Originally dubbed “miner extractable value,” it has since evolved to include searchers, solvers, and validators in systems like Ethereum post-merge.

The key idea: the ability to **choose transaction order** in a block can be exploited for financial gain.

---

## 💥 Common MEV Strategies

| Type                    | Description                                             |
| ----------------------- | ------------------------------------------------------- |
| **Arbitrage**           | Capture price differences between pools                 |
| **Sandwich Attacks**    | Frontrun + backrun a large swap to profit from slippage |
| **Liquidation Sniping** | Snipe undercollateralized loans on lending platforms    |
| **Backrunning**         | Capture a favorable position after a known transaction  |
| **Time Bandit Attacks** | Reorg past blocks to extract missed MEV (rare)          |

---

## 🧠 Why Uniswap?

Uniswap V2 and V3 are **the epicenter of MEV activity** due to:

- High volume and volatility
- Transparent mempool
- Real-time price discovery

Every swap creates an opportunity for MEV extraction.

---

## 🔍 Detecting MEV with Dune

### Step 1: Identify Arbitrage Patterns

An arbitrage usually looks like:

1. Bot buys token A in pool 1
2. Bot sells token A in pool 2 for a profit
3. All in the same block, often the same tx

Example SQL:

```sql
sql

SELECT 
  tx_hash,
  COUNT(*) AS swap_count,
  COUNT(DISTINCT token_in) AS tokens_involved,
  COUNT(DISTINCT pool_address) AS pools_used
FROM uniswap_v3_ethereum.Swap
WHERE block_time > NOW() - INTERVAL '1 day'
GROUP BY tx_hash
HAVING swap_count >= 2 AND pools_used >= 2
ORDER BY swap_count DESC
```

This identifies multi-swap transactions—often arbitrage bundles.

------

### Step 2: Estimate Profit

Join swaps with token prices to estimate the input/output delta.

Or join with `prices.usd`:

```sql
sql

SELECT 
  tx_hash,
  SUM(amount_in * price_in) AS input_usd,
  SUM(amount_out * price_out) AS output_usd,
  output_usd - input_usd AS profit_usd
FROM your_arbitrage_query
```

This rough estimation can help flag profitable MEV activity.

------

### Step 3: Track Sandwich Attacks

Sandwiches are harder. You need to:

1. Identify a “victim” swap with large slippage
2. Find a small swap just before and just after (same block)
3. Confirm the tokens and price movements match the MEV pattern

Some dashboards (like BreadCrumb) use custom parsers to do this.

But even without deep parsing, you can:

- Filter by high slippage swaps
- Look for same-token txs in the same block
- Examine before/after prices

------

## 💡 Key Metrics to Track

| Metric                              | Why It Matters                           |
| ----------------------------------- | ---------------------------------------- |
| **Number of arbitrage bundles**     | Shows MEV density                        |
| **MEV per block**                   | Tracks how lucrative MEV is in real time |
| **Top MEV searchers**               | Who’s capturing the most value           |
| **Protocol revenue vs MEV leakage** | Is more value going to LPs or bots?      |

------

## 🔬 Example Dashboards

- Flashbots MEV Inspect
- Uniswap MEV Stats
- MEV Activity Heatmap
- Sandwich Attacks Overview

------

## 🧠 MEV as an Analyst Lens

MEV analysis reveals:

- Liquidity efficiency: which pools are being abused
- Protocol design flaws: like fee tiers too easy to frontrun
- Bot behavior: tracking wallets that profit repeatedly
- User risk: how much value is lost to sandwiches

MEV isn’t just a technical curiosity. It’s a **source of systemic risk**, governance challenges, and hidden economics.

------

## 🧠 Analyst Perspective

MEV gives us insight into the **invisible economy** around DeFi.

You can:

- Quantify who benefits most from trades
- Flag changes in MEV activity post-upgrades
- Help DAOs decide fee tiers or routing paths
- Advocate for better UX protections (slippage settings, simulation warnings)

As MEV gets more complex (e.g., MEV auctions, private mempools), analysts who can quantify its effects will become vital to ecosystem health.

------

## 🚨 MEV Is Not Going Away

It’s a byproduct of permissionless systems.

But we can:

- Measure it
- Design around it
- Hold actors accountable

And that all starts with onchain data.

------

**Next: 11. Uniswap Multichain Analytics — Comparing Deployments Across Chains**