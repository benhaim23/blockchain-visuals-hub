
import { ManifestoChapter } from '../types';

export const chapter13: ManifestoChapter = { 
  number: 13, 
  title: "Bitcoin's Coin Days Destroyed — Building Powerful Time-Weighted Metrics", 
  pdfPath: "/Onchain Manifesto/13. Bitcoin's Coin Days Destroyed — Building Powerful Time-Weighted Metrics.pdf",
  mdContent: `# 13. Bitcoin's Coin Days Destroyed — Building Powerful Time-Weighted Metrics

When Satoshi Nakamoto released Bitcoin, they didn't just create a new asset—they created the first fully transparent financial system. Every transaction, from the genesis block to the present, is recorded immutably.

But raw transactions only tell part of the story. To understand Bitcoin holder behavior, analysts developed **Coin Days Destroyed (CDD)**—a powerful time-weighted metric that reveals when long-term holders move their coins.

This article explains how CDD works, why it matters, and how to calculate it using onchain data.

---

## 🧠 Understanding Coin Days Destroyed

**Coin days** is a simple concept: 1 Bitcoin held for 1 day = 1 coin day accumulated. It combines **amount** and **holding time** into a single measurement.

When those coins move, the accumulated coin days are "destroyed."

**The formula**:
```
Coin Days Destroyed = Coins moved × Days since they last moved
```

This gives more weight to the movement of old coins than to coins that move frequently.

---

## 📊 Why CDD Matters

CDD helps differentiate between different types of on-chain activity:

- **Low CDD, High TX Volume**: Frequent trading of recently moved coins (often speculative)
- **High CDD, Lower TX Volume**: Long-term holders liquidating positions (often significant)

Historically, major CDD spikes have preceded important market moves, as they indicate changes in conviction from Bitcoin's "strong hands."

---

## 🛠️ Calculating CDD on Dune

Bitcoin uses a UTXO (Unspent Transaction Output) model, where each transaction consumes previous outputs and creates new ones.

To calculate CDD, we need to:
1. Identify when each UTXO was created
2. Track when it was spent
3. Calculate the holding time
4. Multiply by the amount

Here's a simplified Dune SQL implementation:

```sql
WITH spent_outputs AS (
  -- Join inputs (spends) with outputs (creations)
  SELECT
    i.block_time AS spent_time,
    o.block_time AS created_time,
    o.value / 1e8 AS btc_amount,
    DATE_DIFF('day', o.block_time, i.block_time) AS days_held
  FROM bitcoin.inputs i
  JOIN bitcoin.outputs o
    ON i.spent_tx_hash = o.tx_hash
    AND i.spent_index = o.index
  WHERE i.block_time >= DATE_TRUNC('day', NOW() - INTERVAL '365 days')
)

SELECT
  DATE_TRUNC('day', spent_time) AS day,
  SUM(btc_amount * days_held) AS coin_days_destroyed
FROM spent_outputs
GROUP BY 1
ORDER BY 1
```

---

## 📉 Analyzing CDD Patterns

Once you've calculated CDD, look for these patterns:

**1. Major Spikes**
- Sudden large CDD spikes often indicate long-dormant coins moving
- These can signal major market participants changing positions

**2. Consistent Elevated Levels**
- Sustained high CDD suggests persistent distribution from long-term holders

**3. Declining CDD During Price Drops**
- If CDD remains low during price declines, long-term holders are likely not selling

**4. Dormancy Analysis**
- Calculate average dormancy: `Coin Days Destroyed / BTC Volume`
- Higher values mean older coins are moving on average

---

## 🔍 Examples From Bitcoin History

Historical analysis shows CDD's value:

**November 2017**: Major CDD spike as early holders sold into the bull market
**March 2020**: Panic selling during COVID crash showed in elevated CDD
**Late 2020**: Low CDD despite price appreciation suggested HODLing behavior
**May 2021**: High CDD as long-term holders took profits at $60k+

Each of these periods reveals how investor behavior changed with market conditions—visible through the CDD lens.

---

## 🧪 Beyond Bitcoin: Adapting Time-Weighted Metrics

You can apply similar time-weighting to other blockchain metrics:

**Token Days Destroyed (TDD)**
- Apply the same concept to ERC20 tokens to track holder behavior

**LP Position Duration**
- Measure "LP Days Destroyed" when liquidity providers exit positions
- Helps distinguish between long-term and mercenary LPs

**Governance Token Dormancy**
- Track how long governance tokens sit in wallets before being used to vote
- Reveals engagement patterns in DAOs

---

## 📚 Implementation Tips

When building your own CDD or time-weighted metrics:

✅ **Handle Chain Reorganizations**
- Rarely, the Bitcoin chain can reorganize
- Use confirmed blocks for accuracy

✅ **Manage Computational Load**
- CDD calculation is intensive for full chain history
- Start with recent time periods and expand gradually

✅ **Normalize When Comparing**
- Use "CDD ÷ Circulating Supply" to compare across time periods
- This accounts for Bitcoin's increasing supply over time

✅ **Account for Lost Coins**
- Very old UTXOs may be from lost wallets
- Consider probability models for truly dormant coins

---

## 🧠 The Power of Time-Weighted Analysis

CDD demonstrates why onchain analysis is so powerful—it combines **amount**, **time**, and **behavior** into insights you can't get from price alone.

By weighting transactions by their temporal significance, we can distinguish between:
- True HODLers vs. frequent traders
- Distribution phases vs. accumulation phases
- Organic growth vs. artificial activity

The blockchain doesn't just record transactions—it records investor conviction across time.

**Next: 14. Building an Onchain Alert System for MEV and Risk**
`
};
