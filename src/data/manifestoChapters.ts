
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

**Next: 07. NFT Analysis — Wash Trading, Mint Trends, and Market Health**`
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

**Next: 08. Lending Protocols — Risk, Liquidations, and User Behavior**`
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

**Next: 09. DeFi Analysis — Liquidity, Incentives, and TVL Dynamics**`
  },
  { 
    number: 9, 
    title: "DeFi Analysis — Liquidity, Incentives, and TVL Dynamics", 
    pdfPath: "/Onchain Manifesto/09. DeFi Analysis — Liquidity, Incentives, and TVL Dynamics.pdf",
    mdContent: `# 09. DeFi Analysis — Liquidity, Incentives, and TVL Dynamics

DeFi is a world built on transparent liquidity. From DEXs to yield farms, from liquid staking to leverage platforms—all value flows are trackable, all incentives are visible, and all risks are quantifiable (if you know how to read the data).

This article explores how to analyze DeFi fundamentals: beyond TVL (Total Value Locked) to sustainable revenue, incentive efficiency, and real user behavior.

---

## 🌊 Why DeFi Liquidity Matters

Liquidity is the lifeblood of DeFi—but not all liquidity is equal.

**Good liquidity** is:
- Sticky (not mercenary)
- Efficiently deployed
- Revenue-generating
- Right-sized for trade volume

**Bad liquidity** is:
- Incentive-dependent
- Overly concentrated
- Underutilized
- Subject to rapid outflows

As an analyst, your job is to distinguish between the two.

---

## 📊 Beyond TVL: Better Metrics to Track

TVL (Total Value Locked) became crypto's default metric for DeFi success—but it's deeply flawed. Here are metrics that tell a more complete story:

| Metric | Formula | Why It Matters |
| ------ | ------- | -------------- |
| Revenue/TVL | Protocol Revenue ÷ TVL | Capital efficiency |
| Volume/TVL | Trading Volume ÷ TVL | Liquidity utilization |
| Fee APR | Annualized Fees ÷ TVL | Sustainable yield (vs incentives) |
| Incentive Efficiency | User Growth ÷ Incentives Distributed | Cost of acquisition |
| Liquidity Retention | % Liquidity Remaining After Incentives End | Loyalty vs mercenary capital |

Let's see how to calculate these using Dune.

---

## 🏊‍♂️ Analyzing DEX Liquidity Pools

Using Uniswap V3 as an example:

