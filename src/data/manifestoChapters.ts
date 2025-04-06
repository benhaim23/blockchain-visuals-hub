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
