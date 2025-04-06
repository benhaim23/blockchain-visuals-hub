
export interface ManifestoChapter {
  number: number;
  title: string;
  pdfPath: string;
  mdPath?: string;
  mdContent?: string;
}

export const manifestoChapters: ManifestoChapter[] = [
  { 
    number: 0, 
    title: "The Onchain Analyst Decoding the Transparent Economy", 
    pdfPath: "/Onchain Manifesto/The Onchain Analyst Decoding the Transparent Economy.pdf",
    mdContent: `## **The Onchain Analyst Decoding the Transparent Economy**

> "What if the most transparent data system in the world was hiding in plain sight?"

Blockchains were invented to move value—but their real revolution lies in what they make visible. Every transaction, every wallet interaction, every contract call—recorded immutably, forever, on a public ledger. For anyone who's ever struggled to get data out of an opaque API or waited days for a centralized platform to export analytics, this is a paradigm shift hiding in plain sight.

We're not talking about a financial tool anymore. We're talking about the largest open data layer humanity has ever seen—updated in real time, accessible by anyone, owned by no one.

### The Transparent Economy

In the Web2 world, analysts are often boxed in by platforms. Want user data from TikTok? Good luck. Want merchant behavior data from Shopify? That's gated. APIs are rate-limited, access is monetized, and proprietary data is fiercely protected.

In Web3, everything is inverted.

On Ethereum, you can query every single interaction with Uniswap. You can see how much liquidity someone added, when they withdrew, how much they earned. You can reconstruct the NFT boom, trace wallet behaviors across chains, detect rug pulls in real time, and monitor DAO treasuries with surgical precision.

And you don't need permission.

You just need the skill to read the chain.

### The Rise of the Onchain Analyst

This is the job of the onchain analyst: to decode the transparent economy.

Just as Web2 birthed a generation of growth hackers, data engineers, and business intelligence teams—Web3 is giving rise to a new role. Equal parts data scientist, protocol archaeologist, and community informant. Onchain analysts don't just study metrics—they track behavior, detect patterns, and tell stories with data that anyone can verify.

And unlike most industries, onchain data has no gatekeepers.

If you can write SQL, understand wallet behavior, and know how protocols work—you can contribute to some of the most important conversations in crypto. You can expose risk. You can quantify adoption. You can track how real people interact with decentralized systems in ways that shape billion-dollar outcomes.

### Hidden in Plain Sight

The irony is that most of this goes unnoticed.

While the public worries about "crypto scams" and token prices, analysts who understand the raw onchain data are quietly surfacing some of the most actionable insights in tech.

From identifying MEV (miner extractable value) to tracing stablecoin liquidity flows during a banking crisis, from detecting wash trading on NFT marketplaces to flagging vulnerabilities in lending protocols—onchain analysts have become the decentralized world's most powerful sensemakers.

But we're still early.

Many DAOs, funds, and protocols are just waking up to the power of structured analytics. Tools like Dune, Flipside, Nansen, and Tenderly are making onchain data more usable—but there's still a massive skills gap.

This series is your guide to closing that gap.

### Why This Series?

This isn't just a technical tutorial. It's a manifesto.

We believe onchain analytics is the next frontier of open data science. The analysts who master it will play pivotal roles in the evolution of DeFi, DAOs, token governance, NFT economies, cross-chain infrastructure, and more.

Throughout this series, we'll explore:

- How to use Dune to build dashboards from raw blockchain data  
- What the daily life of an onchain analyst looks like  
- How to analyze NFTs, DeFi, MEV, lending, and more  
- How to write effective SQL for blockchains  
- Why tools like Spellbook and Dune API are game-changers  
- How Account Abstraction introduces new analyst primitives  

Whether you're a data analyst entering crypto or a crypto native learning data, this series is for you.

**This is your invitation to join the forefront of decentralized intelligence.**

Let's begin.
`
  },
  { 
    number: 1, 
    title: "What Does an Onchain Data Analyst Do?", 
    pdfPath: "/Onchain Manifesto/01. What Does an Onchain Data Analyst Do?.pdf",
    mdContent: `# **01. What Does an Onchain Data Analyst Do?**

> "The most powerful analysts in Web3 aren't waiting for a data export—they're reading the chain in real time."

The onchain analyst is a new breed of data professional, born from the transparency of blockchains and the explosion of decentralized systems. Their skill set bridges finance, data science, and crypto-native curiosity. Where most see wallets and tokens, the onchain analyst sees behavior, patterns, risk, and opportunity.

They are the sensemakers of Web3.

### The Mission: Decode the Transparent Economy

Unlike Web2 analysts who operate within closed platforms, the onchain analyst works in the open. Their raw material isn't Google Analytics or Salesforce dashboards—it's wallet addresses, smart contracts, token movements, and immutable ledgers. Their job is to extract meaning from what is often overwhelming raw data.

And because all blockchain activity is public, analysts are no longer limited by what companies are willing to share.

This is analytics without permission.

### Daily Activities of an Onchain Analyst

**1. Building Dashboards**

- Monitor protocol KPIs: TVL, active users, transaction volumes
- Track token performance, staking activity, or treasury outflows
- Visualize contract interactions (e.g., Uniswap LP positions, lending activity on Aave)

**2. Writing SQL Queries**

- Query raw blockchain data from platforms like Dune or Flipside
- Join data from contracts, prices, tokens, wallets, and events
- Identify specific wallet behaviors (e.g., whales, sybil patterns, bot activity)

**3. Research and Reporting**

- Analyze how protocols are being used—and by whom
- Surface anomalies in user behavior (wash trading, manipulation, dormant wallet activity)
- Contribute to DAO discussions with onchain metrics
- Support governance proposals with real data

**4. Monitoring Risks and Flows**

- Watch stablecoin inflows/outflows to/from exchanges
- Flag large smart wallet transactions
- Measure liquidity migration across chains

**5. Collaborating with Protocols or Communities**

- Deliver analytics as part of DAO research teams, grants, or core contributor roles
- Help shape incentive designs or tokenomics using historical behavioral insights
- Provide transparent reporting for LPs, community members, and token holders

---

### Core Tools of the Trade

Here are the most common tools in the onchain analyst's toolkit:

| Tool         | Purpose                                                     |
| ------------ | ----------------------------------------------------------- |
| Dune     | SQL-powered dashboarding with rich blockchain datasets      |
| Flipside | Community-driven data science and bounty ecosystem          |
| Nansen   | Wallet labeling, token flow analytics, smart money tracking |
| Parsec   | Real-time DeFi charts and monitoring                        |
| Tenderly | Developer and contract execution tracing                    |
| DeBank   | Portfolio and wallet-level views across DeFi                |

But tools are only part of the job. The real value lies in asking the right questions.

---

### Onchain vs Traditional Analytics

Let's contrast the onchain experience with the traditional one:

| Dimension   | Web2 Analytics           | Onchain Analytics                |
| ----------- | ------------------------ | -------------------------------- |
| Data Access | Gated, private APIs      | Public, permissionless ledgers   |
| Granularity | Platform-defined         | Transaction- and address-level   |
| Latency     | Aggregated post-hoc      | Real-time, streaming if needed   |
| Trust Model | Vendor trust (black box) | Trustless (verifiable onchain)   |
| Portability | Vendor-locked            | Fully open-source and exportable |

In Web3, you don't wait for someone to provide the numbers—you query the chain yourself.

---

### Use Cases Where Onchain Analysts Shine

- Detecting Wash Trading: Identify patterns of repeated NFT transfers at high volume/low cost  
- MEV Detection: Quantify sandwich attacks, backrunning, or liquidations  
- DAO Treasury Oversight: Track how funds are moved, spent, and diversified  
- Protocol Health Monitoring: Flag abnormal TVL drops or liquidity rugging events  
- Whale Tracking: Follow influential wallets across chains and protocols  
- Tokenomics Analysis: Understand vesting unlocks, supply dynamics, and staking behavior

---

### Why This Role Is Only Growing

As more value, more users, and more infrastructure moves onchain, the need to interpret it grows in tandem. The days of trusting PDFs or quarterly reports are over. Anyone can build a real-time, interactive, public dashboard that updates live and shows how a billion-dollar system is behaving.

Analysts who embrace this shift will not only contribute insight—they'll help shape the direction of the industry.

In Web3, data isn't just something you analyze.

**It's something you help govern.**

---

### Coming Up Next

In the next article, we'll explore the foundational data stack of the onchain analyst—from understanding blockchain data models to decoding what makes a Dune query tick.

**Next: The Onchain Stack — SQL, Spellbook, and Decoding UTXOs**
`
  },
  { 
    number: 2, 
    title: "The Onchain Stack — SQL, Spellbook, and Decoding UTXOs", 
    pdfPath: "/Onchain Manifesto/02. The Onchain Stack- SQL, Spellbook, and Decoding UTXOs.pdf",
    mdContent: `# **02. The Onchain Stack: SQL, Spellbook, and Decoding UTXOs**

> "You can't analyze what you don't understand. The onchain stack starts with knowing your data."

Every onchain analyst begins their journey not with a dashboard—but with a schema. To build meaningful insights, you need to understand how blockchain data is structured, what types of interactions it captures, and how to retrieve exactly what you need.

This article dives into the foundation of the onchain data stack. From Bitcoin's UTXO model to Ethereum's account model, from writing reusable queries in Dune's Spellbook to designing your first modular dashboard—we'll show you how real analysts read the chain.

---

### First, Know the Models: UTXO vs. Account-Based

The two primary models in blockchain data are fundamentally different.

#### 🔗 **Bitcoin: UTXO (Unspent Transaction Output)**

Bitcoin doesn't track balances. Instead, every wallet's "balance" is the sum of unspent outputs it controls. Each transaction consumes previous outputs and generates new ones—like handing in old bills to receive change.

**Key tables on Dune:**

- bitcoin.outputs: Where each BTC was sent
- bitcoin.inputs: Where each BTC came from (linked to previous outputs)

#### 📘 **Ethereum: Account-Based**

Ethereum uses a stateful model like a bank ledger. Wallets (EOAs) and smart contracts (CAs) have balances, and transactions mutate this shared state.

**Key tables on Dune:**

- ethereum.transactions: Every transaction on Ethereum
- ethereum.token_transfers: ERC-20 token activity
- ethereum.logs: Raw event logs emitted by contracts

---

### Meet the Spellbook: Abstraction at Scale

Dune's **Spellbook** is a powerful open-source layer that lets you create reusable views across complex data.

Instead of repeating long subqueries or joining six tables every time, you can define a **spell** once—then use it like any regular table.

For example, rather than querying five different smart contracts for SpaceID registrations, you can define a spell called spaceid_bnb_registrations that abstracts this logic. Other users can then build on top of your work without copying and pasting raw SQL.

#### Benefits:

- ✅ Better maintainability
- 🔄 Live updates for all dashboards when the spell is updated
- 💡 A shared knowledge layer across the analyst community

**Spellbook = open-source data infrastructure.**

---

### Example: Coin Days Destroyed (CDD) on Bitcoin

CDD is one of the most important behavioral indicators in Bitcoin analytics. It combines **value** and **time** by calculating how long coins have been dormant before they move.

#### 🔍 The Formula:

Coin Days = BTC amount * Days since last moved
When coins move → Coin Days are "destroyed"

Large spikes in CDD signal movement from long-term holders—often considered "smart money." These events often precede market turning points.

#### On Dune:

You can build this by:

- Fetching **bitcoin.outputs** (the creation of UTXOs)
- Linking to **bitcoin.inputs** (the spend of UTXOs)
- Calculating the time delta between them
- Multiplying that by the BTC amount

> You've just built an economic time-weighted activity metric—with zero API dependencies.

---

### Design Principles for Onchain Dashboards

Good dashboards don't just visualize—they **answer questions**.

Here's a framework:

**1. What is the thing?**  

- Show the state: daily CDD, active addresses, volume, etc.

**2. Why did it change?**  

- Decompose across dimensions: time of day, wallet type, transaction size.

Example: A spike in CDD might come from a **single whale**, or a **broad movement** of dormant wallets. Your dashboard should show both.

---

### Tools You'll Use

| Tool               | Purpose                                         |
| ------------------ | ----------------------------------------------- |
| Dune Spellbook | Abstract repeated logic into reusable SQL views |
| DBT            | Compiles and tests spells in the Spellbook repo |
| Git + GitHub   | Collaborate on community-driven data pipelines  |

Want to contribute? Fork the [Dune Spellbook repo](https://github.com/duneanalytics/spellbook), write a new spell, and submit a PR. Your work could power dashboards used by thousands.

---

### You Are Not Just Querying—You're Engineering Insights

This is what separates surface-level data pulls from true onchain analytics. When you know how to:

- Decipher UTXO flows  
- Join event logs with contract interactions  
- Build modular spells that others can depend on  
- Understand both data *and* the systems that generate it

…you stop being a user of data and start becoming a builder of meaning.

---

### Up Next

Now that we've covered the foundational models and infrastructure, it's time to get hands-on.

In the next article, we'll walk you through the Dune platform itself—how to write queries, use table explorers, and start building your first onchain dashboard.

**Next: The Dune Platform — A Gateway to Onchain Transparency**
`
  },
  { 
    number: 3, 
    title: "The Dune Platform — A Gateway to Onchain Transparency", 
    pdfPath: "/Onchain Manifesto/03. The Dune Platform- A Gateway to Onchain Transparencyconomy.pdf",
    mdContent: `# **03. The Dune Platform: A Gateway to Onchain Transparency**

> "You don't need to run a node. You just need a query."

At first glance, blockchains seem like a mess of cryptographic hashes and pseudonymous wallets. But behind the complexity lies one of the most powerful features of this technology: every action is stored on a public ledger—and you can query it.

That's where **Dune** comes in.

Dune is a powerful analytics platform that transforms the firehose of raw blockchain data into a structured, queryable database. It's where data analysts, protocol teams, and community sleuths go to build dashboards, monitor behavior, and uncover what's really happening onchain.

Let's get you oriented.

---

## Why Dune?

Think of Dune as the **SQL-powered Google for blockchain activity**. It sits on top of the raw data from EVM chains and lets you query, join, visualize, and share insights—without needing to set up a node, parse hex logs, or manage infrastructure.

### 🔍 Key Benefits

- **Instant access to decoded data** across Ethereum, Polygon, Arbitrum, Base, Optimism, and others  
- **No need to run a node or process logs manually**
- **Custom SQL queries** with live results
- **Powerful dashboards** that update automatically
- **Community-driven Spellbook** for reusable query logic
- **Free-tier access to build and publish**

---

## Navigating the Interface

When you open [dune.com](https://dune.com), you'll find:

### 🧾 **Queries**

This is where the magic happens. Every query is a SQL script that pulls from decoded blockchain tables.

- Use the **query editor** to write and run SQL
- Visualize results with tables, charts, or graphs
- Save your queries, fork others, or share links publicly

### 📊 **Dashboards**

Dashboards are collections of queries with visualizations. They let you tell a story with data.

- Track metrics over time (TVL, swap volume, active users)
- Combine multiple chains or protocols in one place
- Embed charts in blog posts, docs, or Notion pages

### 📚 **Table Explorer**

Explore the underlying schema.

- Filter by blockchain (e.g. \`ethereum\`, \`arbitrum\`, \`bitcoin\`)
- Browse by category: \`transactions\`, \`token_transfers\`, \`logs\`, etc.
- View column definitions and data samples

### 🧙‍♀️ **Spellbook**

A collection of curated, reusable models written by the Dune community and maintained in the open-source Spellbook repo.

- Abstracts complex logic into reusable tables
- Contributes to standardization of metrics across dashboards
- Learn more in our dedicated Spellbook article

---

## Core Tables You'll Use Often

| Table                      | Description                                            |
| -------------------------- | ------------------------------------------------------ |
| \`ethereum.transactions\`    | All Ethereum L1 transactions                           |
| \`ethereum.token_transfers\` | ERC-20 transfer events                                 |
| \`ethereum.logs\`            | Raw event logs from contracts                          |
| \`ethereum.traces\`          | Internal transactions (e.g. from smart contract calls) |
| \`prices.usd\`               | Historical token prices by minute                      |
| \`erc20.events\`             | Decoded logs for token transfers, approvals, etc.      |
| \`erc721.events\`            | NFT mints, transfers, sales, and metadata              |
| \`uniswap_v3.swaps\`         | Detailed DEX activity for Uniswap v3                   |
| \`compound.liquidations\`    | Liquidation activity in lending protocols              |

> These are the building blocks of DeFi, NFT, and wallet behavior analytics.

---

## Getting Started with a Query

Here's a simple example: count the daily number of Ethereum transactions over the past 30 days.

\`\`\`sql
SELECT
  date_trunc('day', block_time) AS day,
  COUNT(*) AS tx_count
FROM ethereum.transactions
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

Click **Run**, and you'll see a time series of transaction counts. Add a line chart, give it a title, and you've just built your first visualization.

------

## Forking and Iterating

Dune is collaborative by design.

- Found a cool dashboard? **Fork it**, and customize it for your use case.
- Need a metric that doesn't exist? Build it, publish it, and help others.

Each query is a learning opportunity. Reading, editing, and reverse-engineering community dashboards is one of the fastest ways to learn.

------

## DuneSQL vs Legacy Engine

Dune is currently transitioning from the legacy engine to **DuneSQL**, a modular and more scalable engine based on **Databricks** and **dbt**.

We'll explore this in-depth later, but know that:

- **DuneSQL** uses a separate editor and schema
- **Spellbook models** are written for DuneSQL only
- Long-term support and future features will prioritize DuneSQL

> If you're just getting started, build in DuneSQL.

------

## Best Practices

- **Use \`date_trunc\`** to group time series cleanly
- **Add \`WHERE block_time >\`** to filter large tables
- **Join with \`prices.usd\`** for consistent USD metrics
- **Document your queries**—future you (and others) will thank you
- **Use \`limit\` when exploring** new tables to avoid timeouts

------

## What You Can Build

- 🏦 DAO treasury trackers
- 📈 DEX volume and LP revenue dashboards
- 🎨 NFT minting + secondary market trend boards
- 🧠 MEV activity heatmaps
- 🔎 Whales and wallet label explorers
- 🧱 Protocol-specific analytics: Compound, Aave, Lido, etc.

You're limited only by your creativity—and your understanding of the underlying data.

------

## Ready to Query the Chain?

The Dune platform gives you a real-time lens into the most transparent data system ever created. It's free, powerful, and open.

But like any tool, it's only as good as the person using it.

In the next article, we'll dig deeper into the structure of blockchain tables—how to read them, understand them, and link them together to tell meaningful stories.

**Next: Understanding Tables — Ethereum, Bitcoin, NFTs, ERC4337, and More**
`
  },
  { 
    number: 4, 
    title: "Understanding Tables — Ethereum, Bitcoin, NFTs, ERC4337, and More", 
    pdfPath: "/Onchain Manifesto/04. Understanding Tables — Ethereum, Bitcoin, NFTs, ERC4337, and More.pdf",
    mdContent: `# 04. Understanding Tables — Ethereum, Bitcoin, NFTs, ERC4337, and More

If the blockchain is the raw ledger, and Dune is the window into it—then tables are the DNA of onchain analytics.

To do real work as an onchain data analyst, you need to know how blockchain data is structured, how Dune organizes it, and how to query the right fields.

This article walks through the anatomy of blockchain tables—covering Ethereum, Bitcoin, ERC4337 (Account Abstraction), NFTs, and more.

---

## The EVM Data Model

Most blockchains supported by Dune are **EVM-compatible** (Ethereum Virtual Machine), meaning they use the same account-based structure:

- **EOAs (Externally Owned Accounts):** wallets controlled by private keys  
- **Contract Accounts:** smart contracts that execute code when called  

Every action on an EVM chain emits:

- A **transaction**
- One or more **events** (emitted from smart contracts)
- Changes to **state** (tracked via internal calls)

Dune decodes all of these into readable tables.

---

## Core Ethereum Tables

Here are the most essential tables you'll use on Ethereum and other EVM chains:

### \`ethereum.transactions\`

Every transaction sent on the network.

**Key fields:**

- \`hash\`: transaction hash  
- \`from\`, \`to\`: sender and recipient  
- \`value\`: ETH transferred  
- \`gas_used\`, \`gas_price\`: cost of execution  
- \`block_time\`: timestamp  

---

### \`ethereum.logs\`

Decoded event logs from smart contracts.

**Use this to capture things like:**

- Token transfers  
- NFT mints  
- DAO proposals  
- DEX swaps  

You'll often filter by \`event_name\` and \`contract_address\`.

---

### \`ethereum.token_transfers\`

Normalized view of ERC20 transfers (built from \`logs\`).

**Key fields:**

- \`token_address\`: contract address of the token  
- \`from\`, \`to\`: sender and receiver  
- \`amount\`: token amount  
- \`block_time\`: when it happened  

This is useful for tracking token flow, whale movements, or airdrops.

---

### \`prices.usd\`

Maps token prices over time for consistent USD calculations.

**Join on:**  
- \`contract_address\`  
- \`minute\` (rounded timestamp)  

---

## NFT Tables

For NFTs, Dune often decodes each major collection or marketplace into its own schema.

Look for schemas like:

- \`seaport_ethereum\` (OpenSea)  
- \`blur_ethereum\`  
- \`nft_ethereum\`  
- \`erc721_transfers\`  

Track:

- \`minted\`, \`sold\`, \`transferred\`, \`burned\`
- Price, buyer, seller, royalty fees

---

## Bitcoin Tables: UTXO Model

Unlike Ethereum's account model, Bitcoin uses a **UTXO** (Unspent Transaction Output) model.

That means there is no "account balance." Instead, wallets hold a collection of unspent outputs.

Dune provides:

### \`bitcoin.inputs\`

Each input spent in a BTC transaction.

**Fields:**

- \`address\`: the spender  
- \`value\`: amount of BTC  
- \`block_time\`: when the transaction occurred  

---

### \`bitcoin.outputs\`

Each output generated in a BTC transaction.

**Fields:**

- \`address\`: the receiver  
- \`value\`: BTC received  
- \`block_time\`: timestamp  

Together, these two tables allow analysis of HODLing behavior, coin lifespan, and metrics like **Coin Days Destroyed (CDD)**.

---

## ERC-4337 Tables (Account Abstraction)

ERC-4337 introduces a new way of transacting using smart contract wallets.

Dune decodes these contracts into a special schema—\`erc4337\`.

### \`erc4337_<chain>.EntryPoint_v0_6_evt_UserOperationEvent\`

Each user operation submitted via a smart wallet.

**Fields to know:**

- \`sender\`: the smart wallet  
- \`paymaster\`: who paid gas  
- \`actualGasCost\`: gas used  
- \`success\`: if the operation succeeded  

Also explore:

- \`AccountDeployed\` events  
- \`handleOps()\` calls  
- \`EntryPoint\` contract interactions  

---

## Aggregated Spellbook Tables

Dune's community-built **Spellbook** offers aggregated, cleaned-up models across chains.

Instead of querying 9 versions of a table, use:

- \`account_abstraction_erc4337.userops\`: unified ERC-4337 activity  
- \`uniswap_v3.uniswap_v3_swaps\`: all Uniswap V3 swaps across chains  
- \`nft.trades\`: normalized NFT sales data  

We'll explore Spellbook more later—just know these **save time** and **boost consistency**.

---

## Best Practices

- Always filter by \`block_time >\` to avoid scanning full history  
- Use \`date_trunc('day', timestamp)\` to group time series  
- Join with \`prices.usd\` to convert token amounts to USD  
- Use \`LIMIT\` when exploring new tables  
- Use \`LOWER()\` to normalize addresses when joining  
- Explore schema docs in the left-hand panel of Dune's editor  

---

## Where to Find Table Names

In the Dune query editor:

- Look to the left sidebar  
- Browse by chain → schema → table  
- Click a table to preview fields and structure  

Or type \`/ethereum.\` to trigger autocomplete.

---

## You Are What You Query

Every meaningful dashboard starts with understanding the structure beneath it.

In Web2, this might mean knowing the difference between GA4 and Mixpanel.

In Web3, it means understanding tables like:

- \`ethereum.transactions\`  
- \`erc20.token_transfers\`  
- \`bitcoin.outputs\`  
- \`erc4337.UserOperationEvent\`  
- \`spellbook.models.uniswap_v3_swaps\`  

Once you master the table structure, the data opens up.

---

**Next: 05. SQL Basics for Blockchain Analytics**
`
  },
  { 
    number: 5, 
    title: "SQL Basics for Blockchain Analytics", 
    pdfPath: "/Onchain Manifesto/05. SQL Basics for Blockchain Analytics.pdf",
    mdContent: `# 05. SQL Basics for Blockchain Analytics

To unlock insights from onchain data, you need one essential tool: **SQL**.

It's the language that lets you ask questions like:

- "How many users swapped on Uniswap last week?"
- "Which wallets minted the most NFTs yesterday?"
- "What's the average gas fee per transaction over time?"
- "How much revenue did this protocol generate in the last 30 days?"

SQL (Structured Query Language) is the backbone of every great onchain dashboard—and you don't need to be a software engineer to learn it.

This guide will help you speak fluent SQL in the blockchain context.

---

## SQL on Dune: A Quick Refresher

Dune uses **PostgreSQL-style syntax** with some extensions for time and math functions.

Queries are typically structured like this:

\`\`\`sql
SELECT column_1, column_2
FROM table_name
WHERE conditions
GROUP BY column_1
ORDER BY column_1
\`\`\`

Let's look at each part in the context of onchain data.

------

## SELECT: Choose What You Want

Use \`SELECT\` to define the columns you want to display.

Example:

\`\`\`sql
SELECT 
  block_time, 
  from_address, 
  to_address, 
  value
FROM ethereum.transactions
\`\`\`

You can also use functions inside \`SELECT\`, such as:

- \`COUNT(*)\` – total rows
- \`SUM(value)\` – total value transferred
- \`AVG(gas_price)\` – average gas fee

------

## WHERE: Filter the Data

You don't want all of history—just what matters.

\`\`\`sql
WHERE block_time > now() - interval '7 days'
\`\`\`

Other common conditions:

\`\`\`sql
WHERE value > 0
WHERE from = LOWER('0xabc123...')
WHERE contract_address = '0xUniswapV3Pool'
\`\`\`

✅ Use \`LOWER()\` to normalize addresses when joining or filtering.

------

## GROUP BY: Aggregate the Results

Use \`GROUP BY\` when you want to summarize data.

Example: count swaps per day:

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  COUNT(*) AS swap_count
FROM uniswap_v3.uniswap_v3_swaps
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

💡 \`date_trunc()\` is your best friend for time series.

------

## JOIN: Combine Tables

Join lets you merge data from different tables—for example, adding USD prices:

\`\`\`sql
SELECT 
  t.block_time,
  t.token_address,
  t.amount / 1e18 AS token_amount,
  p.price,
  (t.amount / 1e18) * p.price AS amount_usd
FROM erc20.token_transfers t
LEFT JOIN prices.usd p
  ON t.token_address = p.contract_address
  AND date_trunc('minute', t.block_time) = p.minute
WHERE t.block_time > now() - interval '7 days'
\`\`\`

🧠 Always match on both \`token_address\` and \`minute\` for price joins.

------

## CASE: Create Custom Categories

Conditional logic with \`CASE\` lets you label rows:

\`\`\`sql
SELECT
  CASE 
    WHEN amount > 1000 THEN 'whale'
    WHEN amount > 100 THEN 'mid-tier'
    ELSE 'small'
  END AS size_category,
  COUNT(*) AS tx_count
FROM erc20.token_transfers
GROUP BY 1
\`\`\`

------

## Common Functions in Blockchain Analytics

- \`COUNT(*)\`: number of rows (events, transactions)
- \`SUM(column)\`: total tokens transferred or gas used
- \`AVG(column)\`: average gas fee, average swap size
- \`MAX/MIN\`: largest NFT sale, smallest transfer
- \`RANK()/ROW_NUMBER() OVER (PARTITION BY ...)\`: leaderboard logic
- \`date_trunc('day', timestamp)\`: daily grouping

------

## Template Queries to Get You Started

**Daily transaction count:**

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  COUNT(*) AS txs
FROM ethereum.transactions
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

**Top NFT minters (past 7 days):**

\`\`\`sql
SELECT 
  minter, 
  COUNT(*) AS mints
FROM nft_ethereum.mints
WHERE block_time > now() - interval '7 days'
GROUP BY 1
ORDER BY 2 DESC
LIMIT 10
\`\`\`

**Uniswap revenue in USD (last 30 days):**

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(fee_amount_usd) AS daily_revenue
FROM uniswap_v3.fees
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

------

## Mistakes to Avoid

🚫 Querying full tables without a time filter → always use \`WHERE block_time >\`

🚫 Joining price data without \`date_trunc('minute')\` → you'll miss matches

🚫 Comparing uppercase and lowercase addresses → use \`LOWER()\` consistently

🚫 Using \`SELECT *\` in big tables → only select the fields you need

------

## Why SQL Matters in Web3

SQL is the **lingua franca of data**—and onchain data is just a new domain.

If you can write clear, thoughtful queries, you can:

- Understand protocol health
- Monitor DAO treasuries
- Detect suspicious activity
- Track product usage
- Inform investment decisions

You're not just writing queries—you're building visibility in a transparent economy.

------

**Next: 06. Useful Queries — From Token Transfers to Whale Watching**
`
  },
  { 
    number: 6, 
    title: "Useful Queries — From Token Transfers to Whale Watching", 
    pdfPath: "/Onchain Manifesto/06. Useful Queries — From Token Transfers to Whale Watching.pdf",
    mdContent: `# 06. Useful Queries — From Token Transfers to Whale Watching

Once you're comfortable with SQL, the next step is mastering the right questions to ask.

Onchain data is rich—but messy. The best analysts learn to cut through the noise and surface signal. In this article, we'll share a collection of **useful query templates** for everyday analysis—whether you're building dashboards, writing reports, or just exploring.

Each example below includes the query goal, key tables, and a reusable SQL snippet.

---

## 🪙 Token Transfers

**Goal**: Track ERC20 transfers by volume or frequency.

**Table**: \`erc20.token_transfers\`

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  COUNT(*) AS transfer_count,
  SUM(amount / 1e18) AS token_volume
FROM erc20.token_transfers
WHERE token_address = LOWER('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48') -- USDC
  AND block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

🧠 Tip: Use \`LOWER()\` for all token/wallet addresses to ensure case-insensitive matching.

------

## 🧼 NFT Wash Trading Detection

**Goal**: Spot suspicious NFT sales to self or known alt wallets.

**Table**: \`nft.trades\`

\`\`\`sql
SELECT 
  buyer,
  seller,
  COUNT(*) AS trades,
  SUM(price_usd) AS volume
FROM nft.trades
WHERE buyer = seller
  AND block_time > now() - interval '30 days'
GROUP BY 1, 2
ORDER BY 4 DESC
\`\`\`

🧠 Tip: Filter trades where buyer = seller or use wallet clustering to flag sybil behavior.

------

## 🏦 DAO Treasury Monitoring

**Goal**: Track stablecoin inflows/outflows to a DAO-controlled multisig.

**Table**: \`erc20.token_transfers\`

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(CASE WHEN to_address = LOWER('0xDAOwallet') THEN amount / 1e6 ELSE 0 END) AS inflow,
  SUM(CASE WHEN from_address = LOWER('0xDAOwallet') THEN amount / 1e6 ELSE 0 END) AS outflow
FROM erc20.token_transfers
WHERE token_address = LOWER('0xdAC17F958D2ee523a2206206994597C13D831ec7') -- USDT
  AND block_time > now() - interval '60 days'
GROUP BY 1
ORDER BY 1
\`\`\`

------

## 🧠 Whale Watching

**Goal**: Identify the top ERC20 recipients in the past week.

**Table**: \`erc20.token_transfers\`

\`\`\`sql
SELECT 
  to_address, 
  COUNT(*) AS tx_count,
  SUM(amount / 1e18) AS received_tokens
FROM erc20.token_transfers
WHERE block_time > now() - interval '7 days'
GROUP BY 1
ORDER BY 3 DESC
LIMIT 10
\`\`\`

🧠 Tip: Use this with labels or merge with wallet tag datasets to identify CEXs, whales, or teams.

------

## 📈 DEX Swap Volume by Token

**Goal**: Analyze swap volume for a specific token on Uniswap V3.

**Table**: \`uniswap_v3.uniswap_v3_swaps\`

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount_usd) AS daily_volume
FROM uniswap_v3.uniswap_v3_swaps
WHERE (token_in = LOWER('0x...') OR token_out = LOWER('0x...')) -- Insert token
  AND block_time > now() - interval '14 days'
GROUP BY 1
ORDER BY 1
\`\`\`

------

## 💸 Protocol Fee Revenue

**Goal**: Measure revenue accrued by protocols with fee switches enabled.

**Table**: protocol-specific (e.g., \`uniswap_v3.fees\`, \`aave.liquidations\`, etc.)

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(fee_amount_usd) AS revenue
FROM uniswap_v3.fees
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

🧠 Tip: Use \`prices.usd\` to normalize gas or token fees to USD for consistency.

------

## 🛠️ Cross-Chain Activity (Spellbook)

If you're using Spellbook models from DuneSQL, try this unified userop query:

\`\`\`sql
SELECT 
  blockchain,
  COUNT(*) AS ops,
  SUM(op_fee_usd) AS total_fees
FROM account_abstraction_erc4337.userops
WHERE block_time > now() - interval '14 days'
GROUP BY 1
ORDER BY 3 DESC
\`\`\`

------

## 📊 Dashboard Building Patterns

- Use \`date_trunc()\` for time series
- Normalize to USD when comparing tokens
- Always use \`LIMIT\` when exploring large tables
- Comment your code for future you (and others!)
- Combine queries with CTEs to keep logic clean

------

## 🧭 Where to Find More Queries

- Browse the [Dune Discover page](https://dune.com/browse/dashboards)
- Explore the [Spellbook GitHub repo](https://github.com/duneanalytics/spellbook)
- Fork dashboards from top analysts (and reverse-engineer!)
- Join Telegram/Discord communities and ask questions

------

## Your Onchain Toolbox Grows

As you start saving useful queries, you'll build your own **playbook** of blockchain insights.

Eventually, you'll recognize patterns before writing code:

- Airdrop season? Check claim activity and sybil patterns.
- New NFT mint? Track mint velocity and secondary flips.
- Yield spike? Trace source of new liquidity and associated risk.

**Next: 07. NFT Analysis — Wash Trading, Mint Trends, and Market Health**
`
  },
  { 
    number: 7, 
    title: "NFT Analysis — Wash Trading, Mint Trends, and Market Health", 
    pdfPath: "/Onchain Manifesto/07. NFT Analysis — Wash Trading, Mint Trends, and Market Health.pdf",
    mdContent: `# 07. NFT Analysis — Wash Trading, Mint Trends, and Market Health

NFTs are more than jpegs. They're programmable assets, social signals, financial instruments—and, occasionally, tools for manipulation.

As an onchain analyst, your job is to cut through the hype and uncover what's actually happening.

In this article, we'll explore how to analyze NFT ecosystems: track mint activity, spot wash trading, and measure collector behavior across marketplaces.

---

## 🧱 NFT Data Structure

NFT interactions primarily involve:

- **Minting** (creation of new tokens)
- **Transfers** (wallet-to-wallet moves)
- **Trades** (buy/sell on a marketplace)

On Dune, the main tables are:

- \`nft.mints\`
- \`nft.trades\`
- \`nft.transfers\`

These tables are normalized across chains (Ethereum, Polygon, etc.) and marketplaces (OpenSea, Blur, LooksRare, etc.).

---

## 🎨 Analyzing Mint Trends

**Goal**: Understand how a new collection is being minted.

\`\`\`sql
SELECT 
  date_trunc('hour', block_time) AS hour,
  COUNT(*) AS mints,
  COUNT(DISTINCT minter) AS unique_minters
FROM nft.mints
WHERE nft_contract_address = LOWER('0x...')
  AND block_time > now() - interval '3 days'
GROUP BY 1
ORDER BY 1
\`\`\`

🧠 Tip: Early spikes in mints with low unique minters = possible botting.

You can also add a \`ROW_NUMBER()\` window to see **who minted the most**, or join with \`nft.transfers\` to see how quickly minted NFTs are flipped.

------

## 🔁 Spotting Wash Trading

Wash trading occurs when a user sells NFTs back and forth between wallets they control to simulate volume.

**Simple heuristic**: \`buyer = seller\` or sales between two wallets repeatedly.

\`\`\`sql
SELECT 
  buyer,
  seller,
  COUNT(*) AS trades,
  SUM(price_usd) AS volume
FROM nft.trades
WHERE buyer = seller
  AND block_time > now() - interval '30 days'
GROUP BY 1, 2
ORDER BY 4 DESC
\`\`\`

🧠 Advanced tip: Use clustering logic or wallet label datasets to catch repeat interactions across wallets.

------

## 💰 Marketplace Comparison

Want to know where volume is happening?

\`\`\`sql
SELECT 
  marketplace,
  COUNT(*) AS trades,
  SUM(price_usd) AS volume
FROM nft.trades
WHERE block_time > now() - interval '7 days'
GROUP BY 1
ORDER BY 3 DESC
\`\`\`

This tells you who's dominating: Blur, OpenSea, X2Y2, etc.

You can go deeper by analyzing:

- Blur bid pool activity
- OpenSea royalties paid
- Unique wallets per platform

------

## 📊 Holder Behavior & Distribution

Use \`nft.transfers\` to build a simple holder distribution analysis:

\`\`\`sql
SELECT 
  to_address,
  COUNT(*) AS holdings
FROM nft.transfers
WHERE nft_contract_address = LOWER('0x...')
  AND block_time <= now()
GROUP BY 1
ORDER BY 2 DESC
LIMIT 50
\`\`\`

🧠 Tip: Long-tail holders = healthier community. High concentration = whale risk.

To get **time-based snapshots** (e.g. holders at mint vs. now), you'll need to filter by block height or use snapshots from historical transfer state.

------

## 🧠 Common Questions NFT Analysts Ask

- Who minted the collection and how quickly?
- What's the average holding time before flipping?
- Are royalties being enforced (or bypassed)?
- Which whales are entering or exiting positions?
- Are there signs of inorganic volume or manipulation?

You can answer all of this with queries across \`nft.trades\`, \`nft.transfers\`, and \`nft.mints\`.

------

## 📚 Bonus: NFT Marketplace Tables in Dune

| Table                           | Description                                          |
| ------------------------------- | ---------------------------------------------------- |
| \`nft.trades\`                    | Unified view of NFT sales across marketplaces        |
| \`nft.mints\`                     | NFT minting activity (e.g. who minted what and when) |
| \`nft.transfers\`                 | Raw transfer logs, great for holder analysis         |
| \`blur.trades\`, \`opensea.trades\` | Marketplace-specific sales                           |
| \`nft.aggregators\`               | Activity via Gem, Genie, Blur                        |

------

## 📈 Real Dashboards You Can Fork

- Blur Trading Dashboard
- Mint & Flip Monitor
- NFT Royalty Tracker
- Holder Distribution Charts

------

## 🧠 Mindset Shift

NFTs are not just art—they're behavioral data. Mint speed, holding duration, marketplace choice, wallet overlap—this is alpha.

Good NFT analysts aren't just collectors. They're pattern readers.

They detect sybils before the airdrop. They flag suspicious volume before a pump. They watch when big wallets exit.

------

**Next: 08. Lending Protocols — Risk, Liquidations, and User Behavior**
`
  },
  { 
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
  },
  { 
    number: 9, 
    title: "DeFi Analysis — Liquidity, Incentives, and TVL Dynamics", 
    pdfPath: "/Onchain Manifesto/09. DeFi Analysis — Liquidity, Incentives, and TVL Dynamics.pdf",
    mdContent: `# 09. DeFi Analysis — Liquidity, Incentives, and TVL Dynamics

At the core of DeFi is a simple loop: deposit assets, earn yield, move capital.

But beneath the surface, liquidity providers, traders, and protocols are locked in a constant dance of incentives, token emissions, and governance decisions. As an onchain analyst, your job is to measure those dynamics—and help others make sense of what's moving the markets.

This article covers how to analyze DeFi protocols using onchain data.

---

## 🧠 What Is DeFi?

DeFi (Decentralized Finance) refers to financial protocols built on public blockchains. Instead of banks, there are smart contracts. Instead of intermediaries, there's math.

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

Let's measure TVL on a simple protocol using a cumulative sum of deposits – withdrawals:

\`\`\`sql
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
\`\`\`

🧠 Note: More advanced TVL models will track by asset and convert to USD using token price joins.

------

## 🧮 Example: DEX Volume

Let's see Uniswap swap volume by day:

\`\`\`sql
SELECT 
  DATE_TRUNC('day', evt_block_time) AS day,
  SUM(amount0 * price0_usd + amount1 * price1_usd) AS daily_volume_usd
FROM uniswap_v3_ethereum.Swap
WHERE evt_block_time > NOW() - INTERVAL '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

You can also group by \`pool_address\` or \`token\` to break down where volume is happening.

------

## 🧠 Understanding Incentives

Many protocols emit their native token to attract users:

- Aave emissions: \`stkAAVE\`
- Curve gauges: \`CRV\`
- Uniswap: LP tokens, no emissions
- GMX: \`esGMX\`, fee revenue, and escrowed tokens

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
 ✅ Use clear labels: "Volume (USD)", "TVL (ETH)", etc
 ✅ Cross-reference with governance proposals or tokenomics changes

------

## 🧠 Final Thoughts

DeFi is constantly evolving. Protocols fork, token incentives change, and new yield strategies emerge every week. But behind all of it is user behavior—and that behavior is visible, in real time, through onchain data.

As an analyst, your role is to demystify these flows:

- Where is liquidity moving?
- What incentives are working?
- What risks are hiding in plain sight?

DeFi isn't just code—it's a financial system powered by human decisions.

Measure them.

------

**Next: 10. MEV on Uniswap — Understanding and Quantifying Extracted Value**
`
  },
  { 
    number: 10, 
    title: "MEV on Uniswap — Understanding and Quantifying Extracted Value", 
    pdfPath: "/Onchain Manifesto/10. MEV on Uniswap — Understanding and Quantifying Extracted Value.pdf",
    mdContent: `# 10. MEV on Uniswap — Understanding and Quantifying Extracted Value

MEV—Miner (or Maximal) Extractable Value—is one of the most important, misunderstood, and data-rich frontiers in onchain analysis.

It's where bots race for profit, arbitrage transactions, and reorder blocks. It's where liquidity providers are frontrun, slippage is weaponized, and users unknowingly pay a hidden tax.

As an onchain analyst, understanding MEV is critical for protocol design, user protection, and infrastructure insights.

Let's unpack what MEV is, how to analyze it on Uniswap, and what it reveals about the invisible incentives shaping DeFi.

---

## 🤔 What Is MEV?

MEV refers to the value a validator (or block producer) can extract by:

- Reordering transactions
- Inserting their own transactions
- Censoring or delaying others

Originally dubbed "miner extractable value," it has since evolved to include searchers, solvers, and validators in systems like Ethereum post-merge.

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

Uniswap V2 and V3 are **the epicenter of MEV activity** because:

- They're the largest DEXs by volume
- Their transparent pricing functions are easy to model
- Their high liquidity makes MEV opportunities profitable
- Their contracts emit comprehensive event logs for analysis

---

## 🔍 Identifying Sandwich Attacks

A sandwich attack occurs when a bot:

1. Sees your pending "victim" transaction in the mempool
2. Places a transaction **before** yours (frontrun)
3. Places another transaction **after** yours (backrun)

The net effect: your trade gets a worse price, and the attacker profits.

Here's how to detect them:

\`\`\`sql
WITH swaps AS (
  SELECT
    block_number,
    tx_index,
    "to" AS pool,
    tx_hash,
    amount0_in,
    amount1_in,
    amount0_out,
    amount1_out
  FROM uniswap_v2_ethereum.swaps
  WHERE block_time > NOW() - INTERVAL '1 day'
),
-- Find transactions with the same pool in the same block with adjacent tx_index
potential_sandwiches AS (
  SELECT
    s1.block_number,
    s1.pool,
    s1.tx_hash AS front_tx,
    s2.tx_hash AS victim_tx,
    s3.tx_hash AS back_tx
  FROM swaps s1
  JOIN swaps s2 
    ON s1.block_number = s2.block_number 
    AND s1.pool = s2.pool 
    AND s2.tx_index = s1.tx_index + 1
  JOIN swaps s3 
    ON s2.block_number = s3.block_number 
    AND s2.pool = s3.pool 
    AND s3.tx_index = s2.tx_index + 1
)
SELECT * FROM potential_sandwiches
LIMIT 10
\`\`\`

This is a simplified approach. In practice, you'd add validation to check that:

- The token flow direction matches (in → out → in)
- The attacker's addresses match in the front and back transactions
- The profit is positive

---

## 📊 Measuring MEV by Volume

How much value is extracted via MEV on Uniswap?

\`\`\`sql
SELECT
  DATE_TRUNC('day', block_time) AS day,
  SUM(profit_usd) AS total_mev_usd,
  COUNT(*) AS attack_count
FROM mev.sandwich_attacks
WHERE block_time > NOW() - INTERVAL '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

Note: You may need to use a more specialized MEV dataset or Spellbook model for complete data.

---

## 🦊 MEV Bots: Identifying the Players

MEV bots tend to have distinct patterns:

- High gas prices to win priority
- Flashbots bundle inclusion
- Contract-based execution
- Repeat addresses/contracts

\`\`\`sql
SELECT
  from_address AS bot_address,
  COUNT(*) AS tx_count,
  SUM(gas_price * gas_used) / 1e18 AS total_gas_eth,
  COUNT(DISTINCT block_number) AS blocks_active
FROM ethereum.transactions
WHERE to_address IN (SELECT DISTINCT contract_address FROM mev.known_bots)
  AND block_time > NOW() - INTERVAL '7 days'
GROUP BY 1
ORDER BY 2 DESC
LIMIT 20
\`\`\`

---

## 🧩 Flashbots and MEV-Boost

Since the Merge, MEV extraction has become more formalized through **MEV-Boost** relays.

To analyze this ecosystem:

\`\`\`sql
SELECT
  DATE_TRUNC('day', block_time) AS day,
  relay,
  COUNT(*) AS blocks,
  AVG(value_extracted) AS avg_mev_per_block
FROM ethereum.mev_boost_relay_blocks
WHERE block_time > NOW() - INTERVAL '30 days'
GROUP BY 1, 2
ORDER BY 1, 2
\`\`\`

---

## 📈 Does MEV Impact Protocol Revenue?

An interesting question: **Does MEV extraction reduce protocol revenue?**

\`\`\`sql
SELECT
  DATE_TRUNC('day', s.block_time) AS day,
  -- Non-MEV swaps
  COUNT(CASE WHEN m.is_mev_tx IS NULL THEN 1 END) AS regular_swap_count,
  SUM(CASE WHEN m.is_mev_tx IS NULL THEN s.fee_usd ELSE 0 END) AS regular_swap_fees,
  -- MEV swaps
  COUNT(CASE WHEN m.is_mev_tx = TRUE THEN 1 END) AS mev_swap_count,
  SUM(CASE WHEN m.is_mev_tx = TRUE THEN s.fee_usd ELSE 0 END) AS mev_swap_fees
FROM uniswap_v3.swaps s
LEFT JOIN mev.classified_txs m ON s.tx_hash = m.tx_hash
WHERE s.block_time > NOW() - INTERVAL '7 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## 💡 MEV Protection Mechanisms

Some protocols have introduced MEV protection:

- **Uniswap X**: Intent-based trading with off-chain solving
- **CoWSwap**: Batch auctions that prevent frontrunning
- **Chainlink CCIP**: Cross-chain transactions with MEV protection

You can measure their effectiveness by comparing user outcomes:

\`\`\`sql
SELECT
  protocol,
  AVG(price_impact_percent) AS avg_price_impact,
  COUNT(CASE WHEN is_sandwiched THEN 1 END) * 100.0 / COUNT(*) AS sandwich_percent
FROM dex.swaps_with_mev_labels
GROUP BY 1
ORDER BY 3
\`\`\`

---

## 🧠 Final Thoughts

MEV isn't inherently bad—it helps markets reach efficiency. But it can harm users and raise questions about decentralization.

As an analyst, your role isn't to judge but to **measure, detect, and explain** these complex dynamics.

The best MEV dashboards don't just show numbers; they explain:

- How user behavior creates MEV opportunities
- Which protocols extract or resist extraction
- Where value is flowing in the MEV supply chain

Ultimately, MEV sits at the intersection of code, economics, and game theory—a perfect playground for onchain analysts.

---

**Next: 11. Uniswap Multichain Analytics — Comparing Deployments Across Chains**
`
  },
  { 
    number: 11, 
    title: "Uniswap Multichain Analytics — Comparing Deployments Across Chains", 
    pdfPath: "/Onchain Manifesto/11. Uniswap Multichain Analytics — Comparing Deployments Across Chains.pdf",
    mdPath: "/Onchain Manifesto/11. Uniswap Multichain Analytics — Comparing Deployments Across Chains.md"
  },
  { 
    number: 12, 
    title: "Useful Metrics Every Analyst Should Track", 
    pdfPath: "/Onchain Manifesto/12. Useful Metrics Every Analyst Should Track.pdf",
    mdContent: `# 12. Useful Metrics Every Analyst Should Track

As an onchain analyst, your job is to turn raw blockchain data into meaningful insights. But what metrics actually matter?

This article catalogues the most useful metrics for protocols, DAOs, and Web3 projects—the numbers that tell real stories about user engagement, product adoption, financial health, and more.

Whether you're building dashboards for DAOs or conducting due diligence for investors, these are the metrics that drive decisions.

---

## 🧠 The Metrics Mindset

Good metrics have certain qualities:

- **Relevance**: They measure something stakeholders care about
- **Actionability**: They inform specific decisions
- **Comparability**: They allow for benchmarking
- **Reliability**: They resist manipulation
- **Simplicity**: They're easy to understand

Most importantly, the best metrics tell stories—about users, value flows, risks, or opportunities.

---

## 💸 Protocol Financial Health

| Metric                     | Description                                             | Why It Matters                              |
| -------------------------- | ------------------------------------------------------- | ------------------------------------------- |
| **Total Value Locked**     | Assets committed to a protocol                          | Shows capital scale and collateralization   |
| **Daily Active Users**     | Unique addresses interacting per day                    | Reflects real usage vs. total accounts      |
| **Protocol Revenue**       | Fees earned by the protocol                             | Measures direct monetization                |
| **LP Revenue**             | Value accruing to liquidity providers                   | Shows incentive alignment                   |
| **Cost Per Active User**   | Protocol expenses / active users                        | Efficiency of user acquisition              |
| **Profit Retention Ratio** | % of revenue retained after expenses                    | Sustainability of token model               |
| **Incentives vs. Usage**   | $ incentives distributed / $ total activity             | Reliance on artificial activity boosting    |
| **Treasury Runway**        | Months of operating expenses covered by treasury assets | Financial sustainability                    |

---

## 👥 User Engagement & Retention

| Metric                     | Description                                             | Why It Matters                           |
| -------------------------- | ------------------------------------------------------- | ---------------------------------------- |
| **Retention by Cohort**    | % of users who return in subsequent time periods        | Stickiness of product                    |
| **Transaction Frequency**  | Avg. transactions per user per time period              | Usage intensity                          |
| **Wallet Age Distribution**| Distribution of wallet ages                             | New vs. experienced users                |
| **Asset Concentration**    | % of assets held by top X% of users                     | Centralization risk                      |
| **Cross-Protocol Usage**   | % of users who use multiple parts of an ecosystem       | Product integration and stickiness       |
| **Wallet Overlap**         | % of wallets shared with other protocols                | Community overlap                        |
| **First-Time vs. Returning**| Ratio of new to returning users                        | Growth vs. retention balance             |

---

## 🏛 DAO & Governance

| Metric                     | Description                                             | Why It Matters                           |
| -------------------------- | ------------------------------------------------------- | ---------------------------------------- |
| **Voter Participation**    | % of token holders who vote                             | Governance engagement                    |
| **Proposal Velocity**      | Number of proposals submitted per month                 | Community initiative                     |
| **Voting Power Distribution**| Gini coefficient of governance power                  | Centralization of control                |
| **Decision Time**          | Average time from proposal to execution                 | Governance efficiency                    |
| **Contributor Count**      | Active contributors and compensation trends             | Team growth and compensation             |
| **Treasury Diversification**| % of assets in non-native tokens                       | Risk management                          |
| **Vesting Unlocks**        | Timeline of token unlocks                               | Potential selling pressure               |

---

## 🔗 Network Growth & Adoption

| Metric                     | Description                                             | Why It Matters                           |
| -------------------------- | ------------------------------------------------------- | ---------------------------------------- |
| **Network Value / Transactions** | Market cap / daily transaction value              | Relative valuation                       |
| **Transactions per Second**| TPS average and peaks                                   | Network capacity utilization             |
| **Gas Usage**              | Total gas consumed by a protocol                        | Network resources consumed               |
| **Cross-Chain Activity**   | Usage spread across different chains                    | Multi-chain adoption                     |
| **Developer Activity**     | GitHub commits, PRs, or contributor metrics             | Technical momentum                       |
| **Integration Count**      | Protocols integrating your protocol                     | Ecosystem embeddedness                   |
| **Social Velocity**        | Growth of social metrics (Discord, Twitter)             | Community growth                         |

---

## 💰 Token & Incentive Metrics

| Metric                     | Description                                             | Why It Matters                           |
| -------------------------- | ------------------------------------------------------- | ---------------------------------------- |
| **Emissions Schedule**     | Current and projected token emissions                   | Inflationary pressure                    |
| **Staking Ratio**          | % of supply staked or locked                            | Token utility and commitment             |
| **Value Accrual**          | $ revenue per token                                     | Token economic fundamentals              |
| **Post-Incentive Retention**| Usage retained after incentives end                    | Sustainability of adoption               |
| **Token Velocity**         | Rate at which tokens change hands                       | Holding vs. transactional usage          |
| **Active Share**           | % of supply that transacts per month                    | Dormant vs. active tokens                |
| **Distribution Equality**  | Token distribution across wallet sizes                  | Centralization of token holdings         |

---

## 🧰 Protocol-Specific Metrics

Different protocol types have unique metrics that matter:

### **DEXs**

- Volume vs. TVL ratio
- Slippage per trade
- Liquidity depth
- LP concentration

### **Lending Protocols**

- Collateralization ratio
- Liquidation volume
- Utilization rate
- Borrow vs. deposit spread

### **NFT Marketplaces**

- Floor price stability
- Wash-trading adjusted volume
- Royalty income
- Unique vs. repeat collectors

---

## 📊 Building a Complete Analytics Stack

For comprehensive protocol analytics, aim to include:

1. **Daily / Monthly Active User Dashboard**  
2. **Transaction Volume & Revenue Breakdown**  
3. **Retention & Engagement Curves**  
4. **Protocol-Specific Core Metrics**
5. **Token Distribution & On-Chain Flow**
6. **Comparative Ecosystem Position**

These can be combined in a master dashboard or divided by stakeholder needs (community, investors, team).

---

## 🧠 The Metrics Hierarchy

Not all metrics are equal. Consider this hierarchy:

- **Level 1: North Star Metrics** (1-2 key drivers of success)
- **Level 2: Dashboard Metrics** (5-8 metrics for regular review)
- **Level 3: Deep Dive Metrics** (10-20 metrics for specific analyses)
- **Level 4: Raw Data** (hundreds of data points for ad-hoc queries)

Start simple and add complexity as your analysis matures.

---

## 📈 Example: A Complete DAO Dashboard

Here's what a comprehensive DAO analytics dashboard might include:

1. **Protocol Usage**: DAUs, transactions, retention
2. **Financial Health**: Revenue, TVL, treasury composition
3. **Governance**: Voting participation, proposal success rate
4. **Community**: Growth, engagement, contributor stats
5. **Ecosystem**: Integration status, partnership metrics
6. **Risk Factors**: Concentration risk, security metrics

Each of these core areas should have 3-5 focused metrics.

---

## 🧭 Why Metrics Matter

In Web3, transparency isn't optional—it's infrastructural. Anyone can query what's happening onchain. The power comes from knowing which numbers actually matter.

Great onchain analysts don't just track metrics—they create **metrics frameworks** that tell coherent stories about what's happening beneath the surface.

In the next article, we'll explore how to turn these metrics into a living, breathing analytics application using the Dune API.

**Next: 13. Dashboarding Best Practices — Organization, Analysis, and UX**
`
  },
  { 
    number: 13, 
    title: "Dashboarding Best Practices — Organization, Analysis, and UX", 
    pdfPath: "/Onchain Manifesto/13. Dashboarding Best Practices — Organization, Analysis, and UX.pdf",
    mdContent: `# 13. Dashboarding Best Practices — Organization, Analysis, and UX

The best blockchain dashboards don't just display data—they tell stories. They guide users through complex onchain activities, highlighting relevant patterns and enabling informed decisions.

This article shares battle-tested best practices for creating dashboards that don't just present metrics, but actually make sense of them.

---

## 🧠 Dashboard Philosophy

Before diving into design, let's establish some guiding principles:

1. **Your dashboard has a job**: Define what decisions it should inform
2. **Context is everything**: Raw numbers need reference points
3. **Progressive disclosure**: Essential info first, details on demand
4. **Consistency matters**: Use uniform time periods, units, colors
5. **Accessibility is key**: Clear labels, sufficient contrast, mobile-friendly

With these in mind, let's look at specific best practices.

---

## 📋 Dashboard Structure

The most effective onchain dashboards follow a clear organizational structure:

### 1. The Summary (30,000 Foot View)

Start with a condensed summary section that shows:
- Key metrics and their recent changes
- Time-series overview of critical KPIs
- Status indicators (green/yellow/red) for health metrics

### 2. The Core Sections (10,000 Foot View)

Divide content into logical sections like:
- Financial metrics (TVL, volume, revenue)
- User metrics (DAU, retention, transactions)
- Token metrics (price, distribution, staking)
- Governance metrics (votes, proposals, treasury)

### 3. The Deep Dives (Ground Level)

End with detailed, specialized sections:
- Technical details for domain experts
- Advanced filtering and segmentation
- Raw data tables and transaction lists
- Methodology notes and definitions

---

## 🎨 Visual Design Principles

Good design isn't just aesthetic—it directly impacts comprehension:

### Color Usage

- Use consistent color schemes for data categories
- Employ red/green selectively (and consider color blindness)
- Limit palette to 5-7 colors maximum
- Use color saturation to indicate importance

### Chart Selection

| Data Type | Recommended Charts |
| --------- | ------------------ |
| Time series | Line charts with appropriate time scale |
| Composition | Stacked area charts, pie charts (sparingly) |
| Comparison | Bar charts, bullet charts |
| Distribution | Histograms, scatter plots |
| Relationship | Scatter plots, heatmaps |
| Tables | Use for precise values and multi-dimension data |

### Layout Considerations

- Place related metrics adjacent to each other
- Maintain consistent time periods across sections
- Group metrics with similar scale/units
- Use responsive design for mobile friendliness

---

## 🧪 Advanced Dashboard Techniques

The best dashboards go beyond the basics:

### Interactive Elements

- Implement date range selectors
- Add filters for key dimensions (chain, protocol version, asset type)
- Create drill-down capabilities from summary to detail
- Include hover effects to reveal precise values

### Comparative Context

- Show percentile ranks where relevant
- Display benchmarks against similar protocols
- Include YoY, MoM, and WoW growth rates
- Add historical averages as reference lines

### Annotation and Documentation

- Mark key events directly on charts (upgrades, hacks, major announcements)
- Add tooltips for metric definitions
- Include methodology notes for complex calculations
- Link to relevant transactions, contracts, or governance proposals

---

## 📈 Chart-Specific Best Practices

Each chart type has its own optimization guidelines:

### Line Charts

- Start Y-axis at zero unless tracking changes in non-zero metrics
- Include clear data markers at appropriate intervals
- Use appropriate smoothing (if any)
- Limit to 3-5 lines per chart for legibility

### Bar Charts

- Maintain consistent ordering (alphabetical, value-based, or chronological)
- Use horizontal bars for long labels
- Consider log scale for data with high variance
- Include value labels directly on bars when space permits

### Tables

- Use conditional formatting to highlight outliers
- Include sparklines for trend visibility
- Limit columns to essential metrics
- Enable sorting and pagination for large datasets

---

## 🔍 Case Study: Protocol Dashboard

Let's examine a sample dashboard structure for a DeFi protocol:

**Header Section:**
- TVL, volume, revenue (24h, 7d, 30d)
- Price, market cap, fully diluted valuation
- Active users (daily, weekly, monthly)

**Financial Health:**
- TVL trends by asset type
- Volume decomposition by pair/pool
- Fee revenue and protocol earnings
- LP returns and incentives

**User Engagement:**
- New vs. returning users
- Retention curves by cohort
- Transaction frequency distribution
- Wallet size breakdown

**Token Metrics:**
- Distribution across holder types
- Staking and vesting analysis
- Supply and emissions schedule
- Governance participation

**Risk Indicators:**
- Concentration metrics
- Security and audit status
- Treasury diversification
- Reliance on subsidies

---

## 🧰 Technical Implementation Tips

For Dune Analytics dashboards specifically:

- Use parameters for flexible date ranges
- Leverage CTEs for cleaner, modular SQL
- Create reusable views in Spellbook
- Document queries with comprehensive comments
- Include methodological notes
- Build hierarchically (summary → detail)
- Use consistent naming conventions

---

## 🚫 Common Dashboard Mistakes

Avoid these frequent pitfalls:

- **Overcrowding:** Too many metrics dilute focus
- **Poor labeling:** Unclear axis names, missing units
- **Inconsistent time periods:** Mixing daily, weekly, monthly
- **Missing context:** Raw numbers without benchmarks
- **Chart abuse:** Using inappropriate visualizations
- **Undocumented methodology:** Unexplained calculations
- **Misleading scales:** Truncated Y-axes that exaggerate changes

---

## 🧠 The Narrative Approach to Dashboards

The most effective dashboards tell cohesive stories. Consider these narrative frameworks:

- **The Journey:** Show progression from user acquisition to retention
- **The Ecosystem:** Map relationships between protocols, users, and assets
- **The Comparison:** Benchmark against competitors or previous periods
- **The Investigation:** Guide users through answering specific questions

Each section should build on the previous ones, creating a logical flow.

---

## 🌟 Examples of Excellence

Study dashboards from top onchain analysts for inspiration:

- Digital Liquidity Snapshots (by hildobby)
- Uniswap Ecosystem Metrics (by Dune Core)
- NFT Collection Analysis (by GammaStrategies)
- DAO Treasury Trackers (by nguyentoan)

These exemplars combine technical depth with intuitive organization.

---

## 💎 Final Words: The Dashboard as a Product

Treat your dashboard as a product that serves users—not just a data dump. Consider:

- Who are your audience(s)?
- What decisions do they need to make?
- What context do they need?
- How can you guide them to insights?

Great dashboards evolve based on user feedback and changing needs.

---

In the next article, we'll look at building not just dashboards, but fully interactive data applications using these best practices.

**Next: 14. Spellbook Recipes — Reusable Models for Onchain Analysis**
`
  },
  { 
    number: 14, 
    title: "Spellbook Recipes — Reusable Models for Onchain Analysis", 
    pdfPath: "/Onchain Manifesto/14. Spellbook Recipes — Reusable Models for Onchain Analysis.pdf",
    mdContent: `# 14. Spellbook Recipes — Reusable Models for Onchain Analysis

Onchain analysts often find themselves repeating the same patterns—calculating daily active users, aggregating token transfers, or computing swap volumes. Instead of rewriting these patterns for every project, what if you could define them once and reuse them forever?

That's what **Dune's Spellbook** enables. It's a community-maintained repository of SQL models that transform raw blockchain data into clean, aggregated tables that anyone can query.

This article will show you how to use existing Spellbook models and contribute your own, making your analytics work more efficient and impactful.

---

## 🧠 What Is Spellbook?

Think of Spellbook as a **shared data model layer** for onchain analysis. It sits between raw blockchain data and analytics dashboards, transforming messy event logs and transactions into clean, consistent, reusable views.

Key benefits include:

- **Consistency:** Standardized definitions of metrics like "daily active users" or "DEX volume"
- **Efficiency:** Write complex transformation logic once, use it everywhere
- **Collaboration:** Build on the work of other analysts
- **Documentation:** Central repository for how metrics are calculated
- **Scalability:** Models work across chains with the same structure

Spellbook uses **dbt (data build tool)**, a standard analytics engineering framework, to transform raw data into analysis-ready models.

---

## 🧰 Structure of Spellbook

Spellbook organizes models into a hierarchy:

1. **Staging models:** Clean and standardize raw blockchain data
2. **Integration models:** Combine data across sources and chains
3. **Aggregation models:** Compute metrics and summaries
4. **Presentation models:** Final user-facing views

For example, a complete data pipeline for Uniswap might look like:

- Stage Uniswap V3 event logs from 6 different chains
- Integrate them into unified swap tables
- Aggregate daily volume by chain, pool, and token
- Present a clean "uniswap_daily_metrics" view for dashboards

---

## 📚 Popular Spellbook Models

Here are some of the most useful models you can query today:

### 🔄 DEX Models

- `dex.trades` - Unified trade data across DEXs
- `uniswap_v3.trades` - Combined Uniswap V3 data
- `curve.trades` - Curve Finance swaps

### 🪙 Token Models

- `tokens.erc20` - Token metadata and decimals
- `tokens.nft` - NFT collection details
- `erc20_ethereum.evt_transfer` - Decoded token transfers

### 👤 User & Wallet Models

- `labels.contracts` - Protocol and contract labels
- `addresses.labels` - Known address tags
- `wallet_classification.wallet_types` - Classify wallet behavior

### 🌉 Cross-Chain Models

- `bridges.flows` - Cross-chain bridge activity
- `account_abstraction_erc4337.userops` - Smart wallet operations

---

## 🧙‍♀️ Using Spellbook in Your Queries

To use a Spellbook model in your analysis, simply query it like any table:

```sql
-- Daily volume by DEX across all chains
SELECT 
  DATE_TRUNC('day', block_time) AS day,
  dex_name,
  blockchain,
  SUM(amount_usd) AS volume_usd
FROM dex.trades
WHERE block_time > NOW() - INTERVAL '30 days'
GROUP BY 1, 2, 3
ORDER BY 1, 4 DESC
```

The beauty is that this query works across all supported DEXs and chains—no need to write chain-specific logic or deal with protocol quirks.

---

## 🔍 Finding Existing Models

You can discover Spellbook models in several ways:

1. **Browse the GitHub repository:**  
   [github.com/duneanalytics/spellbook](https://github.com/duneanalytics/spellbook)

2. **Explore documentation:**  
   Look for `schema.yml` files within model directories

3. **Use autocomplete in DuneSQL:**  
   Type a schema name and hit Tab for available tables

4. **Check the Dune documentation:**  
   [dune.com/docs/spellbook](https://dune.com/docs/spellbook)

Remember to check when a model was last updated—some may be more actively maintained than others.

---

## 🛠️ Building Your Own Spellbook Models

Ready to contribute? Here's how to create your own models:

### Step 1: Understand dbt Basics

Spellbook uses dbt, so familiarize yourself with:
- SQL model files (.sql)
- YAML schema files (.yml)
- Macros and functions
- Model materialization (table, view, incremental)

### Step 2: Clone the Repository

```bash
git clone https://github.com/duneanalytics/spellbook.git
cd spellbook
```

### Step 3: Create Your Model

Example structure:
```
models/
├── protocols/
│   ├── yourprotocol/
│   │   ├── ethereum/
│   │   │   ├── yourprotocol_ethereum_events.sql
│   │   ├── yourprotocol_schema.yml
```

### Step 4: Write SQL Models

A basic example:

```sql
-- models/protocols/yourprotocol/ethereum/yourprotocol_ethereum_events.sql
{{
  config(
    schema = 'yourprotocol_ethereum',
    alias = 'events',
    materialized = 'incremental',
    file_format = 'delta',
    incremental_strategy = 'merge',
    unique_key = ['evt_block_number', 'evt_tx_hash', 'evt_index'],
  )
}}

SELECT 
  evt_block_time,
  evt_block_number,
  evt_tx_hash,
  evt_index,
  contract_address,
  event_name,
  -- other fields from your events
FROM {{ source('yourprotocol_ethereum', 'Contract_evt_Event') }}
{% if is_incremental() %}
WHERE evt_block_time >= date_trunc('day', now() - interval '7' day)
{% endif %}
```

### Step 5: Document Your Model

Create a schema.yml file:

```yaml
version: 2

models:
  - name: yourprotocol_ethereum_events
    description: >
      Events from YourProtocol on Ethereum
    columns:
      - name: evt_block_time
        description: "Block timestamp"
      # Document other columns
```

### Step 6: Submit a PR

Once tested, create a pull request to contribute your model to the community.

---

## 🔮 Advanced Spellbook Techniques

Take your models to the next level:

### Cross-Chain Aggregation

```sql
-- Create a unified model across chains
WITH ethereum_data AS (
  SELECT 'ethereum' AS blockchain, * FROM {{ ref('yourprotocol_ethereum_events') }}
),
polygon_data AS (
  SELECT 'polygon' AS blockchain, * FROM {{ ref('yourprotocol_polygon_events') }}
)

SELECT * FROM ethereum_data
UNION ALL
SELECT * FROM polygon_data
```

### Incremental Processing

For efficient updates of large tables:

```sql
{{
  config(
    materialized = 'incremental',
    incremental_strategy = 'merge',
    unique_key = ['day', 'contract_address'],
  )
}}

SELECT 
  DATE_TRUNC('day', evt_block_time) AS day,
  contract_address,
  COUNT(*) AS event_count
FROM {{ ref('base_events') }}
{% if is_incremental() %}
WHERE evt_block_time >= date_trunc('day', now() - interval '2' day)
{% endif %}
GROUP BY 1, 2
```

### Reusable Macros

Define common calculations once:

```sql
-- macros/metrics/calculate_daily_active_users.sql
{% macro calculate_daily_active_users(transactions_table, address_column) %}
  SELECT
    DATE_TRUNC('day', block_time) AS day,
    COUNT(DISTINCT {{ address_column }}) AS unique_active_users
  FROM {{ transactions_table }}
  GROUP BY 1
{% endmacro %}
```

---

## 🌐 Community Collaboration

The real power of Spellbook comes from community engagement:

- **Contribute models** for protocols you understand
- **Improve existing models** with optimizations or fixes
- **Standardize methodologies** for common metrics
- **Document your work** for others to learn from

Well-maintained Spellbook models are eventually promoted to "curated" status, becoming an official part of the Dune analytical infrastructure.

---

## 🧩 Spellbook in Action: Examples

Let's see some powerful models in practice:

### NFT Marketplace Analysis

```sql
-- Compare marketplace trading volumes
SELECT
  DATE_TRUNC('week', block_time) AS week,
  marketplace_name,
  SUM(amount_usd) AS volume_usd,
  COUNT(DISTINCT buyer) AS unique_buyers
FROM nft.trades
WHERE block_time > NOW() - INTERVAL '90 days'
GROUP BY 1, 2
ORDER BY 1 DESC, 3 DESC
```

### Cross-Chain TVL Comparison

```sql
-- TVL across lending protocols and chains
SELECT
  DATE_TRUNC('day', block_time) AS day,
  blockchain,
  protocol_name,
  SUM(deposit_usd) - SUM(withdraw_usd) AS net_tvl_usd
FROM lending.deposits
WHERE block_time > NOW() - INTERVAL '30 days'
GROUP BY 1, 2, 3
ORDER BY 1, 4 DESC
```

### User Behavior Tracking

```sql
-- First-time vs. returning DeFi users
WITH user_first_txs AS (
  SELECT
    blockchain,
    origin_address,
    MIN(block_time) AS first_transaction
  FROM dex.trades
  GROUP BY 1, 2
)

SELECT
  DATE_TRUNC('week', t.block_time) AS week,
  t.blockchain,
  -- New vs returning classification
  CASE WHEN t.block_time = u.first_transaction 
       THEN 'new_user' ELSE 'returning_user' END AS user_type,
  COUNT(DISTINCT t.origin_address) AS unique_users
FROM dex.trades t
JOIN user_first_txs u 
  ON t.origin_address = u.origin_address 
  AND t.blockchain = u.blockchain
WHERE t.block_time > NOW() - INTERVAL '90 days'
GROUP BY 1, 2, 3
ORDER BY 1, 2, 3
```

---

## 🧠 Final Thoughts: The Future of Collaborative Analytics

Spellbook represents a revolution in onchain analysis—the shift from isolated SQL scripts to a shared knowledge base of reusable models.

By contributing to and building on Spellbook, analysts create a compounding knowledge advantage. Models become more robust, metrics more standardized, and analyses more comparable.

Think of it as a **decentralized data team** working together to make sense of blockchain activity.

---

In the next article, we'll explore how to take these models beyond static dashboards and build interactive applications using the Dune API.

**Next: 15. How to Build an Onchain App Using the Dune API**
`
  },
  { 
    number: 15, 
    title: "How to Build an Onchain App Using the Dune API", 
    pdfPath: "/Onchain Manifesto/15. How to Build an Onchain App Using the Dune API.pdf",
    mdPath: "/Onchain Manifesto/15. How to Build an Onchain App Using the Dune API.md"
  }
];