\`\`\`sql
WITH pool_stats AS (
  SELECT
    pool,
    date_trunc('day', block_time) AS day,
    SUM(amount_usd) AS volume,
    COUNT(DISTINCT tx_from) AS traders
  FROM uniswap_v3.trades
  WHERE block_time > now() - interval '30 days'
  GROUP BY 1, 2
),
pool_tvl AS (
  SELECT
    pool_address AS pool,
    date_trunc('day', block_time) AS day,
    AVG(tvl_usd) AS avg_tvl
  FROM uniswap_v3.pool_stats
  WHERE block_time > now() - interval '30 days'
  GROUP BY 1, 2
)
SELECT
  p.day,
  SUM(p.volume) AS total_volume,
  SUM(t.avg_tvl) AS total_tvl,
  SUM(p.volume) / NULLIF(SUM(t.avg_tvl), 0) AS capital_efficiency,
  SUM(p.traders) AS unique_traders
FROM pool_stats p
JOIN pool_tvl t ON p.pool = t.pool AND p.day = t.day
GROUP BY 1
ORDER BY 1
\`\`\`

This query calculates the capital efficiency (Volume/TVL) of Uniswap V3—a key metric to understand how effectively liquidity is being used.

---

## 🔍 Tracking Mercenary Capital

Want to see if liquidity is incentive-dependent? Track what happens when rewards change:

\`\`\`sql
WITH incentive_periods AS (
  SELECT
    farm_name,
    start_date,
    end_date,
    reward_amount_usd
  FROM project_incentives
),
daily_tvl AS (
  SELECT
    date_trunc('day', block_time) AS day,
    pool_id,
    AVG(tvl_usd) AS avg_tvl
  FROM protocol_pools
  GROUP BY 1, 2
)
SELECT
  d.day,
  d.pool_id,
  d.avg_tvl,
  CASE
    WHEN d.day BETWEEN i.start_date AND i.end_date THEN 'During Incentives'
    WHEN d.day > i.end_date AND d.day <= i.end_date + interval '7 days' THEN 'Post-Incentives (Week 1)'
    WHEN d.day > i.end_date + interval '7 days' THEN 'Post-Incentives (Week 2+)'
  END AS period,
  i.reward_amount_usd
FROM daily_tvl d
JOIN incentive_periods i ON d.pool_id = i.farm_name
ORDER BY d.pool_id, d.day
\`\`\`

This approach lets you see the "incentive cliff" when rewards end.

---

## 💰 Revenue Analysis: Sustainable vs. Subsidized

Protocol revenue comes from these sources:

1. **Trading fees** (DEXs, aggregators)
2. **Interest spread** (lending protocols)
3. **Liquidation fees** (lending protocols)
4. **Management fees** (liquid staking, yield aggregators)

But revenue isn't always profit. To derive a true "profit" metric, deduct:

- Token incentives distributed
- Gas subsidies
- DAO operational expenses

Here's a simple query to track the ratio of revenue to emissions:

\`\`\`sql
SELECT
  date_trunc('week', day) AS week,
  SUM(fee_revenue_usd) AS total_revenue,
  SUM(token_emissions_usd) AS total_emissions,
  SUM(fee_revenue_usd) / NULLIF(SUM(token_emissions_usd), 0) AS revenue_to_emission_ratio
FROM protocol_daily_stats
GROUP BY 1
ORDER BY 1
\`\`\`

When this ratio is > 1, the protocol is building sustainable economics.

---

## 📈 Stablecoin Liquidity: A Leading Indicator

Stablecoin flows often foreshadow broader market moves. Track them with:

\`\`\`sql
SELECT
  date_trunc('day', block_time) AS day,
  token_address,
  token_symbol,
  SUM(CASE WHEN to_address IN (SELECT address FROM exchange_addresses) THEN amount_usd ELSE 0 END) AS inflow_to_exchanges,
  SUM(CASE WHEN from_address IN (SELECT address FROM exchange_addresses) THEN amount_usd ELSE 0 END) AS outflow_from_exchanges
FROM erc20_ethereum.transfers
WHERE token_address IN (SELECT address FROM stablecoins)
  AND block_time > now() - interval '30 days'
GROUP BY 1, 2, 3
ORDER BY 1
\`\`\`

Large stablecoin movements to exchanges often precede selloffs; movements to DeFi often precede capital deployment.

---

## 🧠 Protocol-Specific Analysis Patterns

Each protocol type requires different analytical lenses:

### DEXs:
- Volume/TVL ratio (higher = better capital efficiency)
- Fee revenue per $1M TVL
- Price impact per $100k trade

### Lending:
- Utilization rate (borrowed ÷ supplied)
- Interest spread (borrow APR - supply APR)
- Liquidation historical frequency 

### Liquid Staking:
- Market share vs centralized alternatives
- Premium/discount to underlying asset
- Rebase frequency and predictability

---

## 🚩 Red Flags in DeFi Data

Watch for these warning signs:

- Sudden TVL increases without corresponding revenue
- High concentration of liquidity from few addresses
- Revenue consistently below token emissions
- Sharp utilization spikes in lending markets
- Declining volume despite increasing incentives

Each pattern tells a different risk story—from mercenary capital to impending liquidation cascades.

---

## 🛠️ Advanced Techniques: Cohort Analysis

Want to go deeper? Track user behavior over time with cohort analysis:

\`\`\`sql
WITH user_first_interaction AS (
  SELECT
    user_address,
    MIN(date_trunc('month', block_time)) AS first_month
  FROM protocol_interactions
  GROUP BY 1
),
monthly_activity AS (
  SELECT
    date_trunc('month', block_time) AS month,
    user_address,
    COUNT(*) AS interactions,
    SUM(volume_usd) AS volume
  FROM protocol_interactions
  GROUP BY 1, 2
)
SELECT
  u.first_month AS cohort,
  m.month,
  -- Calculate months since first interaction
  EXTRACT(MONTH FROM m.month::date) - EXTRACT(MONTH FROM u.first_month::date) + 
  (EXTRACT(YEAR FROM m.month::date) - EXTRACT(YEAR FROM u.first_month::date)) * 12 AS months_since_first,
  COUNT(DISTINCT m.user_address) AS active_users,
  SUM(m.volume) AS cohort_volume
FROM user_first_interaction u
JOIN monthly_activity m ON u.user_address = m.user_address
WHERE m.month >= u.first_month
GROUP BY 1, 2, 3
ORDER BY 1, 3
\`\`\`

This shows user retention and activity levels across different "vintages" of users.

---

## 🧪 Liquidity Movement Tracking

Want to see where liquidity moves during market stress? Track cross-protocol and cross-chain flows:

\`\`\`sql
WITH daily_protocol_tvl AS (
  SELECT
    date_trunc('day', block_time) AS day,
    protocol,
    SUM(tvl_usd) AS tvl
  FROM defi_tvl
  GROUP BY 1, 2
)
SELECT
  current.day,
  current.protocol,
  current.tvl AS current_tvl,
  prev.tvl AS previous_tvl,
  ((current.tvl / NULLIF(prev.tvl, 0)) - 1) * 100 AS daily_change_pct
FROM daily_protocol_tvl current
LEFT JOIN daily_protocol_tvl prev 
  ON current.protocol = prev.protocol 
  AND current.day = prev.day + interval '1 day'
WHERE current.day > now() - interval '30 days'
ORDER BY current.day DESC, daily_change_pct DESC
\`\`\`

This reveals **relative winners and losers** during liquidity migrations.

---

## 🧮 Key DeFi Formulas to Remember

- **DEX Fee APR**: (Daily Fees × 365) ÷ TVL
- **Impermanent Loss**: 2 × √(Price Ratio) ÷ (1 + Price Ratio) - 1
- **Real Yield**: (Fee Revenue - Emissions) ÷ TVL 
- **Estimated Runway**: Treasury Value ÷ (Annual Emissions Value + Operational Expenses)

By applying these formulas, you can build dashboards that look beyond surface metrics to sustainability.

---

In the next article, we'll explore how to analyze MEV (Miner Extractable Value) on Uniswap—a hidden but crucial dimension of onchain markets.

**Next: 10. MEV on Uniswap — Understanding and Quantifying Extracted Value**`
  },
  { 
    number: 10, 
    title: "MEV on Uniswap — Understanding and Quantifying Extracted Value", 
    pdfPath: "/Onchain Manifesto/10. MEV on Uniswap — Understanding and Quantifying Extracted Value.pdf",
    mdContent: `# 10. MEV on Uniswap — Understanding and Quantifying Extracted Value

In the elegant mechanism design of automated market makers like Uniswap, there's a hidden economy of value extraction. This is **MEV** (Maximal Extractable Value)—the profits that specialized traders and searchers capture from ordinary users through optimized transaction ordering.

Understanding MEV is crucial for analysts. It affects price execution, gas costs, liquidity provider returns, and user experience. 

In this article, we'll dive into how to detect, quantify, and analyze MEV activity on Uniswap.

---

## 🧠 What is MEV?

**Maximal Extractable Value** (formerly "Miner Extractable Value") refers to the profits that can be extracted by controlling transaction ordering in a block.

Common MEV strategies include:

- **Sandwich attacks**: Front-running and back-running a large swap
- **Arbitrage**: Exploiting price differences across venues
- **Liquidations**: Racing to liquidate undercollateralized positions
- **Just-In-Time (JIT) Liquidity**: Adding liquidity right before a large swap

While some MEV activities (like arbitrage) improve market efficiency, others (like sandwiching) extract value directly from users.

---

## 📊 Identifying Sandwich Attacks

A sandwich attack occurs when a predator:
1. Sees a pending swap in the mempool
2. Front-runs with their own swap in the same direction (increasing slippage)
3. Back-runs with a swap in the opposite direction (profiting from the price impact)

Here's how to identify these patterns on Uniswap V3:

```sql
WITH swaps AS (
  SELECT
    tx_hash,
    block_number,
    block_time,
    tx_index,
    pool,
    token_in,
    token_out,
    amount_in,
    amount_out
  FROM uniswap_v3.swaps
  WHERE block_time > now() - interval '7 days'
),
potential_sandwiches AS (
  SELECT
    s1.block_number,
    s1.tx_hash AS frontrun_tx_hash,
    s1.tx_index AS frontrun_tx_index,
    s2.tx_hash AS victim_tx_hash,
    s2.tx_index AS victim_tx_index,
    s3.tx_hash AS backrun_tx_hash,
    s3.tx_index AS backrun_tx_index,
    s1.pool,
    s1.token_in AS frontrun_token_in,
    s2.token_in AS victim_token_in,
    s3.token_in AS backrun_token_in
  FROM swaps s1
  JOIN swaps s2 ON 
    s1.block_number = s2.block_number AND 
    s1.pool = s2.pool AND
    s1.tx_index < s2.tx_index AND
    s1.token_in = s2.token_in
  JOIN swaps s3 ON 
    s2.block_number = s3.block_number AND 
    s2.pool = s3.pool AND
    s2.tx_index < s3.tx_index AND
    s3.token_in = s2.token_out
)
SELECT
  block_number,
  frontrun_tx_hash,
  victim_tx_hash,
  backrun_tx_hash,
  pool
FROM potential_sandwiches
LIMIT 100
```

For more accurate detection, you'd also need to:
1. Check if the same address made the frontrun and backrun
2. Calculate profit after gas costs
3. Analyze timing patterns

---

## 📈 Quantifying MEV Impact on Users

Let's measure how much extra slippage users experience due to sandwich attacks:

```sql
WITH victim_swaps AS (
  SELECT
    v.tx_hash,
    v.block_time,
    v.pool,
    v.amount_in,
    v.amount_in_usd,
    v.amount_out,
    v.amount_out_usd,
    -- Actual price after sandwiching
    v.amount_out/v.amount_in AS execution_price,
    -- Reference price from time-weighted average
    p.price AS reference_price,
    -- Calculate slippage
    ((v.amount_out/v.amount_in) / p.price - 1) * 100 AS slippage_pct
  FROM uniswap_v3.swaps v
  JOIN sandwiched_transactions s ON v.tx_hash = s.victim_tx_hash
  JOIN token_prices p ON 
    v.token_in = p.token_address AND
    date_trunc('minute', v.block_time) = p.minute
)
SELECT
  date_trunc('day', block_time) AS day,
  COUNT(*) AS sandwiched_swaps,
  AVG(slippage_pct) AS avg_slippage_pct,
  SUM(amount_in_usd * (slippage_pct/100)) AS estimated_value_extracted_usd
FROM victim_swaps
GROUP BY 1
ORDER BY 1
```

This quantifies both the frequency of sandwich attacks and their impact on user returns.

---

## 🔍 Arbitrage Detection

MEV also includes arbitrage between different AMMs. Identify these trades with:

```sql
WITH arb_candidates AS (
  SELECT
    tx_hash,
    tx_from,
    COUNT(DISTINCT protocol) AS protocols_interacted,
    array_agg(DISTINCT protocol) AS protocols
  FROM dex.trades
  WHERE block_time > now() - interval '1 day'
  GROUP BY 1, 2
  HAVING COUNT(DISTINCT protocol) > 1
)
SELECT
  tx_hash,
  tx_from,
  protocols,
  COUNT(*) AS swap_count
FROM dex.trades
WHERE tx_hash IN (SELECT tx_hash FROM arb_candidates)
GROUP BY 1, 2, 3
ORDER BY 4 DESC
LIMIT 20
```

This identifies transactions that interact with multiple DEXs in the same block—a common pattern for arbitrage bots.

---

## 💧 Just-In-Time (JIT) Liquidity Analysis

JIT liquidity is a sophisticated MEV strategy where liquidity is added just before a large swap and removed immediately after. To spot this:

```sql
WITH jit_events AS (
  SELECT
    mint.block_number,
    mint.tx_hash AS mint_tx_hash,
    burn.tx_hash AS burn_tx_hash,
    swap.tx_hash AS swap_tx_hash,
    mint.pool,
    mint.amount0,
    mint.amount1,
    mint.amount0_usd + mint.amount1_usd AS liquidity_value_usd
  FROM uniswap_v3.mints mint
  JOIN uniswap_v3.burns burn ON 
    mint.block_number = burn.block_number AND
    mint.pool = burn.pool AND
    mint.liquidity = burn.liquidity
  JOIN uniswap_v3.swaps swap ON
    mint.block_number = swap.block_number AND
    mint.pool = swap.pool AND
    mint.tx_index < swap.tx_index AND
    swap.tx_index < burn.tx_index
)
SELECT
  date_trunc('day', block_time) AS day,
  COUNT(*) AS jit_liquidity_events,
  SUM(liquidity_value_usd) AS jit_liquidity_value,
  COUNT(DISTINCT pool) AS pools_affected
FROM jit_events
JOIN blocks ON jit_events.block_number = blocks.number
GROUP BY 1
ORDER BY 1
```

---

## 📱 MEV Protection Analysis

As MEV protection solutions emerge (like Flashbots Protect, Cow Protocol, or Eden Network), analysts should track their effectiveness.

Here's how to analyze what percent of swaps are using protection:

```sql
SELECT
  date_trunc('day', block_time) AS day,
  CASE 
    WHEN tx_hash IN (SELECT tx_hash FROM mev_protected_transactions) THEN 'Protected'
    ELSE 'Unprotected'
  END AS protection_status,
  COUNT(*) AS swap_count,
  SUM(amount_in_usd) AS volume_usd,
  AVG(gas_price_gwei) AS avg_gas_price_gwei
FROM uniswap_v3.swaps
WHERE block_time > now() - interval '30 days'
GROUP BY 1, 2
ORDER BY 1, 2
```

---

## 🎯 Detecting Likely MEV Bots

MEV bots often have recognizable patterns:

1. High gas prices
2. Repeated interaction patterns
3. Contract interactions in specific sequences

Identify potential MEV bots with:

```sql
SELECT
  tx_from AS bot_address,
  COUNT(*) AS transaction_count,
  AVG(gas_price) / 1e9 AS avg_gas_price_gwei,
  SUM(gas_used * gas_price) / 1e18 AS total_gas_cost_eth,
  COUNT(DISTINCT block_number) AS blocks_active
FROM ethereum.transactions
WHERE block_time > now() - interval '7 days'
GROUP BY 1
HAVING AVG(gas_price) > 30e9 -- Higher than 30 gwei
   AND COUNT(*) > 100 -- Active bot with many txs
ORDER BY 3 DESC
LIMIT 30
```

You can further refine this by looking at contract interactions and transaction patterns.

---

## 🛡️ MEV by Liquidity Depth

Different liquidity pools experience different levels of MEV activity. Usually, pools with:
- Higher trading volume
- Thinner liquidity
- Larger tick spacing

...are more vulnerable to MEV.

Compare MEV activity across pools:

```sql
WITH mev_events AS (
  -- Insert your MEV detection logic here
)
SELECT
  pool,
  token0_symbol || '/' || token1_symbol AS pair,
  COUNT(*) AS mev_events,
  SUM(extracted_value_usd) AS total_extracted_value,
  AVG(tvl_usd) AS avg_pool_tvl,
  SUM(extracted_value_usd) / AVG(tvl_usd) * 100 AS extraction_ratio_pct
FROM mev_events
JOIN pool_info ON mev_events.pool = pool_info.pool_address
GROUP BY 1, 2
ORDER BY 4 DESC
LIMIT 20
```

---

## 🧮 Key Formulas for MEV Analysis

- **Sandwich Profit**: (Frontrun Out × Backrun In) - (Frontrun In × Backrun Out) - Gas Costs
- **Extraction Ratio**: Total MEV / Pool TVL
- **MEV-Adjusted Returns**: Standard LP Return - MEV Extracted from LPs
- **Price Impact**: (Executed Price / Reference Price - 1) × 100%

---

## 📊 MEV Dashboards to Build

- Sandwich Attack Monitor
- JIT Liquidity Tracker
- MEV Protection Comparison
- Arbitrage Volume by Pool
- Gas Price Impact on MEV Profitability

---

## 🛠️ Advanced: Block Builder Analysis 

To go deeper, analyze which block builders include more MEV transactions:

```sql
SELECT
  block_builder,
  COUNT(*) AS blocks_built,
  SUM(mev_value_usd) AS total_mev_value,
  AVG(mev_value_usd) AS avg_mev_per_block
FROM blocks
JOIN mev_txs ON blocks.block_number = mev_txs.block_number
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 4 DESC
```

---

## 🧠 Beyond Numbers: Why MEV Matters

MEV analysis tells us about market efficiency, fairness, and structural design. High MEV extraction suggests:

- Suboptimal AMM design
- Need for better execution protection
- Centralization risks in block production
- Hidden costs to users and LPs

By understanding and measuring MEV, analysts help protocols improve, traders make better decisions, and the ecosystem become more efficient.

---

## Next: 11. Uniswap Multichain Analytics — Comparing Deployments Across Chains
`
  },
  { 
    number: 11, 
    title: "Uniswap Multichain Analytics — Comparing Deployments Across Chains", 
    pdfPath: "/Onchain Manifesto/11. Uniswap Multichain Analytics — Comparing Deployments Across Chains.pdf",
    mdContent: `# 11. Uniswap Multichain Analytics — Comparing Deployments Across Chains

Uniswap isn't just on Ethereum anymore. The protocol has expanded to multiple chains and L2s: Arbitrum, Optimism, Polygon, Base, and more. Each deployment presents unique user behavior, liquidity patterns, and economic dynamics.

For analysts, this multichain reality creates both challenges and opportunities. By comparing Uniswap across chains, you can discover:

- Which chains have the most efficient markets
- Where capital is being deployed most effectively
- How gas costs affect trading behavior
- What unique user segments emerge on different chains

In this article, we'll explore how to analyze Uniswap cross-chain activity using Dune's spellbook models.

---

## 🧠 The Multichain Analytics Challenge

When analyzing Uniswap across chains, you face several challenges:

1. **Different schema structures** across chains
2. **Varying token addresses** for the same assets
3. **Inconsistent decimals** and price feeds
4. **Chain-specific user behaviors** and trade patterns

Fortunately, Dune's Spellbook abstracts away many of these complexities with cross-chain models.

---

## 📊 Transaction Count and Volume by Chain

Let's start with the basics: How does activity compare across chains?

```sql
SELECT
  blockchain,
  COUNT(*) AS swap_count,
  COUNT(DISTINCT tx_from) AS unique_traders,
  SUM(amount_usd) AS volume_usd
FROM uniswap_v3.trades
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 4 DESC
```

This quickly shows you where the most activity is happening. Typically:

- **Ethereum** has the highest volume per transaction
- **Arbitrum** and **Optimism** have strong daily active users
- **Base** is growing rapidly from a lower starting point

---

## 🌊 Comparing Liquidity Efficiency Across Chains

Pool efficiency varies by chain. Let's compare capital utilization:

```sql
WITH daily_metrics AS (
  SELECT
    blockchain,
    date_trunc('day', block_time) AS day,
    SUM(amount_usd) AS daily_volume,
    COUNT(DISTINCT tx_from) AS daily_users
  FROM uniswap_v3.trades
  WHERE block_time > now() - interval '30 days'
  GROUP BY 1, 2
),
chain_tvl AS (
  SELECT
    blockchain,
    date_trunc('day', block_time) AS day,
    SUM(tvl_usd) AS tvl
  FROM uniswap_v3.pool_stats
  WHERE block_time > now() - interval '30 days'
  GROUP BY 1, 2
)
SELECT
  m.day,
  m.blockchain,
  m.daily_volume,
  t.tvl,
  m.daily_volume / NULLIF(t.tvl, 0) AS capital_efficiency,
  m.daily_users
FROM daily_metrics m
JOIN chain_tvl t ON m.blockchain = t.blockchain AND m.day = t.day
ORDER BY m.day DESC, m.blockchain
```

This shows how efficiently capital is being used across chains.

---

## 🏆 Top Pairs by Chain

User preferences for trading pairs vary significantly by chain:

```sql
SELECT
  blockchain,
  token_pair,
  COUNT(*) AS swap_count,
  COUNT(DISTINCT tx_from) AS traders,
  SUM(amount_usd) AS volume_usd
FROM uniswap_v3.trades
WHERE block_time > now() - interval '30 days'
GROUP BY 1, 2
ORDER BY 1, 5 DESC
```

You'll typically find:
- Ethereum: Focus on blue-chip DeFi tokens and ETH pairs
- L2s: More experimental tokens and chain-native projects
- Different stablecoin preferences (e.g., USDC vs. USDT dominance)

---

## 💰 Fee Tier Usage Analysis

Uniswap V3 offers multiple fee tiers (0.01%, 0.05%, 0.3%, 1%). Their usage varies by chain:

```sql
SELECT
  blockchain,
  fee_tier,
  COUNT(*) AS pool_count,
  SUM(tvl_usd) AS total_tvl_usd,
  SUM(volume_usd_24h) AS volume_usd_24h
FROM uniswap_v3.pool_stats
WHERE block_time > now() - interval '1 day'
GROUP BY 1, 2
ORDER BY 1, 2
```

Generally, you'll find:
- Higher fee tiers on volatile assets and chains with less liquidity
- Lower fee tiers on stablecoin pairs and high-liquidity environments
- More extreme fee tiers (0.01% or 1%) on L2s where gas is cheaper

---

## ⏱️ Trading Timelines: When Do Users Trade?

Different chains have different peak trading hours. Analyze this with:

```sql
SELECT
  blockchain,
  date_trunc('hour', block_time) AS hour,
  EXTRACT(HOUR FROM block_time) AS hour_of_day,
  COUNT(*) AS swap_count,
  SUM(amount_usd) AS volume_usd
FROM uniswap_v3.trades
WHERE block_time > now() - interval '7 days'
GROUP BY 1, 2, 3
ORDER BY 1, 2
```

This reveals when each chain is most active—often correlating with regional user bases.

---

## 📉 Gas Efficiency Compared

One of the main reasons for L2 usage is reduced gas costs. Let's compare the efficiency:

```sql
SELECT
  blockchain,
  AVG(gas_price_gwei) AS avg_gas_price_gwei,
  AVG(gas_used) AS avg_gas_used,
  AVG(gas_used * gas_price_gwei / 1e9) AS avg_gas_cost_in_native_token,
  AVG(tx_fee_usd) AS avg_tx_fee_usd,
  SUM(tx_fee_usd) / SUM(amount_usd) * 100 AS fee_to_volume_bps
FROM uniswap_v3.trades
WHERE block_time > now() - interval '7 days'
GROUP BY 1
ORDER BY 6
```

This shows which chains offer the best fee-to-volume ratio for traders.

---

## 🐳 User Segmentation by Chain

Different chains attract different user types:

```sql
WITH user_segments AS (
  SELECT
    blockchain,
    tx_from,
    SUM(amount_usd) AS total_volume_usd,
    COUNT(*) AS swap_count,
    CASE
      WHEN SUM(amount_usd) > 100000 THEN 'whale'
      WHEN SUM(amount_usd) > 10000 THEN 'large'
      WHEN SUM(amount_usd) > 1000 THEN 'medium'
      ELSE 'small'
    END AS user_segment
  FROM uniswap_v3.trades
  WHERE block_time > now() - interval '30 days'
  GROUP BY 1, 2
)
SELECT
  blockchain,
  user_segment,
  COUNT(*) AS user_count,
  SUM(total_volume_usd) AS segment_volume_usd,
  AVG(swap_count) AS avg_swaps_per_user
FROM user_segments
GROUP BY 1, 2
ORDER BY 1, CASE
  WHEN user_segment = 'whale' THEN 1
  WHEN user_segment = 'large' THEN 2
  WHEN user_segment = 'medium' THEN 3
  ELSE 4
END
```

This breakdown reveals which chains attract retail vs. institutional activity.

---

## 🔄 Cross-Chain Bridges and Uniswap

Users often bridge assets to use Uniswap on different chains. Track this relationship:

```sql
WITH bridge_events AS (
  SELECT
    user_address,
    destination_chain,
    block_time AS bridge_time,
    amount_usd
  FROM bridges.transfers
  WHERE block_time > now() - interval '7 days'
),
post_bridge_swaps AS (
  SELECT
    b.user_address,
    b.destination_chain,
    MIN(t.block_time) AS first_swap_time,
    COUNT(*) AS swap_count,
    SUM(t.amount_usd) AS swap_volume_usd
  FROM bridge_events b
  JOIN uniswap_v3.trades t 
    ON b.user_address = t.tx_from 
    AND t.blockchain = b.destination_chain 
    AND t.block_time > b.bridge_time
    AND t.block_time < b.bridge_time + interval '1 day'
  GROUP BY 1, 2
)
SELECT
  destination_chain,
  COUNT(DISTINCT user_address) AS users_bridged,
  COUNT(DISTINCT CASE WHEN swap_count > 0 THEN user_address END) AS users_who_swapped,
  AVG(EXTRACT(EPOCH FROM (first_swap_time - bridge_time))/60) AS avg_minutes_to_first_swap
FROM bridge_events b
LEFT JOIN post_bridge_swaps p USING (user_address, destination_chain)
GROUP BY 1
ORDER BY 2 DESC
```

This shows the bridge-to-swap pipeline and how quickly users start trading after bridging.

---

## 🍎 Pool Composition Comparison

The types of pools that succeed vary by chain:

```sql
WITH pool_categories AS (
  SELECT
    blockchain,
    CASE
      WHEN token0_symbol IN ('USDC', 'USDT', 'DAI') AND token1_symbol IN ('USDC', 'USDT', 'DAI') THEN 'stablecoin-stablecoin'
      WHEN token0_symbol IN ('USDC', 'USDT', 'DAI') OR token1_symbol IN ('USDC', 'USDT', 'DAI') THEN 'stablecoin-other'
      WHEN token0_symbol = 'WETH' OR token1_symbol = 'WETH' THEN 'eth-other' 
      WHEN token0_symbol = 'WBTC' OR token1_symbol = 'WBTC' THEN 'btc-other'
      ELSE 'other-other'
    END AS pool_category,
    pool_address,
    tvl_usd
  FROM uniswap_v3.pool_stats
  WHERE block_time > now() - interval '1 day'
)
SELECT
  blockchain,
  pool_category,
  COUNT(*) AS pool_count,
  SUM(tvl_usd) AS category_tvl_usd,
  SUM(tvl_usd) / SUM(SUM(tvl_usd)) OVER (PARTITION BY blockchain) AS pct_of_chain_tvl
FROM pool_categories
GROUP BY 1, 2
ORDER BY 1, 4 DESC
```

---

## 🔎 LP Behavior Across Chains

Liquidity providers behave differently on each chain. Compare concentration:

```sql
WITH lp_activity AS (
  SELECT
    blockchain,
    liquidity_provider,
    COUNT(DISTINCT pool_address) AS pools_active_in,
    SUM(amount_usd) AS liquidity_provided_usd
  FROM uniswap_v3.lp_actions
  WHERE block_time > now() - interval '30 days'
    AND action = 'mint'
  GROUP BY 1, 2
)
SELECT
  blockchain,
  COUNT(DISTINCT liquidity_provider) AS unique_lps,
  AVG(pools_active_in) AS avg_pools_per_lp,
  MEDIAN(pools_active_in) AS median_pools_per_lp,
  SUM(liquidity_provided_usd) / COUNT(DISTINCT liquidity_provider) AS avg_liquidity_per_lp
FROM lp_activity
GROUP BY 1
ORDER BY 2 DESC
```

---

## 📱 Cross-Chain User Overlap

Many users are active across multiple chains. Measure this overlap:

```sql
WITH chain_users AS (
  SELECT DISTINCT
    blockchain,
    tx_from AS user_address
  FROM uniswap_v3.trades
  WHERE block_time > now() - interval '30 days'
)
SELECT
  a.blockchain AS chain_a,
  b.blockchain AS chain_b,
  COUNT(DISTINCT a.user_address) AS users_on_a,
  COUNT(DISTINCT b.user_address) AS users_on_b,
  COUNT(DISTINCT CASE WHEN a.user_address = b.user_address THEN a.user_address END) AS overlapping_users,
  COUNT(DISTINCT CASE WHEN a.user_address = b.user_address THEN a.user_address END) / COUNT(DISTINCT a.user_address)::float AS pct_of_a_also_on_b
FROM chain_users a
CROSS JOIN (SELECT DISTINCT blockchain FROM chain_users) b_chains
JOIN chain_users b ON b.blockchain = b_chains.blockchain
WHERE a.blockchain < b.blockchain
GROUP BY 1, 2
ORDER BY 5 DESC
```

This reveals which chains share user bases, suggesting migration patterns or complementary usage.

---

## 📊 Insight Summary

When comparing Uniswap across chains, look for:

1. **Capital efficiency** (Volume/TVL ratio)
2. **User segments** (whale dominance vs. retail activity)
3. **Fee tier preferences** (revealing risk appetite)
4. **Gas costs relative to trade size**
5. **Pool composition** (stablecoins vs. exotic pairs)
6. **Hourly activity patterns** (showing geographic distribution)

These metrics together build a comprehensive picture of how Uniswap evolves differently across chains.

---

## 🧠 Tip: Use Chain-Specific Token Mappings

For consistent cross-chain analysis, create token address mappings:

```sql
CREATE OR REPLACE VIEW token_mapping AS
SELECT
  blockchain,
  symbol,
  address,
  decimals
FROM (
  VALUES
    ('ethereum', 'USDC', '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', 6),
    ('optimism', 'USDC', '0x7f5c764cbc14f9669b88837ca1490cca17c31607', 6),
    ('arbitrum', 'USDC', '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8', 6),
    -- Add more mappings
);
```

---

## Next: 12. Useful Metrics Every Analyst Should Track
`
  },
  { 
    number: 12, 
    title: "Useful Metrics Every Analyst Should Track", 
    pdfPath: "/Onchain Manifesto/12. Useful Metrics Every Analyst Should Track.pdf",
    mdContent: `# 12. Useful Metrics Every Analyst Should Track

After exploring protocols, markets, and users, let's step back and consider the essential metrics every onchain analyst should track. These are the KPIs that tell the real story—whether you're analyzing a DEX, a lending protocol, an NFT marketplace, or an entire ecosystem.

This article provides a toolkit of metrics, formulas, and SQL snippets that you can apply across protocols. Think of it as your analytical playbook for Web3.

---

## 🧮 Universal KPIs for Any Protocol

No matter what you're analyzing, these metrics always matter:

| Metric | Formula | Why It Matters |
| ------ | ------- | -------------- |
| Daily Active Users (DAU) | Count(distinct users) per day | User engagement and growth |
| Volume | Sum(transaction_amount_usd) | Economic activity |
| Retention | % of users returning after 7, 30 days | Product stickiness |
| Revenue | Sum(fees_collected_usd) | Business viability |
| Cost-to-Acquire (CAC) | Incentives / New Users | Marketing efficiency |

Let's see how to calculate each one with SQL.

---

## 👥 User Activity Metrics

### Daily/Monthly Active Users

```sql
SELECT
  date_trunc('day', block_time) AS day,
  COUNT(DISTINCT user_address) AS daily_active_users
FROM protocol_events
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
```

For monthly:

```sql
SELECT
  date_trunc('month', block_time) AS month,
  COUNT(DISTINCT user_address) AS monthly_active_users
FROM protocol_events
WHERE block_time > now() - interval '12 months'
GROUP BY 1
ORDER BY 1
```

### New vs. Returning Users

```sql
WITH user_first_seen AS (
  SELECT
    user_address,
    MIN(date_trunc('day', block_time)) AS first_day
  FROM protocol_events
  GROUP BY 1
)
SELECT
  date_trunc('day', e.block_time) AS day,
  COUNT(DISTINCT e.user_address) AS total_users,
  COUNT(DISTINCT CASE WHEN date_trunc('day', e.block_time) = u.first_day THEN e.user_address END) AS new_users,
  COUNT(DISTINCT CASE WHEN date_trunc('day', e.block_time) > u.first_day THEN e.user_address END) AS returning_users
FROM protocol_events e
JOIN user_first_seen u ON e.user_address = u.user_address
WHERE e.block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
```

---

## 💲 Economic Metrics

### Real Revenue vs. Token Incentives

```sql
SELECT
  date_trunc('day', day) AS day,
  SUM(fee_revenue_usd) AS real_revenue_usd,
  SUM(token_incentives_usd) AS incentives_usd,
  SUM(fee_revenue_usd) - SUM(token_incentives_usd) AS net_revenue_usd,
  CASE WHEN SUM(token_incentives_usd) > 0 
    THEN SUM(fee_revenue_usd) / SUM(token_incentives_usd) 
    ELSE NULL 
  END AS revenue_to_incentive_ratio
FROM protocol_daily_stats
WHERE day > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
```

### Fee APR for Liquidity Providers

```sql
SELECT
  pool_address,
  token_pair,
  SUM(daily_fees_usd) * 365 / AVG(tvl_usd) * 100 AS annualized_fee_apr_percent
FROM pool_daily_stats
WHERE day > now() - interval '30 days'
GROUP BY 1, 2
ORDER BY 3 DESC
```

---

## 🚀 Growth & Retention Metrics

### Cohort Retention Analysis

```sql
WITH user_cohorts AS (
  SELECT
    user_address,
    date_trunc('month', MIN(block_time)) AS cohort_month
  FROM protocol_events
  GROUP BY 1
),
monthly_activity AS (
  SELECT
    user_address,
    date_trunc('month', block_time) AS activity_month
  FROM protocol_events
  GROUP BY 1, 2
)
SELECT
  c.cohort_month,
  a.activity_month,
  EXTRACT(MONTH FROM a.activity_month) - EXTRACT(MONTH FROM c.cohort_month) +
  (EXTRACT(YEAR FROM a.activity_month) - EXTRACT(YEAR FROM c.cohort_month)) * 12 AS months_since_cohort,
  COUNT(DISTINCT c.user_address) AS cohort_size,
  COUNT(DISTINCT a.user_address) AS active_users,
  COUNT(DISTINCT a.user_address)::float / COUNT(DISTINCT c.user_address) AS retention_rate
FROM user_cohorts c
JOIN monthly_activity a ON c.user_address = a.user_address
WHERE a.activity_month >= c.cohort_month
GROUP BY 1, 2, 3
ORDER BY 1, 3
```

### User Activity Frequency

```sql
WITH user_activity AS (
  SELECT
    user_address,
    COUNT(*) AS action_count,
    COUNT(DISTINCT date_trunc('day', block_time)) AS days_active,
    MIN(block_time) AS first_seen,
    MAX(block_time) AS last_seen,
    NOW() - MAX(block_time) AS time_since_last_action
  FROM protocol_events
  WHERE block_time > now() - interval '90 days'
  GROUP BY 1
)
SELECT
  CASE
    WHEN action_count >= 100 THEN 'power_user'
    WHEN action_count >= 10 THEN 'active_user'
    WHEN action_count >= 3 THEN 'casual_user'
    ELSE 'one_time_user'
  END AS user_segment,
  COUNT(*) AS user_count,
  AVG(action_count) AS avg_actions,
  AVG(days_active) AS avg_days_active,
  AVG(EXTRACT(EPOCH FROM time_since_last_action) / 86400) AS avg_days_since_last_action
FROM user_activity
GROUP BY 1
ORDER BY avg_actions DESC
```

---

## 🔬 Protocol-Specific KPIs

Different protocol types require specialized metrics:

### DEX Metrics

```sql
-- Price impact by trade size
SELECT
  CASE
    WHEN amount_usd < 1000 THEN 'small (<$1k)'
    WHEN amount_usd < 10000 THEN 'medium ($1k-$10k)'
    WHEN amount_usd < 100000 THEN 'large ($10k-$100k)'
    ELSE 'whale (>$100k)'
  END AS trade_size_bucket,
  AVG(price_impact_bps) / 100 AS avg_price_impact_percent,
  PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY price_impact_bps) / 100 AS median_price_impact_percent
