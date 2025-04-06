
import { ManifestoChapter } from '../manifestoChapters';

// Chapters 11-18: Advanced topics and conclusion
export const chaptersAdvanced: ManifestoChapter[] = [
  { 
    number: 11, 
    title: "Uniswap Multichain Analytics — Comparing Deployments Across Chains", 
    pdfPath: "/Onchain Manifesto/11. Uniswap Multichain Analytics — Comparing Deployments Across Chains.pdf",
    mdContent: `# 11. Uniswap Multichain Analytics — Comparing Deployments Across Chains

In the multichain era, protocols aren't confined to a single blockchain. Uniswap—the largest decentralized exchange by volume—now operates across Ethereum L1, Polygon, Arbitrum, Optimism, Base, and more. This fragmentation creates new analytical challenges.

For onchain analysts, cross-chain analysis is no longer optional—it's essential. This article explores how to track, compare, and derive insights from Uniswap's multichain deployments.

---

## 🔄 The Multichain Expansion

Uniswap's journey from Ethereum-only to multichain deployment reflects the broader DeFi ecosystem's evolution:

**Ethereum L1** → High security, high gas costs  
**L2s (Arbitrum, Optimism)** → Lower fees, inherited security  
**Side chains (Polygon)** → Independent security, established ecosystem  
**New L2s (Base)** → Emerging ecosystems, potential first-mover advantages

Each environment offers different:
- Gas prices and fee structures
- User demographics and behavior patterns
- Liquidity depth and capital efficiency
- MEV dynamics and market competition
- Token availability and trading pairs

---

## 📊 Setting Up Cross-Chain Comparison

Let's create a simple framework for comparing Uniswap's performance across chains:

\`\`\`sql
SELECT
  blockchain,
  COUNT(DISTINCT tx_hash) AS swap_count,
  COUNT(DISTINCT trader) AS users,
  SUM(amount_usd) AS volume_usd,
  AVG(amount_usd) AS avg_swap_size_usd
FROM uniswap_v3.trades
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 4 DESC
\`\`\`

This gives us a baseline of activity by chain—but we can go deeper.

---

## 🕰️ Activity Patterns by Chain

Different chains show different usage patterns throughout the day:

\`\`\`sql
SELECT
  blockchain,
  date_trunc('hour', block_time) AS hour,
  COUNT(*) AS swaps
FROM uniswap_v3.trades
WHERE block_time > now() - interval '7 days'
GROUP BY 1, 2
ORDER BY 1, 2
\`\`\`

This might reveal:
- **Arbitrum**: Higher activity during Asian trading hours
- **Ethereum**: More institutional/whale activity during US market hours
- **Polygon**: More gaming-related token swaps tied to specific game activity times

---

## 💰 Capital Efficiency Comparison

Uniswap V3 introduced concentrated liquidity, but how effectively is it used across chains?

\`\`\`sql
SELECT
  blockchain,
  AVG(tvl_usd) AS avg_tvl,
  SUM(volume_usd) AS volume_usd,
  SUM(volume_usd) / AVG(tvl_usd) AS capital_efficiency
FROM (
  -- Daily TVL by chain
  SELECT
    blockchain,
    date_trunc('day', block_time) AS day,
    SUM(liquidity_usd) AS tvl_usd
  FROM uniswap_v3.pools_daily
  WHERE block_time > now() - interval '30 days'
  GROUP BY 1, 2
) tvl
JOIN (
  -- Daily volume by chain
  SELECT
    blockchain,
    date_trunc('day', block_time) AS day,
    SUM(amount_usd) AS volume_usd
  FROM uniswap_v3.trades
  WHERE block_time > now() - interval '30 days'
  GROUP BY 1, 2
) vol
ON tvl.blockchain = vol.blockchain AND tvl.day = vol.day
GROUP BY 1
ORDER BY 4 DESC
\`\`\`

Higher capital efficiency = generating more volume with less locked liquidity.

---

## 🔍 Types of Tokens Traded by Chain

Different chains have different token ecosystems:

\`\`\`sql
WITH token_cat AS (
  SELECT
    blockchain,
    token_address,
    CASE
      WHEN symbol IN ('USDC', 'USDT', 'DAI') THEN 'stablecoin'
      WHEN category = 'gaming' THEN 'gaming'
      WHEN category = 'defi' THEN 'defi'
      ELSE 'other'
    END AS token_category,
    SUM(amount_usd) AS volume_usd
  FROM uniswap_v3.trades
  JOIN token_metadata USING (token_address)
  WHERE block_time > now() - interval '30 days'
  GROUP BY 1, 2, 3
)

SELECT
  blockchain,
  token_category,
  SUM(volume_usd) AS volume_usd,
  SUM(volume_usd) / SUM(SUM(volume_usd)) OVER (PARTITION BY blockchain) AS pct_of_chain
FROM token_cat
GROUP BY 1, 2
ORDER BY 1, 4 DESC
\`\`\`

This analysis might reveal:
- **Polygon**: Higher % of gaming tokens
- **Optimism**: More governance tokens
- **Base**: Higher native protocol token dominance

---

## 💸 Fee Tier Preferences by Chain

Uniswap V3 offers multiple fee tiers (0.01%, 0.05%, 0.3%, 1%). Usage varies by chain:

\`\`\`sql
SELECT
  blockchain,
  fee_tier,
  COUNT(*) AS swaps,
  SUM(amount_usd) AS volume_usd
FROM uniswap_v3.trades
WHERE block_time > now() - interval '30 days'
GROUP BY 1, 2
ORDER BY 1, 4 DESC
\`\`\`

Lower fee tiers dominate on chains with lower gas costs, while higher fee tiers may be more common on L1.

---

## 🏆 Pool Concentration by Chain

Is liquidity more or less concentrated on certain chains?

\`\`\`sql
SELECT
  blockchain,
  COUNT(DISTINCT pool) AS pool_count,
  COUNT(*) AS swaps,
  SUM(amount_usd) AS volume_usd,
  SUM(CASE WHEN pool_rank <= 10 THEN amount_usd ELSE 0 END) / SUM(amount_usd) AS top10_pool_concentration
FROM (
  SELECT
    *,
    ROW_NUMBER() OVER (PARTITION BY blockchain ORDER BY pool_volume DESC) AS pool_rank
  FROM (
    SELECT
      blockchain,
      pool,
      SUM(amount_usd) AS pool_volume
    FROM uniswap_v3.trades
    WHERE block_time > now() - interval '30 days'
    GROUP BY 1, 2
  ) pool_vol
) ranked_pools
GROUP BY 1
ORDER BY 5 DESC
\`\`\`

Higher concentration = more vulnerable to liquidity shocks.

---

## 🧠 Multichain Dashboards: Best Practices

When building cross-chain Uniswap dashboards:

1. **Always normalize by USD** for comparable metrics
2. **Include time zones** (different regions dominate different chains)
3. **Compare with chain-native DEXs** (e.g., Camelot on Arbitrum)
4. **Track relative growth rates**, not just absolute values
5. **Monitor bridge flows** to identify capital migration

---

## 📈 Emerging Patterns from Multichain Analysis

Analysis reveals:

- **Chain-specific user behavior**: Different swap sizes, token preferences, and trading hours
- **Different pool dynamics**: More speculative pools on newer chains, more stable pairs on L1
- **Varying LP profitability**: MEV activity and competition varies dramatically by chain
- **Growth pattern differences**: New chains often see initial high growth followed by stabilization

---

## 🧠 Next-Level Analysis: User Journey Across Chains

Advanced analysts track the same wallets across different chains:

\`\`\`sql
WITH cross_chain_users AS (
  SELECT
    trader,
    COUNT(DISTINCT blockchain) AS chain_count
  FROM uniswap_v3.trades
  WHERE block_time > now() - interval '30 days'
  GROUP BY 1
  HAVING COUNT(DISTINCT blockchain) > 1
)

SELECT
  chain_count,
  COUNT(DISTINCT trader) AS users,
  COUNT(DISTINCT trader) / SUM(COUNT(DISTINCT trader)) OVER () AS pct_of_total
FROM cross_chain_users
GROUP BY 1
ORDER BY 1
\`\`\`

This reveals what percentage of users operate across multiple chains and how they allocate capital.

---

## 🏁 Conclusion: The Multichain Analyst's Edge

Being able to compare Uniswap across chains provides:
- Early signals of capital migration
- Liquidity fragmentation risks
- Emerging market opportunities
- Protocol-specific growth strategies

In a fragmented liquidity landscape, the analyst who can see the whole picture—across all chains—has a decisive advantage.

---

**Next: 12. Useful Metrics Every Analyst Should Track**`
  },
  { 
    number: 12, 
    title: "Useful Metrics Every Analyst Should Track", 
    pdfPath: "/Onchain Manifesto/12. Useful Metrics Every Analyst Should Track.pdf",
    mdContent: `# 12. Useful Metrics Every Analyst Should Track

In onchain analytics, there are certain metrics that serve as vital signs for the crypto ecosystem. Like a doctor's standard checkup, these indicators help you baseline health, detect anomalies, and spot emerging trends.

This article outlines the must-track metrics for any serious onchain analyst—from macro flows to protocol-specific indicators. These are the numbers that tell you what's really happening beneath the price action.

---

## 🌍 Macro Flow Metrics

These ecosystem-wide metrics help you understand broad capital movements.

### 1. Exchange Inflows/Outflows

**What it tells you**: User sentiment and potential selling/accumulation pressure

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(CASE WHEN to_is_cex THEN amount_usd ELSE 0 END) AS inflow_to_cex_usd,
  SUM(CASE WHEN from_is_cex THEN amount_usd ELSE 0 END) AS outflow_from_cex_usd,
  SUM(CASE WHEN to_is_cex THEN amount_usd ELSE 0 END) - 
  SUM(CASE WHEN from_is_cex THEN amount_usd ELSE 0 END) AS net_flow_usd
FROM (
  SELECT
    t.block_time,
    t.from AS from_address,
    t.to AS to_address,
    is_cex(t.from) AS from_is_cex,
    is_cex(t.to) AS to_is_cex,
    t.amount / 1e18 * p.price AS amount_usd
  FROM ethereum.token_transfers t
  JOIN prices.usd p ON t.token_address = p.contract_address
    AND date_trunc('minute', t.block_time) = p.minute
  WHERE t.block_time > now() - interval '30 days'
    AND t.token_address = LOWER('0xToken') -- e.g., USDT, WETH, etc.
) flows
GROUP BY 1
ORDER BY 1
\`\`\`

**Red flags**: Sustained net inflows to exchanges often precede selling pressure.

---

### 2. Stablecoin Supply Activity

**What it tells you**: Dollar liquidity entering/exiting crypto

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  token_symbol,
  SUM(amount / power(10, decimals)) AS daily_minted
FROM stablecoin.mints
WHERE block_time > now() - interval '90 days'
  AND token_symbol IN ('USDT', 'USDC', 'DAI', 'BUSD')
GROUP BY 1, 2
ORDER BY 1, 2
\`\`\`

**Red flags**: Sharp declines in stablecoin supply often correlate with reduced trading volumes and market pullbacks.

---

### 3. Smart Money Wallet Activity

**What it tells you**: What sophisticated investors are doing

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  label,
  COUNT(DISTINCT tx_hash) AS txs,
  COUNT(DISTINCT smart_wallet) AS active_wallets
FROM labeled_transactions
WHERE block_time > now() - interval '30 days'
  AND label IN ('VC', 'hedge_fund', 'whale_wallet')
GROUP BY 1, 2
ORDER BY 1, 2
\`\`\`

**Red flags**: When smart money begins moving to stablecoins or off-chain, it often precedes broader market movements.

---

## 🔍 Ethereum Network Health

These metrics focus specifically on Ethereum's network activity and usage.

### 4. Gas Usage by Category

**What it tells you**: What's driving blockchain demand

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  tx_type,
  SUM(gas_used * gas_price) / 1e18 AS eth_spent_on_gas,
  COUNT(*) AS tx_count
FROM (
  SELECT
    t.block_time,
    t.gas_used,
    t.gas_price,
    CASE 
      WHEN t.to IN (SELECT address FROM dex_contracts) THEN 'DEX'
      WHEN t.to IN (SELECT address FROM nft_contracts) THEN 'NFT'
      WHEN t.to IN (SELECT address FROM lending_contracts) THEN 'Lending'
      ELSE 'Other'
    END AS tx_type
  FROM ethereum.transactions t
  WHERE t.block_time > now() - interval '30 days'
) categorized
GROUP BY 1, 2
ORDER BY 1, 2
\`\`\`

**Red flags**: Sudden spikes in gas usage for speculative activities (like NFT mints or token launches) can indicate market froth.

---

### 5. Active Addresses

**What it tells you**: Real network usage and adoption

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  COUNT(DISTINCT from_address) AS active_senders,
  COUNT(DISTINCT to_address) AS active_receivers,
  COUNT(DISTINCT from_address OR to_address) AS total_active_addresses
FROM ethereum.transactions
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

**Red flags**: Declining active addresses despite rising prices can signal unsustainable price action.

---

## 💎 DeFi Protocol Metrics

These metrics help evaluate the health of major DeFi protocols.

### 6. Yield vs. Risk

**What it tells you**: Whether yields are sustainable

\`\`\`sql
SELECT 
  pool_name,
  asset,
  current_apy,
  volatility_30d,
  current_apy / volatility_30d AS risk_adjusted_return,
  tvl_usd
FROM defi.yield_metrics
WHERE timestamp = (SELECT MAX(timestamp) FROM defi.yield_metrics)
ORDER BY 5 DESC
\`\`\`

**Red flags**: Yields significantly higher than market with low risk-adjusted returns often indicate hidden risks or unsustainable tokenomics.

---

### 7. Protocol Revenue

**What it tells you**: Sustainable value capture

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  protocol_name,
  SUM(fee_usd) AS revenue_usd,
  SUM(CASE WHEN accrues_to_protocol THEN fee_usd ELSE 0 END) AS protocol_revenue_usd,
  SUM(CASE WHEN accrues_to_lps THEN fee_usd ELSE 0 END) AS lp_revenue_usd
FROM defi.fees
WHERE block_time > now() - interval '30 days'
GROUP BY 1, 2
ORDER BY 1, 2
\`\`\`

**Red flags**: Declining protocol revenue despite stable/growing TVL can indicate declining competitiveness or value capture.

---

## 🎮 NFT Ecosystem Metrics

For analysts tracking the NFT space, these metrics are essential.

### 8. Marketplace Activity

**What it tells you**: Where the volume is going

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  marketplace,
  COUNT(*) AS sales,
  COUNT(DISTINCT nft_contract_address) AS collections_traded,
  COUNT(DISTINCT buyer) AS unique_buyers,
  COUNT(DISTINCT seller) AS unique_sellers,
  SUM(amount_usd) AS volume_usd,
  SUM(amount_usd) / COUNT(*) AS avg_price_usd
FROM nft.trades
WHERE block_time > now() - interval '30 days'
GROUP BY 1, 2
ORDER BY 1, 2
\`\`\`

**Red flags**: Marketplace volume concentrated on a single platform can indicate vulnerability to policy changes.

---

### 9. Buying vs. Minting

**What it tells you**: Market saturation vs. new growth

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  COUNT(*) AS mint_count,
  (SELECT COUNT(*) FROM nft.trades WHERE block_time BETWEEN day AND day + interval '1 day') AS sale_count,
  COUNT(*) / (SELECT COUNT(*) FROM nft.trades WHERE block_time BETWEEN day AND day + interval '1 day') AS mint_to_sale_ratio
FROM nft.mints
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

**Red flags**: High mint counts but low secondary sales often indicate excessive supply with weak demand.

---

## 🔐 Security Metrics

These metrics help you monitor risk and security concerns.

### 10. Bridge Volume and TVL

**What it tells you**: Cross-chain risk exposure

\`\`\`sql
SELECT 
  bridge_name,
  source_chain,
  destination_chain,
  SUM(amount_usd) AS bridged_volume_30d,
  COUNT(*) AS transaction_count_30d,
  current_tvl_usd,
  bridged_volume_30d / current_tvl_usd AS velocity
FROM bridges.transfers
WHERE block_time > now() - interval '30 days'
GROUP BY 1, 2, 3, 6
ORDER BY 4 DESC
\`\`\`

**Red flags**: High TVL on smaller bridges creates concentrated risk points.

---

### 11. Protocol TVL Concentration

**What it tells you**: Systemic risks in DeFi

\`\`\`sql
SELECT 
  protocol,
  category,
  tvl_usd,
  tvl_usd / SUM(tvl_usd) OVER () AS pct_of_total_tvl,
  SUM(tvl_usd) OVER (PARTITION BY category) / SUM(tvl_usd) OVER () AS category_concentration
FROM defi.tvl
WHERE timestamp = (SELECT MAX(timestamp) FROM defi.tvl)
ORDER BY 3 DESC
\`\`\`

**Red flags**: When a single protocol dominates TVL, it creates systemic risk.

---

## 📊 Building Your Dashboard

When constructing your analytics dashboard:

**1. Layer these metrics**
- Start with macro flows
- Add network activity
- Incorporate protocol-specific metrics

**2. Standardize time periods**
- Daily for recent trends (7-30 days)
- Weekly for medium-term (30-90 days)
- Monthly for long-term (90+ days)

**3. Add ratio metrics**
- Volume / TVL
- Active Users / Total Users
- Revenue / TVL

---

## 🔮 Conclusion: Monitoring the Pulse of the Blockchain

These metrics form a comprehensive vital signs monitor for onchain activity. By tracking them consistently, you'll develop an intuition for what's normal and what's not.

The best analysts don't just track these numbers in isolation—they look for correlations, divergences, and leading indicators across metrics.

Next time you see a price movement, check these metrics first—they'll often tell you whether the move is driven by fundamental activity or mere speculation.

---

**Next: 13. BTC Coin Days Destroyed — What HODLers Tell Us About the Market**`
  },
  { 
    number: 13, 
    title: "BTC Coin Days Destroyed — What HODLers Tell Us About the Market", 
    pdfPath: "/Onchain Manifesto/13. BTC Coin Days Destroyed — What HODLers Tell Us About the Market.pdf",
    mdContent: `# 13. BTC Coin Days Destroyed — What HODLers Tell Us About the Market

Bitcoin hodlers have long been considered the backbone of the crypto ecosystem—the true believers who hold through market cycles. But how do we measure their behavior in a quantifiable way?

Enter **Coin Days Destroyed (CDD)**, one of the most powerful and underutilized metrics in Bitcoin analysis. CDD combines both the *amount* of Bitcoin moved and *how long* it was dormant before moving.

This article explores how to calculate, interpret, and derive insights from CDD data—a metric that often signals major market shifts before they happen.

---

## 🧮 Understanding Coin Days Destroyed

Let's start with the basics:

1. **Coin Days**: When 1 BTC remains unspent for 1 day, it accumulates 1 "coin day"
2. **Destruction**: When those coins eventually move, the accumulated coin days are "destroyed"

The formula is simple:
```
Coin Days Destroyed = Amount of BTC moved × Days since last movement
```

For example:
- 10 BTC held for 100 days = 1,000 coin days
- When moved, 1,000 coin days are "destroyed"

---

## 🔍 Why CDD Matters

CDD tells you something that raw transaction volume cannot:
- **Low CDD**: Mostly recent coins moving (active traders)
- **High CDD**: Long-dormant coins moving (potential smart money/OG decisions)

Often, significant market tops and bottoms are preceded by spikes in CDD as long-term holders decide to sell or accumulate.

---

## 📊 Calculating CDD on Dune

Here's how to calculate CDD using Bitcoin's UTXO model:

\`\`\`sql
WITH utxo_lifespan AS (
  SELECT
    i.block_time AS spent_time,
    o.block_time AS created_time,
    i.value / 1e8 AS btc_amount,
    date_diff('day', o.block_time, i.block_time) AS days_held
  FROM bitcoin.inputs i
  JOIN bitcoin.outputs o ON i.spent_tx_hash = o.tx_hash AND i.spent_index = o.index
  WHERE i.block_time > now() - interval '30 days'
    AND o.block_time < i.block_time -- sanity check
)

SELECT
  date_trunc('day', spent_time) AS day,
  SUM(btc_amount) AS btc_moved,
  SUM(btc_amount * days_held) AS coin_days_destroyed
FROM utxo_lifespan
GROUP BY 1
ORDER BY 1
\`\`\`

This query:
1. Joins Bitcoin inputs (coins being spent) with their original outputs (when they were created)
2. Calculates how many days each UTXO was dormant
3. Multiplies the BTC amount by days held to get CDD
4. Aggregates by day for a time series view

---

## 🧪 Derived Metrics from CDD

CDD can be further refined into several powerful derivative metrics:

### 1. CDD 90-day Moving Average

Shows the trend in long-term holder behavior:

\`\`\`sql
SELECT
  day,
  coin_days_destroyed,
  AVG(coin_days_destroyed) OVER (ORDER BY day ROWS BETWEEN 90 PRECEDING AND CURRENT ROW) AS cdd_90d_ma
FROM daily_cdd
ORDER BY day
\`\`\`

### 2. CDD Velocity

Measures how quickly accumulated coin days are being destroyed:

\`\`\`sql
WITH btc_supply AS (
  SELECT
    day,
    21000000 - (21000000 - 6.25) * POW(0.5, block_height / 210000) AS estimated_supply
  FROM daily_blocks
)

SELECT
  c.day,
  c.coin_days_destroyed,
  c.coin_days_destroyed / s.estimated_supply AS cdd_velocity
FROM daily_cdd c
JOIN btc_supply s USING (day)
ORDER BY day
\`\`\`

### 3. Binary CDD

A boolean signal that flags unusual CDD spikes:

\`\`\`sql
SELECT
  day,
  coin_days_destroyed,
  cdd_90d_ma,
  CASE
    WHEN coin_days_destroyed > cdd_90d_ma * 3 THEN 1
    ELSE 0
  END AS binary_cdd_signal
FROM (
  SELECT
    day,
    coin_days_destroyed,
    AVG(coin_days_destroyed) OVER (ORDER BY day ROWS BETWEEN 90 PRECEDING AND CURRENT ROW) AS cdd_90d_ma
  FROM daily_cdd
) WITH_MA
ORDER BY day
\`\`\`

---

## 👥 Cohort Analysis with CDD

We can segment coins by age to see which vintage of HODLers is moving:

\`\`\`sql
SELECT
  date_trunc('day', spent_time) AS day,
  CASE
    WHEN days_held < 7 THEN 'under_1w'
    WHEN days_held < 30 THEN '1w_to_1m'
    WHEN days_held < 90 THEN '1m_to_3m'
    WHEN days_held < 365 THEN '3m_to_1y'
    WHEN days_held < 1095 THEN '1y_to_3y'
    ELSE 'over_3y'
  END AS age_bucket,
  SUM(btc_amount) AS btc_moved,
  SUM(btc_amount * days_held) AS coin_days_destroyed
FROM utxo_lifespan
GROUP BY 1, 2
ORDER BY 1, 2
\`\`\`

This tells you whether it's new coins or true "diamond hands" moving the market.

---

## 📋 Interpreting CDD Signals

### Bullish CDD Patterns

- **Low CDD during corrections**: HODLers aren't selling despite price drops
- **CDD spikes at established bottoms**: Smart money accumulating after capitulation
- **Declining CDD over time**: Growing HODLer base with strong conviction

### Bearish CDD Patterns

- **Major CDD spikes after strong rallies**: Long-term holders taking profit
- **Sustained high CDD**: Distribution phase may be underway
- **CDD spikes with declining volume**: Smart money exiting quietly

---

## 🔮 Historical CDD Case Studies

Let's examine some historical examples:

### December 2017: The Bull Market Top

A massive spike in CDD occurred as Bitcoin approached $20,000:

\`\`\`sql
SELECT
  day,
  price_usd,
  coin_days_destroyed,
  cdd_90d_ma
FROM daily_cdd
JOIN prices.usd USING (day)
WHERE day BETWEEN '2017-11-01' AND '2018-01-31'
ORDER BY day
\`\`\`

Early bitcoiners who had held for years began taking profits, signaling the market top.

### March 2020: COVID Crash and Recovery

During the COVID crash:

\`\`\`sql
SELECT
  day,
  price_usd,
  coin_days_destroyed,
  cdd_90d_ma
FROM daily_cdd
JOIN prices.usd USING (day)
WHERE day BETWEEN '2020-03-01' AND '2020-05-31'
ORDER BY day
\`\`\`

We saw panic selling (high CDD) followed by accumulation from long-term holders—a classic bottoming pattern.

---

## 🧠 Building a Holistic CDD Dashboard

A complete CDD dashboard should include:

1. **Raw CDD Time Series**: The foundational metric
2. **Age-Segmented Movement**: Which cohorts are moving
3. **CDD vs. Price**: Correlation and divergences
4. **CDD Velocity**: Rate of old coin movement
5. **Binary CDD Signals**: Highlighting extraordinary events

Remember to normalize by total supply and market age, as the interpretation of what constitutes "high CDD" changes as Bitcoin matures.

---

## 🔮 Conclusion: The Voice of the HODLers

CDD lets you hear what the silent HODLers are saying with their actions. It's one of the few metrics that can give advance warning of major market shifts by detecting when the most experienced, patient participants decide to move their coins.

By mastering CDD analysis, you gain insight into the conviction and behavior of Bitcoin's most steadfast believers—information that often precedes significant market movements.

**Next: 14. Building with Spellbook — How to Contribute Reusable Models to the Community**`
  },
  { 
    number: 14, 
    title: "Building with Spellbook — How to Contribute Reusable Models to the Community", 
    pdfPath: "/Onchain Manifesto/14. Building with Spellbook — How to Contribute Reusable Models to the Community.pdf",
    mdContent: `# 14. Building with Spellbook — How to Contribute Reusable Models to the Community

At the heart of the Dune ecosystem lies a powerful yet underutilized tool: **Spellbook**. This community-maintained repository of SQL models represents a paradigm shift in onchain analytics—moving from isolated queries to reusable, composable, and collaborative data models.

This article will show you how to contribute to Spellbook, enabling you to both enhance your own analytics workflow and empower the broader community.

---

## 🧙‍♂️ What Is Spellbook?

Spellbook is Dune's open-source repository of SQL models built with dbt (data build tool). It takes raw blockchain data and transforms it into:

- **Standardized views** (e.g., unified DEX trades across all chains)
- **Reusable abstractions** (e.g., protocol-specific metrics)
- **Production-ready models** (e.g., proper testing, documentation, and metadata)

The models live in the [Spellbook GitHub repository](https://github.com/duneanalytics/spellbook) and, once merged, become available to every Dune user as part of DuneSQL.

---

## 🧩 Why Spellbook Matters

Before Spellbook, Dune analysts faced common challenges:

- **Duplicate work**: Everyone writing similar queries for basic metrics
- **Inconsistent calculations**: Different definitions of "active users" or "TVL"
- **Hard-to-maintain dashboards**: Code duplication across queries

Spellbook solves these by providing:

- **Write once, use everywhere** functionality
- **Community-validated models** with proper testing
- **Version control and continuous integration**
- **Consistent naming and documentation**

---

## 🚀 Getting Started with Spellbook

Before contributing, you'll need to:

1. **Install required tools**:
   - Python 3.9+
   - dbt-core
   - GitHub account

2. **Fork the repository**:
   - Visit [github.com/duneanalytics/spellbook](https://github.com/duneanalytics/spellbook)
   - Click "Fork" in the top right
   - Clone your fork locally

3. **Set up your environment**:
   ```bash
   pip install -r requirements.txt
   dbt deps
   cp profiles_template.yml profiles.yml
   # Edit profiles.yml with your Dune API key
   ```

---

## 📋 Anatomy of a Spellbook Model

Spellbook models follow a standard structure:

```
models/
  └── project_name/
      ├── project_name_schema.yml    # Schema definitions
      ├── base/                       # Base tables and views
      │   └── base_project_table.sql
      ├── aggregations/              # Aggregated tables
      │   └── project_daily_metrics.sql
      └── unified/                   # Cross-chain models
          └── project_unified_trades.sql
```

Each SQL file contains a dbt model, structured like:

```sql
{{
  config(
    schema = 'project_name',
    alias = 'metric_name',
    partition_by = ['field'],
    materialized = 'incremental',
    file_format = 'delta',
    incremental_strategy = 'merge',
    unique_key = ['unique_field']
  )
}}

-- Model logic here using DuneSQL syntax
SELECT
  field1,
  field2
FROM {{ ref('another_model') }}
WHERE condition
```

---

## 🧪 Example: Building a Uniswap V3 LP Profitability Model

Let's create a Spellbook model for tracking Uniswap V3 LP profitability:

1. **Create model file** at `models/uniswap/aggregations/uniswap_v3_lp_positions.sql`:

   ```sql
   {{
     config(
       schema = 'uniswap_v3',
       alias = 'lp_positions',
       materialized = 'incremental',
       file_format = 'delta',
       incremental_strategy = 'merge',
       unique_key = ['position_id', 'blockchain', 'day']
     )
   }}

   WITH positions AS (
     SELECT
       blockchain,
       position_id,
       liquidity,
       pool,
       tick_lower,
       tick_upper,
       block_time AS created_time
     FROM {{ ref('uniswap_v3_positions') }}
     WHERE block_time >= NOW() - INTERVAL '30 days'
   ),

   daily_metrics AS (
     SELECT
       date_trunc('day', block_time) AS day,
       blockchain,
       position_id,
       SUM(fee_earned_usd) AS daily_fees_usd,
       SUM(impermanent_loss_usd) AS daily_il_usd
     FROM {{ ref('uniswap_v3_position_events') }}
     WHERE block_time >= NOW() - INTERVAL '30 days'
     GROUP BY 1, 2, 3
   )

   SELECT
     d.day,
     p.blockchain,
     p.position_id,
     p.pool,
     p.liquidity,
     p.tick_lower,
     p.tick_upper,
     d.daily_fees_usd,
     d.daily_il_usd,
     d.daily_fees_usd - d.daily_il_usd AS daily_profit_usd,
     SUM(d.daily_fees_usd - d.daily_il_usd) OVER 
       (PARTITION BY p.position_id, p.blockchain 
        ORDER BY d.day 
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)
       AS cumulative_profit_usd
   FROM positions p
   JOIN daily_metrics d
     ON p.position_id = d.position_id
     AND p.blockchain = d.blockchain
   WHERE {% if is_incremental() %}
     d.day >= date_trunc('day', NOW() - INTERVAL '7 days')
   {% else %}
     d.day >= date_trunc('day', NOW() - INTERVAL '30 days')
   {% endif %}
   ```

2. **Add schema definition** in `models/uniswap/uniswap_schema.yml`:

   ```yaml
   version: 2

   models:
     - name: uniswap_v3_lp_positions
       description: >
         Daily metrics for Uniswap V3 LP positions including fees earned,
         impermanent loss, and net profitability.
       columns:
         - name: day
           description: The day for metrics
           tests:
             - not_null
         - name: blockchain
           description: The blockchain where the position exists
           tests:
             - not_null
         - name: position_id
           description: Unique identifier for the position NFT
           tests:
             - not_null
         - name: daily_fees_usd
           description: USD value of fees earned on this day
         - name: daily_il_usd
           description: USD value of impermanent loss on this day  
         - name: daily_profit_usd
           description: Net profit (fees minus IL) for the day
         - name: cumulative_profit_usd
           description: Running total of profit since position creation
   ```

3. **Test your model** locally:

   ```bash
   dbt run --select uniswap_v3_lp_positions
   dbt test --select uniswap_v3_lp_positions
   ```

---

## 🚢 Contributing Your Model

Once your model is working:

1. **Create a branch**:
   ```bash
   git checkout -b feature/uniswap-v3-lp-positions
   ```

2. **Commit your changes**:
   ```bash
   git add models/uniswap/
   git commit -m "Add Uniswap V3 LP profitability model"
   ```

3. **Push to your fork**:
   ```bash
   git push origin feature/uniswap-v3-lp-positions
   ```

4. **Open a pull request** to the main Spellbook repository
   - Provide clear description of what your model does
   - Reference any related issues or discussions
   - Wait for CI tests to pass
   - Respond to reviewer feedback

---

## 🧠 Best Practices for Spellbook Models

To create high-quality, maintainable models:

1. **Follow the schema convention**:
   - Base models -> Aggregations -> Unified views

2. **Optimize for query performance**:
   - Filter early in CTEs
   - Use incremental materialization for large tables
   - Include partition keys for time-based data

3. **Document thoroughly**:
   - Describe each column
   - Add tests for critical fields
   - Include sample queries in descriptions

4. **Reuse existing models**:
   - Check if components already exist before building
   - Leverage \`ref()\` to create proper dependencies

5. **Use consistent naming**:
   - snake_case for tables and columns
   - Include protocol and version in names

---

## 💡 Ideas for Contributions

The community needs Spellbook models for:

- **Cross-chain bridges**: Unified bridge flow analytics
- **NFT marketplace activity**: Standardized trades across platforms
- **Wallet profiles**: User behavior classification
- **Account abstraction (ERC-4337)**: UserOp standardization
- **Protocol-specific metrics**: Revenue, users, engagement

Start with models that solve your own analytics needs—chances are others need them too!

---

## 🧙‍♀️ The Power of Community Models

By contributing to Spellbook, you're not just solving your problem—you're enabling an entire ecosystem of insights.

Models you contribute will:
- Power community dashboards
- Enable protocol teams to track metrics
- Allow researchers to test hypotheses
- Become building blocks for more complex analytics

This is how we collectively build a more transparent, accessible blockchain data ecosystem.

---

## 🔮 Conclusion: From SQL Scripts to Data Infrastructure

Contributing to Spellbook represents a shift in mindset—from writing one-off queries to building reusable data infrastructure.

By embedding your knowledge in these shared models, you create leverage for yourself and others. Each contribution makes the entire ecosystem more powerful and accessible.

Start small, focus on quality, and help build the data foundation for the next generation of onchain analytics.

**Next: 15. How to Build an Onchain App Using the Dune API**`
  },
  { 
    number: 15, 
    title: "How to Build an Onchain App Using the Dune API", 
    pdfPath: "/Onchain Manifesto/15. How to Build an Onchain App Using the Dune API.pdf",
    mdContent: `# 15. How to Build an Onchain App Using the Dune API

Until now, we've focused on analyzing blockchain data for dashboards and insights. But what if you could harness this same data to power applications, not just visualizations?

The **Dune API** opens up the world of onchain data to developers, letting you build applications that react to blockchain events, display real-time analytics, and create customized user experiences around blockchain data.

This article will show you how to build apps powered by Dune's vast trove of decoded blockchain data.

---

## 🧩 What Is the Dune API?

The Dune API gives programmatic access to:

- **Query execution**: Run existing queries with parameters
- **Results retrieval**: Get data as JSON for app consumption
- **Status checking**: Monitor execution progress
- **Metadata access**: Get information about queries and dashboards

This means you can now integrate the same powerful blockchain analytics you use for dashboards directly into:

- Web applications
- Mobile apps
- Discord/Telegram bots
- Research tools
- Trading algorithms
- And more!

---

## 🛠️ Setting Up Your API Access

To get started with the Dune API:

1. **Sign up for an API plan** at [dune.com/pricing](https://dune.com/pricing)
2. **Generate an API key** in your account settings
3. **Install the client library** for your language:

```bash
# Python
pip install dune-client

# JavaScript
npm install @duneanalytics/api
```

Or use the REST API directly:

```bash
curl -X POST https://api.dune.com/api/v1/query/123456/execute \
  -H "x-dune-api-key: YOUR_API_KEY"
```

---

## 🚀 Example Project: Building a Protocol Health Monitor

Let's build a simple web app that monitors the health of a DeFi protocol. We'll use:

- **React** for the frontend
- **Node.js** for the API layer
- **Dune API** for the onchain data

### Step 1: Create the backend API

```javascript
// server.js
const express = require('express');
const { DuneClient } = require('@duneanalytics/api');
const cors = require('cors');

const app = express();
app.use(cors());

// Initialize Dune client
const dune = new DuneClient({ apiKey: process.env.DUNE_API_KEY });

// Protocol health endpoint
app.get('/api/protocol-health/:protocol', async (req, res) => {
  try {
    const { protocol } = req.params;
    
    // Execute TVL query
    const tvlResult = await dune.execute({
      queryId: 123456,  // Your saved query ID
      parameters: { protocol: protocol }
    });
    
    // Execute users query
    const usersResult = await dune.execute({
      queryId: 789012,  // Your saved query ID
      parameters: { protocol: protocol }
    });
    
    // Get protocol revenue
    const revenueResult = await dune.execute({
      queryId: 345678,  // Your saved query ID
      parameters: { protocol: protocol }
    });
    
    res.json({
      tvl: tvlResult.rows,
      users: usersResult.rows,
      revenue: revenueResult.rows
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch protocol data' });
  }
});

app.listen(3001, () => {
  console.log('API server running on port 3001');
});
```

### Step 2: Create the frontend app

```jsx
// App.jsx
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './App.css';

function App() {
  const [protocolData, setProtocolData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [protocol, setProtocol] = useState('uniswap_v3');
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3001/api/protocol-health/${protocol}`);
        const data = await response.json();
        setProtocolData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
    // Set up polling every 5 minutes
    const interval = setInterval(fetchData, 300000);
    return () => clearInterval(interval);
  }, [protocol]);
  
  if (loading) return <div className="loading">Loading protocol data...</div>;
  
  return (
    <div className="app">
      <h1>{protocol.toUpperCase()} Health Monitor</h1>
      <select value={protocol} onChange={(e) => setProtocol(e.target.value)}>
        <option value="uniswap_v3">Uniswap V3</option>
        <option value="aave_v3">Aave V3</option>
        <option value="compound_v3">Compound V3</option>
      </select>
      
      <div className="metrics">
        <div className="metric-card">
          <h2>Total Value Locked</h2>
          <LineChart width={500} height={300} data={protocolData.tvl}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="tvl_usd" stroke="#8884d8" />
          </LineChart>
        </div>
        
        <div className="metric-card">
          <h2>Daily Active Users</h2>
          <LineChart width={500} height={300} data={protocolData.users}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#82ca9d" />
          </LineChart>
        </div>
        
        <div className="metric-card">
          <h2>Daily Revenue</h2>
          <LineChart width={500} height={300} data={protocolData.revenue}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue_usd" stroke="#ffc658" />
          </LineChart>
        </div>
      </div>
    </div>
  );
}

export default App;
```

---

## 📊 Creating Effective API Queries

Not all Dune queries work well for APIs. Here are some best practices:

1. **Keep them focused**
   - Single purpose queries are more reusable
   - Fetch only the data you need

2. **Parameterize everything**
   - Use query parameters for flexibility
   - Example: `WHERE token_address = {{token_address}}`

3. **Optimize for performance**
   - Filter early in the query
   - Limit time ranges when possible
   - Aggregate where appropriate

4. **Handle rate limits**
   - Implement caching for frequent requests
   - Use background jobs for large queries

Example of a well-parameterized query:

```sql
SELECT 
  date_trunc('{{time_period}}', block_time) AS period,
  COUNT(DISTINCT user) AS users,
  SUM(amount_usd) AS volume_usd
FROM {{schema_name}}.{{table_name}}
WHERE block_time > now() - interval '{{lookback_days}} days'
  AND protocol = '{{protocol_name}}'
GROUP BY 1
ORDER BY 1
```

---

## 🧪 Advanced Use Cases

The Dune API enables sophisticated applications:

### 1. Wallet Profiler

Build an app that analyzes any wallet address:
- DeFi protocol usage
- NFT trading patterns
- DEX behaviors
- Gas spending over time

### 2. Trading Signal Generator

Create algorithmic trading signals based on onchain metrics:
- Exchange deposit/withdrawal ratios
- Whale wallet movements
- Smart money flow detection
- Unusual contract interactions

### 3. Risk Monitoring

Develop an early warning system for DeFi protocols:
- TVL outflows above thresholds
- Collateral ratio deterioration
- Utilization spikes
- Governance token concentration

### 4. Community Discord Bot

Build a Discord bot that answers questions with onchain data:
- "What's the Uniswap volume today?"
- "Who are the top NFT buyers this week?"
- "How much ETH moved to exchanges in the last 24 hours?"

---

## 🚧 Common Challenges and Solutions

### Handling Long-Running Queries

For queries that take >30 seconds:

```javascript
const executeQuery = async (queryId, parameters) => {
  // Start execution
  const execution = await dune.execute({ queryId, parameters });
  
  // Poll until complete
  while (execution.state !== 'QUERY_STATE_COMPLETED') {
    if (execution.state === 'QUERY_STATE_FAILED') {
      throw new Error('Query failed');
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    execution = await dune.status(execution.execution_id);
  }
  
  return execution.result;
};
```

### Implementing Caching

To reduce API costs and improve performance:

```javascript
const cache = {};

const getCachedData = async (cacheKey, fetchFunction, ttlMinutes = 15) => {
  const now = Date.now();
  
  if (cache[cacheKey] && cache[cacheKey].expiry > now) {
    return cache[cacheKey].data;
  }
  
  const data = await fetchFunction();
  
  cache[cacheKey] = {
    data,
    expiry: now + (ttlMinutes * 60 * 1000)
  };
  
  return data;
};
```

---

## 🧠 Best Practices for Production

When deploying to production:

1. **Secure your API key**
   - Never expose it in client-side code
   - Use environment variables or secrets management

2. **Implement rate limiting**
   - Stay within your plan's execution limits
   - Add queue management for high-traffic apps

3. **Add observability**
   - Log query execution times
   - Monitor API response times
   - Set up alerts for failures

4. **Build resilience**
   - Handle API outages gracefully
   - Implement retries with exponential backoff
   - Have fallback data sources where possible

---

## 🔮 The Future of Data-Powered Dapps

The Dune API represents a shift from passive analytics to active applications:

- **Real-time notifications** based on onchain events
- **Personalized insights** for individual users
- **Automated strategies** driven by blockchain data
- **Community tools** that democratize access to insights

By connecting blockchain data with traditional web applications, you can create experiences that help users make sense of the complex onchain world.

---

## 🏁 Conclusion: From Analytics to Applications

The Dune API bridges the gap between data analysis and application development. It allows you to harness the full power of blockchain data to create tools that help users navigate the crypto ecosystem.

Whether you're building a simple dashboard that updates in real-time or a complex application that reacts to onchain events, the architecture is the same: find the right queries, expose them via API, and build a compelling interface.

The most valuable onchain applications won't just display data—they'll help users interpret it and take action.

**Next: 16. Account Abstraction — Why It Matters for Wallet UX and Analysts**`
  },
  { 
    number: 16, 
    title: "Account Abstraction — Why It Matters for Wallet UX and Analysts", 
    pdfPath: "/Onchain Manifesto/16. Account Abstraction- Why It Matters for Wallet UX and Analysts.pdf",
    mdContent: `# 16. Account Abstraction — Why It Matters for Wallet UX and Analysts

Account Abstraction (AA) represents one of the most significant shifts in how users interact with blockchains since smart contracts themselves. For onchain analysts, it introduces a new paradigm for tracking user behavior, transaction patterns, and wallet activity.

This article explores what Account Abstraction means for analysts, what data it generates, and how to track this evolution as it unfolds across the ecosystem.

---

## 🧩 What Is Account Abstraction?

At its core, Account Abstraction reimagines blockchain accounts, blurring the line between:

- **EOAs (Externally Owned Accounts)**: Traditional user wallets controlled by private keys
- **Contract Accounts**: Smart contracts with programmable logic

With Account Abstraction (particularly ERC-4337), users interact with smart contract wallets that enable:

- **Social recovery**: Multiple ways to recover access
- **Batched transactions**: Multiple actions in one operation
- **Programmable security**: Custom rules for transactions
- **Sponsored gas**: Someone else can pay for transactions
- **Automatic actions**: Recurring payments, conditional transfers

---

## 📊 Why AA Matters for Analysts

For data analysts, AA creates both challenges and opportunities:

### Challenges

- **User identity fragmentation**: One user may control multiple smart contract wallets
- **Transaction attribution**: Who initiated an action vs. who executed it?
- **Gas sponsorship**: Separating user activity from sponsor costs
- **Logical vs. actual transactions**: UserOps vs. on-chain transactions

### Opportunities

- **Richer behavioral data**: Smart wallet configs reveal user preferences
- **Adoption metrics**: Track AA penetration across demographics
- **UX improvements**: Measure reduced friction in quantifiable ways
- **Paymaster economics**: Analyze gas sponsorship models and sustainability

---

## 🔍 Understanding the ERC-4337 Data Model

ERC-4337 is the standard implementation of Account Abstraction. It introduces new concepts in the data:

### Key Components

- **UserOperation**: The "intent" a user wants to execute
- **EntryPoint Contract**: A singleton that validates and executes UserOperations
- **Bundler**: An entity that packages multiple UserOperations into transactions
- **Paymaster**: An entity that can sponsor gas fees for UserOperations

### Core Tables in Dune

To analyze Account Abstraction activity, focus on these tables:

| Table | Description |
|-------|-------------|
| `erc4337_<chain>.UserOperation` | All user operations submitted |
| `erc4337_<chain>.AccountDeployed` | New smart account deployments |
| `erc4337_<chain>.Deposited` | Funds added to EntryPoint for gas |
| `erc4337_<chain>.StakeLocked` | Stake added by paymasters/factories |
| `erc4337_<chain>.UserOperationRevertReason` | Failed operations |

---

## 📈 Example AA Queries in SQL

Let's explore some essential queries for analyzing Account Abstraction.

### 1. Daily AA Activity by Chain

```sql
SELECT 
  date_trunc('day', block_time) AS day,
  blockchain,
  COUNT(*) AS user_ops,
  COUNT(DISTINCT sender) AS wallets
FROM erc4337_ethereum.UserOperation
WHERE block_time > now() - interval '30 days'
GROUP BY 1, 2
ORDER BY 1, 2
```

### 2. Paymaster Activity Analysis

```sql
SELECT 
  paymaster,
  COUNT(*) AS sponsored_ops,
  COUNT(DISTINCT sender) AS unique_users,
  SUM(actualGasCost) / 1e18 AS total_eth_spent,
  AVG(actualGasCost) / 1e18 AS avg_gas_cost
FROM erc4337_ethereum.UserOperation
WHERE paymaster != '0x0000000000000000000000000000000000000000'
  AND block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 3 DESC
```

### 3. Smart Wallet Factory Adoption

```sql
SELECT 
  factory,
  COUNT(*) AS wallets_created,
  MIN(block_time) AS first_deployment,
  MAX(block_time) AS latest_deployment
FROM erc4337_ethereum.AccountDeployed
GROUP BY 1
ORDER BY 2 DESC
```

### 4. Gas Savings Analysis

```sql
SELECT 
  date_trunc('day', block_time) AS day,
  AVG(CASE 
    WHEN paymaster = '0x0000000000000000000000000000000000000000' THEN actualGasCost 
    ELSE 0 
  END) / 1e18 AS avg_user_paid_gas,
  AVG(CASE 
    WHEN paymaster != '0x0000000000000000000000000000000000000000' THEN actualGasCost 
    ELSE NULL 
  END) / 1e18 AS avg_sponsored_gas,
  COUNT(DISTINCT CASE WHEN paymaster != '0x0000000000000000000000000000000000000000' THEN sender END) / 
    COUNT(DISTINCT sender) AS pct_users_with_sponsorship
FROM erc4337_ethereum.UserOperation
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
```

---

## 🔎 Wallet Classification in the AA Era

With Account Abstraction, wallet classification becomes more complex but more revealing:

### Wallet Factory Analysis

```sql
WITH wallet_deployments AS (
  SELECT 
    sender AS wallet,
    factory
  FROM erc4337_ethereum.AccountDeployed
)

SELECT 
  CASE 
    WHEN factory LIKE '%safe%' THEN 'Safe'
    WHEN factory LIKE '%biconomy%' THEN 'Biconomy'
    WHEN factory LIKE '%zerodev%' THEN 'ZeroDev'
    ELSE 'Other'
  END AS wallet_provider,
  COUNT(DISTINCT wallet) AS wallets
FROM wallet_deployments
GROUP BY 1
ORDER BY 2 DESC
```

### User Behavior Patterns

```sql
WITH wallet_activity AS (
  SELECT 
    sender,
    COUNT(*) AS op_count,
    COUNT(DISTINCT date_trunc('day', block_time)) AS active_days,
    MIN(block_time) AS first_op,
    MAX(block_time) AS last_op,
    SUM(CASE WHEN paymaster != '0x0000000000000000000000000000000000000000' THEN 1 ELSE 0 END) / 
      COUNT(*) AS sponsored_op_ratio
  FROM erc4337_ethereum.UserOperation
  WHERE block_time > now() - interval '90 days'
  GROUP BY 1
)

SELECT 
  CASE 
    WHEN op_count < 5 THEN 'Low activity'
    WHEN op_count < 20 THEN 'Medium activity'
    ELSE 'High activity'
  END AS activity_tier,
  CASE 
    WHEN sponsored_op_ratio > 0.8 THEN 'Mostly sponsored'
    WHEN sponsored_op_ratio > 0.2 THEN 'Mixed payment'
    ELSE 'Self-paying'
  END AS payment_pattern,
  COUNT(*) AS wallet_count,
  AVG(active_days) AS avg_active_days,
  AVG(last_op - first_op) AS avg_lifetime_days
FROM wallet_activity
WHERE datediff('day', first_op, now()) >= 7
GROUP BY 1, 2
ORDER BY 3 DESC
```

---

## 🧠 Advanced AA Analytics: The Aggregated View

To get a complete picture of AA activity across all chains, use Spellbook's unified tables:

```sql
SELECT 
  blockchain,
  COUNT(*) AS user_ops,
  COUNT(DISTINCT sender) AS unique_wallets,
  COUNT(DISTINCT block_date) AS active_days,
  SUM(op_fee_usd) AS total_fees_usd
FROM account_abstraction_erc4337.userops
WHERE block_date > now() - interval '30 days'
GROUP BY 1
ORDER BY 2 DESC
```

This unified view helps you track:
- Cross-chain AA adoption rates
- Relative activity by blockchain
- Standardized metrics regardless of blockchain

---

## 📊 Building an AA Dashboard

A comprehensive Account Abstraction dashboard should include:

1. **Adoption Metrics**:
   - Daily UserOps vs. traditional transactions
   - New AA wallets created
   - Percentage of transactions using AA

2. **Wallet Provider Analysis**:
   - Market share by factory
   - Retention rates by wallet provider
   - Features used by wallet type

3. **Paymaster Economics**:
   - Top paymasters by operations
   - Paymaster costs and sustainability
   - User acquisition costs via gas sponsorship

4. **User Experience Metrics**:
   - Transaction failure rates
   - Gas savings compared to EOAs
   - Complexity of operations (batched actions)

---

## 🔮 The Future of Account Abstraction Analytics

As AA adoption grows, analysts will need to evolve their approaches:

- **Identity resolution**: Linking AA wallets to the same user
- **Cross-chain activity tracking**: Following users across L2s
- **Session keys analysis**: Temporary permissions and their usage
- **Intent vs. execution gap**: Measuring the delta between user intent and onchain settlement

Successful analysts in the AA era will:
1. Understand the technical stack (EntryPoints, Bundlers, Paymasters)
2. Track both low-level operations and high-level user intents
3. Develop new metrics focused on UX improvements
4. Create multi-dimensional user profiles based on wallet behavior

---

## 🏁 Conclusion: The New Frontier of Wallet Analytics

Account Abstraction represents a fundamental shift in how users interact with blockchains. For analysts, it's both a challenge and an opportunity—requiring new mental models, new queries, and new metrics.

By understanding the AA data structure and building the right analytics, you can track the evolution of crypto UX in real-time. This isn't just about new tables or events—it's about a new paradigm for what a "wallet" means in Web3.

As AA adoption grows, the analysts who master these new data patterns will have unprecedented insight into user behavior, business models, and the evolving blockchain UX landscape.

**Next: 17. ERC-4337 Aggregated Tables Across EVM Chains: Unified Analytics at Scale**`
  },
  { 
    number: 17, 
    title: "ERC-4337 Aggregated Tables Across EVM Chains: Unified Analytics at Scale", 
    pdfPath: "/Onchain Manifesto/17. ERC-4337 Aggregated Tables Across EVM Chains- Unified Analytics at Scale.pdf",
    mdContent: `# 17. ERC-4337 Aggregated Tables Across EVM Chains: Unified Analytics at Scale

The ERC-4337 Account Abstraction standard is being deployed across multiple EVM chains—from Ethereum to L2s like Arbitrum and Optimism to sidechains like Polygon. This creates a significant challenge for analysts: how do you track consistent metrics across this fragmented landscape?

In this article, we'll explore how to use Dune's unified Account Abstraction tables to analyze smart wallet adoption, user behavior, and economic patterns across all EVM chains simultaneously. The future of wallet analytics is cross-chain, and these aggregated tables are your map to this new territory.

---

## 🌐 The Challenge of Cross-Chain AA Analytics

Smart wallets are inherently multi-chain, with users deploying contract wallets across different networks for different purposes:

- Ethereum L1 for high-value transactions
- Arbitrum or Optimism for regular DeFi activity
- Polygon or Base for frequent, low-cost operations

Before unified tables, this created significant analytical challenges:

- Different table names across chains
- Inconsistent field formats or units
- Missing chains in your analysis
- Manual aggregation requirements
- No standardized metrics

---

## 🧩 Enter the Unified ERC-4337 Tables

Dune's Spellbook now includes aggregated tables that standardize Account Abstraction data across all supported EVM chains:

```
account_abstraction_erc4337.userops
account_abstraction_erc4337.wallet_deployments
account_abstraction_erc4337.bundler_activity
account_abstraction_erc4337.paymaster_operations
```

These tables:
- Maintain consistent column naming
- Normalize values (like gas costs to USD)
- Standardize wallet identification
- Include a `blockchain` field for filtering
- Cover all supported chains in one query

---

## 📊 Cross-Chain Queries in Action

Let's explore some powerful analytics enabled by these unified tables.

### 1. Total ERC-4337 Activity by Chain

```sql
SELECT 
  blockchain,
  COUNT(*) AS userops,
  COUNT(DISTINCT tx_hash) AS transactions,
  COUNT(DISTINCT sender) AS wallets,
  SUM(op_fee_usd) AS total_fees_usd
FROM account_abstraction_erc4337.userops
WHERE block_date > now() - interval '30 days'
GROUP BY 1
ORDER BY 2 DESC
```

This single query gives you a complete picture of where AA activity is concentrated, which would previously require multiple separate queries.

### 2. Daily Adoption Trends Across Chains

```sql
SELECT 
  block_date AS day,
  blockchain,
  COUNT(DISTINCT sender) AS active_wallets,
  COUNT(*) AS userops
FROM account_abstraction_erc4337.userops
WHERE block_date > now() - interval '90 days'
GROUP BY 1, 2
ORDER BY 1, 2
```

Track the growth trajectory of AA adoption by chain over time to identify market shifts and emerging trends.

### 3. Cross-Chain User Analysis

```sql
WITH wallet_chain_activity AS (
  SELECT
    sender,
    COUNT(DISTINCT blockchain) AS chains_used
  FROM account_abstraction_erc4337.userops
  WHERE block_date > now() - interval '60 days'
  GROUP BY 1
)

SELECT
  chains_used,
  COUNT(DISTINCT sender) AS wallet_count,
  COUNT(DISTINCT sender) / SUM(COUNT(DISTINCT sender)) OVER () AS percentage
FROM wallet_chain_activity
GROUP BY 1
ORDER BY 1
```

This query reveals what percentage of AA users operate across multiple chains, giving insight into cross-chain behavior patterns.

### 4. Bundler Market Share Analysis

```sql
SELECT
  blockchain,
  bundler,
  COUNT(*) AS userops_processed,
  COUNT(DISTINCT sender) AS wallets_served,
  SUM(op_fee_usd) AS total_fees_usd,
  COUNT(*) / SUM(COUNT(*)) OVER (PARTITION BY blockchain) AS market_share
FROM account_abstraction_erc4337.bundler_activity
WHERE block_date > now() - interval '30 days'
GROUP BY 1, 2
ORDER BY 1, 6 DESC
```

Track which bundlers dominate which chains and how market concentration varies by network.

---

## 🔬 Advanced Cross-Chain Analytics

### 5. Wallet Deployment Trends by Factory

```sql
SELECT
  block_date AS day,
  CASE 
    WHEN factory LIKE '%safe%' THEN 'Safe'
    WHEN factory LIKE '%biconomy%' THEN 'Biconomy'
    WHEN factory LIKE '%zerodev%' THEN 'ZeroDev'
    ELSE 'Other'
  END AS wallet_provider,
  blockchain,
  COUNT(*) AS wallets_deployed
FROM account_abstraction_erc4337.wallet_deployments
WHERE block_date > now() - interval '90 days'
GROUP BY 1, 2, 3
ORDER BY 1, 4 DESC
```

This reveals which wallet providers are winning on which chains, with potential insights into regional or use-case preferences.

### 6. Gas Sponsorship Patterns

```sql
SELECT
  blockchain,
  SUM(CASE WHEN paymaster != '0x0000000000000000000000000000000000000000' THEN 1 ELSE 0 END) AS sponsored_ops,
  COUNT(*) AS total_ops,
  SUM(CASE WHEN paymaster != '0x0000000000000000000000000000000000000000' THEN 1 ELSE 0 END) / 
    COUNT(*)::float AS sponsored_ratio,
  SUM(CASE WHEN paymaster != '0x0000000000000000000000000000000000000000' THEN op_fee_usd ELSE 0 END) AS sponsored_fees_usd
FROM account_abstraction_erc4337.userops
WHERE block_date > now() - interval '30 days'
GROUP BY 1
ORDER BY 4 DESC
```

Different chains show different patterns of gas sponsorship, revealing where paymasters are most active.

### 7. Cross-Chain User Journey

```sql
WITH user_first_chain AS (
  SELECT
    sender,
    first_value(blockchain) OVER (
      PARTITION BY sender 
      ORDER BY block_time 
      ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
    ) AS first_chain
  FROM account_abstraction_erc4337.userops
),

user_subsequent_chains AS (
  SELECT
    u.sender,
    u.blockchain,
    f.first_chain
  FROM account_abstraction_erc4337.userops u
  JOIN user_first_chain f ON u.sender = f.sender
  WHERE u.blockchain != f.first_chain
  GROUP BY 1, 2, 3
)

SELECT
  first_chain AS onboarding_chain,
  blockchain AS expansion_chain,
  COUNT(DISTINCT sender) AS users_expanded
FROM user_subsequent_chains
GROUP BY 1, 2
ORDER BY 1, 3 DESC
```

This complex query tracks which chains users start on and where they expand to, revealing onboarding and migration patterns.

---

## 📈 Building a Comprehensive Cross-Chain AA Dashboard

A complete Account Abstraction dashboard using unified tables should include:

1. **Chain Comparison Panel**
   - Active wallets by chain
   - UserOps per wallet by chain
   - Fee distribution across chains

2. **User Migration Flows**
   - First chain vs. most active chain
   - Chain usage over time per cohort
   - Shared vs. chain-specific wallet addresses

3. **Wallet Provider Analysis**
   - Factory market share by chain
   - Deployment costs across chains
   - User retention by provider and chain

4. **Paymaster Economics**
   - Sponsorship rates by chain
   - Cost per acquired user
   - Paymaster sustainability metrics

5. **Meta Bundler Analytics**
   - Market concentration by chain
   - Pricing differences across chains
   - UserOp success rates by bundler

---

## 🧪 Practical Applications of Cross-Chain AA Analytics

### For Wallet Providers

- Identify which chains have the highest user retention
- Optimize deployment costs across networks
- Track feature usage by chain

### For Paymasters

- Calculate user acquisition costs by chain
- Identify optimal sponsorship strategies
- Project runway based on current costs

### For Dapp Developers

- Understand which chains have the most engaged AA users
- Analyze transaction complexity across networks
- Identify integration opportunities based on wallet popularity

### For Investors

- Track nascent wallet providers gaining traction
- Identify emerging patterns in user behavior
- Evaluate market share shifts among infrastructure providers

---

## 🚀 Key Metrics to Track

When building your cross-chain AA analytics framework, focus on these key metrics:

1. **Growth Metrics**
   - New wallets deployed per day by chain
   - UserOps per active wallet (engagement)
   - Retention: wallets active after 7/30/90 days

2. **Economic Metrics**
   - Average operation cost by chain
   - Sponsored vs. self-paid operation ratio
   - Cost savings compared to EOA transactions

3. **Technical Metrics**
   - UserOp success rates by chain
   - Operation complexity (calldata size, actions per op)
   - Bundler performance and reliability

4. **User Behavior Metrics**
   - Multi-chain usage patterns
   - Operation frequency distribution
   - Wallet feature utilization

---

## 🧠 Future of Cross-Chain AA Analytics

As ERC-4337 adoption grows, the analytics will evolve to include:

- **Intent vs. Execution Analytics**: Measuring the gap between user instructions and onchain settlement
- **Gas Market Dynamics**: How bundlers optimize across multiple chains
- **Session Key Usage Patterns**: Analyzing delegation and permissions across chains
- **Wallet Social Graphs**: Mapping connections between contract wallets and their controllers
- **ZK-Enabled Privacy Features**: Balancing analytics with emerging privacy solutions

The unified tables will continue to expand to include these new dimensions, allowing analysts to stay at the forefront of the Account Abstraction revolution.

---

## 🏁 Conclusion: A New Era of Wallet Intelligence

The unified ERC-4337 tables represent a quantum leap in our ability to understand smart wallet adoption and usage patterns. Instead of piecing together fragmented data across chains, analysts can now build comprehensive views of the entire ecosystem with single queries.

This cross-chain visibility is essential for understanding the true impact of Account Abstraction, as users increasingly operate across multiple networks based on their specific needs.

By mastering these unified tables, you'll develop insights that would be impossible to discover through chain-by-chain analysis, positioning yourself at the forefront of the next generation of blockchain intelligence.

**Next: 18. Why the Future Belongs to Onchain Analysts**`
  },
  { 
    number: 18, 
    title: "Why the Future Belongs to Onchain Analysts", 
    pdfPath: "/Onchain Manifesto/18. Why the Future Belongs to Onchain Analysts.pdf",
    mdContent: `# 18. Why the Future Belongs to Onchain Analysts

Throughout this series, we've explored the technical foundations, analytical approaches, and powerful tools of the onchain data ecosystem. But we've only scratched the surface of what's possible.

In this final chapter, we'll look ahead to the future of onchain analytics and why analysts who master this domain will play a pivotal role in shaping the next evolution of the decentralized economy.

---

## 🔮 The Broadening Data Horizon

The scope of onchain data is expanding exponentially:

### Multi-Chain Reality

From EVM chains to Cosmos, Solana, and emerging L2 ecosystems, analysts now need to track activity across an increasingly fragmented landscape.

### Real-World Assets

As real estate, securities, carbon credits, and other traditional assets move onchain, the data becomes more valuable beyond crypto-native applications.

### Identity and Reputation

Zero-knowledge proofs, verifiable credentials, and on-chain identity solutions create new dimensions of data to analyze.

### AI Integration

Large language models and machine learning are beginning to parse blockchain data, enabling natural language interfaces to complex analytics.

---

## 💡 Emerging Analytics Use Cases

The applications of onchain analytics are evolving far beyond trading:

### 1. Governance Intelligence

As DAOs and protocols mature, there's growing demand for:
- Voter participation and delegate analysis
- Proposal impact simulation
- Treasury management optimization
- Stakeholder alignment metrics

### 2. Risk Management

Traditional finance is integrating crypto exposure, requiring:
- Cross-collateral risk modeling
- Counterparty exposure analytics
- Contagion pathway mapping
- Compliance and transaction monitoring

### 3. Market Structure Analysis

Understanding the evolving dynamics of decentralized markets:
- Liquidation cascades and system stress testing
- MEV impact on price formation
- Liquidity fragmentation measurement
- Cross-chain arbitrage efficiency

### 4. Real-World Integration

As blockchain technology bridges to traditional systems:
- Supply chain verification analytics
- Carbon credit retirement validation
- Securities settlement optimization
- Payment flows and remittance tracking

---

## 🛠️ The Evolving Toolkit

The analyst's toolkit continues to expand:

### From SQL to AI Agents

- Natural language interfaces to blockchain data
- AI-assisted anomaly detection
- Automated pattern recognition
- Query generation from conversational prompts

### Decentralized Computation

- Zero-knowledge proofs for private analytics
- Decentralized data warehousing
- Trustless validation of analytical results
- Cross-chain indexing protocols

### Standardization Efforts

- Universal data schemas across chains
- Common metrics definitions
- Interoperable dashboard frameworks
- Cross-platform identity resolution

---

## 🧩 From Analyst to Builder

The line between analyst and builder is blurring:

### Analytics as Infrastructure

- Query APIs powering applications
- Real-time monitoring systems
- Algorithmic governance systems
- Data DAOs and decentralized analytics

### Democratized Insights

- On-chain dashboards as public goods
- Education-focused visualization
- Community-maintained data models
- Open analytics challenges and bounties

---

## 🔭 Career Opportunities in Onchain Analytics

The demand for skilled analysts continues to grow across sectors:

### Protocol Teams

- Core metrics definition and monitoring
- User behavior analysis
- Economic parameter optimization
- Competitor and market analysis

### Investment Firms

- Due diligence automation
- Alpha generation from on-chain signals
- Portfolio monitoring and risk management
- Thematic research and trend identification

### DAOs and Communities

- Treasury management dashboards
- Contributor activity tracking
- Voting power and delegation analysis
- Community health metrics

### Traditional Enterprises

- Blockchain integration analytics
- Compliance and risk monitoring
- Customer behavior insights
- Supply chain verification

---

## 📋 Skills of the Future Onchain Analyst

To thrive in this evolving landscape, focus on developing:

### Technical Foundations

- Multi-chain data structures
- Advanced SQL and data modeling
- Statistical analysis and data science
- API integration and automation

### Domain Expertise

- Economic mechanism design
- DeFi protocol architecture
- Governance systems
- Zero-knowledge cryptography

### Communication Skills

- Data storytelling and visualization
- Technical writing and documentation
- Community engagement
- Educational content creation

### Ethical Understanding

- Privacy considerations
- Responsible disclosure
- Sybil attack detection
- Market manipulation awareness

---

## 🔍 The Path Forward

For analysts looking to advance in this field:

### 1. Build in Public

- Publish dashboards on Dune or Flipside
- Share insights on Twitter/X and research platforms
- Contribute to Spellbook and open data models
- Participate in analytics DAOs and communities

### 2. Specialize Strategically

- Focus on emerging areas like Account Abstraction
- Develop cross-chain analysis frameworks
- Pioneer new metrics for nascent protocols
- Bridge traditional finance analytics to DeFi

### 3. Teach Others

- Write tutorials and educational content
- Host workshops and study groups
- Mentor newcomers to the space
- Translate complex concepts for broader audiences

### 4. Collaborate Across Disciplines

- Partner with smart contract developers
- Work with economists on mechanism design
- Consult with governance specialists
- Engage with privacy researchers

---

## 🧠 Final Thoughts: The Renaissance Analyst

The onchain analyst isn't just a technical role—it's a renaissance position at the intersection of technology, economics, governance, and community.

In a world where trusted third parties have traditionally been the arbiters of truth in financial systems, onchain analysts are pioneering a new approach: trust through transparency.

By surfacing insights from public ledgers, creating standardized metrics, and building open tools, these analysts are establishing a new paradigm for how we understand economic activity.

The most impactful work in this field won't just be about tracking numbers—it will be about making the complex accessible, the opaque transparent, and the technical practical.

The future belongs to onchain analysts not because they can query databases, but because they can translate the raw reality of blockchain data into actionable intelligence that helps shape the direction of the decentralized economy.

---

## 📚 Where to Go Next

As you continue your journey:

- **Join communities** like Dune's Discord or MetricsDAO
- **Follow thought leaders** in blockchain analytics
- **Contribute to open source** data models and tools
- **Apply your skills** to real-world problems
- **Share what you learn** with others entering the field

---

The transparent economy is still in its earliest days. The queries you write, the metrics you standardize, and the insights you surface will help shape its evolution.

This isn't just about analyzing a new kind of data—it's about developing a new way of seeing the world.

The ledger is open. The data is waiting. The future is transparent.

Now go build it.

**End of Series**`
  }
]
