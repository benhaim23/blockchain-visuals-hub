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

Let's begin.`
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

**Next: The Onchain Stack — SQL, Spellbook, and Decoding UTXOs**`
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

**Next: The Dune Platform — A Gateway to Onchain Transparency**`
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

**Next: Understanding Tables — Ethereum, Bitcoin, NFTs, ERC4337, and More**`
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

**Next: 05. SQL Basics for Blockchain Analytics**`
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
- \`AVG(gas_price)\` – average gas price

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

**Next: 06. Useful Queries — From Token Transfers to Whale Watching**`
  },
  { 
    number: 6, 
    title: "Useful Queries — From Token Transfers to Whale Watching", 
    pdfPath: "/Onchain Manifesto/06. Useful Queries — From Token Transfers to Whale Watching.pdf",
    mdContent: `# 06. Useful Queries — From Token Transfers to Whale Watching

Now that you have a solid foundation in SQL, let's dive into some practical examples of how to analyze onchain data.

---

## Daily Transaction Count

Count the number of transactions per day on Ethereum.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  COUNT(*) AS txs
FROM ethereum.transactions
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Top NFT Minters

Identify the top NFT minters in the past 7 days.

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

---

## Uniswap Volume

Calculate the total volume of swaps on Uniswap V3 over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS volume
FROM uniswap_v3.swaps
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Compound Liquidations

Track liquidation activity in Compound over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS liquidations
FROM compound.liquidations
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## NFT Sales

Analyze the top NFT sales in the past 30 days.

\`\`\`sql
SELECT 
  nft_id, 
  price,
  COUNT(*) AS sales
FROM nft.trades
WHERE block_time > now() - interval '30 days'
GROUP BY 1, 2
ORDER BY 3 DESC
LIMIT 10
\`\`\`

---

## Token Transfers

Track token transfers over the past 30 days.

\`\`\`sql
SELECT 
  token_address,
  SUM(amount) AS transfers
FROM erc20.token_transfers
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 2 DESC
LIMIT 10
\`\`\`

---

## Gas Fees

Calculate the average gas fee per transaction over the past 30 days.

\`\`\`sql
SELECT 
  AVG(gas_price) AS avg_gas_fee
FROM ethereum.transactions
WHERE block_time > now() - interval '30 days'
\`\`\`

---

## Token Balances

Analyze the top token balances in the past 30 days.

\`\`\`sql
SELECT 
  token_address,
  SUM(amount) AS balance
FROM erc20.token_transfers
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 2 DESC
LIMIT 10
\`\`\`

---

## DAO Treasury Activity

Track treasury activity in a DAO over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS treasury_activity
FROM dao.treasury_activity
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## NFT Ownership

Analyze the top NFT owners in the past 30 days.

\`\`\`sql
SELECT 
  owner,
  COUNT(*) AS nfts
FROM nft_ethereum.mints
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 2 DESC
LIMIT 10
\`\`\`

---

## MEV Activity

Identify MEV activity on Uniswap V3 over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS mev_activity
FROM uniswap_v3.swaps
WHERE block_time > now() - interval '30 days'
  AND amount > 0
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Whale Watching

Track the top whale addresses in the past 30 days.

\`\`\`sql
SELECT 
  address,
  SUM(amount) AS balance
FROM erc20.token_transfers
WHERE block_time > now() - interval '30 days'
  AND amount > 1000000000000000000000000000
GROUP BY 1
ORDER BY 2 DESC
LIMIT 10
\`\`\`

---

## Account Abstraction Usage

Analyze the usage of Account Abstraction across different chains.

\`\`\`sql
SELECT 
  chain,
  COUNT(*) AS userops
FROM account_abstraction_erc4337.userops
GROUP BY 1
ORDER BY 2 DESC
LIMIT 10
\`\`\`

---

## Protocol Health

Monitor the health of a protocol over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS protocol_health
FROM protocol.health
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Conclusion

These queries provide a starting point for analyzing onchain data. As you become more comfortable with SQL, you can explore more complex queries and build dashboards that tell richer stories.

**Next: 07. NFT Analysis — Wash Trading, Mint Trends, and Market Health**`
  },
  { 
    number: 7, 
    title: "NFT Analysis — Wash Trading, Mint Trends, and Market Health", 
    pdfPath: "/Onchain Manifesto/07. NFT Analysis — Wash Trading, Mint Trends, and Market Health.pdf",
    mdContent: `# 07. NFT Analysis — Wash Trading, Mint Trends, and Market Health

NFTs are a rapidly growing asset class, and understanding their behavior is crucial for investors and protocol developers.

---

## Wash Trading

Identify patterns of repeated NFT transfers at high volume/low cost.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  COUNT(*) AS wash_trades
FROM nft_ethereum.mints
WHERE block_time > now() - interval '30 days'
  AND amount > 1000000000000000000000000000
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Mint Trends

Analyze the trend of NFT minting over time.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  COUNT(*) AS mints
FROM nft_ethereum.mints
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Market Health

Track the health of the NFT market over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS market_health
FROM nft.trades
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## NFT Ownership

Analyze the top NFT owners in the past 30 days.

\`\`\`sql
SELECT 
  owner,
  COUNT(*) AS nfts
FROM nft_ethereum.mints
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 2 DESC
LIMIT 10
\`\`\`

---

## NFT Sales

Analyze the top NFT sales in the past 30 days.

\`\`\`sql
SELECT 
  nft_id, 
  price,
  COUNT(*) AS sales
FROM nft.trades
WHERE block_time > now() - interval '30 days'
GROUP BY 1, 2
ORDER BY 3 DESC
LIMIT 10
\`\`\`

---

## NFT Supply

Analyze the supply of NFTs over time.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS supply
FROM nft_ethereum.mints
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## NFT Royalties

Analyze the distribution of NFT royalties over time.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS royalties
FROM nft_ethereum.royalties
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Conclusion

These queries provide a starting point for analyzing NFT behavior. As you become more comfortable with SQL, you can explore more complex queries and build dashboards that tell richer stories.

**Next: 08. Lending Protocols — Risk, Liquidations, and User Behavior**`
  },
  { 
    number: 8, 
    title: "Lending Protocols — Risk, Liquidations, and User Behavior", 
    pdfPath: "/Onchain Manifesto/08. Lending Protocols — Risk, Liquidations, and User Behavior.pdf",
    mdContent: `# 08. Lending Protocols — Risk, Liquidations, and User Behavior

Lending protocols are a critical component of DeFi, and understanding their behavior is crucial for investors and protocol developers.

---

## Liquidations

Track liquidation activity in lending protocols over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS liquidations
FROM compound.liquidations
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## User Behavior

Analyze user behavior on lending protocols over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS user_activity
FROM lending.user_activity
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Lending Protocol Health

Monitor the health of lending protocols over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS protocol_health
FROM lending.health
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Lending Protocol Liquidity

Analyze the liquidity of lending protocols over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS liquidity
FROM lending.liquidity
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Lending Protocol Fees

Analyze the fees charged by lending protocols over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS fees
FROM lending.fees
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Conclusion

These queries provide a starting point for analyzing lending protocol behavior. As you become more comfortable with SQL, you can explore more complex queries and build dashboards that tell richer stories.

**Next: 09. DeFi Analysis — Liquidity, Incentives, and TVL Dynamics**`
  },
  { 
    number: 9, 
    title: "DeFi Analysis — Liquidity, Incentives, and TVL Dynamics", 
    pdfPath: "/Onchain Manifesto/09. DeFi Analysis — Liquidity, Incentives, and TVL Dynamics.pdf",
    mdContent: `# 09. DeFi Analysis — Liquidity, Incentives, and TVL Dynamics

DeFi is a rapidly growing ecosystem, and understanding its behavior is crucial for investors and protocol developers.

---

## Liquidity

Analyze the liquidity of DeFi protocols over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS liquidity
FROM defi.liquidity
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Incentives

Analyze the incentives offered by DeFi protocols over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS incentives
FROM defi.incentives
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## TVL Dynamics

Analyze the TVL dynamics of DeFi protocols over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS tvl
FROM defi.tvl
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## DeFi Protocol Health

Monitor the health of DeFi protocols over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS protocol_health
FROM defi.health
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## DeFi Protocol Fees

Analyze the fees charged by DeFi protocols over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS fees
FROM defi.fees
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Conclusion

These queries provide a starting point for analyzing DeFi behavior. As you become more comfortable with SQL, you can explore more complex queries and build dashboards that tell richer stories.

**Next: 10. MEV on Uniswap — Understanding and Quantifying Extracted Value**`
  },
  { 
    number: 10, 
    title: "MEV on Uniswap — Understanding and Quantifying Extracted Value", 
    pdfPath: "/Onchain Manifesto/10. MEV on Uniswap — Understanding and Quantifying Extracted Value.pdf",
    mdContent: `# 10. MEV on Uniswap — Understanding and Quantifying Extracted Value

MEV (Miner Extractable Value) is a critical concept in DeFi, and understanding its behavior is crucial for investors and protocol developers.

---

## MEV Activity

Identify MEV activity on Uniswap V3 over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS mev_activity
FROM uniswap_v3.swaps
WHERE block_time > now() - interval '30 days'
  AND amount > 0
GROUP BY 1
ORDER BY 1
\`\`\`

---

## MEV Volume

Calculate the total volume of MEV on Uniswap V3 over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS mev_volume
FROM uniswap_v3.swaps
WHERE block_time > now() - interval '30 days'
  AND amount > 0
GROUP BY 1
ORDER BY 1
\`\`\`

---

## MEV Distribution

Analyze the distribution of MEV across different users and protocols over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS mev_distribution
FROM uniswap_v3.swaps
WHERE block_time > now() - interval '30 days'
  AND amount > 0
GROUP BY 1
ORDER BY 1
\`\`\`

---

## MEV Impact

Analyze the impact of MEV on DeFi protocols over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS mev_impact
FROM uniswap_v3.swaps
WHERE block_time > now() - interval '30 days'
  AND amount > 0
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Conclusion

These queries provide a starting point for analyzing MEV behavior. As you become more comfortable with SQL, you can explore more complex queries and build dashboards that tell richer stories.

**Next: 11. Uniswap Multichain Analytics — Comparing Deployments Across Chains**`
  },
  { 
    number: 11, 
    title: "Uniswap Multichain Analytics — Comparing Deployments Across Chains", 
    pdfPath: "/Onchain Manifesto/11. Uniswap Multichain Analytics — Comparing Deployments Across Chains.pdf",
    mdContent: `# 11. Uniswap Multichain Analytics — Comparing Deployments Across Chains

Uniswap is a decentralized exchange, and understanding its behavior across different chains is crucial for investors and protocol developers.

---

## Uniswap Volume

Calculate the total volume of swaps on Uniswap V3 across different chains over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS volume
FROM uniswap_v3.swaps
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Uniswap Liquidity

Analyze the liquidity of Uniswap V3 across different chains over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS liquidity
FROM uniswap_v3.swaps
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Uniswap Fees

Analyze the fees charged by Uniswap V3 across different chains over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS fees
FROM uniswap_v3.swaps
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Uniswap Health

Monitor the health of Uniswap V3 across different chains over the past 30 days.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS health
FROM uniswap_v3.swaps
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Conclusion

These queries provide a starting point for analyzing Uniswap behavior across different chains. As you become more comfortable with SQL, you can explore more complex queries and build dashboards that tell richer stories.

**Next: 12. Useful Metrics Every Analyst Should Track**`
  },
  { 
    number: 12, 
    title: "Useful Metrics Every Analyst Should Track", 
    pdfPath: "/Onchain Manifesto/12. Useful Metrics Every Analyst Should Track.pdf",
    mdContent: `# 12. Useful Metrics Every Analyst Should Track

As an onchain analyst, it's important to track a variety of metrics to gain a comprehensive understanding of the system.

---

## TVL

Track the total value locked in DeFi protocols.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS tvl
FROM defi.tvl
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Swap Volume

Track the total volume of swaps on DeFi protocols.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS volume
FROM defi.swaps
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Active Users

Track the number of active users on DeFi protocols.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  COUNT(*) AS active_users
FROM defi.users
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Gas Fees

Track the average gas fee per transaction on DeFi protocols.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  AVG(gas_price) AS avg_gas_fee
FROM defi.transactions
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Token Balances

Track the top token balances in DeFi protocols.

\`\`\`sql
SELECT 
  token_address,
  SUM(amount) AS balance
FROM erc20.token_transfers
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 2 DESC
LIMIT 10
\`\`\`

---

## Protocol Health

Track the health of DeFi protocols.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS protocol_health
FROM defi.health
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Conclusion

These metrics provide a comprehensive overview of the DeFi ecosystem. As you become more comfortable with SQL, you can explore more complex queries and build dashboards that tell richer stories.

**Next: 13. BTC Coin Days Destroyed — What HODLers Tell Us About the Market**`
  },
  { 
    number: 13, 
    title: "BTC Coin Days Destroyed — What HODLers Tell Us About the Market", 
    pdfPath: "/Onchain Manifesto/13. BTC Coin Days Destroyed — What HODLers Tell Us About the Market.pdf",
    mdContent: `# 13. BTC Coin Days Destroyed — What HODLers Tell Us About the Market

Coin Days Destroyed (CDD) is a critical metric in Bitcoin analysis, and understanding its behavior is crucial for investors and protocol developers.

---

## Coin Days Destroyed

Calculate the total number of days that Bitcoin coins have been dormant before moving.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount) AS cdd
FROM bitcoin.outputs
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## Coin Days Destroyed by Wallet

Analyze the CDD of different Bitcoin wallets over the past 30 days.

\`\`\`sql
SELECT 
  address,
  SUM(amount) AS cdd
FROM bitcoin.outputs
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 2 DESC
LIMIT 10
\`\`\`

---

## Coin Days Destroyed by Address

Analyze the CDD of different Bitcoin addresses over the past 30 days.

\`\`\`sql
SELECT 
  address,
  SUM(amount) AS cdd
FROM bitcoin.outputs
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 2 DESC
LIMIT 10
\`\`\`

---

## Coin Days Destroyed by Block

Analyze the CDD of different Bitcoin blocks over the past 30 days.

\`\`\`sql
SELECT 
  block_time,
  SUM(amount) AS cdd
FROM bitcoin.outputs
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 2 DESC
LIMIT 10
\`\`\`

---

## Conclusion

These queries provide a starting point for analyzing Bitcoin behavior. As you become more comfortable with SQL, you can explore more complex queries and build dashboards that tell richer stories.

**Next: 14. Building with Spellbook — How to Contribute Reusable Models to the Community**`
  },
  { 
    number: 14, 
    title: "Building with Spellbook — How to Contribute Reusable Models to the Community", 
    pdfPath: "/Onchain Manifesto/14. Building with Spellbook — How to Contribute Reusable Models to the Community.pdf",
    mdContent: `# 14. Building with Spellbook — How to Contribute Reusable Models to the Community

Dune's community-driven Spellbook is a powerful tool for building and sharing reusable models.

---

## How to Contribute

1. **Fork the Spellbook Repo:** Go to [Dune's Spellbook repo](https://github.com/duneanalytics/spellbook) and fork it to your own GitHub account.

2. **Write a New Spell:** Create a new SQL script in the \`spellbook/models\` directory of your forked repo.

3. **Test the Spell:** Use the Dune SQL editor to test your spell and ensure it works as expected.

4. **Submit a PR:** Once your spell is ready, submit a pull request to the Dune Spellbook repo.

5. **Contribute to the Community:** Your work will be reviewed and merged into the main Spellbook repo, making it available to all users.

---

## Benefits of Contributing

- **Save Time:** Reusable models can save you time and effort by reducing the need to write the same queries multiple times.
- **Boost Consistency:** Consistent models across dashboards can improve the quality and reliability of your analysis.
- **Share Knowledge:** By contributing to the Spellbook, you can help others learn and build on your work.

---

## Example: Creating a New Spell

Let's say you want to create a spell to calculate the average gas fee per transaction on Ethereum.

1. **Fork the Spellbook Repo:** Go to [Dune's Spellbook repo](https://github.com/duneanalytics/spellbook) and fork it to your own GitHub account.

2. **Write a New Spell:** Create a new SQL script in the \`spellbook/models\` directory of your forked repo.

\`\`\`sql
SELECT 
  AVG(gas_price) AS avg_gas_fee
FROM ethereum.transactions
WHERE block_time > now() - interval '30 days'
\`\`\`

3. **Test the Spell:** Use the Dune SQL editor to test your spell and ensure it works as expected.

4. **Submit a PR:** Once your spell is ready, submit a pull request to the Dune Spellbook repo.

5. **Contribute to the Community:** Your work will be reviewed and merged into the main Spellbook repo, making it available to all users.

---

## Conclusion

Contributing to the Dune Spellbook is a great way to share your knowledge and help others build better dashboards. By contributing to the Spellbook, you can make a real impact on the onchain data analysis community.

**Next: 15. How to Build an Onchain App Using the Dune API**`
  },
  { 
    number: 15, 
    title: "How to Build an Onchain App Using the Dune API", 
    pdfPath: "/Onchain Manifesto/15. How to Build an Onchain App Using the Dune API.pdf",
    mdContent: `# 15. How to Build an Onchain App Using the Dune API

The Dune API is a powerful tool for building custom applications and integrations.

---

## What is the Dune API?

The Dune API allows you to access and query Dune data programmatically.

- **API Key:** You'll need to create an API key in your Dune account to authenticate requests.
- **Endpoints:** Use the API to access data from Dune's tables and dashboards.
- **SDKs:** Dune provides SDKs in various programming languages to make it easier to integrate with the API.

---

## How to Use the Dune API

1. **Create an API Key:** Go to your Dune account settings and create a new API key.

2. **Install the SDK:** Choose the SDK that best fits your programming language and install it.

3. **Make API Requests:** Use the SDK to make requests to the Dune API endpoints.

4. **Process the Data:** Parse the data returned by the API and use it in your application.

5. **Integrate with Your App:** Integrate the API into your application to build custom features and integrations.

---

## Example: Building a Simple Dashboard

Let's say you want to build a simple dashboard that displays the total number of transactions on Ethereum.

1. **Create an API Key:** Go to your Dune account settings and create a new API key.

2. **Install the SDK:** Choose the SDK that best fits your programming language and install it.

3. **Make API Requests:** Use the SDK to make requests to the Dune API endpoints.

\`\`\`python
import duneapi

# Initialize the Dune API client
client = duneapi.Client(api_key='your_api_key')

# Make a request to the Dune API
response = client.query('SELECT COUNT(*) AS txs FROM ethereum.transactions')

# Process the data returned by the API
txs = response['data'][0]['txs']

# Display the data in your application
print(f'Total number of transactions on Ethereum: {txs}')
\`\`\`

4. **Integrate with Your App:** Integrate the API into your application to build custom features and integrations.

---

## Conclusion

The Dune API is a powerful tool for building custom applications and integrations. By using the API, you can access and query Dune data programmatically and build custom features and integrations to meet your specific needs.

**Next: 16. Account Abstraction — Why It Matters for Wallet UX and Analysts**`
  },
  { 
    number: 16, 
    title: "Account Abstraction — Why It Matters for Wallet UX and Analysts", 
    pdfPath: "/Onchain Manifesto/16. Account Abstraction- Why It Matters for Wallet UX and Analysts.pdf",
    mdContent: `# 16. Account Abstraction — Why It Matters for Wallet UX and Analysts

Account Abstraction is a new way of transacting using smart contract wallets.

---

## What is Account Abstraction?

Account Abstraction is a protocol that allows users to interact with smart contracts without needing to manage their own private keys.

- **Smart Wallets:** Users can use smart contract wallets to send transactions and interact with smart contracts.
- **Paymasters:** Paymasters handle the gas fees and other transaction costs.
- **User Operations:** User operations are submitted via smart wallets and executed by the smart contract.

---

## Why Account Abstraction Matters for Wallet UX

- **Simplified Wallet Management:** Users don't need to manage their own private keys, making wallet management easier.
- **Improved Security:** Smart contract wallets are more secure than traditional wallets.
- **Increased User Adoption:** Account Abstraction makes it easier for users to interact with decentralized applications.

---

## Why Account Abstraction Matters for Analysts

- **Improved Data Access:** Account Abstraction allows analysts to access data from smart contract wallets without needing to manage their own private keys.
- **Increased Data Visibility:** Account Abstraction provides more detailed data on user interactions and transactions.
- **Improved Data Analysis:** Account Abstraction allows analysts to build more accurate and comprehensive insights.

---

## Conclusion

Account Abstraction is a new way of transacting that has the potential to revolutionize the way we interact with decentralized applications. By using Account Abstraction, we can improve wallet UX and data access for both users and analysts.

**Next: 17. ERC-4337 Aggregated Tables Across EVM Chains — Unified Analytics at Scale**`
  },
  { 
    number: 17, 
    title: "ERC-4337 Aggregated Tables Across EVM Chains — Unified Analytics at Scale", 
    pdfPath: "/Onchain Manifesto/17. ERC-4337 Aggregated Tables Across EVM Chains- Unified Analytics at Scale.pdf",
    mdContent: `# 17. ERC-4337 Aggregated Tables Across EVM Chains — Unified Analytics at Scale

ERC-4337 is a new standard for smart contract wallets.

---

## What is ERC-4337?

ERC-4337 is a standard for smart contract wallets that allows users to interact with smart contracts without needing to manage their own private keys.

- **Smart Wallets:** Users can use smart contract wallets to send transactions and interact with smart contracts.
- **Paymasters:** Paymasters handle the gas fees and other transaction costs.
- **User Operations:** User operations are submitted via smart wallets and executed by the smart contract.

---

## Why ERC-4337 Matters for Analysts

- **Improved Data Access:** ERC-4337 allows analysts to access data from smart contract wallets without needing to manage their own private keys.
- **Increased Data Visibility:** ERC-4337 provides more detailed data on user interactions and transactions.
- **Improved Data Analysis:** ERC-4337 allows analysts to build more accurate and comprehensive insights.

---

## Conclusion

ERC-4337 is a new standard for smart contract wallets that has the potential to revolutionize the way we interact with decentralized applications. By using ERC-4337, we can improve data access and analysis for both users and analysts.

**Next: 18. Why the Future Belongs to Onchain Analysts**`
  },
  { 
    number: 18, 
    title: "Why the Future Belongs to Onchain Analysts", 
    pdfPath: "/Onchain Manifesto/18. Why the Future Belongs to Onchain Analysts.pdf",
    mdContent: `# 18. Why the Future Belongs to Onchain Analysts

As more of the world moves onchain, the power to read the blockchain becomes a form of literacy—and onchain analysts are the new interpreters.

They're not just querying data.

They're shaping protocol decisions. Uncovering exploits. Monitoring treasuries. Measuring adoption. Creating transparency in a system that, while public, still needs skilled eyes to decode.

This final article is a call to action—for builders, analysts, and explorers who believe in a transparent financial future.

---

## 📜 The Role of the Onchain Analyst

In Web2, data analysts made dashboards. In Web3, they shape reality.

The onchain analyst isn't limited to retrospective analytics. Their work informs governance proposals, investor decisions, community behavior, and product iterations.

They answer questions like:

- Is this DeFi protocol sustainable?
- Where are whales moving capital?
- What's driving NFT volume spikes?
- Are users gaming token incentives?
- How did this exploit unfold on-chain?

More than metrics, they build **context**.

---

## 🧠 Why Onchain Analytics Is Different

Web2 analytics is siloed and permissioned. Every company holds its own data, and you can't inspect it unless you're inside.

Web3 flips that on its head.

Every interaction, transfer, vote, and contract deployment is **public**, timestamped, and immutable.

The challenge isn't access—it's interpretation.

That's what makes the onchain analyst role so unique:

- 🛠 You don't need permission
- 📈 You analyze production data in real time
- 🌐 You work across chains, protocols, ecosystems
- 🔍 Your insights are verifiable by anyone

It's data science meets protocol archaeology—powered by SQL, smart contracts, and transparency.

---

## 🏛 Where Onchain Analysts Matter Most

The demand for onchain analysts is accelerating across every layer of the crypto ecosystem:

### 1. Protocols
- Measure adoption
- Track incentive effectiveness
- Detect governance participation

### 2. DAOs
- Monitor treasury flows
- Track contributor activity
- Justify spending and proposals with real data

### 3. Investors / Funds
- Perform due diligence
- Analyze token emissions
- Monitor ecosystem metrics across chains

### 4. Security / Risk
- Detect anomalies
- Build liquidation monitoring tools
- Understand wallet movement patterns

### 5. Communities
- Track user onboarding
- Measure engagement across NFT mints, LPs, etc.
- Visualize growth and viral loops

---

## 💼 Real Roles, Real Demand

Here's a snapshot of just some of the roles that require onchain fluency:

- 🔍 Research Analyst (e.g., Binance, Messari, Delphi)
- 📊 DAO Treasury Analyst (e.g., Optimism, Arbitrum, Gitcoin)
- 💸 DeFi Strategist (e.g., Yearn, Lido, Convex)
- 🔐 Security Analyst (e.g., Chainalysis, Trail of Bits)
- 📈 Growth Analyst (e.g., Lens, Uniswap, Blur)

> Every DAO, every investor, every protocol with tokens and smart contracts will need someone who can read the chain.

---

## 🧱 What You've Learned in This Series

By now, you've explored:

- The fundamentals of onchain data and why it matters
- How to use Dune, SQL, and Spellbook to extract insights
- Techniques to analyze NFTs, DeFi, lending, MEV, and wallets
- The rise of Account Abstraction and how to monitor its adoption
- How to build dashboards, apps, and reusable data models

And most importantly, you've seen how all of this fits together to **power a new kind of data-native economy**.

---

## 🚀 Where to Go From Here

This is just the beginning. Here are some ways to level up:

- 🔁 Fork dashboards and start building your own
- 🧵 Share analysis threads on X or Farcaster
- 📬 Contribute spells to the Spellbook
- 🛠 Join a DAO as a contributor or data steward
- 💬 Talk with protocol teams and surface insights
- 🧪 Create tools and alerts using the Dune API
- 📘 Document your learning and help others get started

Onchain analytics isn't just a skill—it's a superpower.

It gives you the ability to **see the system**, understand it, and shape it.

---

## 🔮 Final Thoughts: The Transparent Future

The blockchain is always watching.

And as more money, identity, culture, and governance flow through these networks, we'll need guides—people who can translate noise into narrative, transactions into truth.

That's you.

This is your time.

**The future belongs to onchain analysts.**`
  }
];