FROM dex_trades
GROUP BY 1
ORDER BY CASE
  WHEN trade_size_bucket = 'small (<$1k)' THEN 1
  WHEN trade_size_bucket = 'medium ($1k-$10k)' THEN 2
  WHEN trade_size_bucket = 'large ($10k-$100k)' THEN 3
  ELSE 4
END
```

### Lending Protocol Metrics

```sql
-- Health factor distribution
SELECT
  CASE
    WHEN health_factor < 1.1 THEN 'critical (<1.1)'
    WHEN health_factor < 1.5 THEN 'at_risk (1.1-1.5)'
    WHEN health_factor < 3 THEN 'safe (1.5-3)'
    ELSE 'overcollateralized (>3)'
  END AS risk_category,
  COUNT(*) AS position_count,
  SUM(borrow_amount_usd) AS total_borrows_usd,
  AVG(borrow_amount_usd) AS avg_borrow_amount_usd
FROM lending_positions
WHERE block_time = (SELECT MAX(block_time) FROM lending_positions)
GROUP BY 1
ORDER BY CASE
  WHEN risk_category = 'critical (<1.1)' THEN 1
  WHEN risk_category = 'at_risk (1.1-1.5)' THEN 2
  WHEN risk_category = 'safe (1.5-3)' THEN 3
  ELSE 4
END
```

### NFT Metrics

```sql
-- Floor price resilience
SELECT
  collection_address,
  collection_name,
  MIN(price_usd) AS floor_price_usd,
  AVG(price_usd) AS avg_sale_price_usd,
  COUNT(*) AS sales_count,
  COUNT(DISTINCT buyer_address) AS unique_buyers,
  COUNT(*) / COUNT(DISTINCT buyer_address) AS sales_per_buyer,
  stddev(price_usd) / AVG(price_usd) AS price_volatility
FROM nft_sales
WHERE block_time > now() - interval '7 days'
GROUP BY 1, 2
HAVING COUNT(*) > 5
ORDER BY sales_count DESC
```

---

## 🧩 Operational Metrics

### Gas Efficiency

```sql
SELECT
  date_trunc('day', block_time) AS day,
  AVG(gas_used) AS avg_gas_used,
  AVG(gas_price / 1e9) AS avg_gas_price_gwei,
  AVG(gas_used * gas_price / 1e18) AS avg_eth_per_tx,
  AVG(tx_fee_usd) AS avg_usd_per_tx,
  SUM(tx_fee_usd) / SUM(amount_usd) * 10000 AS gas_cost_bps
FROM protocol_transactions
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
```

### Contract Upgrades & Governance

```sql
SELECT
  contract_address,
  implementation_address,
  block_time AS upgraded_at,
  block_number,
  tx_hash
FROM contract_upgrades
ORDER BY block_time DESC
LIMIT 10
```

---

## 🌐 Network-Level Metrics

### Chain Comparison

```sql
SELECT
  blockchain,
  COUNT(DISTINCT tx_hash) AS transaction_count,
  COUNT(DISTINCT user_address) AS unique_users,
  SUM(volume_usd) AS total_volume_usd,
  AVG(tx_fee_usd) AS avg_tx_fee_usd
FROM dex_trades
WHERE block_time > now() - interval '7 days'
GROUP BY 1
ORDER BY 3 DESC
```

### Bridge Flows

```sql
SELECT
  origin_chain AS from_chain,
  destination_chain AS to_chain,
  SUM(amount_usd) AS bridged_volume_usd,
  COUNT(*) AS transfer_count,
  COUNT(DISTINCT sender) AS unique_senders
FROM bridge_transfers
WHERE block_time > now() - interval '30 days'
GROUP BY 1, 2
ORDER BY 3 DESC
```

---

## 📱 User Segmentation

### Wallet Activity Categories

```sql
WITH wallet_segments AS (
  SELECT
    user_address,
    SUM(volume_usd) AS total_volume_usd,
    COUNT(*) AS tx_count,
    MIN(block_time) AS first_tx,
    MAX(block_time) AS last_tx,
    COUNT(DISTINCT date_trunc('day', block_time)) AS active_days
  FROM protocol_transactions
  WHERE block_time > now() - interval '90 days'
  GROUP BY 1
)
SELECT
  CASE
    WHEN total_volume_usd > 1000000 THEN 'whale'
    WHEN total_volume_usd > 100000 THEN 'heavy_user'
    WHEN total_volume_usd > 10000 THEN 'mid_tier'
    ELSE 'retail'
  END AS volume_segment,
  CASE
    WHEN active_days > 20 THEN 'highly_active'
    WHEN active_days > 5 THEN 'regular'
    ELSE 'occasional'
  END AS frequency_segment,
  COUNT(*) AS wallet_count,
  SUM(total_volume_usd) AS segment_volume_usd,
  AVG(tx_count) AS avg_tx_count_per_wallet
