
import { ManifestoChapter } from '../manifestoChapters';

export const chaptersAdvanced: ManifestoChapter[] = [
  {
    number: 11,
    title: "Uniswap Multichain Analytics — Comparing Deployments Across Chains",
    mdContent: `# 11. Uniswap Multichain Analytics — Comparing Deployments Across Chains

## Introduction to Multichain Analytics

As Uniswap has expanded beyond Ethereum to multiple blockchains, analysts face both challenges and opportunities. This chapter provides a structured approach to comparing Uniswap deployments across different networks.

Chains where Uniswap has deployed include:
- Ethereum (mainnet)
- Polygon
- Arbitrum
- Optimism
- Celo
- Base
- BNB Chain

## Table Structure Differences

Each chain implementation may have subtle differences:

| Chain | Table Structure | Special Considerations |
|-------|----------------|------------------------|
| Ethereum | Original format | Most comprehensive data |
| Polygon | Similar to Ethereum | Requires matic_* tables |
| Arbitrum | Similar to Ethereum | Uses arbitrum_* tables |
| Optimism | Similar to Ethereum | Uses optimism_* tables |
| Celo | Similar to Ethereum | Uses celo_* tables |
| Base | Similar to Ethereum | Uses base_* tables |
| BNB | Similar to Ethereum | Uses bnb_* tables |

## Cross-Chain Comparison Queries

### Volume Comparison

\`\`\`sql
WITH ethereum_vol AS (
  SELECT 
    date_trunc('day', block_time) as day,
    sum(amount_usd) as volume,
    'Ethereum' as chain
  FROM dex.trades
  WHERE project = 'uniswap' 
    AND block_time > now() - interval '30 days'
  GROUP BY 1
),
polygon_vol AS (
  SELECT 
    date_trunc('day', block_time) as day,
    sum(amount_usd) as volume,
    'Polygon' as chain
  FROM polygon.dex_trades
  WHERE project = 'uniswap'
    AND block_time > now() - interval '30 days'
  GROUP BY 1
)
-- Add similar CTEs for other chains

SELECT * FROM ethereum_vol
UNION ALL
SELECT * FROM polygon_vol
-- UNION ALL other chains
ORDER BY day, chain
\`\`\`

### TVL Comparison

\`\`\`sql
WITH ethereum_tvl AS (
  SELECT 
    date_trunc('day', block_time) as day,
    sum(token_amount_usd) as tvl,
    'Ethereum' as chain
  FROM ethereum.uniswap_pool_stats
  WHERE block_time > now() - interval '30 days'
  GROUP BY 1
),
polygon_tvl AS (
  SELECT 
    date_trunc('day', block_time) as day,
    sum(token_amount_usd) as tvl,
    'Polygon' as chain
  FROM polygon.uniswap_pool_stats
  WHERE block_time > now() - interval '30 days'
  GROUP BY 1
)
-- Add more chains as needed

SELECT * FROM ethereum_tvl
UNION ALL
SELECT * FROM polygon_tvl
-- UNION ALL other chains
ORDER BY day, chain
\`\`\`

## Fee Comparison

Different chains have different fee structures and gas costs, making them more or less attractive for different types of users:

| Chain | Typical Gas Fee | Block Time | Notes |
|-------|----------------|------------|-------|
| Ethereum | Highest | ~12 seconds | Best security, highest fees |
| Polygon | Very low | ~2 seconds | Fast finality, very economical |  
| Arbitrum | Medium | ~0.25-1 second | Lower than Ethereum, higher than other L2s |
| Optimism | Medium | ~0.5-2 seconds | Competitive with Arbitrum |
| Celo | Low | ~5 seconds | Mobile-first chain |
| Base | Medium-low | ~2 seconds | Newer Coinbase L2 |
| BNB | Low | ~3 seconds | High throughput |

## User Behavior Analysis

Do users behave differently on different chains?

\`\`\`sql
WITH user_stats AS (
  SELECT
    'Ethereum' as chain,
    COUNT(DISTINCT trader_a) as active_users,
    SUM(amount_usd)/COUNT(DISTINCT trader_a) as avg_volume_per_user,
    COUNT(*)/COUNT(DISTINCT trader_a) as avg_trades_per_user
  FROM dex.trades
  WHERE project = 'uniswap'
    AND block_time > now() - interval '30 days'
  
  UNION ALL
  
  SELECT
    'Polygon' as chain,
    COUNT(DISTINCT trader_a) as active_users,
    SUM(amount_usd)/COUNT(DISTINCT trader_a) as avg_volume_per_user,
    COUNT(*)/COUNT(DISTINCT trader_a) as avg_trades_per_user
  FROM polygon.dex_trades
  WHERE project = 'uniswap'
    AND block_time > now() - interval '30 days'
  -- Add more chains as needed
)

SELECT * FROM user_stats
ORDER BY active_users DESC
\`\`\`

## Conclusion

Multichain analytics allow us to see how Uniswap's ecosystem is evolving across different networks. Key observations:

1. Ethereum remains the dominant chain for total volume and TVL
2. L2s like Arbitrum and Optimism show strong adoption for frequent, smaller trades
3. User behavior varies significantly by chain, with L2 users typically making more frequent but smaller trades
4. Gas costs remain a key differentiator driving user choice of chain
`,
  },
  {
    number: 12,
    title: "Useful Metrics Every Analyst Should Track",
    mdContent: `# 12. Useful Metrics Every Analyst Should Track

## Core Blockchain Health Metrics

Every blockchain analyst should consistently track these fundamental metrics to understand the health and activity of a network:

| Metric | Description | Significance |
|--------|-------------|-------------|
| Daily Active Addresses | Number of unique addresses active in 24h | User engagement |
| Transaction Count | Total transactions per day | Network activity |
| Average Transaction Value | Mean value of transactions | Usage patterns |
| Gas Used | Total computational resources consumed | Network demand |
| Average Gas Price | Mean price paid for computation | Fee market economics |
| New Address Growth | New addresses created per day | Network growth |

## DeFi Protocol Metrics

For DeFi protocols, these metrics provide essential insights:

\`\`\`sql
-- TVL Tracking Query
SELECT 
  date_trunc('day', block_time) as day,
  protocol,
  SUM(token_amount_usd) as tvl
FROM tvl_daily
WHERE block_time > now() - interval '90 days'
GROUP BY 1, 2
ORDER BY day DESC, tvl DESC
\`\`\`

### Essential Protocol Metrics

1. **TVL (Total Value Locked)**
   - Most important DeFi metric
   - Measures protocol trust and capital efficiency
   - Should be tracked across tokens and chains

2. **Volume**
   - Trading/lending/borrowing volume
   - Key indicator of actual usage
   - Should normalize for wash trading

3. **User Metrics**
   - Daily/Weekly/Monthly active users
   - New vs returning users
   - User retention cohorts

4. **Revenue**
   - Protocol revenue (accruing to treasury/token)
   - Supply-side revenue (accruing to LPs/lenders)
   - Fee structure and capture mechanism

## Token Metrics

For token analysis, track:

\`\`\`sql
-- Token Distribution Analysis
SELECT 
  holder_address,
  token_balance / token_total_supply as ownership_percentage,
  CASE 
    WHEN holder_address IN (SELECT contract_address FROM known_contracts WHERE type = 'protocol_treasury') THEN 'Treasury'
    WHEN holder_address IN (SELECT contract_address FROM known_contracts WHERE type = 'team_multisig') THEN 'Team'
    WHEN holder_address IN (SELECT address FROM whale_wallets) THEN 'Whale'
    ELSE 'Other'
  END as holder_type
FROM token_balances
WHERE token_address = '0x1234...' -- Target token
  AND block_number = 15000000 -- Analysis block
ORDER BY token_balance DESC
LIMIT 100
\`\`\`

### Key Token Metrics

* **Distribution**
  * Concentration among top holders
  * Gini coefficient
  * Holder breakdown by type

* **Liquidity**
  * DEX liquidity depth
  * Bid-ask spreads
  * CEX vs DEX trading ratio

* **Emissions & Inflation**
  * Token emission schedule
  * Actual vs projected inflation
  * Distribution velocity

* **Staking & Utility**
  * Staking participation rate
  * Token utility metrics
  * Governance participation

## NFT Market Metrics

For NFT markets:

\`\`\`sql
-- Collection Performance
SELECT 
  collection,
  COUNT(*) as sales_count,
  SUM(amount_usd) as volume_usd,
  AVG(amount_usd) as avg_price,
  COUNT(DISTINCT seller) as unique_sellers,
  COUNT(DISTINCT buyer) as unique_buyers
FROM nft.trades
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY volume_usd DESC
\`\`\`

### NFT Specific Metrics

* **Floor Price Evolution**
* **Wash Trading Ratio**
* **Royalty Compliance**
* **Holder Concentration**
* **Trading Velocity**

## Technical Key Performance Indicators

Beyond basic metrics, track these technical KPIs:

1. **Network Effects**
   * Metcalfe's Law application (value ∝ n²)
   * Cross-protocol integrations
   * Ecosystem expansion

2. **Security Metrics**
   * Hash rate (for PoW)
   * Validator distribution (for PoS)
   * Smart contract audit coverage

3. **Developer Activity**
   * GitHub commits
   * Smart contract deployments
   * Bug bounty participation

4. **Scaling Metrics**
   * TPS (Transactions Per Second)
   * Block space utilization
   * L2 bridging activity

## Conclusion

Tracking these metrics consistently provides a comprehensive view of blockchain ecosystem health. The most insightful analysis comes from:

1. Comparing metrics across time periods
2. Correlating different metrics against each other
3. Contextualizing with market events
4. Normalizing for market conditions
5. Creating custom composite indicators

Remember that raw data without context can be misleading. Always ask:
* What's driving this change?
* Is this sustainable?
* How does this compare to similar projects?
* What leading indicators predict this behavior?
`,
  },
  {
    number: 13,
    title: "BTC Coin Days Destroyed — What HODLers Tell Us About the Market",
    mdContent: `# 13. BTC Coin Days Destroyed — What HODLers Tell Us About the Market

## Understanding Coin Days Destroyed (CDD)

Coin Days Destroyed is a powerful on-chain metric that helps us understand Bitcoin holder behavior, particularly long-term holders (often called "HODLers").

The concept builds on "coin days" — when 1 BTC remains unspent for 1 day, it accumulates 1 coin day. When those coins eventually move, their accumulated coin days are "destroyed" and reset to zero.

The formula is simple:

\`\`\`
Coin Days Destroyed = Amount of BTC moved × Days since last movement
\`\`\`

For example:
- If 5 BTC haven't moved for 100 days and then get transferred, this destroys 500 coin days
- If 0.1 BTC haven't moved for 1,000 days and then get transferred, this destroys 100 coin days

## Implementing CDD in SQL

\`\`\`sql
WITH bitcoin_transfers AS (
  SELECT
    hash,
    block_time,
    "from" as sender,
    "to" as recipient,
    value as amount
  FROM bitcoin.transactions
  WHERE block_time > now() - interval '1 year'
),

prev_movement AS (
  SELECT
    recipient,
    max(block_time) as last_movement_time,
    sum(amount) as btc_balance
  FROM bitcoin_transfers
  GROUP BY recipient
)

SELECT
  bt.hash as transaction_hash,
  bt.block_time,
  bt.sender,
  bt.amount,
  bt.block_time - pm.last_movement_time as days_since_last_movement,
  bt.amount * EXTRACT(EPOCH FROM (bt.block_time - pm.last_movement_time))/86400 as coin_days_destroyed
FROM bitcoin_transfers bt
JOIN prev_movement pm ON bt.sender = pm.recipient
WHERE bt.block_time > now() - interval '90 days'
ORDER BY coin_days_destroyed DESC
LIMIT 1000
\`\`\`

## CDD Variations and Interpretations

### 1. Binary CDD Thresholds

Binary CDD classifies coins based on specific age thresholds:

\`\`\`sql
-- Categorizing movements by holder type
SELECT
  date_trunc('week', block_time) as week,
  SUM(CASE WHEN days_since_last_movement < 7 THEN amount ELSE 0 END) as short_term_movement,
  SUM(CASE WHEN days_since_last_movement BETWEEN 7 AND 180 THEN amount ELSE 0 END) as mid_term_movement,
  SUM(CASE WHEN days_since_last_movement > 180 THEN amount ELSE 0 END) as long_term_movement
FROM coin_days_destroyed_table
GROUP BY 1
ORDER BY 1
\`\`\`

### 2. Adjusted CDD

To account for increasing BTC supply over time:

\`\`\`sql
SELECT
  date_trunc('day', block_time) as day,
  SUM(coin_days_destroyed) as raw_cdd,
  SUM(coin_days_destroyed) / (SELECT SUM(total_supply) FROM bitcoin_daily_metrics WHERE day = date_trunc('day', block_time)) as adjusted_cdd
FROM coin_days_destroyed_table
GROUP BY 1
ORDER BY 1
\`\`\`

### 3. CDD Velocity

Rate of change of CDD identifies accelerating or decelerating long-term holder activity:

\`\`\`sql
WITH daily_cdd AS (
  SELECT
    date_trunc('day', block_time) as day,
    SUM(coin_days_destroyed) as daily_cdd
  FROM coin_days_destroyed_table
  GROUP BY 1
)

SELECT
  current.day,
  current.daily_cdd,
  current.daily_cdd - prev.daily_cdd as cdd_change,
  (current.daily_cdd - prev.daily_cdd) / NULLIF(prev.daily_cdd, 0) * 100 as cdd_velocity_percent
FROM daily_cdd current
JOIN daily_cdd prev ON current.day = prev.day + interval '1 day'
ORDER BY current.day
\`\`\`

## Market Insights from CDD

### Historical CDD Patterns

CDD typically spikes during:

1. **Market Tops**: Long-term holders selling into strength
2. **Capitulation Events**: Holders giving up during extended downtrends
3. **On-Chain Reorganizations**: Exchanges or large entities moving cold storage

### Interpreting CDD for Market Analysis

| CDD Pattern | Potential Interpretation |
|-------------|--------------------------|
| High CDD + Rising Price | Long-term holders taking profit (bearish) |
| High CDD + Falling Price | Capitulation selling (potentially bottoming) |
| Low CDD + Rising Price | Healthy accumulation phase (bullish) |
| Low CDD + Falling Price | Disinterest phase, lack of activity |
| Sudden CDD Spike | Large entity reorganization or single entity movement |

## Relationship to HODL Waves

CDD is closely related to HODL Waves, which visualize the age distribution of Bitcoin's supply:

\`\`\`sql
-- HODL Waves Analysis
SELECT
  day,
  SUM(CASE WHEN age_days < 7 THEN supply ELSE 0 END) / total_supply as pct_1d_to_1w,
  SUM(CASE WHEN age_days BETWEEN 7 AND 30 THEN supply ELSE 0 END) / total_supply as pct_1w_to_1m,
  SUM(CASE WHEN age_days BETWEEN 30 AND 90 THEN supply ELSE 0 END) / total_supply as pct_1m_to_3m,
  SUM(CASE WHEN age_days BETWEEN 90 AND 180 THEN supply ELSE 0 END) / total_supply as pct_3m_to_6m,
  SUM(CASE WHEN age_days BETWEEN 180 AND 365 THEN supply ELSE 0 END) / total_supply as pct_6m_to_12m,
  SUM(CASE WHEN age_days > 365 THEN supply ELSE 0 END) / total_supply as pct_over_1y
FROM bitcoin_supply_age_distribution
GROUP BY day, total_supply
ORDER BY day
\`\`\`

## Limitations of CDD Analysis

While powerful, CDD has limitations:

1. **Exchange Movements**: Difficult to distinguish between exchange reshuffling and actual holder behavior
2. **Lost Coins**: Permanently lost coins never destroy their accumulated coin days
3. **Technical Movements**: Self-transfers or wallet reorganizations can falsely indicate holder activity
4. **Mixed Signals**: Requires context and should not be used in isolation

## Conclusion

Coin Days Destroyed provides unique insight into Bitcoin holder behavior that price action alone cannot capture. By understanding when long-term holders are active, analysts can identify potential market turning points and validate other on-chain signals.

The most effective approach combines CDD with other metrics:
- MVRV Ratio
- SOPR (Spent Output Profit Ratio)
- NVT Ratio (Network Value to Transactions)
- Realized Cap HODL Waves

Together, these paint a comprehensive picture of Bitcoin's fundamental health and market sentiment structure.
`,
  },
  {
    number: 14,
    title: "Building with Spellbook — How to Contribute Reusable Models to the Community",
    mdContent: `# 14. Building with Spellbook — How to Contribute Reusable Models to the Community

## Introduction to Spellbook

Spellbook is a community-driven repository of SQL models that standardize blockchain data transformations across different protocols and chains. Built on top of the Dune Analytics platform, it leverages dbt (data build tool) to create reusable abstractions that simplify complex on-chain analytics.

Key benefits of Spellbook include:
- Standardized data models across protocols and chains
- Elimination of redundant work through shared models
- Improved data quality through community review
- Accelerated analytics development

## Architecture Overview

Spellbook follows a layered approach to data modeling:

![Spellbook Architecture](https://i.imgur.com/iLEQmZO.png)

1. **Source Layer**: Raw blockchain data from Dune
2. **Decoded/Standardized Layer**: Protocol-specific decoded events and transactions
3. **Integration Layer**: Cross-protocol abstractions
4. **Mart Layer**: Business-specific aggregations

Each layer builds upon the previous one, creating increasingly useful abstractions.

## Setting Up Your Environment

Before contributing to Spellbook, set up your local environment:

\`\`\`bash
# Clone the repository
git clone https://github.com/duneanalytics/spellbook

# Navigate to project directory
cd spellbook

# Install dependencies
pip install -r requirements.txt

# Configure dbt profile
cp ./profiles_template.yml ~/.dbt/profiles.yml
# Edit the profiles.yml with your Dune API key
\`\`\`

## Anatomy of a Spellbook Model

Let's examine the structure of a SQL model in Spellbook:

\`\`\`sql
-- models/uniswap/ethereum/uniswap_v3_ethereum_trades.sql

{{
  config(
    schema = 'uniswap_v3_ethereum',
    alias = 'trades',
    materialized = 'incremental',
    file_format = 'delta',
    incremental_strategy = 'merge',
    unique_key = ['tx_hash', 'evt_index'],
    incremental_predicates = [incremental_predicate('DBT_INTERNAL_DEST.block_time')]
  )
}}

-- Pull in the dex.trades abstraction for Uniswap v3 on Ethereum
SELECT
  block_time,
  token_a_symbol,
  token_b_symbol,
  token_a_amount,
  token_b_amount,
  project,
  version,
  category,
  trader_a,
  trader_b,
  token_a_amount_raw,
  token_b_amount_raw,
  usd_amount,
  token_a_address,
  token_b_address,
  exchange_contract_address,
  tx_hash,
  tx_from,
  tx_to,
  trace_address,
  evt_index,
  row_number() OVER (PARTITION BY tx_hash, evt_index, trace_address) AS duplicates
FROM {{ ref('dex_trades') }}
WHERE project = 'Uniswap' 
  AND version = '3'
  AND blockchain = 'ethereum'
  {% if is_incremental() %}
  AND {{ incremental_predicate('block_time') }}
  {% endif %}
\`\`\`

## Creating Your First Model

### 1. Choose Your Contribution Area

Identify where you can add value:
- New protocol abstractions
- Additional blockchain support
- Enhanced existing models
- Cross-protocol integrations

### 2. Design Your Model Schema

For a new protocol, design standardized schemas that align with existing patterns:

\`\`\`sql
-- Example schema for a lending protocol
-- models/aave/ethereum/aave_v3_ethereum_borrows.sql

{{
  config(
    schema = 'aave_v3_ethereum',
    alias = 'borrows',
    materialized = 'incremental',
    file_format = 'delta',
    incremental_strategy = 'merge',
    unique_key = ['tx_hash', 'evt_index'],
    incremental_predicates = [incremental_predicate('DBT_INTERNAL_DEST.block_time')]
  )
}}

SELECT
  b.evt_block_time AS block_time,
  b.evt_block_number AS block_number,
  'Aave' AS project,
  '3' AS version,
  'ethereum' AS blockchain,
  b.reserve AS token_address,
  t.symbol AS token_symbol,
  b.user AS borrower,
  b.onBehalfOf AS recipient,
  b.amount / POW(10, t.decimals) AS amount,
  b.amount AS amount_raw,
  b.amount / POW(10, t.decimals) * p.price AS amount_usd,
  b.interestRateMode AS interest_rate_mode,
  b.evt_tx_hash AS tx_hash,
  b.evt_index
FROM {{ source('aave_v3_ethereum', 'LendingPool_evt_Borrow') }} b
LEFT JOIN {{ ref('tokens_ethereum') }} t ON b.reserve = t.contract_address
LEFT JOIN {{ source('prices', 'usd') }} p ON p.blockchain = 'ethereum' 
  AND p.contract_address = b.reserve 
  AND p.minute = date_trunc('minute', b.evt_block_time)
WHERE 1=1
{% if is_incremental() %}
AND {{ incremental_predicate('b.evt_block_time') }}
{% endif %}
\`\`\`

### 3. Implement Tests

Create proper tests to validate your model:

\`\`\`yaml
# models/aave/ethereum/aave_v3_ethereum_schema.yml

version: 2

models:
  - name: aave_v3_ethereum_borrows
    description: "Borrow events on Aave V3 on Ethereum"
    tests:
      - dbt_utils.unique_combination_of_columns:
          combination_of_columns:
            - tx_hash
            - evt_index
    columns:
      - name: block_time
        description: "Timestamp of the block when the borrow occurred"
        tests:
          - not_null
      - name: block_number
        description: "Block number when the borrow occurred"
        tests:
          - not_null
      # ... more column tests
\`\`\`

### 4. Document Your Model

Add comprehensive documentation in the schema YAML file:

\`\`\`yaml
# Continued from above YAML
    meta:
      blockchain: ethereum
      sector: lending
      project: aave
      contributors: ['your-github-username']
    columns:
      - name: block_time
        description: "Timestamp of the block when the borrow occurred"
      - name: block_number
        description: "Block number when the borrow occurred"
      - name: project
        description: "Project name (Aave)"
      # ... more column documentation
\`\`\`

## Best Practices for Spellbook Development

1. **Performance Optimization**
   - Use appropriate partitioning keys
   - Apply efficient joins and filtering
   - Consider query costs for large tables

2. **Incremental Models**
   - Always include incremental logic
   - Use appropriate incremental predicates
   - Test both full and incremental runs

3. **Naming Conventions**
   - Follow established patterns: `<protocol>_<chain>_<entity>`
   - Use consistent column names across models
   - Match entity names across protocols (borrows, supplies, trades)

4. **Testing Strategy**
   - Row count validations
   - Uniqueness constraints
   - Referential integrity
   - Custom data quality checks

## Contributing to Spellbook

The contribution workflow:

1. **Fork the Repository**
   - Create your own fork of the Spellbook repository

2. **Create a Branch**
   - Name it according to the convention: `feature/protocol-name-model`

3. **Local Development**
   - Write and test your models locally
   - Run `dbt compile` to check for syntax errors
   - Run `dbt test --select your_model_name` to verify tests

4. **Submit a Pull Request**
   - Include comprehensive description
   - Reference related issues
   - Document expected outcomes

5. **Review Process**
   - Address reviewer comments
   - Make requested changes
   - Ensure CI/CD pipeline passes

## Example: Creating a Spellbook Abstraction

Let's walk through creating a simple integration model:

\`\`\`sql
-- models/integrations/defi/defi_lending_borrows.sql

{{
  config(
    schema = 'integrations_defi',
    alias = 'lending_borrows',
    materialized = 'view',
  )
}}

-- Unified borrow events across lending protocols
SELECT
  block_time,
  block_number,
  project,
  version,
  blockchain,
  token_address,
  token_symbol,
  borrower,
  recipient,
  amount,
  amount_raw,
  amount_usd,
  interest_rate_mode,
  tx_hash,
  evt_index
FROM {{ ref('aave_v3_ethereum_borrows') }}

UNION ALL

SELECT
  block_time,
  block_number,
  project,
  version,
  blockchain,
  token_address,
  token_symbol,
  borrower,
  recipient,
  amount,
  amount_raw,
  amount_usd,
  interest_rate_mode,
  tx_hash,
  evt_index
FROM {{ ref('compound_v2_ethereum_borrows') }}

-- Add more lending protocols as they become available
\`\`\`

## Conclusion

Contributing to Spellbook is a powerful way to improve the blockchain analytics ecosystem while establishing yourself as a contributor to open source data infrastructure. Your models enable countless analysts to build more sophisticated dashboards and derive deeper insights from on-chain data.

By following this guide, you'll be well-equipped to create high-quality abstractions that become a valuable part of the Dune Analytics community.

Remember that good Spellbook models:
- Follow established patterns
- Are well-documented
- Include comprehensive tests
- Optimize for performance
- Support incremental loading
`,
  },
  {
    number: 15,
    title: "How to Build an Onchain App Using the Dune API",
    mdContent: `# 15. How to Build an Onchain App Using the Dune API

## Introduction to the Dune API

The Dune API provides programmatic access to Dune Analytics' powerful query engine and vast blockchain dataset. It enables developers to build data-driven applications, dashboards, and services on top of blockchain data without managing infrastructure.

Key API features:
- Query execution and management
- Dataset retrieval
- Analytics dashboard access
- Timeseries and cross-chain data analysis

## Getting Started with API Access

Before building, you need to set up API access:

1. **Obtain an API Key**
   - Register for a Dune account at [dune.com](https://dune.com)
   - Subscribe to a paid tier (API access requires a paid subscription)
   - Navigate to Settings → API Keys to generate a key

2. **API Authentication**
   - All API requests require an Authentication header:
   ```
   Authorization: Bearer YOUR_API_KEY
   ```

3. **Rate Limits**
   - API access is tiered based on subscription level
   - Check your rate limits in the API dashboard
   - Implement appropriate backoff strategies

## Core API Endpoints

The Dune API provides several key endpoints:

### 1. Execute Query

```
POST /api/v1/query/{query_id}/execute
```

Parameters:
- `query_id`: The ID of the query to execute

Response:
```json
{
  "execution_id": "01234567-89ab-cdef-0123-456789abcdef",
  "state": "QUERY_STATE_PENDING"
}
```

### 2. Get Execution Status

```
GET /api/v1/execution/{execution_id}/status
```

Parameters:
- `execution_id`: The ID of the query execution to check

Response:
```json
{
  "execution_id": "01234567-89ab-cdef-0123-456789abcdef",
  "query_id": 1234567,
  "state": "QUERY_STATE_COMPLETED",
  "submitted_at": "2023-01-01T12:00:00Z",
  "expires_at": "2023-01-02T12:00:00Z"
}
```

### 3. Get Execution Results

```
GET /api/v1/execution/{execution_id}/results
```

Parameters:
- `execution_id`: The ID of the query execution to fetch results for

Response:
```json
{
  "execution_id": "01234567-89ab-cdef-0123-456789abcdef",
  "query_id": 1234567,
  "state": "QUERY_STATE_COMPLETED",
  "submitted_at": "2023-01-01T12:00:00Z",
  "expires_at": "2023-01-02T12:00:00Z",
  "result": {
    "rows": [
      {"date": "2023-01-01", "value": 123.45},
      {"date": "2023-01-02", "value": 234.56}
    ],
    "metadata": {
      "column_names": ["date", "value"],
      "column_types": ["DateTime", "Float64"]
    }
  }
}
```

## Building a Simple API Client

Let's build a basic API client in JavaScript:

```javascript
// dune-client.js
const axios = require('axios');

class DuneClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.dune.com/api/v1';
    this.client = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async executeQuery(queryId, parameters = {}) {
    try {
      const response = await this.client.post(`/query/${queryId}/execute`, { parameters });
      return response.data.execution_id;
    } catch (error) {
      console.error('Error executing query:', error);
      throw error;
    }
  }

  async getExecutionStatus(executionId) {
    try {
      const response = await this.client.get(`/execution/${executionId}/status`);
      return response.data;
    } catch (error) {
      console.error('Error getting execution status:', error);
      throw error;
    }
  }

  async getQueryResults(executionId) {
    try {
      const response = await this.client.get(`/execution/${executionId}/results`);
      return response.data.result;
    } catch (error) {
      console.error('Error getting query results:', error);
      throw error;
    }
  }

  async waitForQueryResults(executionId, maxRetries = 60, interval = 1000) {
    let retries = 0;
    
    while (retries < maxRetries) {
      const status = await this.getExecutionStatus(executionId);
      
      if (status.state === 'QUERY_STATE_COMPLETED') {
        return await this.getQueryResults(executionId);
      }
      
      if (status.state === 'QUERY_STATE_FAILED') {
        throw new Error('Query execution failed');
      }
      
      await new Promise(resolve => setTimeout(resolve, interval));
      retries++;
    }
    
    throw new Error('Query execution timed out');
  }
}

module.exports = DuneClient;
```

## Building a Real-World Application

Now, let's build a complete application that uses the Dune API to create a dashboard for Uniswap metrics.

### 1. Project Setup

```bash
# Create a new project
mkdir uniswap-metrics-dashboard
cd uniswap-metrics-dashboard

# Initialize npm
npm init -y

# Install dependencies
npm install express axios dotenv chart.js react react-dom
```

### 2. API Service Layer

```javascript
// services/dune-service.js
const DuneClient = require('../utils/dune-client');
require('dotenv').config();

const client = new DuneClient(process.env.DUNE_API_KEY);

// Query IDs for Uniswap metrics
const QUERIES = {
  DAILY_VOLUME: 1234567,
  TOP_PAIRS: 2345678,
  USER_METRICS: 3456789,
  FEE_GENERATION: 4567890
};

class DuneService {
  async getDailyVolume(days = 30) {
    const executionId = await client.executeQuery(QUERIES.DAILY_VOLUME, { days });
    return await client.waitForQueryResults(executionId);
  }

  async getTopPairs(limit = 10) {
    const executionId = await client.executeQuery(QUERIES.TOP_PAIRS, { limit });
    return await client.waitForQueryResults(executionId);
  }

  async getUserMetrics(days = 30) {
    const executionId = await client.executeQuery(QUERIES.USER_METRICS, { days });
    return await client.waitForQueryResults(executionId);
  }

  async getFeeGeneration(days = 30) {
    const executionId = await client.executeQuery(QUERIES.FEE_GENERATION, { days });
    return await client.waitForQueryResults(executionId);
  }
}

module.exports = new DuneService();
```

### 3. API Routes

```javascript
// routes/api.js
const express = require('express');
const router = express.Router();
const duneService = require('../services/dune-service');

router.get('/volume/daily', async (req, res) => {
  try {
    const days = parseInt(req.query.days) || 30;
    const data = await duneService.getDailyVolume(days);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/pairs/top', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const data = await duneService.getTopPairs(limit);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/users/metrics', async (req, res) => {
  try {
    const days = parseInt(req.query.days) || 30;
    const data = await duneService.getUserMetrics(days);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/fees/generation', async (req, res) => {
  try {
    const days = parseInt(req.query.days) || 30;
    const data = await duneService.getFeeGeneration(days);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
```

### 4. Server Setup

```javascript
// server.js
const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api', apiRoutes);

// Serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 5. Frontend Dashboard

```javascript
// public/app.js
const VolumeChart = {
  init: async function() {
    try {
      const response = await fetch('/api/volume/daily');
      const data = await response.json();
      
      const ctx = document.getElementById('volumeChart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.rows.map(row => row.date),
          datasets: [{
            label: 'Daily Volume (USD)',
            data: data.rows.map(row => row.volume_usd),
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Uniswap Daily Trading Volume'
            }
          }
        }
      });
    } catch (error) {
      console.error('Error loading volume chart:', error);
    }
  }
};

const TopPairsTable = {
  init: async function() {
    try {
      const response = await fetch('/api/pairs/top');
      const data = await response.json();
      
      const tableBody = document.querySelector('#topPairsTable tbody');
      data.rows.forEach(pair => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${pair.pair_name}</td>
          <td>${pair.volume_usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
          <td>${pair.liquidity_usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
          <td>${pair.fees_usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
        `;
        tableBody.appendChild(row);
      });
    } catch (error) {
      console.error('Error loading top pairs table:', error);
    }
  }
};

// Initialize components when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  VolumeChart.init();
  TopPairsTable.init();
  // Initialize other components similarly
});
```

### 6. HTML Dashboard

```html
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Uniswap Analytics Dashboard</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <div class="container mt-4">
    <h1>Uniswap Analytics Dashboard</h1>
    
    <div class="row mt-4">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">Daily Trading Volume</div>
          <div class="card-body">
            <canvas id="volumeChart"></canvas>
          </div>
        </div>
      </div>
    </div>
    
    <div class="row mt-4">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">Top Trading Pairs</div>
          <div class="card-body">
            <table id="topPairsTable" class="table table-striped">
              <thead>
                <tr>
                  <th>Pair</th>
                  <th>Volume (USD)</th>
                  <th>Liquidity (USD)</th>
                  <th>Fees (USD)</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Add more dashboard components as needed -->
  </div>
  
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script src="/app.js"></script>
</body>
</html>
```

## Advanced API Usage

### Parameterized Queries

For more dynamic applications, use parameterized queries:

```javascript
async function getTokenMetrics(tokenAddress) {
  const executionId = await client.executeQuery(QUERIES.TOKEN_METRICS, {
    token_address: tokenAddress
  });
  return await client.waitForQueryResults(executionId);
}
```

### Caching Strategy

Implement a caching strategy to reduce API calls:

```javascript
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 3600 }); // 1 hour TTL

