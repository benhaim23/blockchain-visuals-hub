 # 12. Useful Metrics Every Analyst Should Track

In the ocean of onchain data, metrics are your compass.

But with thousands of contracts, wallets, and token flows, where do you start?

This article compiles essential metrics that every onchain analyst should have in their toolbox—metrics that tell you whether a protocol is growing, if liquidity is sticky, how users behave, and when risk is emerging.

Think of this as your cheat sheet for DeFi, NFT, DAO, and token analytics.

---

## 🧠 Categories of Onchain Metrics

Useful metrics typically fall into a few core buckets:

- **Activity Metrics** — how many users, how many transactions
- **Financial Metrics** — volume, fees, TVL, rewards
- **Behavioral Metrics** — retention, whales vs retail, time between actions
- **Security & Risk Metrics** — liquidations, MEV, protocol outflows
- **Governance & DAO Metrics** — proposals, voter participation, treasury

Let’s break them down.

---

## 📊 Core Metrics to Know

### 1. Daily Active Users (DAU)
```sql
sql

SELECT 
  DATE_TRUNC('day', block_time) AS day,
  COUNT(DISTINCT sender) AS active_users
FROM ethereum.transactions
WHERE to = '<protocol_contract>'
GROUP BY 1
```

Track how many unique wallets interact daily. Use `sender` for actions.

------

### 2. Total Value Locked (TVL)

You’ll usually need:

- Protocol-specific pool/reserve data
- Token balances
- Price feeds (e.g. `prices.usd`)

Example (for Uniswap):

```sql
sql

SELECT 
  DATE_TRUNC('day', day) AS day,
  SUM(liquidity_usd) AS tvl
FROM spellbook.uniswap_v3.pool_day_data
GROUP BY 1
```

------

### 3. Swap / Trade Volume

Key for DEXs, NFT marketplaces, and lending repayments.

```sql
sql

SELECT 
  DATE_TRUNC('day', block_time) AS day,
  SUM(amount_usd) AS volume
FROM spellbook.uniswap_v3.swaps
GROUP BY 1
```

------

### 4. Fees Collected

Good proxy for protocol revenue or LP earnings.

```sql
sql

SELECT 
  DATE_TRUNC('day', block_time) AS day,
  SUM(fee_amount_usd) AS fees
FROM spellbook.uniswap_v3.swaps
GROUP BY 1
```

------

### 5. Retention and Repeat Usage

One of the hardest—and most valuable—analyses.

```sql
sql

WITH first_seen AS (
  SELECT sender, MIN(DATE_TRUNC('day', block_time)) AS first_day
  FROM spellbook.uniswap_v3.swaps
  GROUP BY sender
),
daily_activity AS (
  SELECT sender, DATE_TRUNC('day', block_time) AS day
  FROM spellbook.uniswap_v3.swaps
)
SELECT 
  da.day,
  COUNT(DISTINCT da.sender) FILTER (WHERE fs.first_day = da.day) AS new_users,
  COUNT(DISTINCT da.sender) FILTER (WHERE fs.first_day < da.day) AS returning_users
FROM daily_activity da
JOIN first_seen fs ON da.sender = fs.sender
GROUP BY 1
```

------

### 6. Whale Behavior

Slice wallet cohorts by size or influence.

```sql
sql

SELECT 
  sender,
  SUM(amount_usd) AS total_volume
FROM spellbook.uniswap_v3.swaps
GROUP BY 1
ORDER BY total_volume DESC
LIMIT 100
```

Label wallets when possible.

------

### 7. Token Emissions & Inflation

Check protocols that mint or distribute tokens.

```sql
sql

SELECT 
  DATE_TRUNC('day', block_time) AS day,
  SUM(amount) / 1e18 AS tokens_minted
FROM erc20."ERC20_evt_Transfer"
WHERE from = '0x0000000000000000000000000000000000000000'
AND contract_address = '<token>'
GROUP BY 1
```

------

### 8. Governance Participation

For DAOs using onchain voting contracts (like Governor Bravo):

```sql
sql

SELECT 
  proposal_id,
  COUNT(DISTINCT voter) AS voters,
  SUM(votes) AS total_votes
FROM governor."GovernorBravo_evt_VoteCast"
GROUP BY 1
```

Also useful: proposal pass/fail rates, quorum, wallet types voting.

------

### 9. MEV Activity

Detect MEV by sandwich patterns or internal contract calls.

(Advanced queries — typically require tx decoding and labeling.)

You can also check:

- High gas fees for low-value swaps
- Multiple swaps in one block targeting same pool
- Flashloan contract patterns

------

### 10. Liquidation Events

Lending protocols emit events when users are liquidated.

```sql
sql

SELECT 
  DATE_TRUNC('day', evt_block_time) AS day,
  COUNT(*) AS liquidations,
  SUM(liquidated_collateral_usd) AS total_liquidated
FROM aave_v3_ethereum."Pool_evt_LiquidationCall"
GROUP BY 1
```

Useful to assess protocol health and user risk.

------

## 🛠️ Bonus: Infra Metrics

- 🏗️ `gas_used` per transaction or per user
- 🧱 Contract deployment count over time
- 🌍 Multichain comparisons using Spellbook `blockchain` field
- 💸 Transfers to CEX wallets (proxy for sell pressure)

------

## 💡 A Mindset, Not Just a List

These metrics aren’t just for dashboards—they’re for asking better questions:

- Why did volume spike this week?
- Are new users staying or churning?
- Who is driving fees? Are they sticky?
- Where is the protocol most profitable?
- Is this DAO active or stagnating?

Great analysts don’t just track metrics. They find meaning in them.

------

## 📦 Tools to Help

- `prices.usd` – Get token prices for USD normalization
- `labels` – Wallet labeling and entity clustering
- `ethereum.logs` / decoded events – raw source of most protocol actions
- `spellbook.*` – Dune community-maintained standardized tables

------

## 🚀 Final Thought

Memorizing metrics won’t make you a great analyst. But understanding how and why they move is what separates dashboards from insight.

As you explore dashboards, queries, and protocols—start collecting your favorite metrics and building your own framework.

In the next article, we’ll dive into a classic one: Coin Days Destroyed and what it tells us about Bitcoin holder behavior.

**Next: 13. BTC Coin Days Destroyed — What HODLers Tell Us About the Market**