FROM wallet_segments
GROUP BY 1, 2
ORDER BY 1, 2
```

---

## 📊 Dashboard Framework

When building dashboards, organize metrics into these categories:

1. **Overview** (DAU, volume, revenue)
2. **User Analysis** (retention, segments, behavior)
3. **Economics** (fees, incentives, treasury)
4. **Specific Activity** (protocol-specific metrics)
5. **Risk & Health** (operational metrics, security)

---

## 🧠 How to Choose the Right Metrics

When analyzing any protocol, ask yourself:

- **Who are the stakeholders?** (users, LPs, governors)
- **What value exchanges occur?** (fees, rewards, capital gains)
- **Where is risk concentrated?** (centralization, economic security)
- **When do critical events happen?** (liquidations, upgrades)
- **Why do users participate?** (yield, speculation, utility)

The answers will guide which metrics deserve your focus.

---

## 📈 Putting It All Together: The System Health Dashboard

Combine metrics to build a comprehensive protocol health view:

```sql
-- Base query for protocol health dashboard
WITH daily_stats AS (
  SELECT
    date_trunc('day', block_time) AS day,
    COUNT(DISTINCT user_address) AS dau,
    COUNT(*) AS tx_count,
    SUM(volume_usd) AS volume_usd,
    SUM(fee_usd) AS fee_revenue_usd
  FROM protocol_events
  WHERE block_time > now() - interval '30 days'
  GROUP BY 1
),
user_retention AS (
  -- Retention calculation query from earlier
),
economic_health AS (
  -- Revenue vs incentives query from earlier
)
SELECT
  d.day,
  d.dau,
  d.tx_count,
  d.volume_usd,
  d.fee_revenue_usd,
  -- Add weekly moving averages
  AVG(d.dau) OVER (ORDER BY d.day ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS dau_7d_avg,
  -- Add week-over-week growth
  d.dau / LAG(d.dau, 7) OVER (ORDER BY d.day) - 1 AS dau_wow_growth,
  -- Join with other metrics
  r.retention_7d,
  e.incentive_to_revenue_ratio,
  e.runway_days
FROM daily_stats d
LEFT JOIN user_retention r ON d.day = r.day
LEFT JOIN economic_health e ON d.day = e.day
ORDER BY d.day DESC
```

---

## Next: 13. BTC Coin Days Destroyed — What HODLers Tell Us About the Market
`
  },
  { 
    number: 13, 
    title: "BTC Coin Days Destroyed — What HODLers Tell Us About the Market", 
    pdfPath: "/Onchain Manifesto/13. BTC Coin Days Destroyed — What HODLers Tell Us About the Market.pdf",
    mdContent: `# 13. BTC Coin Days Destroyed — What HODLers Tell Us About the Market

Bitcoin's UTXO model creates a unique opportunity for analysts—the ability to track the movement patterns of long-term holders with remarkable precision. The most powerful metric for this is **Coin Days Destroyed (CDD)**, an elegantly simple concept that combines amount and time to reveal HODLer behavior.

In this article, we'll explore why CDD matters, how to calculate it from raw UTXO data, and what it reveals about market cycles.

---

## 🧮 Understanding Coin Days Destroyed

Coin Days Destroyed (CDD) measures the economic activity weighted by the age of the coins being moved.

Here's how it works:
1. One bitcoin held for one day = one "coin day" accumulated
2. When that bitcoin moves, those coin days are "destroyed" 
3. The more coin days destroyed, the more dormant coins are moving

For example:
- 1 BTC held for 100 days and then moved = 100 coin days destroyed
- 100 BTC held for 1 day and then moved = 100 coin days destroyed

But these two scenarios tell very different stories about investor behavior!

---

## 💡 Why CDD Matters

CDD is a **HODLer sentiment indicator**. It distinguishes between movements of:

- **Old coins**: likely long-term investors selling or relocating coins
- **Young coins**: recent buyers or active traders circulating coins

Large spikes in CDD often occur at market inflection points, as dormant holders wake up and move coins they've held through previous cycles.

---

## 📊 Calculating CDD from UTXOs

Bitcoin's UTXO model means every "coin" has a specific age—the time since it was last moved.

Here's how to calculate CDD on Dune:

```sql
WITH spent_outputs AS (
  SELECT
    i.block_time AS spent_time,
    o.block_time AS created_time,
    i.value / 1e8 AS btc_amount,
    EXTRACT(EPOCH FROM (i.block_time - o.block_time)) / 86400 AS days_held
  FROM bitcoin.inputs i
  JOIN bitcoin.outputs o ON i.spent_tx_id = o.tx_id AND i.spent_tx_vout = o.vout
  WHERE i.block_time > NOW() - interval '365 days'
)
SELECT
  DATE_TRUNC('day', spent_time) AS day,
  SUM(btc_amount) AS btc_moved,
  SUM(btc_amount * days_held) AS coin_days_destroyed
FROM spent_outputs
GROUP BY 1
ORDER BY 1
```

This query joins Bitcoin's inputs (coins being spent) with outputs (when those coins were created) to calculate the age of each UTXO.

---

## 🔍 Advanced: Lifespan Buckets

We can refine this analysis by looking at CDD by coin age cohorts:

```sql
WITH spent_outputs AS (
  -- Same as previous query
),
age_buckets AS (
  SELECT
    spent_time,
    btc_amount,
    days_held,
    CASE
      WHEN days_held < 7 THEN 'under_1w'
      WHEN days_held < 30 THEN '1w_to_1m'
      WHEN days_held < 90 THEN '1m_to_3m'
      WHEN days_held < 180 THEN '3m_to_6m'
      WHEN days_held < 365 THEN '6m_to_1y'
      WHEN days_held < 730 THEN '1y_to_2y'
      ELSE 'over_2y'
    END AS age_bucket
  FROM spent_outputs
)
SELECT
  DATE_TRUNC('week', spent_time) AS week,
  age_bucket,
  SUM(btc_amount) AS btc_moved,
  SUM(btc_amount * days_held) AS cdd
FROM age_buckets
GROUP BY 1, 2
ORDER BY 1, CASE
  WHEN age_bucket = 'under_1w' THEN 1
  WHEN age_bucket = '1w_to_1m' THEN 2
  WHEN age_bucket = '1m_to_3m' THEN 3
  WHEN age_bucket = '3m_to_6m' THEN 4
  WHEN age_bucket = '6m_to_1y' THEN 5
  WHEN age_bucket = '1y_to_2y' THEN 6
  ELSE 7
END
```

This breakdown shows whether market movements are driven by recent buyers (young coins) or long-term HODLers (old coins).

---

## 📉 HODLer Trends During Market Cycles

Let's analyze CDD throughout past market cycles:

```sql
WITH major_tops AS (
  SELECT unnest(ARRAY['2013-12-01', '2017-12-16', '2021-11-08'])::date AS peak_date
),
daily_cdd AS (
  -- CDD calculation from earlier
),
cycle_analysis AS (
  SELECT
    d.day,
    d.coin_days_destroyed,
    d.btc_moved,
    p.peak_date,
    CASE
      WHEN d.day > p.peak_date - interval '90 days' AND d.day < p.peak_date + interval '30 days' 
      THEN 'near_top'
      ELSE 'other_period'
    END AS market_period
  FROM daily_cdd d
  CROSS JOIN major_tops p
  WHERE d.day > p.peak_date - interval '180 days'
    AND d.day < p.peak_date + interval '180 days'
)
SELECT
  market_period,
  COUNT(*) AS days_in_period,
  AVG(coin_days_destroyed) AS avg_daily_cdd,
  AVG(btc_moved) AS avg_daily_btc_moved,
  AVG(coin_days_destroyed / btc_moved) AS avg_days_per_coin
FROM cycle_analysis
GROUP BY 1
```

This analysis typically reveals a pattern: CDD rises dramatically leading into cycle tops as long-term HODLers take profits.

---

## 📊 Normalized CDD

To control for Bitcoin's growing supply over time, we can normalize CDD:

```sql
WITH bitcoin_supply AS (
  SELECT
    DAY,
    SUM(amount) / 1e8 AS total_btc_supply
  FROM bitcoin.outputs
  WHERE DAY <= CURRENT_DATE
  GROUP BY 1
),
daily_cdd AS (
  -- CDD calculation from earlier
)
SELECT
  d.day,
  d.coin_days_destroyed,
  s.total_btc_supply,
  d.coin_days_destroyed / s.total_btc_supply AS cdd_supply_ratio,
  -- 90-day moving average
  AVG(d.coin_days_destroyed / s.total_btc_supply) OVER (
    ORDER BY d.day
    ROWS BETWEEN 89 PRECEDING AND CURRENT ROW
  ) AS cdd_supply_ratio_90d_ma
FROM daily_cdd d
JOIN bitcoin_supply s ON d.day = s.day
ORDER BY d.day
```

This "CDD Supply Ratio" adjusts for the increasing supply of Bitcoin over time, making historical comparisons more meaningful.

---

## 🧙‍♀️ Advanced Indicators Derived from CDD

Beyond raw CDD, you can calculate:

### Binary CDD

Flags days with unusually high CDD relative to recent history:

```sql
WITH daily_cdd AS (
  -- CDD calculation from earlier
),
cdd_stats AS (
  SELECT
    day,
    coin_days_destroyed,
    AVG(coin_days_destroyed) OVER (
      ORDER BY day
      ROWS BETWEEN 90 PRECEDING AND 1 PRECEDING
    ) AS avg_90d_cdd,
    STDDEV(coin_days_destroyed) OVER (
      ORDER BY day
      ROWS BETWEEN 90 PRECEDING AND 1 PRECEDING
    ) AS stddev_90d_cdd
  FROM daily_cdd
)
SELECT
  day,
  coin_days_destroyed,
  avg_90d_cdd,
  stddev_90d_cdd,
  CASE
    WHEN coin_days_destroyed > avg_90d_cdd + 3*stddev_90d_cdd THEN 'extreme_outlier'
    WHEN coin_days_destroyed > avg_90d_cdd + 2*stddev_90d_cdd THEN 'significant_outlier'
    WHEN coin_days_destroyed > avg_90d_cdd + stddev_90d_cdd THEN 'moderate_outlier'
    ELSE 'normal'
  END AS cdd_event_type
FROM cdd_stats
ORDER BY day DESC
```

### HODL Waves

Shows the distribution of Bitcoin's supply by age:

```sql
WITH utxo_age AS (
  SELECT
    day,
    value / 1e8 AS btc_amount,
    EXTRACT(EPOCH FROM (day - created_at)) / 86400 AS days_old,
    CASE
      WHEN EXTRACT(EPOCH FROM (day - created_at)) / 86400 < 7 THEN 'under_1w'
      WHEN EXTRACT(EPOCH FROM (day - created_at)) / 86400 < 30 THEN '1w_to_1m'
      WHEN EXTRACT(EPOCH FROM (day - created_at)) / 86400 < 90 THEN '1m_to_3m'
      WHEN EXTRACT(EPOCH FROM (day - created_at)) / 86400 < 180 THEN '3m_to_6m'
      WHEN EXTRACT(EPOCH FROM (day - created_at)) / 86400 < 365 THEN '6m_to_1y'
      WHEN EXTRACT(EPOCH FROM (day - created_at)) / 86400 < 730 THEN '1y_to_2y'
      ELSE 'over_2y'
    END AS age_bucket
  FROM bitcoin.utxo_snapshot_daily
  WHERE day = '2022-01-01'  -- Select specific snapshot date
)
SELECT
  age_bucket,
  SUM(btc_amount) AS total_btc,
  SUM(btc_amount) / (SELECT SUM(btc_amount) FROM utxo_age) AS supply_percentage
FROM utxo_age
GROUP BY 1
ORDER BY CASE
  WHEN age_bucket = 'under_1w' THEN 1
  WHEN age_bucket = '1w_to_1m' THEN 2
  WHEN age_bucket = '1m_to_3m' THEN 3
  WHEN age_bucket = '3m_to_6m' THEN 4
  WHEN age_bucket = '6m_to_1y' THEN 5
  WHEN age_bucket = '1y_to_2y' THEN 6
  ELSE 7
END
```

---

## 💰 Historical Market Insights

CDD analysis has revealed several patterns over Bitcoin's history:

1. **Pre-Halving Accumulation**: CDD typically falls as HODLers accumulate
   
2. **Cycle Tops**: Major CDD spikes occur during rapid price appreciation as old hands sell

3. **Capitulation Bottoms**: Brief, sharp CDD spikes during price crashes as weak hands surrender coins to strong hands

4. **Aging Supply**: In recent years, a larger percentage of BTC has remained unspent for 5+ years, indicating stronger HODLer conviction

---

## 🗓 Notable CDD Events in History

| Date | Event | CDD Behavior | Market Impact |
| ---- | ----- | ------------ | ------------- |
| Nov 2013 | First major bull peak | Extreme CDD spike | Price topped at ~$1,100 |
| Jan 2015 | Bear market bottom | Low CDD, limited selling | Multi-year accumulation began |
| Dec 2017 | Second bull cycle peak | Massive CDD spike over weeks | Price topped near $20,000 |
| Mar 2020 | COVID crash | Brief CDD spike during capitulation | "HODLers of last resort" bought the dip |
| Nov 2021 | Third bull cycle peak | Elevated CDD, but lower than 2017 | Relatively muted selling from long-term holders |

---

## 🧠 Analytical Applications

Beyond market timing, CDD helps:

1. **Cost-Basis Analysis**: Estimate the average acquisition price of coins being moved

2. **HODLer Segmentation**: Distinguish between different investor personas based on holding behavior

3. **Economic Activity Measurement**: Provide insight into how much of Bitcoin's economy is active vs. dormant

4. **Liquidity Analysis**: Determine if large holders are providing sell-side liquidity

---

## 📈 Actionable Signals for Analysis

Here are patterns to watch for:

- **Low CDD + Price Consolidation**: Typically bullish, indicates accumulation
  
- **Rising CDD + Rising Price**: Caution warranted, old hands taking profits
  
- **Extreme CDD Spike + Price Drop**: Potential capitulation, watch for reversal
  
- **Declining CDD After Major Spike**: Distribution phase complete, watch for stabilization

---

## 💻 Building Your CDD Dashboard

A comprehensive CDD dashboard should include:

1. Daily/Weekly CDD with moving averages
2. CDD broken down by age cohorts
3. CDD compared to price action
4. HODL waves showing supply distribution
5. Binary CDD signals for extreme movements
6. Comparison of current cycle to historical patterns

---

## Next: 14. Building with Spellbook — How to Contribute Reusable Models to the Community
`
  },
  { 
    number: 14, 
    title: "Building with Spellbook — How to Contribute Reusable Models to the Community", 
    pdfPath: "/Onchain Manifesto/14. Building with Spellbook — How to Contribute Reusable Models to the Community.pdf",
    mdContent: `# 14. Building with Spellbook — How to Contribute Reusable Models to the Community

As we've explored throughout this series, the power of onchain analytics comes from shared knowledge and reusable components. That's exactly what Dune's **Spellbook** project enables—a community-maintained collection of standardized SQL models that abstract complex blockchain data into user-friendly tables.

In this article, we'll walk through how to contribute to Spellbook, from designing your first model to submitting a pull request that hundreds of analysts might eventually build upon.

---

## 🧙‍♀️ What is Spellbook?

Spellbook is an open-source repository of SQL models that:

1. **Standardizes** onchain data across protocols and chains
2. **Abstracts away** complex joins and decoding logic
3. **Ensures consistency** through automated testing
4. **Enables collaboration** through version control

For example, instead of every analyst writing their own complex query to calculate Uniswap volume, Spellbook provides a table like `uniswap.trades` that works across all chains and versions.

---

## 🛠️ Getting Started with Spellbook

To contribute, you'll need:

1. A GitHub account
2. Basic knowledge of Git (forking, committing, PR workflow)
3. Understanding of SQL and the dbt framework
4. Familiarity with the Spellbook repository structure

Let's walk through the process:

---

## 📜 Step 1: Fork the Spellbook Repository

First, visit the [Spellbook GitHub repository](https://github.com/duneanalytics/spellbook) and click "Fork" in the top right. This creates your own copy of the repository that you can modify.

Next, clone your fork to your local machine:

```bash
git clone https://github.com/YOUR_USERNAME/spellbook.git
cd spellbook
```

---

## 🔍 Step 2: Understand the Spellbook Structure

The repository follows dbt's standard organization:

```
spellbook/
├── models/               # SQL model definitions
│   ├── uniswap/          # One directory per protocol
│   ├── nft/
│   ├── erc721/
│   └── ...
├── tests/                # Test assertions for models
├── macros/               # Reusable SQL functions
└── dbt_project.yml       # Project configuration
```

Each protocol directory typically contains:

- **Sources**: Raw tables from Dune's database
- **Abstractions**: Models that standardize raw data
- **Integration Models**: Cross-chain, protocol-wide tables

---

## 📋 Step 3: Choose What to Build

Before writing code, decide what you want to contribute:

1. **New Protocol**: Add models for a protocol not yet in Spellbook
2. **New Chain**: Extend existing protocol models to a new blockchain
3. **New Feature**: Enhance existing models with additional data
4. **Bug Fix**: Correct issues in existing models

For example, let's say you want to add models for tracking Curve Finance pools on Ethereum.

---

## 🧪 Step 4: Design Your Models

Start by planning your abstractions. For a DEX like Curve, you might need:

- **Pools**: Information about liquidity pools
- **Swaps**: Trading activity in those pools
- **Liquidity Events**: Deposits and withdrawals
- **Integration Models**: Unified tables across pools and chains

Good models are:
- **Descriptively named**: `curve_ethereum.pools` not `curve_data`
- **Well-documented**: Include descriptions for columns and logic
- **Appropriately granular**: Break complex logic into intermediate models

---

## 💻 Step 5: Write Your SQL Models

Let's create our first model for Curve pools on Ethereum:

Create the file: `models/curve/ethereum/curve_ethereum_pools.sql`

```sql
{{
    config(
        schema = 'curve_ethereum',
        alias = 'pools',
        materialized = 'table',
        file_format = 'delta',
        tags=['curve', 'ethereum', 'pools']
    )
}}

WITH curve_factory_events AS (
    SELECT
        evt_block_time AS creation_time,
        evt_tx_hash AS creation_tx_hash,
        contract_address AS factory_address,
        coins AS pool_tokens,
        implementation AS pool_implementation,
        deployed_lp_token AS lp_token_address,
        deployed_pool AS pool_address
    FROM {{ source('curve_ethereum', 'CurveFactory_evt_LiquidityGaugeDeployed') }}
),

pool_details AS (
    SELECT
        p.pool_address,
        p.lp_token_address,
        p.creation_time,
        p.creation_tx_hash,
        p.factory_address,
        p.pool_implementation,
        p.pool_tokens,
        c.symbol AS pool_symbol,
        c.decimals AS pool_decimals
    FROM curve_factory_events p
    LEFT JOIN {{ source('ethereum', 'tokens') }} c ON p.lp_token_address = c.contract_address
)

SELECT 
    pool_address,
    lp_token_address,
    creation_time,
    creation_tx_hash,
    factory_address,
    pool_implementation,
    pool_tokens,
    pool_symbol,
    pool_decimals,
    'ethereum' AS blockchain,
    'curve' AS project,
    'curve_pool' AS pool_type
FROM pool_details
```

This model:
1. Extracts pools from Curve factory events
2. Joins with token information
3. Adds standardized columns for blockchain and project

---

## 🧬 Step 6: Create a Schema YAML File

Next, create a YAML file that documents your models:

Create the file: `models/curve/ethereum/curve_ethereum_schema.yml`

```yaml
version: 2

models:
  - name: curve_ethereum_pools
    description: "Curve pools deployed on Ethereum mainnet"
    config:
      tags: ['curve', 'ethereum', 'pools']
    
    columns:
      - name: pool_address
        description: "Address of the Curve pool contract"
        tests:
          - unique
          - not_null
      
      - name: lp_token_address
        description: "Address of the pool's LP token"
        tests:
          - not_null
      
      - name: creation_time
        description: "Timestamp when the pool was created"
        tests:
          - not_null
      
      - name: blockchain
        description: "Blockchain where the pool is deployed"
        tests:
          - not_null
          - accepted_values:
              values: ['ethereum']
      
      # Add more column definitions...
```

This YAML file:
1. Documents each column
2. Defines tests for data quality
3. Makes your model discoverable

---

## 🔌 Step 7: Create Integration Models

After creating chain-specific models, you can build cross-chain tables:

Create the file: `models/curve/curve_trades.sql`

```sql
{{
    config(
        schema = 'curve',
        alias = 'trades',
        materialized = 'incremental',
        file_format = 'delta',
        incremental_strategy = 'merge',
        unique_key = ['blockchain', 'tx_hash', 'evt_index'],
        tags=['curve', 'trades']
    )
}}

{% set curve_models = [
    ref('curve_ethereum_trades'),
    ref('curve_optimism_trades'),
    ref('curve_arbitrum_trades')
] %}

SELECT
    blockchain,
    block_time,
    block_number,
    token_bought_address,
    token_sold_address,
    trader_address,
    pool_address,
    amount_bought,
    amount_sold,
    tx_hash,
    evt_index
FROM (
    {% for model in curve_models %}
    SELECT
        blockchain,
        block_time,
        block_number,
        token_bought_address,
        token_sold_address,
        trader_address,
        pool_address,
        amount_bought,
        amount_sold,
        tx_hash,
        evt_index
    FROM {{ model }}
    {% if not loop.last %}UNION ALL{% endif %}
    {% endfor %}
)
```

This model combines data from all chain-specific tables into a single unified view.

---

## 🧪 Step 8: Test Your Models

Before submitting, test your models locally:

```bash
dbt run --select curve_ethereum_pools
dbt test --select curve_ethereum_pools
```

Check for:
- SQL syntax errors
- Join conditions that might cause duplicates
- Missing documentation
- Failed tests

---

## 🚀 Step 9: Submit Your Pull Request

Once your models are working:

1. Commit your changes: `git add models/curve && git commit -m "Add Curve models for Ethereum"`
2. Push to your fork: `git push origin main`
3. Open a pull request (PR) on GitHub

In your PR description:
- Explain what your models do
- Include example queries
- Mention any dependencies or special considerations
- Link to related issues or discussions

---

## 🔄 Step 10: Respond to Review Feedback

The Dune team and community will review your PR. They might suggest:
- Performance optimizations
- Schema adjustments for consistency
- Additional tests or documentation
- SQL style improvements

Be responsive and collaborative during this process.

---

## 🧩 Advanced Spellbook Techniques

As you become more experienced, explore:

### 1. **Incremental Models**

For large tables, use incremental models that only process new data:

```sql
{{
    config(
        materialized = 'incremental',
        incremental_strategy = 'merge',
        unique_key = ['tx_hash', 'evt_index']
    )
}}

SELECT /* columns */
FROM source_table
{% if is_incremental() %}
WHERE block_time >= (SELECT MAX(block_time) FROM {{ this }})
{% endif %}
```

### 2. **Macros for Reusable Logic**

Create macros for common calculations:

```sql
{% macro get_token_price(token_address, block_time) %}
    SELECT price
    FROM {{ source('prices', 'usd') }}
    WHERE contract_address = {{ token_address }}
    AND minute = date_trunc('minute', {{ block_time }})
{% endmacro %}
```

### 3. **Source Configuration**

Define source tables properly:

```yaml
sources:
  - name: curve_ethereum
    description: "Decoded Curve events on Ethereum"
    tables:
      - name: CurveFactory_evt_LiquidityGaugeDeployed
      - name: StableSwap_evt_TokenExchange
```

---

## 🌐 Best Practices for Spellbook Models

Follow these guidelines for quality contributions:

1. **Naming Conventions**:
   - Use `<protocol>_<chain>_<entity>` for schema-specific models
   - Use snake_case for all identifiers

2. **Documentation**:
   - Document all columns
   - Include example queries
   - Explain complex business logic

3. **Performance**:
   - Filter early (push predicates down)
   - Use appropriate materialization strategies
   - Consider query efficiency and execution time

4. **Consistency**:
   - Follow existing patterns for similar protocols
   - Use standard column names across models
   - Maintain backward compatibility

---

## 📊 Example Queries Using Your Models

Once your PR is merged, your models become available to everyone. Here's how they might be used:

```sql
-- Find most active Curve pools by volume
SELECT
  pool_address,
  pool_symbol,
  COUNT(*) AS swap_count,
  SUM(amount_sold_usd) AS volume_usd
FROM curve.trades
WHERE block_time > now() - interval '30 days'
  AND blockchain = 'ethereum'
GROUP BY 1, 2
ORDER BY 4 DESC
LIMIT 10
```

---

## 🧠 The Impact of Your Contribution

When you contribute to Spellbook, you're:

1. **Saving time** for hundreds of analysts
2. **Standardizing metrics** across the ecosystem
3. **Making data more accessible** to newcomers
4. **Building your reputation** in the data community

Your work might power dashboards, research reports, and even protocol decisions.

---

## Next: 15. How to Build an Onchain App Using the Dune API
`
  },
  { 
    number: 15, 
    title: "How to Build an Onchain App Using the Dune API", 
    pdfPath: "/Onchain Manifesto/15. How to Build an Onchain App Using the Dune API.pdf",
    mdContent: `# 15. How to Build an Onchain App Using the Dune API

So far, we've focused on analyzing onchain data inside the Dune platform. But what if you want to build your own application powered by this data? That's where the **Dune API** comes in—allowing you to programmatically access query results and build custom interfaces around blockchain analytics.

In this article, we'll walk through the process of creating an application that leverages Dune's data infrastructure, from API authentication to production deployment.

---

## 🔑 Getting Started with the Dune API

The Dune API allows you to:

1. Execute existing queries and retrieve their results
2. Fetch time series data from dashboard visualizations
3. Automate data collection for external applications
4. Build custom UIs on top of Dune's data infrastructure

To get started, you'll need a Dune API key, which is available to Dune paid plans (Pro, Advanced, or Enterprise).

---

## 📡 API Endpoints and Authentication

Dune offers a GraphQL API with these main endpoints:

- **Query Execution**: Run queries and get results
- **Query Status**: Check execution status
- **Result Fetching**: Get data from completed queries

First, let's set up authentication in our application:

```javascript
// API authentication setup
const DUNE_API_KEY = 'YOUR_API_KEY'; // Store securely in .env

async function fetchFromDuneAPI(query, variables) {
  const response = await fetch('https://api.dune.com/v1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Dune-API-Key': DUNE_API_KEY
    },
    body: JSON.stringify({
      query,
      variables
    })
  });
  
  return await response.json();
}
```

---

## 🔄 Executing a Query and Fetching Results

Let's build a function to execute a query and get its results:

```javascript
async function executeQuery(queryID, parameters = {}) {
  // Step 1: Execute the query
  const executeQueryMutation = `
    mutation ExecuteQuery($queryID: Int!, $parameters: [Parameter!]) {
      executeQuery(queryID: $queryID, parameters: $parameters) {
        job_id
      }
    }
  `;
  
  const executeResult = await fetchFromDuneAPI(executeQueryMutation, {
    queryID,
    parameters: Object.entries(parameters).map(([key, value]) => ({
      key,
      value,
      type: typeof value === 'number' ? 'number' : 'text'
    }))
  });
  
  const jobId = executeResult.data.executeQuery.job_id;
  
  // Step 2: Wait for query completion
  let queryStatus = 'PENDING';
  while (queryStatus === 'PENDING' || queryStatus === 'EXECUTING') {
    const statusQuery = `
      query QueryStatus($jobId: String!) {
        getQueryStatus(job_id: $jobId) {
          state
        }
      }
    `;
    
    const statusResult = await fetchFromDuneAPI(statusQuery, { jobId });
    queryStatus = statusResult.data.getQueryStatus.state;
    
    if (queryStatus === 'PENDING' || queryStatus === 'EXECUTING') {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Poll every second
    }
  }
  
  if (queryStatus !== 'SUCCEEDED') {
    throw new Error(`Query execution failed with status: ${queryStatus}`);
  }
  
  // Step 3: Fetch the results
  const getResultQuery = `
    query GetResult($jobId: String!) {
      getResult(job_id: $jobId) {
        rows
        columns {
          name
          type
        }
      }
    }
  `;
  
  const resultData = await fetchFromDuneAPI(getResultQuery, { jobId });
  return resultData.data.getResult;
}
```

This function:
1. Triggers execution of an existing Dune query
2. Polls for completion status
3. Fetches and returns results when ready

---

## 📱 Building a Simple Onchain Dashboard

Now let's use our API functions to build a simple React dashboard for DeFi TVL tracking:

```jsx
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

