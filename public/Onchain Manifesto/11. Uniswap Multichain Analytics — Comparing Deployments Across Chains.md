# 11. Uniswap Multichain Analytics — Comparing Deployments Across Chains

Uniswap started on Ethereum, but it didn’t stay there.

Today, the protocol is deployed across multiple EVM chains—Arbitrum, Optimism, Polygon, Base, BNB Chain, and more. Each chain has different users, liquidity conditions, gas costs, and activity levels.

As an onchain analyst, comparing these deployments side by side is a powerful exercise. It tells us where growth is happening, where liquidity is sticky, and how Uniswap adapts to each ecosystem.

In this article, we’ll show how to do cross-chain Uniswap analysis using Dune.

---

## 🤯 Why Multichain Matters

- Users are no longer Ethereum-only
- L2s and alt-L1s offer faster, cheaper trading
- Uniswap is the canonical DEX, but behavior varies by chain

You need to ask:

- Where is volume concentrated?
- Which chains attract the most LPs?
- How do fee revenues compare?
- Are the same wallets active across deployments?

Answering these questions makes you a stronger DeFi analyst.

---

## 📊 Comparing Volume Across Chains

Dune Spellbook provides **standardized tables** across chains. For Uniswap V3, you can use:

```sql
sql

spellbook.uniswap_v3.swaps
```

This table combines swaps from all supported chains into one schema with a `blockchain` field.

### Example: Daily Volume per Chain

```sql
sql

SELECT 
  blockchain,
  DATE_TRUNC('day', block_time) AS day,
  SUM(amount_usd) AS daily_volume
FROM spellbook.uniswap_v3.swaps
WHERE block_time > NOW() - INTERVAL '30 days'
GROUP BY 1, 2
ORDER BY 2, 1
```

Visualize this as a line chart grouped by `blockchain`.

📈 You’ll quickly see trends—who's growing, who’s stagnating.

------

## 💸 LP Fee Revenue by Chain

Want to see where LPs are earning the most?

Just query the `fee_amount_usd` field:

```sql
sql

SELECT 
  blockchain,
  SUM(fee_amount_usd) AS total_fees
FROM spellbook.uniswap_v3.swaps
WHERE block_time > NOW() - INTERVAL '30 days'
GROUP BY 1
ORDER BY total_fees DESC
```

You may be surprised—some chains punch above their weight.

------

## 🧠 Analyzing User Behavior

Do wallets act the same across chains?

Use:

```sql
sql

SELECT 
  blockchain,
  COUNT(DISTINCT sender) AS unique_swappers
FROM spellbook.uniswap_v3.swaps
WHERE block_time > NOW() - INTERVAL '7 days'
GROUP BY 1
ORDER BY unique_swappers DESC
```

Or track individual wallets:

```sql
sql

SELECT 
  sender,
  COUNT(DISTINCT blockchain) AS chains_active
FROM spellbook.uniswap_v3.swaps
GROUP BY 1
HAVING chains_active > 1
```

This shows cross-chain Uniswap power users.

------

## 🧰 Dashboard Design Ideas

Here’s what you can include in a multichain Uniswap dashboard:

- Daily volume by chain
- Fee revenue per chain
- LP wallet overlap across chains
- Top pairs per chain
- Average trade size comparison
- TVL (using `uniswap_v3.pool_day_data`)
- Protocol revenue (e.g. 0.05% of fees if fee switch is on)

Bonus: Add dropdown filters by chain, pair, or token.

------

## 🧱 Infrastructure Tips

Use these tables from Spellbook:

- `spellbook.uniswap_v3.swaps`
- `spellbook.uniswap_v3.pool_day_data`
- `spellbook.uniswap_v3.liquidity_positions`
- `prices.usd` (for USD conversions)

Remember:

✅ Always filter by `block_time`
 ✅ Use `blockchain` in the GROUP BY
 ✅ Join with price tables when needed

------

## 🎯 Why It Matters

Multichain analytics is no longer optional.

Uniswap’s future (and most protocols’) is cross-chain:

- LPs chase yield across ecosystems
- Protocols deploy governance experiments by chain
- Users follow gas fees, incentives, and latency

Understanding these differences lets you:

- Advise protocols on deployment strategies
- Surface which chains drive core usage
- Detect liquidity fragmentation risks
- Compare user retention across environments

It’s not just about volume—it’s about context.

------

## 🚀 Final Thought

Uniswap multichain analytics puts your SQL to the test—but the insights are worth it.

When you can analyze a protocol across 6+ ecosystems and surface trends in volume, usage, and earnings—you’ve crossed the line from dashboard builder to full-stack DeFi analyst.

**Next: 12. Useful Metrics Every Analyst Should Track**