async function getCachedTokenMetrics(tokenAddress) {
  const cacheKey = `token_metrics_${tokenAddress}`;
  
  // Check if data exists in cache
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return cachedData;
  }
  
  // If not in cache, fetch from API
  const data = await getTokenMetrics(tokenAddress);
  
  // Store in cache
  cache.set(cacheKey, data);
  
  return data;
}
```

### Batch Processing

For applications needing to process multiple metrics:

```javascript
async function getDashboardData(params) {
  // Execute all queries concurrently
  const [volumeData, pairsData, userMetrics, feeData] = await Promise.all([
    duneService.getDailyVolume(params.days),
    duneService.getTopPairs(params.limit),
    duneService.getUserMetrics(params.days),
    duneService.getFeeGeneration(params.days)
  ]);
  
  // Process and combine the data
  return {
    volume: processVolumeData(volumeData),
    pairs: processPairsData(pairsData),
    users: processUserMetrics(userMetrics),
    fees: processFeeData(feeData)
  };
}
```

## Best Practices for Production Applications

When building production applications with the Dune API:

1. **Implement Robust Error Handling**
   - Gracefully handle API failures
   - Provide fallback data sources
   - Log detailed error information

2. **Optimize API Usage**
   - Cache frequently requested data
   - Use background jobs for regular updates
   - Batch related requests when possible

3. **Implement Rate Limiting**
   - Add client-side rate limiting
   - Use exponential backoff for retries
   - Monitor quota usage

4. **Data Transformation**
   - Process API responses into application-specific formats
   - Validate and sanitize data
   - Handle missing or null values appropriately

5. **Periodic Refreshes**
   - Schedule regular data refreshes
   - Use webhooks if available
   - Implement a refresh strategy based on data volatility

## Conclusion

The Dune API enables developers to build sophisticated onchain applications with access to Dune's powerful blockchain data analytics. By following the patterns in this guide, you can create data-driven applications that provide valuable insights to your users.

Remember that successful applications built on blockchain data typically:
- Focus on specific use cases and metrics
- Present data in intuitive, actionable formats
- Combine multiple data sources for deeper insights
- Provide timely and reliable information

As blockchain ecosystems evolve, applications built on these data foundations will become increasingly valuable for users making informed decisions in this space.
`,
  },
  {
    number: 16,
    title: "Account Abstraction Why It Matters for Wallet UX and Analysts",
    mdContent: `# 16. Account Abstraction: Why It Matters for Wallet UX and Analysts

## Understanding Account Abstraction

Account abstraction (AA) represents one of the most significant evolutions in Ethereum's account model since its inception. At its core, account abstraction blurs the distinction between Externally Owned Accounts (EOAs) and Contract Accounts by allowing smart contracts to initiate transactions, effectively becoming "accounts" themselves.

### The Current Two-Account Model

Ethereum traditionally has two types of accounts:

1. **Externally Owned Accounts (EOAs)**
   - Controlled by private keys
   - Can initiate transactions
   - Cannot contain code
   - Limited to a single signature scheme

2. **Contract Accounts**
   - Controlled by their code
   - Cannot initiate transactions (only respond)
   - Can implement complex logic
   - Cannot pay for gas

This dual system creates fundamental UX limitations that account abstraction aims to solve.

## ERC-4337: The Path to Account Abstraction

ERC-4337 provides a path to account abstraction without requiring consensus-layer changes to Ethereum. Let's understand its key components:

### Architecture Overview

![ERC-4337 Architecture](https://i.imgur.com/XgJvFGo.png)

- **User Operation**: A new transaction-like object containing the user's intent
- **Bundler**: Entity that packages UserOperations into a transaction
- **Entry Point Contract**: Singleton contract validating and executing UserOperations
- **Wallet Contract**: Smart contract implementing account logic (the abstracted account)
- **Paymaster**: Optional contract that can sponsor gas fees

### User Operation Structure

\`\`\`solidity
struct UserOperation {
    address sender;           // The wallet contract
    uint256 nonce;            // Anti-replay protection
    bytes initCode;           // Code to create wallet if it doesn't exist
    bytes callData;           // The method call to execute
    uint256 callGasLimit;     // Gas limit for the main execution
    uint256 verificationGasLimit; // Gas limit for verification
    uint256 preVerificationGas;   // Gas to compensate bundler
    uint256 maxFeePerGas;     // Similar to EIP-1559 max fee
    uint256 maxPriorityFeePerGas; // Similar to EIP-1559 priority fee
    bytes paymasterAndData;   // Paymaster contract address and data
    bytes signature;          // Signature over the entire operation
}
\`\`\`

## Breaking Down the UX Improvements

Account abstraction enables several significant UX improvements:

### 1. Advanced Signature Schemes

Smart contract wallets can implement any signature verification logic:

\`\`\`sql
-- Analyzing signature types in AA transactions
SELECT
  date_trunc('day', block_time) as day,
  signature_type,
  COUNT(*) as signature_count
FROM erc4337.user_operations
JOIN erc4337.wallet_signatures ON user_operations.hash = wallet_signatures.user_op_hash
WHERE block_time > now() - interval '30 days'
GROUP BY 1, 2
ORDER BY 1 DESC, 3 DESC
\`\`\`

Possible signature types include:
- Multi-signatures (M-of-N)
- Threshold signatures
- Social recovery
- Passkeys / WebAuthn
- Zero-knowledge proofs

### 2. Sponsored Transactions (Paymasters)

Paymasters enable gas abstraction, allowing:
- Payment in ERC-20 tokens instead of ETH
- Gas sponsorship by dApps or protocols
- Subscription-based models

\`\`\`sql
-- Analyzing paymaster usage
SELECT
  date_trunc('day', block_time) as day,
  paymaster,
  COUNT(*) as sponsored_txs,
  SUM(gas_used * effective_gas_price) / 1e18 as total_eth_sponsored
FROM erc4337.user_operations
WHERE paymaster IS NOT NULL
  AND block_time > now() - interval '30 days'
GROUP BY 1, 2
ORDER BY 1 DESC, 4 DESC
\`\`\`

### 3. Batched Transactions

Smart contract wallets can execute multiple actions in a single transaction:

\`\`\`sql
-- Analyzing batched transactions
WITH batched_ops AS (
  SELECT
    wallet_address,
    user_op_hash,
    COUNT(*) as actions_per_op
  FROM erc4337.user_operations
  JOIN erc4337.user_operation_actions ON user_operations.hash = user_operation_actions.user_op_hash
  WHERE block_time > now() - interval '30 days'
  GROUP BY 1, 2
)

SELECT
  actions_per_op,
  COUNT(*) as operation_count,
  COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () as percentage
FROM batched_ops
GROUP BY 1
ORDER BY 1
\`\`\`

### 4. Account Recovery

Smart contract wallets enable advanced recovery mechanisms:

- Social recovery (trusted guardians)
- Time-locked recovery
- Recovery through alternate authentication methods

\`\`\`sql
-- Analyzing recovery events
SELECT
  date_trunc('day', block_time) as day,
  recovery_method,
  COUNT(*) as recovery_count
FROM erc4337.wallet_recovery_events
WHERE block_time > now() - interval '90 days'
GROUP BY 1, 2
ORDER BY 1 DESC, 3 DESC
\`\`\`

### 5. Session Keys and Spending Limits

Contract wallets can implement fine-grained permissions:

\`\`\`sql
-- Analyzing session key usage
SELECT
  wallet_address,
  session_key,
  permission_type,
  MAX(block_time) as last_used
FROM erc4337.session_key_operations
WHERE block_time > now() - interval '30 days'
GROUP BY 1, 2, 3
ORDER BY 4 DESC
\`\`\`

## Implications for Onchain Analysts

### 1. New Data Structures

Account abstraction introduces new data structures that analysts need to track:

\`\`\`sql
-- New tables to track
-- erc4337.user_operations
-- erc4337.entry_point_events
-- erc4337.wallet_deployments
-- erc4337.paymaster_operations
\`\`\`

### 2. Attribution Challenges

Identifying the "real" initiator of transactions becomes more complex:

\`\`\`sql
-- Tracing transaction origin with AA
WITH aa_activity AS (
  SELECT
    wallet_address,
    initiator_address,
    COUNT(*) as operation_count
  FROM erc4337.user_operations
  JOIN erc4337.operation_initiators ON user_operations.hash = operation_initiators.user_op_hash
  WHERE block_time > now() - interval '30 days'
  GROUP BY 1, 2
)

SELECT
  CASE
    WHEN initiator_address = wallet_address THEN 'Self-initiated'
    WHEN initiator_type = 'dapp' THEN 'dApp-initiated'
    WHEN initiator_type = 'session_key' THEN 'Session key'
    ELSE 'Other'
  END as initiation_type,
  COUNT(*) as operation_count,
  COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () as percentage
FROM aa_activity
JOIN erc4337.initiator_metadata ON aa_activity.initiator_address = initiator_metadata.address
GROUP BY 1
ORDER BY 3 DESC
\`\`\`

### 3. Gas Analysis Complexity

Gas payment and consumption patterns become more complex:

\`\`\`sql
-- Analyzing gas payment methods
SELECT
  date_trunc('day', block_time) as day,
  CASE
    WHEN paymaster IS NULL THEN 'Direct ETH payment'
    WHEN paymaster_type = 'token' THEN 'ERC20 payment'
    WHEN paymaster_type = 'sponsor' THEN 'Sponsored'
    WHEN paymaster_type = 'subscription' THEN 'Subscription'
    ELSE 'Other'
  END as payment_method,
  COUNT(*) as tx_count
FROM erc4337.user_operations
LEFT JOIN erc4337.paymaster_metadata ON user_operations.paymaster = paymaster_metadata.address
WHERE block_time > now() - interval '30 days'
GROUP BY 1, 2
ORDER BY 1 DESC, 3 DESC
\`\`\`

### 4. New User Behavior Patterns

AA enables new user behaviors that analysts should monitor:

\`\`\`sql
-- Analyzing batch operation behaviors
WITH user_batch_patterns AS (
  SELECT
    wallet_address,
    AVG(actions_per_op) as avg_actions_per_op,
    MAX(actions_per_op) as max_actions_per_op,
    MIN(actions_per_op) as min_actions_per_op,
    COUNT(DISTINCT user_op_hash) as total_ops
  FROM (
    SELECT
      wallet_address,
      user_op_hash,
      COUNT(*) as actions_per_op
    FROM erc4337.user_operations
    JOIN erc4337.user_operation_actions ON user_operations.hash = user_operation_actions.user_op_hash
    WHERE block_time > now() - interval '30 days'
    GROUP BY 1, 2
  ) t
  GROUP BY 1
)

SELECT
  CASE
    WHEN avg_actions_per_op < 1.2 THEN 'Single action users'
    WHEN avg_actions_per_op < 3 THEN 'Occasional batchers'
    ELSE 'Power batchers'
  END as user_category,
  COUNT(*) as wallet_count,
  AVG(total_ops) as avg_operations
FROM user_batch_patterns
GROUP BY 1
ORDER BY 2 DESC
\`\`\`

## Adoption Metrics for Account Abstraction

To track adoption of account abstraction:

### 1. Wallet Creation Growth

\`\`\`sql
-- Tracking new smart contract wallet deployments
SELECT
  date_trunc('week', block_time) as week,
  wallet_implementation,
  COUNT(*) as new_wallets
FROM erc4337.wallet_deployments
WHERE block_time > now() - interval '180 days'
GROUP BY 1, 2
ORDER BY 1 DESC, 3 DESC
\`\`\`

### 2. Transaction Volume

\`\`\`sql
-- AA transaction volume vs traditional EOA
SELECT
  date_trunc('day', block_time) as day,
  'ERC-4337' as tx_type,
  COUNT(*) as tx_count
FROM erc4337.user_operations
WHERE block_time > now() - interval '30 days'
GROUP BY 1, 2

UNION ALL

SELECT
  date_trunc('day', block_time) as day,
  'Traditional EOA' as tx_type,
  COUNT(*) as tx_count
FROM ethereum.transactions
WHERE block_time > now() - interval '30 days'
  AND "from" NOT IN (SELECT bundler_address FROM erc4337.bundlers)
GROUP BY 1, 2

ORDER BY 1 DESC, 3 DESC
\`\`\`

### 3. User Activity Distribution

\`\`\`sql
-- User activity distribution
WITH aa_user_activity AS (
  SELECT
    wallet_address,
    COUNT(*) as operation_count
  FROM erc4337.user_operations
  WHERE block_time > now() - interval '30 days'
  GROUP BY 1
),
traditional_user_activity AS (
  SELECT
    "from" as wallet_address,
    COUNT(*) as tx_count
  FROM ethereum.transactions
  WHERE block_time > now() - interval '30 days'
    AND "from" NOT IN (SELECT bundler_address FROM erc4337.bundlers)
  GROUP BY 1
)

SELECT
  CASE
    WHEN operation_count = 1 THEN '1 operation'
    WHEN operation_count BETWEEN 2 AND 5 THEN '2-5 operations'
    WHEN operation_count BETWEEN 6 AND 20 THEN '6-20 operations'
    ELSE '20+ operations'
  END as activity_bucket,
  COUNT(*) as wallet_count,
  'AA Wallets' as wallet_type
FROM aa_user_activity
GROUP BY 1

UNION ALL

SELECT
  CASE
    WHEN tx_count = 1 THEN '1 operation'
    WHEN tx_count BETWEEN 2 AND 5 THEN '2-5 operations'
    WHEN tx_count BETWEEN 6 AND 20 THEN '6-20 operations'
    ELSE '20+ operations'
  END as activity_bucket,
  COUNT(*) as wallet_count,
  'EOA Wallets' as wallet_type
FROM traditional_user_activity
GROUP BY 1

ORDER BY wallet_type, activity_bucket
\`\`\`

## The Future of Account Abstraction Analysis

As AA adoption grows, analysts will need to focus on:

1. **Cross-chain AA Analysis**: How AA wallets behave across different EVM chains
2. **Industry-specific AA Patterns**: Different use cases across DeFi, gaming, NFTs
3. **Security Event Monitoring**: New attack vectors specific to smart contract wallets
4. **Wallet Feature Utilization**: Which AA capabilities are most utilized
5. **Paymaster Economics**: Viability of various gas sponsorship models

## Conclusion

Account abstraction represents a significant shift in how users interact with blockchains. For onchain analysts, it creates both challenges in attribution and opportunities for deeper user behavior analysis.

Key takeaways:
- ERC-4337 enables significant UX improvements without consensus changes
- New data structures require updated analytics approaches
- Separating user intent from transaction mechanics becomes crucial
- Gas analysis becomes more nuanced with paymasters
- New wallet features create novel behavioral patterns to analyze

By understanding these changes, analysts can better interpret on-chain activity in an increasingly abstracted blockchain ecosystem, gaining deeper insights into actual user behavior separated from the underlying transaction mechanics.
`,
  },
  {
    number: 17,
    title: "ERC-4337 Aggregated Tables Across EVM Chains Unified Analytics at Scale",
    mdContent: `# 17. ERC-4337 Aggregated Tables Across EVM Chains: Unified Analytics at Scale

## Introduction to Cross-Chain ERC-4337 Analytics

As account abstraction via ERC-4337 gains adoption across multiple EVM-compatible blockchains, analysts face the challenge of tracking and comparing smart account usage across different chains. This chapter explores the creation and use of aggregated tables that unify ERC-4337 data across chains.

## The Cross-Chain Data Challenge

Account abstraction is being implemented on numerous chains:

* Ethereum Mainnet
* Optimism
* Arbitrum
* Polygon
* Base
* Avalanche
* BNB Chain
* Gnosis Chain
* And many more...

Each chain has its own EntryPoint deployments, bundlers, paymasters, and wallet implementations. However, the underlying data structure of UserOperations remains largely consistent.

## Building Cross-Chain ERC-4337 Tables

### Step 1: Identify Common Data Structures

We start by identifying the core ERC-4337 data elements that are consistent across chains:

\`\`\`sql
-- Common UserOperation fields across all chains
CREATE TABLE erc4337_unified.user_operations (
  id SERIAL PRIMARY KEY,
  blockchain VARCHAR NOT NULL,   -- Chain identifier
  block_number BIGINT NOT NULL,
  block_time TIMESTAMP NOT NULL,
  user_op_hash BYTEA NOT NULL,   -- Hash of the UserOperation
  tx_hash BYTEA NOT NULL,        -- Transaction hash
  sender BYTEA NOT NULL,         -- Wallet contract address
  nonce NUMERIC NOT NULL,
  entry_point BYTEA NOT NULL,    -- EntryPoint contract
  paymaster BYTEA,               -- Optional paymaster
  factory BYTEA,                 -- Optional factory (from initCode)
  gas_used NUMERIC,
  success BOOLEAN,
  bundler BYTEA,                 -- Transaction sender
  UNIQUE (blockchain, user_op_hash)
);

-- Index for efficient queries
CREATE INDEX idx_user_operations_block_time ON erc4337_unified.user_operations (block_time);
CREATE INDEX idx_user_operations_sender ON erc4337_unified.user_operations (sender);
\`\`\`

### Step 2: Create Unified Chain-Specific Views

Next, we create chain-specific views that map to our unified schema:

\`\`\`sql
-- Ethereum Mainnet UserOperations
CREATE VIEW erc4337_unified.user_operations_ethereum AS
SELECT
  'ethereum' as blockchain,
  block_number,
  block_time,
  user_op_hash,
  tx_hash,
  sender,
  nonce,
  entry_point,
  paymaster,
  factory,
  gas_used,
  success,
  bundler
FROM ethereum.erc4337_user_operations;

-- Optimism UserOperations
CREATE VIEW erc4337_unified.user_operations_optimism AS
SELECT
  'optimism' as blockchain,
  block_number,
  block_time,
  user_op_hash,
  tx_hash,
  sender,
  nonce,
  entry_point,
  paymaster,
  factory,
  gas_used,
  success,
  bundler
FROM optimism.erc4337_user_operations;

-- Additional chains follow the same pattern...
\`\`\`

### Step 3: Create Unified Data Model with dbt

Using dbt (data build tool), we can create a more maintainable unified model:

\`\`\`sql
-- models/erc4337/unified/unified_user_operations.sql
{{
  config(
    schema = 'erc4337_unified',
    alias = 'user_operations',
    materialized = 'incremental',
    file_format = 'delta',
    incremental_strategy = 'merge',
    unique_key = ['blockchain', 'user_op_hash']
  )
}}

{% set chains = [
  'ethereum',
  'optimism',
  'arbitrum',
  'polygon',
  'base',
  'avalanche',
  'bnb',
  'gnosis'
] %}

{% for chain in chains %}
SELECT
  '{{ chain }}' as blockchain,
  block_number,
  block_time,
  user_op_hash,
  tx_hash,
  sender,
  nonce,
  entry_point,
  paymaster,
  factory,
  gas_used,
  success,
  bundler
FROM {{ ref('erc4337_' ~ chain ~ '_user_operations') }}
{% if not loop.last %} UNION ALL {% endif %}
{% endfor %}
\`\`\`

## Cross-Chain Analytics Queries

With our unified tables in place, we can now perform powerful cross-chain analyses:

### 1. Adoption Comparison Across Chains

\`\`\`sql
-- Compare ERC-4337 adoption across chains
SELECT
  date_trunc('day', block_time) as day,
  blockchain,
  COUNT(*) as user_operations,
  COUNT(DISTINCT sender) as active_wallets
FROM erc4337_unified.user_operations
WHERE block_time > now() - interval '90 days'
GROUP BY 1, 2
ORDER BY 1 DESC, 3 DESC
\`\`\`

### 2. Cross-Chain Wallet Usage

Identify wallets that operate across multiple chains:

\`\`\`sql
-- Find wallets active on multiple chains
WITH wallet_chains AS (
  SELECT
    sender,
    COUNT(DISTINCT blockchain) as chain_count,
    array_agg(DISTINCT blockchain) as chains_used
  FROM erc4337_unified.user_operations
  WHERE block_time > now() - interval '30 days'
  GROUP BY 1
  HAVING COUNT(DISTINCT blockchain) > 1
)

SELECT
  chain_count,
  COUNT(*) as wallet_count,
  100.0 * COUNT(*) / SUM(COUNT(*)) OVER () as percentage
FROM wallet_chains
GROUP BY 1
ORDER BY 1
\`\`\`

### 3. Chain Migration Patterns

Analyze how users migrate between chains:

\`\`\`sql
-- Chain migration patterns
WITH wallet_chain_activity AS (
  SELECT
    sender,
    blockchain,
    MIN(block_time) as first_activity,
    MAX(block_time) as last_activity
  FROM erc4337_unified.user_operations
  GROUP BY 1, 2
),

wallet_activity_ordered AS (
  SELECT
    sender,
    blockchain,
    first_activity,
    ROW_NUMBER() OVER (PARTITION BY sender ORDER BY first_activity) as chain_order
  FROM wallet_chain_activity
)

SELECT
  first_chain.blockchain as first_chain,
  second_chain.blockchain as second_chain,
  COUNT(*) as migration_count
FROM wallet_activity_ordered first_chain
JOIN wallet_activity_ordered second_chain 
  ON first_chain.sender = second_chain.sender
  AND first_chain.chain_order = 1
  AND second_chain.chain_order = 2
GROUP BY 1, 2
ORDER BY 3 DESC
\`\`\`

### 4. Paymaster Usage Across Chains

Compare paymaster strategies across different chains:

\`\`\`sql
-- Paymaster usage by chain
SELECT
  blockchain,
  CASE 
    WHEN paymaster IS NULL THEN 'No Paymaster'
    ELSE 'With Paymaster'
  END as paymaster_usage,
  COUNT(*) as op_count,
  COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (PARTITION BY blockchain) as percentage
FROM erc4337_unified.user_operations
WHERE block_time > now() - interval '30 days'
GROUP BY 1, 2
ORDER BY 1, 3 DESC
\`\`\`

### 5. Bundler Market Share by Chain

Analyze bundler dominance across different networks:

\`\`\`sql
-- Bundler market share by chain
WITH bundler_activity AS (
  SELECT
    blockchain,
    bundler,
    COUNT(*) as ops_bundled,
    100.0 * COUNT(*) / SUM(COUNT(*)) OVER (PARTITION BY blockchain) as market_share
  FROM erc4337_unified.user_operations
  WHERE block_time > now() - interval '30 days'
  GROUP BY 1, 2
)

SELECT
  blockchain,
  bundler,
  COALESCE(b.bundler_name, 'Unknown') as bundler_name,
  ops_bundled,
  market_share
FROM bundler_activity a
LEFT JOIN erc4337_unified.bundler_metadata b ON a.bundler = b.address
WHERE market_share > 1.0  -- Only show bundlers with >1% share
ORDER BY blockchain, market_share DESC
\`\`\`

## Advanced Cross-Chain Metrics

### 1. Chain-Specific Gas Efficiency

Compare the gas efficiency of AA operations across chains:

\`\`\`sql
-- Gas efficiency by chain
SELECT
  blockchain,
  AVG(gas_used) as avg_gas_used,
  PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY gas_used) as median_gas_used,
  MIN(gas_used) as min_gas_used,
  MAX(gas_used) as max_gas_used
FROM erc4337_unified.user_operations
WHERE block_time > now() - interval '30 days'
  AND success = true
GROUP BY 1
ORDER BY 2
\`\`\`

### 2. Implementation Popularity Across Chains

Identify which wallet implementations are most popular on each chain:

\`\`\`sql
-- Wallet implementation popularity by chain
WITH implementations AS (
  SELECT
    blockchain,
    factory,
    COUNT(DISTINCT sender) as wallet_count,
    COUNT(*) as op_count
  FROM erc4337_unified.user_operations
  WHERE block_time > now() - interval '90 days'
  GROUP BY 1, 2
)

SELECT
  i.blockchain,
  i.factory,
  COALESCE(w.implementation_name, 'Unknown') as implementation_name,
  i.wallet_count,
  i.op_count,
  100.0 * i.wallet_count / SUM(i.wallet_count) OVER (PARTITION BY i.blockchain) as wallet_share
FROM implementations i
LEFT JOIN erc4337_unified.wallet_implementations w 
  ON i.factory = w.factory_address 
  AND i.blockchain = w.blockchain
ORDER BY i.blockchain, i.wallet_count DESC
\`\`\`

### 3. Cross-Chain vs Single-Chain User Behavior

Compare behavior of users who operate on multiple chains versus those who stick to one:

\`\`\`sql
-- Cross-chain vs single-chain user behavior
WITH wallet_chain_counts AS (
  SELECT
    sender,
    COUNT(DISTINCT blockchain) as chain_count
  FROM erc4337_unified.user_operations
  WHERE block_time > now() - interval '60 days'
  GROUP BY 1
),

wallet_activity AS (
  SELECT
    u.sender,
    COUNT(*) as op_count,
    AVG(CASE WHEN paymaster IS NOT NULL THEN 1 ELSE 0 END) as paymaster_usage_rate,
    COUNT(DISTINCT date_trunc('day', block_time)) as active_days,
    c.chain_count
  FROM erc4337_unified.user_operations u
  JOIN wallet_chain_counts c ON u.sender = c.sender
  WHERE block_time > now() - interval '60 days'
  GROUP BY 1, c.chain_count
)

SELECT
  CASE
    WHEN chain_count = 1 THEN 'Single-chain users'
    ELSE 'Multi-chain users'
  END as user_type,
  COUNT(*) as wallet_count,
  AVG(op_count) as avg_operations,
  AVG(paymaster_usage_rate) as avg_paymaster_usage,
  AVG(active_days) as avg_active_days
FROM wallet_activity
GROUP BY 1
ORDER BY 1
\`\`\`

## Building a Cross-Chain ERC-4337 Dashboard

Using these unified tables, we can create a comprehensive dashboard that shows:

1. **Adoption Overview**
   - Daily UserOperations by chain
   - Active smart accounts by chain
   - New wallet deployments by chain

2. **Cross-Chain Activity**
   - Multi-chain wallet percentage
   - Chain preference changes over time
   - First-chain vs. expansion-chain comparison

3. **Implementation Analysis**
   - Wallet implementation market share by chain
   - Bundler market share by chain
   - Paymaster usage patterns by chain

4. **Performance Metrics**
   - Gas efficiency comparison
   - Transaction success rates
   - Operation complexity across chains

## Challenges in Cross-Chain ERC-4337 Analytics

Several challenges arise when unifying ERC-4337 data across chains:

### 1. Address Consistency

The same logical entity may have different addresses on different chains. To solve this:

\`\`\`sql
-- Create a mapping table for logical entities across chains
CREATE TABLE erc4337_unified.logical_entity_mapping (
  logical_entity_id VARCHAR PRIMARY KEY,
  entity_type VARCHAR NOT NULL,  -- 'bundler', 'paymaster', 'factory', etc.
  ethereum_address BYTEA,
  optimism_address BYTEA,
  arbitrum_address BYTEA,
  polygon_address BYTEA,
  -- additional chains...
  metadata JSONB  -- Additional metadata about the entity
);
\`\`\`

### 2. Implementation Differences

Subtle implementation differences exist between chains:

\`\`\`sql
-- Track implementation differences
CREATE TABLE erc4337_unified.implementation_differences (
  blockchain VARCHAR NOT NULL,
  entry_point BYTEA NOT NULL,
  implementation_version VARCHAR NOT NULL,
  differences_from_standard TEXT,
  PRIMARY KEY (blockchain, entry_point)
);
\`\`\`

### 3. Data Availability Latency

Different chains have different data availability guarantees. Address this by tracking:

\`\`\`sql
-- Track data freshness
SELECT
  blockchain,
  MAX(block_time) as latest_block_time,
  now() - MAX(block_time) as data_lag
FROM erc4337_unified.user_operations
GROUP BY 1
ORDER BY 3
\`\`\`

## The Future of Cross-Chain ERC-4337 Analytics

As account abstraction adoption grows, cross-chain analytics will evolve:

1. **Unified Identity Tracking**: Following the same logical user across chains
2. **Cross-Chain UX Comparison**: Measuring which chains provide better AA user experience
3. **Ecosystem Competition Analysis**: How ecosystems compete for AA wallet share
4. **Standardization Monitoring**: Tracking implementation convergence or divergence
5. **Cross-Chain Paymaster Economics**: Comparing paymaster business models across chains

## Conclusion

ERC-4337 is inherently cross-chain compatible, and its adoption across multiple EVM chains creates rich opportunities for comparative analytics. By building unified, aggregated tables that normalize data across chains, analysts can gain deeper insights into:

- How users migrate between chains
- Which chains provide the best AA experience
- How implementation strategies differ by ecosystem
- Where innovation in AA features is happening fastest

As account abstraction becomes the dominant wallet paradigm, these cross-chain metrics will become essential for understanding user behavior in an increasingly multi-chain world.
`,
  },
  {
    number: 18,
    title: "Why the Future Belongs to Onchain Analysts",
    mdContent: `# 18. Why the Future Belongs to Onchain Analysts

## The Rise of Transparent Finance

We are witnessing a pivotal shift in financial systems — from closed, proprietary infrastructures to open, transparent protocols. This transition is creating unprecedented opportunities for data analysts who can extract insights from blockchain data.

### The Transparency Revolution

Traditional finance operates behind closed doors:
- Bank transactions are private
- Trading activity is only partially reported
- Lending terms are hidden in fine print
- Settlement occurs days after trading

In contrast, blockchain finance is radically transparent:
- Every transaction is publicly visible
- Trading occurs on public venues
- Lending happens through open protocols
- Settlement is instantaneous and verifiable

This transparency creates an entirely new playing field where analysts with the right skills can gain unprecedented insights.

## The Growing Demand for Onchain Analysis

The market for blockchain analytics is experiencing rapid growth:

\`\`\`sql
-- Simulated growth of onchain data volume
WITH data_growth AS (
  SELECT
    date_trunc('month', generate_series(
      '2018-01-01'::timestamp,
      '2025-12-01'::timestamp,
      interval '1 month'
    )) as month,
    CASE
      WHEN date_part('year', generate_series) < 2020 THEN
        10000 * date_part('year', generate_series) - 20000000
      WHEN date_part('year', generate_series) < 2022 THEN
        50000 * date_part('year', generate_series) - 100000000
      ELSE
        100000 * date_part('year', generate_series) - 200000000
    END as monthly_transactions
)

SELECT
  month,
  monthly_transactions,
  SUM(monthly_transactions) OVER (ORDER BY month) as cumulative_transactions
FROM data_growth
WHERE month >= '2018-01-01'
ORDER BY month
\`\`\`

Several factors are driving this growth:

### 1. Institutional Adoption

Major financial players are entering the blockchain space:
- BlackRock launching Bitcoin ETFs
- JPMorgan developing blockchain settlement systems
- Major banks offering crypto custody
- Traditional finance firms hiring blockchain analysts

### 2. Regulatory Requirements

Regulators worldwide are increasing scrutiny of blockchain activities:
- AML compliance requirements
- Transaction monitoring mandates
- Risk assessment requirements
- Forensic investigation needs

### 3. Strategic Decision-Making

Organizations need blockchain data for strategic decisions:
- Protocol governance
- Treasury management
- Competitive analysis
- Market opportunities

### 4. Research and Development

Blockchain data fuels innovation:
- Academic research
- Protocol design
- Market structure analysis
- Novel financial products

## The Unique Skill Set of Onchain Analysts

Onchain analysts combine several disciplines:

1. **Database query skills**
   - SQL mastery for data extraction
   - Query optimization for large datasets
   - Complex joins across multiple tables

2. **Blockchain domain knowledge**
   - Protocol mechanics understanding
   - Smart contract architecture
   - Tokenomics principles
   - DeFi mechanism design

3. **Financial analysis**
   - Market structure analysis
   - Liquidity assessment
   - Risk modeling
   - Valuation methodologies

4. **Data visualization**
   - Effective chart design
   - Interactive dashboard creation
   - Time-series visualization
   - Network graph representation

5. **Critical thinking**
   - Separating signal from noise
   - Identifying meaningful patterns
   - Questioning assumptions
   - Drawing measured conclusions

## Career Opportunities for Onchain Analysts

The job market for blockchain analysts is diversifying:

| Role | Organization Type | Key Responsibilities |
|------|-------------------|----------------------|
| Blockchain Data Analyst | Analytics Platforms | Building queries and dashboards for users |
| Protocol Analyst | DAOs & Foundations | Analyzing protocol performance and health metrics |
| DeFi Risk Analyst | Investment Firms | Assessing risk and opportunities in DeFi |
| Onchain Market Analyst | Trading Firms | Tracking market microstructure and liquidity |
| Blockchain Economist | Research Organizations | Studying tokenomics and economic patterns |
| Compliance Analyst | Exchanges & Regulated Entities | Transaction monitoring and risk flagging |
| Smart Contract Analyst | Security Firms | Auditing contract behavior and risk patterns |
| NFT Market Analyst | NFT Platforms | Tracking collection performance and trends |
| Gaming Economics Analyst | Web3 Gaming Companies | Analyzing in-game economies and behavior |
| Treasury Manager | DAOs & Corporations | Managing protocol or corporate treasury |

## The Future Landscape

Several emerging trends will further expand opportunities for onchain analysts:

### 1. AI-Enhanced Analytics

Machine learning combined with blockchain data will:
- Identify anomalous transactions
- Predict market movements
- Automatically surface insights
- Scale analysis capabilities

### 2. Real-World Asset Tokenization

As traditional assets move onchain:
- Real estate analytics
- Securities analysis
- Supply chain tracking
- Carbon credit verification

### 3. Cross-Chain Analytics

The multi-chain ecosystem demands:
- Unified data models
- Cross-chain capital flow tracking
- Comparative protocol analysis
- Fragmented liquidity assessment

### 4. Layer 2 and Data Availability Layers

New scaling solutions create:
- Multi-layered data analysis
- Rollup behavior tracking
- DA sampling validation
- Bridged asset monitoring

### 5. Privacy Solutions

Privacy technologies will require:
- Statistical approaches to analysis
- Zero-knowledge proof validation
- Privacy pool monitoring
- Compliance solutions for private transactions

## Building Your Career as an Onchain Analyst

To succeed in this field:

### 1. Develop Technical Proficiency

Master the fundamental skills:
- Learn SQL thoroughly (including window functions, CTEs, etc.)
- Understand blockchain structure and event logs
- Build visualization skills (Dune, Flipside, Footprint, etc.)
- Basic programming in Python or R for data analysis

### 2. Build a Public Portfolio

Showcase your skills through:
- Public dashboards on analytics platforms
- GitHub repositories with analysis scripts
- Blog posts explaining methodologies
- Twitter threads highlighting insights

### 3. Join the Analytics Community

Connect with peers:
- Participate in Discord communities (Dune, Nansen, etc.)
- Attend blockchain analytics meetups and conferences
- Contribute to open-source analytics projects
- Join data-focused DAOs and working groups

### 4. Specialize Strategically

Develop expertise in areas with growing demand:
- Cross-chain analytics
- DeFi risk assessment
- MEV and market structure
- RWA tokenization metrics
- Privacy-preserving analytics

## Conclusion

The blockchain revolution is still in its early stages, but the analytical foundations being laid today will shape how we understand this new financial system for decades to come.

As an onchain analyst, you have a unique opportunity to:

1. **Help shape a new financial paradigm**
   - Contribute to the design of more efficient, fair markets
   - Enable transparent governance and accountability
   - Create metrics that define success in the space

2. **Develop high-demand, transferable skills**
   - Database querying at scale
   - Financial data analysis
   - Critical evaluation of complex systems
   - Technical communication

3. **Work at the frontier of innovation**
   - Analyze mechanisms never before possible
   - Study novel economic and social arrangements
   - Contribute to groundbreaking research

The transparent economy created by blockchain technology demands skilled analysts who can convert raw data into actionable insights. By developing your skills in this area, you position yourself at the forefront of the most significant transformation in financial systems since the digital revolution.

As blockchains continue to evolve and adoption accelerates, the demand for skilled onchain analysts will only grow. The future of finance is transparent, and those who can navigate and interpret this transparency will play a crucial role in shaping that future.
`,
  },
];