// DeFi TVL Dashboard Component
function DeFiTVLDashboard() {
  const [tvlData, setTvlData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Query ID for a Dune query that tracks DeFi TVL
  const TVL_QUERY_ID = 123456; // Replace with your actual query ID
  
  useEffect(() => {
    async function fetchTVLData() {
      try {
        setLoading(true);
        const result = await executeQuery(TVL_QUERY_ID);
        
        // Transform data for chart display
        const chartData = {
          labels: result.rows.map(row => row.day),
          datasets: [{
            label: 'Total Value Locked (USD)',
            data: result.rows.map(row => row.tvl_usd),
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
          }]
        };
        
        setTvlData(chartData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchTVLData();
  }, []);
  
  if (loading) return <div>Loading DeFi TVL data...</div>;
  if (error) return <div>Error loading data: {error}</div>;
  
  return (
    <div className="defi-dashboard">
      <h2>DeFi Total Value Locked</h2>
      {tvlData && (
        <div className="chart-container">
          <Line 
            data={tvlData}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: false,
                  ticks: {
                    callback: (value) => `$${value / 1e9}B`
                  }
                }
              }
            }}
          />
        </div>
      )}
    </div>
  );
}
```

---

## 📊 Creating a Multi-Query Dashboard

Let's expand our app to show data from multiple queries:

```jsx
function DeFiMetricsDashboard() {
  // Define queries we want to display
  const queries = [
    { id: 123456, name: 'Total Value Locked', parameter: 'tvl_usd' },
    { id: 123457, name: 'Daily Trading Volume', parameter: 'volume_usd' },
    { id: 123458, name: 'Unique Users', parameter: 'user_count' }
  ];
  
  const [dashboardData, setDashboardData] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchAllMetrics() {
      setLoading(true);
      
      // Create an object to store results for each query
      const results = {};
      
      // Execute all queries in parallel
      await Promise.all(queries.map(async (query) => {
        try {
          const result = await executeQuery(query.id);
          results[query.name] = result;
        } catch (err) {
          console.error(`Error fetching ${query.name}:`, err);
          results[query.name] = { error: err.message };
        }
      }));
      
      setDashboardData(results);
      setLoading(false);
    }
    
    fetchAllMetrics();
  }, []);
  
  // Render loading state or dashboard with all metrics
  // ...
}
```

---

## 🔄 Building a Real-Time Monitoring Application

For time-sensitive data, you might want to poll at regular intervals:

```jsx
function LiquidationMonitor() {
  const [liquidations, setLiquidations] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(null);
  
  // Query ID for a liquidation monitoring query
  const LIQUIDATION_QUERY_ID = 234567;
  
  // Function to fetch latest liquidations
  async function fetchLiquidations() {
    try {
      // Get current timestamp to use as a parameter
      const currentTime = Math.floor(Date.now() / 1000);
      
      const result = await executeQuery(LIQUIDATION_QUERY_ID, {
        // Look back 5 minutes
        start_time: currentTime - 300
      });
      
      setLiquidations(result.rows);
      setLastUpdate(new Date().toLocaleTimeString());
    } catch (err) {
      console.error('Failed to fetch liquidations:', err);
    }
  }
  
  // Set up polling every minute
  useEffect(() => {
    // Fetch immediately on mount
    fetchLiquidations();
    
    // Then set up interval
    const interval = setInterval(fetchLiquidations, 60000);
    
    // Clean up on unmount
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="liquidation-monitor">
      <h2>Recent Liquidations</h2>
      <p>Last updated: {lastUpdate || 'Loading...'}</p>
      
      <table className="liquidation-table">
        <thead>
          <tr>
            <th>Protocol</th>
            <th>Liquidated User</th>
            <th>Collateral Asset</th>
            <th>Value (USD)</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {liquidations.map((liq, index) => (
            <tr key={index}>
              <td>{liq.protocol}</td>
              <td>{liq.liquidated_user.substring(0, 8)}...</td>
              <td>{liq.collateral_asset}</td>
              <td>${Number(liq.liquidation_value_usd).toLocaleString()}</td>
              <td>{new Date(liq.block_time).toLocaleTimeString()}</td>
            </tr>
          ))}
          {liquidations.length === 0 && (
            <tr>
              <td colSpan="5">No recent liquidations</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
```

---

## 🔔 Building Alert Systems

You can use the Dune API to create custom alert systems:

```javascript
// Alert system for large transfers
async function checkForWhaleTransfers() {
  const WHALE_TRANSFER_QUERY_ID = 345678;
  
  try {
    const result = await executeQuery(WHALE_TRANSFER_QUERY_ID);
    
    // Find transfers larger than $1M
    const largeTransfers = result.rows.filter(tx => tx.amount_usd > 1000000);
    
    if (largeTransfers.length > 0) {
      // Send notifications for each large transfer
      for (const transfer of largeTransfers) {
        sendNotification({
          title: 'Whale Transfer Detected',
          message: `${transfer.token_symbol} worth $${transfer.amount_usd.toLocaleString()} moved from ${transfer.from_label || transfer.from_address.substring(0, 8)} to ${transfer.to_label || transfer.to_address.substring(0, 8)}`,
          link: `https://etherscan.io/tx/${transfer.tx_hash}`
        });
      }
    }
  } catch (err) {
    console.error('Failed to check for whale transfers:', err);
  }
}

// Set this up on a schedule (e.g., run every hour)
setInterval(checkForWhaleTransfers, 3600000);
```

---

## 📲 Integrating with External Systems

You can pipe Dune data into other systems:

```javascript
// Send TVL data to an external API
async function sendTVLToExternalSystem() {
  const TVL_QUERY_ID = 123456;
  
  try {
    const result = await executeQuery(TVL_QUERY_ID);
    
    // Extract the latest TVL data
    const latestTVL = result.rows[result.rows.length - 1];
    
    // Send to external API
    await fetch('https://your-external-api.com/update-tvl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_TOKEN'
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        total_tvl_usd: latestTVL.tvl_usd,
        by_chain: {
          ethereum: latestTVL.ethereum_tvl_usd,
          polygon: latestTVL.polygon_tvl_usd,
          arbitrum: latestTVL.arbitrum_tvl_usd,
          // Add other chains as needed
        }
      })
    });
    
    console.log('TVL data successfully sent to external system');
  } catch (err) {
    console.error('Failed to send TVL data:', err);
  }
}
```

---

## 📱 Building a Mobile Notification System

For a mobile app, you might want push notifications based on onchain events:

```javascript
// Simplified example of a notification service
class OnchainNotificationService {
  constructor(userId) {
    this.userId = userId;
    this.userPreferences = {}; // Would be loaded from database
    this.lastCheckedTime = new Date();
  }
  
  async loadUserPreferences() {
    // Load user notification preferences from your backend
    // this.userPreferences = await api.getUserPreferences(this.userId);
  }
  
  async checkForNotifiableEvents() {
    await this.loadUserPreferences();
    
    // Check various onchain conditions based on user preferences
    if (this.userPreferences.liquidationAlerts) {
      await this.checkLiquidationRisk();
    }
    
    if (this.userPreferences.governanceAlerts) {
      await this.checkGovernanceProposals();
    }
    
    if (this.userPreferences.priceAlerts) {
      await this.checkPriceThresholds();
    }
    
    // Update last checked time
    this.lastCheckedTime = new Date();
  }
  
  async checkLiquidationRisk() {
    // Query Dune for positions approaching liquidation
    const LIQUIDATION_RISK_QUERY_ID = 456789;
    
    try {
      const result = await executeQuery(LIQUIDATION_RISK_QUERY_ID, {
        user_address: this.userPreferences.walletAddress,
        health_factor_threshold: 1.2 // Alert when health factor below 1.2
      });
      
      // If any positions are at risk, send notification
      for (const position of result.rows) {
        this.sendPushNotification({
          title: 'Liquidation Risk Alert',
          body: `Your position on ${position.protocol} is at risk with health factor ${position.health_factor}`,
          data: {
            type: 'liquidation_risk',
            protocolName: position.protocol,
            healthFactor: position.health_factor,
            requiredAction: position.required_action
          }
        });
      }
    } catch (err) {
      console.error('Failed to check liquidation risk:', err);
    }
  }
  
  // Additional alert checks would go here...
  
  async sendPushNotification(notification) {
    // Implementation would depend on your push notification service
    // Example using Firebase Cloud Messaging
    try {
      const response = await fetch('https://fcm.googleapis.com/fcm/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `key=${FCM_SERVER_KEY}`
        },
        body: JSON.stringify({
          to: this.userPreferences.fcmToken,
          notification: {
            title: notification.title,
            body: notification.body,
          },
          data: notification.data
        })
      });
      
      console.log('Notification sent:', response.status);
    } catch (err) {
      console.error('Failed to send notification:', err);
    }
  }
}
```

---

## 🚀 Deploying Your Dune-Powered Application

When deploying applications that use the Dune API:

1. **Secure your API key**: Never expose it in client-side code
2. **Add caching layer**: To reduce redundant API calls
3. **Handle rate limits**: Dune has API usage limits
4. **Implement error handling**: For API failures

Here's a simple example of a server with caching:

```javascript
// Simplified Express.js server with caching
const express = require('express');
const NodeCache = require('node-cache');
const axios = require('axios');

