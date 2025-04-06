
import { ManifestoChapter } from '../types';

export const chapter12: ManifestoChapter = { 
  number: 12, 
  title: "Useful Metrics Every Analyst Should Track", 
  pdfPath: "/Onchain Manifesto/12. Useful Metrics Every Analyst Should Track.pdf",
  mdContent: `# 12. Useful Metrics Every Analyst Should Track

In the ocean of onchain data, knowing which metrics to track separates signal from noise. This article covers the essential metrics that onchain analysts consistently find valuable across protocols and chains—metrics that reveal protocol health, user behavior, and emerging trends.

Think of this as your onchain dashboard starter kit.

---

## 🪄 Core Protocol Health Metrics

No matter what system you're analyzing, these fundamentals matter:

| Metric | Description | SQL Example |
| ------ | ----------- | ----------- |
| **Daily Active Users** | Unique wallets interacting per day | `COUNT(DISTINCT from_address)` |
| **Transaction Volume** | Raw count of actions taken | `COUNT(*)` or `SUM(amount)` |
| **Revenue** | Fees generated for the protocol | `SUM(fee_amount_usd)` |
| **Retention** | Return rate of users over time | Cohort analysis with CTEs |

For full protocol health, track these metrics on multiple timescales:
- Daily (to see immediate changes)
- Weekly (to smooth out day-of-week effects)
- Monthly (to see long-term trends)

---

## 📈 Growth & Adoption Metrics

To measure protocol adoption:

**New Users by Day**
```sql
SELECT 
  DATE_TRUNC('day', first_txn) AS day,
  COUNT(*) AS new_users
FROM (
  SELECT 
    from_address,
    MIN(block_time) AS first_txn
  FROM my_protocol.transactions
  GROUP BY 1
) first_txns
GROUP BY 1
ORDER BY 1
```

**User Growth Rate**
- Calculate MoM growth: `(Current Month Users - Previous Month Users) / Previous Month Users`
- This shows acceleration or deceleration in adoption

**Network Effects**
- Track transactions per user over time
- Rising transactions per user signals sticky product-market fit

---

## 💰 Economic Metrics

Every protocol has economic dimensions:

**TVL (Total Value Locked)**
- Track by asset type and chain
- Monitor deposit/withdrawal ratios for early warning signs

**Fee Revenue Distribution**
- Who captures value? Protocol treasury, token holders, or LPs?
- Calculate revenue to TVL ratio for capital efficiency

**Price Impact**
- For DEXs: average slippage by pool
- For lending: liquidation discounts

**Usage Intensity**
- Transaction amount distribution (% whales vs. retail)
- Average actions per user per month

---

## 🤖 User Behavior Metrics

Understanding who uses your protocol and how:

**Address Classification**
- % EOAs vs. smart contract wallets
- % known entities (exchanges, funds, DAOs)

**Session Analysis**
- Time between consecutive actions 
- Action sequencing patterns

**Whale Concentration**
- Top 10/100 users by volume/TVL
- Wallet diversification trends

**Cross-Protocol Users**
- Overlap with other protocols (e.g., Uniswap users who also use Aave)
- This reveals ecosystem positioning

---

## 🧪 Advanced Metrics

For deeper analysis:

**Predictive Indicators**
- Large outflows preceding price moves
- Liquidity concentration shifts

**Profitability Analysis**
- % of users in profit vs. loss (e.g., for LPs)
- Holding period returns by cohort

**MEV Exposure**
- Sandwich attack frequency
- MEV extracted as % of total volume

**Risk Ratios**
- Collateralization ratio distributions
- Distance to liquidation metrics

---

## 📊 Visualization Best Practices

How you present metrics matters:

✅ **Compare to benchmarks**
- Show your protocol vs. competitors
- Compare across chains for multi-chain protocols

✅ **Highlight anomalies**
- Mark governance events, token launches, hacks
- Correlate with external market events

✅ **Use appropriate time scales**
- Hourly for volatile metrics (like DEX volume)
- Weekly for smoother trends (like new users)

✅ **Normalize where needed**
- Per-block metrics for cross-chain comparisons
- Per-capita metrics for different-sized protocols

---

## 🏗️ Building a Comprehensive Dashboard

Start with these panels:

1. **Overview**: DAUs, Volume, Revenue, TVL
2. **User Growth**: New users, retention cohorts
3. **Economics**: Fee generation, revenue splits
4. **Behavioral**: Usage patterns, concentration metrics
5. **Risk**: Exposure metrics, volatility indicators

Remember to include:
- Clear definitions for each metric
- Data freshness indicators
- Source attribution for complex calculations

---

## 🧠 Final Thought: Metrics Tell Stories

The best onchain metrics don't just measure—they narrate.

They answer questions like:
- Is this protocol growing sustainably?
- Which user behaviors drive retention?
- Where is value being captured or leaked?

Combine quantitative rigor with narrative insight, and you'll transform raw onchain data into actionable intelligence.

**Next: 13. Bitcoin's Coin Days Destroyed — Building Powerful Time-Weighted Metrics**
`
};
