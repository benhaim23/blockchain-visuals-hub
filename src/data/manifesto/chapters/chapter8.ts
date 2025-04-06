
import { ManifestoChapter } from '../types';

export const chapter8: ManifestoChapter = { 
  number: 8, 
  title: "Lending Protocols — Risk, Liquidations, and User Behavior", 
  pdfPath: "/Onchain Manifesto/08. Lending Protocols — Risk, Liquidations, and User Behavior.pdf",
  mdContent: `# 08. Lending Protocols — Risk, Liquidations, and User Behavior

Lending protocols are the beating heart of DeFi. Billions in crypto assets are locked in platforms like Aave, Compound, and Morpho. Users borrow, lend, stake, and sometimes get liquidated—all onchain.

As an analyst, your job is to understand that flow: Where is risk accumulating? Who's overleveraged? What assets are being used as collateral, and how do positions evolve?

This article will walk through how to analyze lending markets using onchain data.

---

## 🧠 Core Concepts in Onchain Lending

Before we query anything, let's review the key primitives:

- **Deposit**: User supplies an asset to earn interest.
- **Borrow**: User takes a loan against their collateral.
- **Repay**: Borrower pays back a loan.
- **Withdraw**: Lender takes back their supplied assets.
- **Liquidation**: A borrower's position is forcibly closed if it becomes too risky.

Each of these actions emits an onchain event and is captured in Dune tables like:

- \`aave_v2.ethereum.Borrow\`, \`Repay\`, \`Deposit\`, \`Withdraw\`, \`LiquidationCall\`
- \`compound_v2.ethereum.market_event_*\`
- \`morpho_*\` for peer-to-peer lending

---

## 💸 Tracking Borrowing Activity

Let's start simple: How much is being borrowed over time?

\`\`\`sql
SELECT 
  DATE_TRUNC('day', evt_block_time) AS day,
  SUM(amount / 1e18) AS borrowed_eth
FROM aave_v2_ethereum.Borrow
WHERE evt_block_time > NOW() - INTERVAL '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

🧠 Tip: Always adjust for token decimals (1e18 is common for ETH-based tokens).

You can group by \`reserve\` to break it down by asset: WETH, USDC, DAI, etc.

------

## 🏦 Who Is Borrowing What?

\`\`\`sql
SELECT 
  borrower,
  reserve,
  COUNT(*) AS borrow_count,
  SUM(amount / 1e6) AS total_borrowed_usdc
FROM aave_v2_ethereum.Borrow
WHERE reserve = 'USDC'
  AND evt_block_time > NOW() - INTERVAL '7 days'
GROUP BY 1, 2
ORDER BY 4 DESC
\`\`\`

Use this to identify whales, frequent borrowers, or degens looping stablecoins.

------

## 🔥 Liquidation Analysis

Liquidations are where risk turns into action. Who is getting liquidated—and for how much?

\`\`\`sql
SELECT 
  DATE_TRUNC('day', evt_block_time) AS day,
  COUNT(*) AS liquidation_count,
  SUM(liquidated_amount / 1e18) AS total_liquidated
FROM aave_v2_ethereum.LiquidationCall
WHERE evt_block_time > NOW() - INTERVAL '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

Want to see **top liquidated wallets**?

\`\`\`sql
SELECT 
  user,
  SUM(liquidated_amount / 1e18) AS total_liquidated
FROM aave_v2_ethereum.LiquidationCall
GROUP BY 1
ORDER BY 2 DESC
LIMIT 20
\`\`\`

------

## 📉 Risk Monitoring

To analyze **at-risk positions**, you'll often want to join:

- Deposits
- Borrows
- Current token prices

Unfortunately, these aren't always stored as "position snapshots"—you must **reconstruct them** from event history or query protocols with onchain read functions (via APIs or decoded contracts).

🧠 Pro tip: Some dashboards or Dune Spellbook models pre-aggregate these views.

------

## 📊 Useful Metrics

| Metric                   | Why It Matters                                     |
| ------------------------ | -------------------------------------------------- |
| Borrow Utilization       | How much of supplied assets are currently borrowed |
| Collateral Ratio         | Used to identify at-risk positions                 |
| Liquidation Volume       | Proxy for market volatility or stress              |
| Borrowed Asset Breakdown | Stable vs volatile borrow demand                   |
| Borrower Distribution    | Whale-dominated vs retail-driven lending pool      |

------

## 🔍 Lending vs Protocol Types

| Protocol             | Model          | Notes                                           |
| -------------------- | -------------- | ----------------------------------------------- |
| Aave / Compound      | Pool-based     | Interest rates are dynamic based on utilization |
| Morpho               | Peer-to-peer   | Matches borrowers/lenders for optimized rates   |
| Euler (now inactive) | Isolated pools | Experimental features like risk tranching       |

The structure of their data will vary. Morpho, for example, will use tables like:

- \`morpho_aavev2_ethereum.supply\`
- \`morpho_aavev2_ethereum.borrow\`
- \`morpho_aavev2_ethereum.liquidate\`

------

## 📚 Dashboards to Learn From

- Aave V2 Risk Overview
- Morpho Lending Analytics
- Lending Liquidations Monitor
- Compound Market Overview

------

## 🧠 Final Thoughts

Lending data is a goldmine of behavioral and risk insight. You can track leverage entering or exiting the market, spot cascading liquidations during volatility, or monitor shifts in asset usage across time.

But lending protocols are complex. They have intricate state transitions, economic mechanisms, and edge cases.

So go slow. Read protocol docs. Look at event logs. Trace borrower lifecycles.

And always ask: **What story is the money telling?**

------

**Next: 09. DeFi Analysis — Liquidity, Incentives, and TVL Dynamics**
`
};