const app = express();
const cache = new NodeCache({ stdTTL: 300 }); // 5-minute cache

// API key stored securely in environment variables
const DUNE_API_KEY = process.env.DUNE_API_KEY;

// Middleware to handle API requests with caching
app.get('/api/metrics/:queryId', async (req, res) => {
  const { queryId } = req.params;
  const cacheKey = `query-${queryId}`;
  
  try {
    // Check if we have cached results
    if (cache.has(cacheKey)) {
      return res.json({ source: 'cache', data: cache.get(cacheKey) });
    }
    
    // If not in cache, fetch from Dune
    const result = await executeQuery(queryId);
    
    // Store in cache for next request
    cache.set(cacheKey, result);
    
    return res.json({ source: 'api', data: result });
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

## 🔮 Beyond Basic Queries: Advanced Use Cases

As you become more advanced, consider these Dune API applications:

1. **Custom Analytics Platform**: Build a specialized dashboard for a specific protocol
2. **Investment Tools**: Track wallet behavior for investment signals
3. **Risk Monitoring**: Create systems to track protocol risks and vulnerabilities
4. **Community Tools**: Build interfaces for DAO participants to track governance
5. **Cross-Chain Analytics**: Unify data from multiple chains into custom interfaces

---

## 📈 Building a Token Analytics Platform

Here's a more complex example integrating multiple queries into a token analytics platform:

```jsx
// TokenAnalyticsPlatform.jsx
function TokenAnalyticsPlatform() {
  const [tokenAddress, setTokenAddress] = useState('');
  const [tokenData, setTokenData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // Query IDs for different token metrics
  const TOKEN_QUERIES = {
    holders: 567890,
    transfers: 567891,
    liquidityData: 567892,
    priceHistory: 567893
  };
  
  async function analyzeToken() {
    if (!tokenAddress.match(/^0x[a-fA-F0-9]{40}$/)) {
      alert('Please enter a valid ERC-20 token address');
      return;
    }
    
    setLoading(true);
    
    try {
      // Execute all token queries in parallel
      const [holders, transfers, liquidity, prices] = await Promise.all([
        executeQuery(TOKEN_QUERIES.holders, { token_address: tokenAddress.toLowerCase() }),
        executeQuery(TOKEN_QUERIES.transfers, { token_address: tokenAddress.toLowerCase() }),
        executeQuery(TOKEN_QUERIES.liquidityData, { token_address: tokenAddress.toLowerCase() }),
        executeQuery(TOKEN_QUERIES.priceHistory, { token_address: tokenAddress.toLowerCase() })
      ]);
      
      // Process and combine the data
      setTokenData({
        holderMetrics: {
          totalHolders: holders.rows[0].holder_count,
          concentration: calculateGiniCoefficient(holders.rows.map(r => r.balance)),
          topHolders: holders.rows.slice(0, 10)
        },
        transferMetrics: {
          dailyVolume: groupByDay(transfers.rows, 'block_time', 'amount_usd'),
          uniqueSenders: countUnique(transfers.rows, 'from_address'),
          uniqueReceivers: countUnique(transfers.rows, 'to_address')
        },
        liquidityMetrics: {
          dexLiquidity: liquidity.rows,
          topPools: groupAndSum(liquidity.rows, 'pool_address', 'liquidity_usd')
        },
        priceMetrics: {
          priceHistory: prices.rows,
          currentPrice: prices.rows[prices.rows.length - 1].price,
          dailyChange: calculatePriceChange(prices.rows, 1),
          weeklyChange: calculatePriceChange(prices.rows, 7)
        }
      });
    } catch (error) {
      console.error('Failed to analyze token:', error);
      alert('Error analyzing token. Please try again.');
    } finally {
      setLoading(false);
    }
  }
  
  // Helper functions for data processing
  function groupByDay(data, dateField, valueField) {
    // Implementation...
  }
  
  function countUnique(data, field) {
    // Implementation...
  }
  
  function groupAndSum(data, groupField, sumField) {
    // Implementation...
  }
  
  function calculatePriceChange(priceData, days) {
    // Implementation...
  }
  
  function calculateGiniCoefficient(balances) {
    // Implementation...
  }
  
  return (
    <div className="token-analytics-platform">
      <h1>Token Analytics Platform</h1>
      
      <div className="token-input">
        <input
          type="text"
          placeholder="Enter ERC-20 Token Address (0x...)"
          value={tokenAddress}
          onChange={(e) => setTokenAddress(e.target.value)}
        />
        <button onClick={analyzeToken} disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze Token'}
        </button>
      </div>
      
      {tokenData && (
        <div className="token-dashboard">
          {/* Render the various token metrics */}
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Holders</h3>
              <p>Total Holders: {tokenData.holderMetrics.totalHolders.toLocaleString()}</p>
              <p>Concentration Index: {tokenData.holderMetrics.concentration.toFixed(2)}</p>
              {/* Render top holders table */}
            </div>
            
            <div className="metric-card">
              <h3>Transfer Activity</h3>
              <p>Unique Senders: {tokenData.transferMetrics.uniqueSenders.toLocaleString()}</p>
              <p>Unique Receivers: {tokenData.transferMetrics.uniqueReceivers.toLocaleString()}</p>
              {/* Render volume chart */}
            </div>
            
            <div className="metric-card">
              <h3>Liquidity</h3>
              {/* Render liquidity chart */}
            </div>
            
            <div className="metric-card">
              <h3>Price</h3>
              <p>Current Price: ${tokenData.priceMetrics.currentPrice.toFixed(6)}</p>
              <p>24h Change: {tokenData.priceMetrics.dailyChange.toFixed(2)}%</p>
              <p>7d Change: {tokenData.priceMetrics.weeklyChange.toFixed(2)}%</p>
              {/* Render price chart */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
```

---

## 🔗 Next Steps and Resources

To continue building with the Dune API:

1. **Explore the documentation**: Dune's official API docs
2. **Join the community**: Dune Discord for help and inspiration
3. **Study existing projects**: GitHub repositories using the Dune API
4. **Build incrementally**: Start with simple use cases before complex ones

---

## Next: 16. Account Abstraction- Why It Matters for Wallet UX and Analysts
`
  },
  { 
    number: 16, 
    title: "Account Abstraction Why It Matters for Wallet UX and Analysts", 
    pdfPath: "/Onchain Manifesto/16. Account Abstraction Why It Matters for Wallet UX and Analysts.pdf",
    mdContent: `# 16. Account Abstraction: Why It Matters for Wallet UX and Analysts

A quiet revolution is underway in Ethereum—one that fundamentally changes how wallets work and what they can do. It's called **Account Abstraction** (AA), implemented through **ERC-4337**, and it represents the biggest change to user experience since ERC-20 tokens.

For onchain analysts, this shift creates both challenges and opportunities. New data structures, novel transaction types, and different user behaviors require fresh analytical approaches. In this article, we'll explore Account Abstraction from an analyst's perspective: what it is, how it works, and how to track it.

---

## 🧠 Understanding Account Abstraction

### The Old Model: EOAs vs Smart Contracts

Traditionally, Ethereum has two types of accounts:

1. **EOAs (Externally Owned Accounts)**: User wallets controlled by private keys
2. **Contract Accounts**: Smart contracts with programmed functions

EOAs have limitations:
- Can only sign standard transactions
- Can't batch multiple operations
- Require ETH for gas
- No programmable authorization (just private keys)

### The New Model: Smart Contract Wallets

Account Abstraction (via ERC-4337) blurs this distinction by allowing users to operate through smart contract wallets that can:

- Execute multiple actions in a single "transaction"
- Pay gas fees in tokens other than ETH
- Implement advanced security (multisig, social recovery)
- Run custom validation logic (time locks, spending limits)

These operations are bundled into a new primitive called a **UserOperation**.

---

## 📊 Key Data Structures for Analysts

When analyzing account abstraction, you need to understand several new data elements:

### 1. UserOperation

The central primitive that replaces standard transactions for AA wallets:

```typescript
interface UserOperation {
  sender: address;           // The smart contract wallet address
  nonce: uint256;            // Anti-replay protection
  initCode: bytes;           // Code to deploy wallet if it doesn't exist yet
  callData: bytes;           // The actual function call data
  callGasLimit: uint256;     // Gas limit for the call
  verificationGasLimit: uint256; // Gas for signature verification
  preVerificationGas: uint256;   // Gas for overhead
  maxFeePerGas: uint256;     // Similar to EIP-1559 max fee
  maxPriorityFeePerGas: uint256; // Similar to EIP-1559 priority fee
  paymasterAndData: bytes;   // Optional paymaster info (for gas sponsorship)
  signature: bytes;          // Signature authorizing the operation
}
```

### 2. EntryPoint Contract

A singleton contract that serves as the gateway for all UserOperations:

- Address: `0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789`
- Functions: `handleOps()` (batch process operations), `simulateValidation()` (validate without execution)
- Emits: `UserOperationEvent` on execution

### 3. Bundlers

Special network participants who:
- Collect UserOperations from users (off-chain)
- Bundle them into regular transactions calling EntryPoint
- Submit these transactions to the network

### 4. Paymasters

Contracts that enable sponsored transactions:
- Can pay gas fees on behalf of users
- May require tokens, ad views, or other compensation 
- Analyzed via `paymasterAndData` field

---

## 📝 Querying Account Abstraction Data on Dune

Dune has dedicated tables for ERC-4337 activity. Let's explore some examples:

### 1. Basic UserOperation Counting

```sql
SELECT
  DATE_TRUNC('day', evt_block_time) AS day,
  COUNT(*) AS userops_count,
  COUNT(DISTINCT sender) AS unique_wallets
FROM erc4337_ethereum.EntryPoint_evt_UserOperationEvent
WHERE evt_block_time > NOW() - INTERVAL '30 days'
GROUP BY 1
ORDER BY 1
```

### 2. Paymaster Analysis

```sql
SELECT
  paymaster,
  COUNT(*) AS sponsored_ops,
  COUNT(DISTINCT sender) AS unique_users,
  AVG(actualGasCost) / 1e18 AS avg_gas_cost_eth
FROM erc4337_ethereum.EntryPoint_evt_UserOperationEvent
WHERE paymaster != '0x0000000000000000000000000000000000000000'
  AND evt_block_time > NOW() - INTERVAL '30 days'
GROUP BY 1
ORDER BY 2 DESC
```

### 3. Wallet Factory Adoption

```sql
WITH wallet_deployments AS (
  SELECT
    evt_block_time,
    factory,
    sender AS wallet_address
  FROM erc4337_ethereum.EntryPoint_evt_AccountDeployed
  WHERE evt_block_time > NOW() - INTERVAL '90 days'
)
SELECT
  DATE_TRUNC('week', evt_block_time) AS week,
  factory,
  COUNT(*) AS wallets_deployed
FROM wallet_deployments
GROUP BY 1, 2
ORDER BY 1, 3 DESC
```

### 4. Cross-Chain ERC-4337 Activity

Using Spellbook's unified AA tables:

```sql
SELECT
  blockchain,
  COUNT(*) AS userops_count,
  COUNT(DISTINCT sender) AS unique_wallets,
  SUM(CASE WHEN success = true THEN 1 ELSE 0 END) / COUNT(*)::float AS success_rate
FROM account_abstraction_erc4337.userops
WHERE block_time > NOW() - INTERVAL '30 days'
GROUP BY 1
ORDER BY 2 DESC
```

---

## 🔎 Advanced Analysis Techniques

### 1. Categorizing UserOperations by Type

UserOperations are highly flexible, making categorization valuable:

```sql
SELECT
  CASE
    WHEN call_data LIKE '0x095ea7b3%' THEN 'token_approval'
    WHEN call_data LIKE '0xa9059cbb%' THEN 'token_transfer'
    WHEN call_data LIKE '0x42842e0e%' THEN 'nft_transfer'
    WHEN call_data LIKE '0x%%' AND target_contract IN (SELECT address FROM dex_contracts) THEN 'dex_swap'
    ELSE 'other'
  END AS operation_type,
  COUNT(*) AS operation_count,
  COUNT(DISTINCT sender) AS unique_wallets
FROM erc4337_ethereum.EntryPoint_evt_UserOperationEvent
JOIN erc4337_ethereum.call_data_decoded ON user_operation_hash = operation_hash
WHERE evt_block_time > NOW() - INTERVAL '30 days'
GROUP BY 1
ORDER BY 2 DESC
```

### 2. Sponsored Transaction Economics

Analyzing the economics of gas sponsorship:

```sql
WITH sponsored_ops AS (
  SELECT
    evt_block_time,
    paymaster,
    sender,
    actualGasCost / 1e18 AS gas_cost_eth,
    (actualGasCost / 1e18) * eth_price.price AS gas_cost_usd
  FROM erc4337_ethereum.EntryPoint_evt_UserOperationEvent
  JOIN prices.usd eth_price ON
    eth_price.symbol = 'WETH' AND
    DATE_TRUNC('minute', evt_block_time) = eth_price.minute
  WHERE paymaster != '0x0000000000000000000000000000000000000000'
    AND evt_block_time > NOW() - INTERVAL '30 days'
)
SELECT
  DATE_TRUNC('day', evt_block_time) AS day,
  paymaster,
  COUNT(*) AS sponsored_ops,
  SUM(gas_cost_eth) AS total_gas_eth,
  SUM(gas_cost_usd) AS total_gas_usd,
  AVG(gas_cost_usd) AS avg_gas_usd
FROM sponsored_ops
GROUP BY 1, 2
ORDER BY 1, 3 DESC
```

### 3. Wallet Adoption Lifecycle

Tracking AA wallet usage after creation:

```sql
WITH wallet_creation AS (
  SELECT
    sender AS wallet_address,
    MIN(evt_block_time) AS creation_time
  FROM erc4337_ethereum.EntryPoint_evt_UserOperationEvent
  GROUP BY 1
),
wallet_activity AS (
  SELECT
    w.wallet_address,
    w.creation_time,
    o.evt_block_time AS activity_time,
    DATE_DIFF('day', w.creation_time, o.evt_block_time) AS days_since_creation
  FROM wallet_creation w
  JOIN erc4337_ethereum.EntryPoint_evt_UserOperationEvent o ON w.wallet_address = o.sender
)
SELECT
  CASE
    WHEN days_since_creation < 1 THEN 'same_day'
    WHEN days_since_creation < 7 THEN 'first_week'
    WHEN days_since_creation < 30 THEN 'first_month'
    ELSE 'after_first_month'
  END AS activity_period,
  COUNT(*) AS operations_count,
  COUNT(DISTINCT wallet_address) AS active_wallets
FROM wallet_activity
GROUP BY 1
ORDER BY CASE
  WHEN activity_period = 'same_day' THEN 1
  WHEN activity_period = 'first_week' THEN 2
  WHEN activity_period = 'first_month' THEN 3
  ELSE 4
END
```

---

## 📱 Analyzing Wallet Types and Implementations

Different AA wallet implementations use different security models:

```sql
WITH wallet_implementations AS (
  SELECT
    sender,
    CASE
      WHEN implementation = '0x1234...' THEN 'Safe'
      WHEN implementation = '0x5678...' THEN 'Biconomy'
      WHEN implementation = '0x9abc...' THEN 'ZeroDev'
      -- Add other known implementations
      ELSE 'Other'
    END AS wallet_type
  FROM erc4337_ethereum.EntryPoint_evt_AccountDeployed
)
SELECT
  wallet_type,
  COUNT(*) AS wallet_count,
  COUNT(*) / SUM(COUNT(*)) OVER () AS market_share
FROM wallet_implementations
GROUP BY 1
ORDER BY 2 DESC
```

---

## 💸 Gas Sponsorship Models

Different paymasters use different business models:

```sql
WITH paymaster_categories AS (
  SELECT
    paymaster,
    CASE
      WHEN paymaster = '0xabcd...' THEN 'token_paymaster'  -- Pays gas for token payments
      WHEN paymaster = '0xefgh...' THEN 'app_subsidized'   -- App subsidizes transactions
      WHEN paymaster = '0xijkl...' THEN 'verification_paymaster' -- Captcha/verification based
      -- Add other known paymasters
      ELSE 'unknown'
    END AS paymaster_type
  FROM erc4337_ethereum.EntryPoint_evt_UserOperationEvent
  WHERE paymaster != '0x0000000000000000000000000000000000000000'
    AND evt_block_time > NOW() - INTERVAL '30 days'
)
SELECT
  paymaster_type,
  COUNT(*) AS operation_count,
  COUNT(DISTINCT sender) AS unique_users
FROM paymaster_categories
GROUP BY 1
ORDER BY 2 DESC
```

---

## 🧪 Bundler Economics

Analyzing bundler efficiency and behavior:

```sql
WITH bundler_stats AS (
  SELECT
    tx_from AS bundler,
    COUNT(*) AS bundle_count,
    AVG(array_length(user_operations)) AS avg_ops_per_bundle,
    SUM(gas_used) AS total_gas_used,
    SUM(gas_used * gas_price) / 1e18 AS total_eth_spent
  FROM (
    SELECT
      tx_hash,
      tx_from,
      gas_used,
      gas_price,
      array_agg(user_op_hash) AS user_operations
    FROM erc4337_ethereum.EntryPoint_call_handleOps
    JOIN ethereum.transactions ON tx_hash = hash
    WHERE evt_block_time > NOW() - INTERVAL '30 days'
    GROUP BY 1, 2, 3, 4
  ) bundler_calls
  GROUP BY 1
)
SELECT
  bundler,
  bundle_count,
  avg_ops_per_bundle,
  total_gas_used,
  total_eth_spent,
  -- Efficiency metric
  total_eth_spent / (bundle_count * avg_ops_per_bundle) AS avg_cost_per_userop
FROM bundler_stats
ORDER BY bundle_count DESC
```

---

## 🔀 Comparing AA vs Traditional EOA Behavior

How differently do AA wallets behave compared to EOAs?

```sql
-- AA wallet activity
WITH aa_activity AS (
  SELECT
    DATE_TRUNC('day', evt_block_time) AS day,
    COUNT(*) AS operation_count,
    COUNT(DISTINCT sender) AS unique_wallets
  FROM erc4337_ethereum.EntryPoint_evt_UserOperationEvent
  WHERE evt_block_time > NOW() - INTERVAL '30 days'
  GROUP BY 1
),
-- Traditional EOA activity
eoa_activity AS (
  SELECT
    DATE_TRUNC('day', block_time) AS day,
    COUNT(*) AS tx_count,
    COUNT(DISTINCT "from") AS unique_eoas
  FROM ethereum.transactions
  WHERE block_time > NOW() - INTERVAL '30 days'
    AND "to" NOT IN ('0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789') -- Exclude EntryPoint calls
    AND "from" NOT IN (SELECT sender FROM erc4337_ethereum.EntryPoint_evt_UserOperationEvent) -- Exclude AA wallets
  GROUP BY 1
)
SELECT
  a.day,
  a.operation_count AS aa_ops,
  a.unique_wallets AS aa_wallets,
  e.tx_count AS eoa_txs,
  e.unique_eoas AS eoa_wallets,
  (a.operation_count / a.unique_wallets::float) AS aa_ops_per_wallet,
  (e.tx_count / e.unique_eoas::float) AS eoa_txs_per_wallet
FROM aa_activity a
JOIN eoa_activity e ON a.day = e.day
ORDER BY 1
```

---

## 📊 Visualizing User Adoption Trends

For complete analysis, visualize:

1. **Daily UserOps**: Trend of operations over time
2. **Cumulative AA Wallets**: Growth curve of deployed wallets
3. **Paymaster Market Share**: Pie chart of sponsored transactions
4. **Chain Comparison**: Bar chart of AA adoption across chains
5. **Operation Types**: Breakdown of what users are doing with AA
6. **Wallet Implementation Share**: Leading wallet SDK providers

---

## 🔭 Future Analyst Considerations

As AA adoption grows, analysts should watch for:

1. **Chain-Specific Patterns**: Different chains may show different usage patterns
2. **Integration with DeFi**: How AA wallets change borrowing, swapping, and yield behavior
3. **Sponsored Transaction Economics**: Business models that emerge for sponsored gas
4. **Security Incidents**: How multisig, social recovery and other features affect exploit patterns
5. **Cross-Chain Correlation**: Same wallet operating across different chains

---

## 🧠 The Big Picture: Why AA Matters

For analysts, Account Abstraction represents a paradigm shift:

1. **UX Gap Closing**: Crypto UX is approaching Web2 smoothness
2. **New Business Models**: Gas abstraction enables new monetization strategies
3. **Behavior Changes**: Users behave differently with programmable wallets
4. **Ecosystem Expansion**: New users who couldn't use EOAs can use AA wallets

By tracking these trends early, analysts gain insight into the future of blockchain adoption.

---

## Next: 17. ERC-4337 Aggregated Tables Across EVM Chains: Unified Analytics at Scale
`
  },
  { 
    number: 17, 
    title: "ERC-4337 Aggregated Tables Across EVM Chains Unified Analytics at Scale", 
    pdfPath: "/Onchain Manifesto/17. ERC-4337 Aggregated Tables Across EVM Chains- Unified Analytics at Scale.pdf",
    mdContent: `# 17. ERC-4337 Aggregated Tables Across EVM Chains: Unified Analytics at Scale

In the previous article, we explored Account Abstraction (AA) and its significance for blockchain analysts. Now, we'll go deeper into how to analyze AA adoption across the entire EVM ecosystem using Dune's unified aggregated tables.

As ERC-4337 wallets deploy across Ethereum, Arbitrum, Optimism, Base, and beyond, a cohesive analytical framework becomes essential. This article shows how to build cross-chain AA dashboards that reveal the complete picture—not just isolated fragments.

---

## 🌐 The Challenge of Multi-Chain Analysis

Account Abstraction is deployed across multiple EVM chains, creating analytical challenges:

1. **Different EntryPoint deployments**: Same address but separate contract instances
2. **Chain-specific usage patterns**: Different gas models affect AA adoption
3. **Fragmented data**: UserOps are scattered across disconnected tables
4. **Inconsistent schemas**: Raw tables vary in structure and availability 
5. **Complex joining**: Difficult to trace the same wallet across chains

Dune's aggregated tables solve these problems by creating a unified view.

---

## 📊 Dune's ERC-4337 Aggregated Tables

The primary aggregated table for cross-chain analysis is:

```
account_abstraction_erc4337.userops
```

This table normalizes UserOperation events across all supported chains with a consistent schema:

| Column | Type | Description |
| ------ | ---- | ----------- |
| blockchain | string | The blockchain (ethereum, arbitrum, optimism, etc.) |
| block_time | timestamp | When the operation was processed |
| block_number | integer | Block containing the operation |
| user_operation_hash | string | Unique hash of the UserOperation |
| sender | address | The smart contract wallet address |
| paymaster | address | Optional paymaster used (0x0 if none) |
| nonce | integer | Operation nonce for replay protection |
| success | boolean | Whether the operation succeeded |
| factory | address | Contract that deployed the wallet (if applicable) |
| op_fee | numeric | Fee paid in native token (ETH, ARB, etc.) |
| op_fee_usd | numeric | Fee paid in USD |
| tx_hash | string | Hash of the transaction containing this operation |

Let's explore how to use this table for cross-chain analytics.

---

## 🔎 Basic Cross-Chain Analysis

### Daily UserOps by Chain

```sql
SELECT
  DATE_TRUNC('day', block_time) AS day,
  blockchain,
  COUNT(*) AS userops_count
FROM account_abstraction_erc4337.userops
WHERE block_time > NOW() - INTERVAL '90 days'
GROUP BY 1, 2
ORDER BY 1, 2
```

This simple query immediately reveals adoption patterns across chains, showing where AA is growing fastest.

### Chain Market Share Over Time

```sql
WITH daily_ops AS (
  SELECT
    DATE_TRUNC('day', block_time) AS day,
    blockchain,
    COUNT(*) AS userops_count
  FROM account_abstraction_erc4337.userops
  WHERE block_time > NOW() - INTERVAL '90 days'
  GROUP BY 1, 2
),
daily_totals AS (
  SELECT
    day,
    SUM(userops_count) AS total_daily_ops
  FROM daily_ops
  GROUP BY 1
)
SELECT
  d.day,
  d.blockchain,
  d.userops_count,
  t.total_daily_ops,
  d.userops_count / t.total_daily_ops AS chain_market_share
FROM daily_ops d
JOIN daily_totals t ON d.day = t.day
ORDER BY 1, 5 DESC
```

This shows how each chain's share of total AA activity evolves over time.

---

## 🧠 Wallet Analysis Across Chains

### Unique Wallets by Chain

```sql
SELECT
  blockchain,
  COUNT(DISTINCT sender) AS unique_wallets,
  COUNT(*) AS total_userops,
  COUNT(*) / COUNT(DISTINCT sender) AS ops_per_wallet
FROM account_abstraction_erc4337.userops
WHERE block_time > NOW() - INTERVAL '30 days'
GROUP BY 1
ORDER BY 2 DESC
```

This reveals where AA wallets are most active and engaged.

### Multi-Chain Wallet Usage

```sql
WITH wallet_chains AS (
  SELECT
    sender,
    COUNT(DISTINCT blockchain) AS chain_count,
    array_agg(DISTINCT blockchain) AS chains_used
  FROM account_abstraction_erc4337.userops
  WHERE block_time > NOW() - INTERVAL '90 days'
  GROUP BY 1
)
SELECT
  chain_count,
  COUNT(*) AS wallet_count,
  COUNT(*) / SUM(COUNT(*)) OVER () AS percentage
FROM wallet_chains
GROUP BY 1
ORDER BY 1
```

This shows how many AA wallets operate across multiple chains—a key indicator of sophisticated crypto users.

---

## 💸 Cross-Chain Fee Analysis

### Gas Costs by Chain

```sql
SELECT
  blockchain,
  COUNT(*) AS userops_count,
  AVG(op_fee_usd) AS avg_fee_usd,
  PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY op_fee_usd) AS median_fee_usd,
  SUM(op_fee_usd) AS total_fee_usd
FROM account_abstraction_erc4337.userops
WHERE block_time > NOW() - INTERVAL '30 days'
  AND success = true
GROUP BY 1
ORDER BY 3
```

This reveals which chains offer the most cost-effective AA experience.

### Fee Trends Over Time

```sql
SELECT
  DATE_TRUNC('week', block_time) AS week,
  blockchain,
  COUNT(*) AS userops_count,
  AVG(op_fee_usd) AS avg_fee_usd,
  SUM(op_fee_usd) AS total_fees_usd
FROM account_abstraction_erc4337.userops
WHERE block_time > NOW() - INTERVAL '180 days'
  AND success = true
GROUP BY 1, 2
ORDER BY 1, 2
```

This shows how gas costs for AA transactions evolve across different chains.

---

## 🏭 Factory Analysis: Who's Building the Wallets?

Different SDK providers deploy different factories. Let's see which ones dominate:

```sql
WITH factory_deployments AS (
  SELECT
    blockchain,
    factory,
    COUNT(DISTINCT sender) AS wallets_deployed,
    MIN(block_time) AS first_deployment,
    MAX(block_time) AS latest_deployment
  FROM account_abstraction_erc4337.userops
  WHERE factory IS NOT NULL
  GROUP BY 1, 2
)
SELECT
  blockchain,
  factory,
  wallets_deployed,
  first_deployment,
  latest_deployment,
  (NOW() - first_deployment) AS factory_age,
  wallets_deployed / EXTRACT(DAY FROM (NOW() - first_deployment)) AS wallets_per_day
FROM factory_deployments
WHERE wallets_deployed > 10
ORDER BY blockchain, wallets_deployed DESC
```

Add wallet factory labels for better insights:

```sql
-- Use this CTE before your main query
WITH factory_labels AS (
  SELECT * FROM (VALUES
    ('0x9406Cc6185a346906296840746125a0E44976454', 'Safe'),
    ('0x0000000000000000000000000000000000000000', 'Unknown'),
    -- Add more known factories
  ) AS t (factory_address, factory_name)
)
```

---

## 👨‍👩‍👧‍👦 User Cohort Analysis

Track retention and engagement across chains with cohort analysis:

```sql
WITH user_first_op AS (
  SELECT
    sender,
    MIN(DATE_TRUNC('month', block_time)) AS first_month
  FROM account_abstraction_erc4337.userops
  GROUP BY 1
),
monthly_activity AS (
  SELECT
    DATE_TRUNC('month', block_time) AS month,
    sender
  FROM account_abstraction_erc4337.userops
  GROUP BY 1, 2
)
SELECT
  u.first_month AS cohort,
  m.month AS activity_month,
  EXTRACT(MONTH FROM m.month) - EXTRACT(MONTH FROM u.first_month) + 
  (EXTRACT(YEAR FROM m.month) - EXTRACT(YEAR FROM u.first_month)) * 12 AS months_since_first,
  COUNT(DISTINCT m.sender) AS active_wallets
FROM user_first_op u
JOIN monthly_activity m ON u.sender = m.sender
WHERE m.month >= u.first_month
GROUP BY 1, 2, 3
ORDER BY 1, 3
```

---

## 🌄 Mapping Blockchain Ecosystems

Identify the relationship between wallet deployment chain and usage chain:

```sql
WITH wallet_first_chain AS (
  SELECT
    sender,
    FIRST_VALUE(blockchain) OVER (
      PARTITION BY sender 
      ORDER BY block_time 
      ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
    ) AS deployment_chain
  FROM account_abstraction_erc4337.userops
  WHERE factory IS NOT NULL
),
wallet_activity AS (
  SELECT
    sender,
    blockchain AS activity_chain,
    COUNT(*) AS op_count
  FROM account_abstraction_erc4337.userops
  GROUP BY 1, 2
)
SELECT
  w.deployment_chain,
  a.activity_chain,
  COUNT(DISTINCT w.sender) AS wallet_count,
  SUM(a.op_count) AS operation_count
FROM wallet_first_chain w
JOIN wallet_activity a ON w.sender = a.sender
GROUP BY 1, 2
ORDER BY 1, 3 DESC
```

This reveals migration patterns and cross-chain user journeys.

---

## 🛰️ Paymaster Usage Across Chains

Compare sponsored transaction patterns by chain:

```sql
-- First identify major paymasters
WITH top_paymasters AS (
  SELECT
    paymaster,
    COUNT(*) AS sponsored_ops,
    SUM(op_fee_usd) AS total_sponsored_usd
  FROM account_abstraction_erc4337.userops
  WHERE paymaster != '0x0000000000000000000000000000000000000000'
    AND block_time > NOW() - INTERVAL '30 days'
  GROUP BY 1
  ORDER BY 2 DESC
  LIMIT 20
),
-- Then analyze by chain
paymaster_by_chain AS (
  SELECT
    blockchain,
    paymaster,
    COUNT(*) AS sponsored_ops,
    COUNT(DISTINCT sender) AS unique_users,
    SUM(op_fee_usd) AS total_sponsored_usd
  FROM account_abstraction_erc4337.userops
  WHERE paymaster IN (SELECT paymaster FROM top_paymasters)
    AND block_time > NOW() - INTERVAL '30 days'
  GROUP BY 1, 2
)
SELECT
  blockchain,
  paymaster,
  sponsored_ops,
  unique_users,
  total_sponsored_usd,
  total_sponsored_usd / sponsored_ops AS avg_sponsorship_usd
FROM paymaster_by_chain
ORDER BY blockchain, sponsored_ops DESC
```

---

## 📱 Application Analysis

Identify what applications users interact with across chains:

```sql
WITH userop_contracts AS (
  SELECT
    u.blockchain,
    u.user_operation_hash,
    u.sender,
    c.to AS target_contract
  FROM account_abstraction_erc4337.userops u
  JOIN chain_specific_call_data c ON u.user_operation_hash = c.user_operation_hash
  WHERE u.block_time > NOW() - INTERVAL '30 days'
),
contract_labels AS (
  -- Include contract labels table or known addresses
  SELECT * FROM (VALUES
    ('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 'USDC'),
    ('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', 'Uniswap')
    -- Add more contract labels
  ) AS t (contract_address, label)
)
SELECT
  oc.blockchain,
  COALESCE(cl.label, oc.target_contract) AS contract,
  COUNT(*) AS interaction_count,
  COUNT(DISTINCT oc.sender) AS unique_wallets
FROM userop_contracts oc
LEFT JOIN contract_labels cl ON oc.target_contract = cl.contract_address
GROUP BY 1, 2
ORDER BY 1, 3 DESC
```

---

## 🎯 Success Rate Analysis

Compare transaction success rates across chains:

```sql
SELECT
  blockchain,
  COUNT(*) AS total_ops,
  SUM(CASE WHEN success = true THEN 1 ELSE 0 END) AS successful_ops,
  SUM(CASE WHEN success = true THEN 1 ELSE 0 END) / COUNT(*)::float AS success_rate,
  AVG(CASE WHEN success = false THEN op_fee_usd ELSE 0 END) AS avg_failed_op_fee_usd
FROM account_abstraction_erc4337.userops
WHERE block_time > NOW() - INTERVAL '30 days'
GROUP BY 1
ORDER BY 4 DESC
```

---

## 🗺️ Building a Comprehensive Cross-Chain Dashboard

A complete ERC-4337 dashboard should include:

1. **Overview**: Total UserOps, wallets, and fees across all chains
2. **Chain Comparison**: Activity, costs, and growth rates by chain 
3. **Wallet Analysis**: Deployment origins and cross-chain usage
4. **Economic Analysis**: Fee trends, paymaster usage, sponsorship patterns
5. **User Behavior**: Application usage, operation types, success rates
6. **Growth Metrics**: Daily new wallets, retention rates, activity frequency

Here's a query for the overview section:

```sql
-- Overview metrics
WITH daily_metrics AS (
  SELECT
    DATE_TRUNC('day', block_time) AS day,
    COUNT(*) AS total_userops,
    COUNT(DISTINCT sender) AS active_wallets,
    COUNT(DISTINCT CASE WHEN factory IS NOT NULL THEN sender END) AS new_wallets,
    SUM(op_fee_usd) AS total_fees_usd,
    COUNT(DISTINCT CASE WHEN paymaster != '0x0000000000000000000000000000000000000000' THEN user_operation_hash END) AS sponsored_ops
  FROM account_abstraction_erc4337.userops
  WHERE block_time > NOW() - INTERVAL '90 days'
  GROUP BY 1
)
SELECT
  day,
  total_userops,
  active_wallets,
  new_wallets,
  total_fees_usd,
  sponsored_ops,
  sponsored_ops / total_userops::float AS sponsored_ratio,
  -- Rolling metrics
  SUM(total_userops) OVER (ORDER BY day ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) / 7 AS avg_daily_ops_7d,
  SUM(active_wallets) OVER (ORDER BY day ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) / 7 AS avg_daily_wallets_7d,
  SUM(new_wallets) OVER (ORDER BY day) AS cumulative_wallets
FROM daily_metrics
ORDER BY day
```

---

## 🔮 Forward-Looking Analysis

As AA adoption accelerates, these queries will reveal:

1. **Chain Selection Patterns**: Which chains become preferred for AA usage
2. **Wallet Expansion Paths**: How wallets spread from one chain to many
3. **Economic Models**: Which paymaster strategies succeed at scale
4. **Protocol Integration**: What DeFi/NFT apps benefit most from AA
5. **User Behavior Changes**: How AA wallets differ from EOAs in on-chain activity

---

## 🧠 The Value of Unified Analytics

Cross-chain AA analysis matters because:

1. **Complete Picture**: Single-chain analysis misses migration patterns
2. **Competitive Intelligence**: Reveals which chains attract AA users
3. **User Journey Mapping**: Tracks how users navigate the multi-chain ecosystem
4. **Market Sizing**: Shows the true scale of AA adoption 
5. **Future Forecasting**: Enables prediction of emerging trends

By using Dune's aggregated tables, you gain holistic insights that isolated analysis can't provide.

---

## Next: 18. Why the Future Belongs to Onchain Analysts
`
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
]

