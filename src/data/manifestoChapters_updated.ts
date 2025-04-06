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
    pdfPath: "/Onchain Manifesto/The_Onchain_Analyst_Decoding_the_Transparent_Economy.pdf",
    mdContent: `# **The Onchain Analyst Decoding the Transparent Economy**

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
    pdfPath: "/Onchain Manifesto/01_What_Does_an_Onchain_Data_Analyst_Do.pdf",
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
    pdfPath: "/Onchain Manifesto/02_The_Onchain_Stack_SQL_Spellbook_and_Decoding_UTXOs.pdf",
    mdContent: `# **02. The Onchain Stack: SQL, Spellbook, and Decoding UTXOs**

> "You can't analyze what you don't understand. The onchain stack starts with knowing your data."

Every onchain analyst begins their journey not with a dashboard—but with a schema. To build meaningful insights, you need to understand how blockchain data is structured, what types of interactions it captures, and how to retrieve exactly what you need.

This article dives into the foundation of the onchain data stack. From Bitcoin's UTXO model to Ethereum's account model, from writing reusable queries in Dune's Spellbook to designing your first modular dashboard—we'll show you how real analysts read the chain.

---

### First, Know the Models: UTXO vs. Account-Based

The two primary models in blockchain data are fundamentally different.

#### 🔗 Bitcoin: UTXO (Unspent Transaction Output)

Bitcoin doesn't track balances. Instead, every wallet's "balance" is the sum of unspent outputs it controls. Each transaction consumes previous outputs and generates new ones—like handing in old bills to receive change.

**Key tables on Dune:**

- bitcoin.outputs: Where each BTC was sent
- bitcoin.inputs: Where each BTC came from (linked to previous outputs)

#### 📘 Ethereum: Account-Based

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
- Understand both data and the systems that generate it

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
    pdfPath: "/Onchain Manifesto/03_The_Dune_Platform_A_Gateway_to_Onchain_Transparent_Economy.pdf",
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

### 🧾 Queries

This is where the magic happens. Every query is a SQL script that pulls from decoded blockchain tables.

- Use the **query editor** to write and run SQL
- Visualize results with tables, charts, or graphs
- Save your queries, fork others, or share links publicly

### 📊 Dashboards

Dashboards are collections of queries with visualizations. They let you tell a story with data.

- Track metrics over time (TVL, swap volume, active users)
- Combine multiple chains or protocols in one place
- Embed charts in blog posts, docs, or Notion pages

### 📚 Table Explorer

Explore the underlying schema.

- Filter by blockchain (e.g. \`ethereum\`, \`arbitrum\`, \`bitcoin\`)
- Browse by category: \`transactions\`, \`token_transfers\`, \`logs\`, etc.
- View column definitions and data samples

### 🧙‍♀️ Spellbook

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
    pdfPath: "/Onchain Manifesto/04_Understanding_Tables_Ethereum_Bitcoin_NFTs_ERC4337_and_More.pdf",
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
    pdfPath: "/Onchain Manifesto/05_SQL_Basics_for_Blockchain_Analytics.pdf",
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
    pdfPath: "/Onchain Manifesto/06_Useful_Queries_From_Token_Transfers_to_Whale_Watching.pdf",
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
    pdfPath: "/Onchain Manifesto/07_NFT_Analysis_Wash_Trading_Mint_Trends_and_Market_Health.pdf",
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

## 📊 Real Dashboards You Can Fork

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
    pdfPath: "/Onchain Manifesto/08_Lending_Protocols_Risk_Liquidations_and_User_Behavior.pdf",
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
    pdfPath: "/Onchain Manifesto/09_DeFi_Analysis_Liquidity_Incentives_and_TVL_Dynamics.pdf",
    mdContent: `# 09. DeFi Analysis — Liquidity, Incentives, and TVL Dynamics

DeFi unlocked a new paradigm: transparent financial infrastructure. Every swap, deposit, and liquidation happens in plain sight, leaving behind a trail of data.

As an onchain analyst, you're uniquely positioned to study what everyone else can only guess at: actual usage patterns, liquidity flows, and value capture in financial protocols.

This article explores how to analyze DeFi's core metrics, from TVL to incentive efficiency.

---

## 🧠 Understanding DeFi's Key Metrics

TVL (Total Value Locked) might be DeFi's most famous metric, but it's just the beginning.

Let's break down the key data points you'll track when analyzing a protocol:

### 🔒 TVL (Total Value Locked)

TVL measures how much value users have deposited into a protocol.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount_usd) AS tvl
FROM dex_protocol.deposits
WHERE block_time > now() - interval '90 days'
GROUP BY 1
ORDER BY 1
\`\`\`

But raw TVL is just a starting point. You need to ask:

- TVL per chain (bridged vs. native deposits)
- TVL by token (stablecoins vs. volatile assets)
- TVL per user tier (whales vs. retail deposits)

---

### 💧 Liquidity Depth

Liquidity isn't just about total deposits—it's about **where** and **how** that liquidity is deployed.

For AMMs like Uniswap, analyze:

- Tick distribution (for concentrated liquidity)
- Slippage for standard trade sizes
- Range efficiency (% time spent in active tick range)

\`\`\`sql
SELECT 
  pool,
  tick_lower,
  tick_upper,
  SUM(amount_usd) AS liquidity_usd,
  AVG(time_in_range_pct) AS efficiency
FROM uniswap_v3.positions
WHERE block_time > now() - interval '30 days'
GROUP BY 1, 2, 3
ORDER BY 4 DESC
\`\`\`

---

### 📊 Volume vs. TVL Ratio

A high volume/TVL ratio indicates capital efficiency—how much trading volume a protocol generates per dollar of liquidity.

\`\`\`sql
SELECT 
  date_trunc('day', day) AS day,
  trading_volume / tvl AS capital_efficiency
FROM (
  SELECT 
    date_trunc('day', block_time) AS day,
    SUM(amount_usd) AS trading_volume 
  FROM dex.trades 
  GROUP BY 1
) t1
JOIN (
  SELECT 
    date_trunc('day', block_time) AS day,
    AVG(tvl) AS tvl 
  FROM dex.tvl 
  GROUP BY 1
) t2 USING (day)
\`\`\`

---

### 🧪 Incentive Analysis

Many protocols incentivize TVL with token rewards. But are these incentives effective or wasteful?

Calculate the **cost per dollar of TVL**:

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(incentive_amount_usd) / AVG(tvl) AS cost_per_dollar_tvl
FROM protocol.incentives
JOIN protocol.tvl USING (day)
GROUP BY 1
ORDER BY 1
\`\`\`

---

## 🔍 DeFi Anti-Patterns to Watch For

Healthy DeFi protocols show some common patterns:

- **Balanced user distribution** (not whale-dominated)
- **Sustainable yield curves** (not entirely from token emissions)
- **Rational TVL growth** (not purely incentive-chasing)

Here's how to spot potential issues:

### Whale Concentration

\`\`\`sql
SELECT 
  COUNT(DISTINCT address) AS wallets,
  SUM(CASE WHEN balance_usd > 100000 THEN balance_usd ELSE 0 END) / SUM(balance_usd) AS whale_concentration
FROM protocol.balances
WHERE block_time = '2023-06-01'
\`\`\`

### TVL/Market Cap Ratio

\`\`\`sql
SELECT 
  date_trunc('day', day) AS day,
  TVL / token_marketcap AS tvl_mcap_ratio
FROM protocol_metrics
WHERE day > now() - interval '90 days'
\`\`\`

A TVL/MCAP ratio below 1 often indicates overvaluation or unsustainable incentives.

---

## 🧰 Building DeFi Dashboards in Dune

Effective DeFi dashboards should show:

1. **Protocol Totals**: TVL, unique users, protocol revenue
2. **User Segments**: Retail vs. whales, new vs. existing
3. **Incentive Analysis**: Reward distribution, cost of acquisition
4. **Comparative View**: Performance vs. competitors

Remember to include:

- **Daily, weekly, monthly trends**
- **USD normalization** for all token values
- **Divergence indicators** for correlated metrics

---

## 📚 Examples to Learn From

- Curve Gauge Voting Analytics
- Uniswap LP Profitability Dashboard
- Aave Liquidation Monitor
- Lido Staking Concentration Analysis

---

## 🧠 Final Thoughts

DeFi analytics gives you superpowers. While TradFi operates behind closed doors, DeFi exposes its inner workings.

This transparency enables you to spot opportunities and risks that would be completely hidden in traditional finance.

Whether you're analyzing a new yield farming protocol, tracking liquidity shifts across DEXs, or evaluating governance decisions—the data is there, waiting to be queried.

---

**Next: 10. MEV on Uniswap — Understanding and Quantifying Extracted Value**
`
  },
  { 
    number: 10, 
    title: "MEV on Uniswap — Understanding and Quantifying Extracted Value", 
    pdfPath: "/Onchain Manifesto/10_MEV_on_Uniswap_Understanding_and_Quantifying_Extracted_Value.pdf",
    mdContent: `# 10. MEV on Uniswap — Understanding and Quantifying Extracted Value

MEV—Maximal Extractable Value (formerly Miner Extractable Value)—is the invisible tax of the DeFi ecosystem. It represents the profit that can be extracted from users by controlling transaction ordering.

For analysts, MEV offers a fascinating window into market microstructure, efficiency, and the actual cost of trading in decentralized markets.

This article explores how to measure, track, and analyze MEV activity on Uniswap.

---

## 🧩 What Is MEV?

MEV occurs when a block producer or trader can profit by controlling transaction ordering. Common MEV strategies include:

- **Sandwich attacks**: Frontrunning and backrunning user trades
- **Arbitrage**: Profiting from price differences between pools
- **Liquidations**: Racing to liquidate undercollateralized positions
- **Just-in-time liquidity**: Adding and removing liquidity around large trades

While some MEV is natural market efficiency (like arbitrage), other forms directly extract value from users.

---

## 📊 Measuring Sandwich Attacks on Uniswap

Sandwich attacks are the most common form of MEV on Uniswap. Here's how to detect them:

\`\`\`sql
WITH swaps AS (
  SELECT
    tx_hash,
    block_number,
    index,
    sender,
    amount0_in,
    amount1_in,
    amount0_out,
    amount1_out,
    pool
  FROM uniswap_v3.swaps
  WHERE block_time > now() - interval '7 days'
)

SELECT
  victim.tx_hash AS victim_tx,
  frontrun.tx_hash AS frontrun_tx,
  backrun.tx_hash AS backrun_tx,
  (backrun.amount1_out - frontrun.amount1_in) AS profit_token1,
  (backrun.amount0_out - frontrun.amount0_in) AS profit_token0
FROM swaps victim
JOIN swaps frontrun ON 
  victim.block_number = frontrun.block_number AND
  victim.index > frontrun.index AND
  victim.pool = frontrun.pool
JOIN swaps backrun ON 
  victim.block_number = backrun.block_number AND
  victim.index < backrun.index AND
  victim.pool = backrun.pool
WHERE 
  frontrun.sender = backrun.sender AND
  victim.sender != frontrun.sender
\`\`\`

This query identifies patterns where the same address:
1. Makes a swap (frontrun)
2. Is followed by another user's transaction 
3. Makes another swap in the opposite direction (backrun)

---

## 📉 Quantifying User Value Extraction

How much are users losing to MEV? Here's a calculation:

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  COUNT(*) AS sandwiched_txs,
  COUNT(*) / COUNT(DISTINCT tx_hash) AS sandwich_rate,
  SUM(mev_extracted_usd) AS total_mev_usd
FROM mev.sandwiches
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

Key metrics to track:
- **Total MEV extracted** (in USD)
- **MEV as % of trading volume**
- **% of trades affected**
- **Average extraction per trade**

---

## 🧠 Advanced: Cross-chain MEV Comparison

Different chains have different block times, validator sets, and MEV markets. Compare MEV intensity:

\`\`\`sql
SELECT 
  blockchain,
  COUNT(*) AS total_swaps,
  COUNT(DISTINCT CASE WHEN is_sandwiched THEN tx_hash END) AS sandwiched_swaps,
  AVG(CASE WHEN is_sandwiched THEN price_impact_pct ELSE NULL END) AS avg_sandwich_impact,
  SUM(CASE WHEN is_sandwiched THEN mev_extracted_usd ELSE 0 END) / SUM(volume_usd) AS mev_tax_rate
FROM dex.trades
WHERE block_time > now() - interval '14 days'
  AND project = 'uniswap'
GROUP BY 1
ORDER BY 5 DESC
\`\`\`

Insights to surface:
- Ethereum vs. L2s MEV rates
- Impact of different sequencers/validators
- Effectiveness of MEV protection mechanisms

---

## 📋 MEV Mitigation and Dashboards

MEV can be mitigated through:

- **MEV-Share and MEV-Boost**: More equitable distribution of MEV
- **Private RPC endpoints**: Like Flashbots Protect
- **Design improvements**: Like fair sequencing and timing games

Your MEV dashboard should include:

1. **MEV volume over time**
2. **% of trades affected**
3. **Top MEV extractors** (addresses)
4. **Pool-specific MEV activity**
5. **User cost analysis**

---

## 🧩 Beyond Sandwiches: Time-Based Analysis

MEV patterns often cluster around specific market conditions. Analyze:

- Block builder concentration
- Gas price spikes during MEV opportunities
- Correlation between volatility and MEV activity

\`\`\`sql
SELECT 
  date_trunc('hour', block_time) AS hour,
  COUNT(*) AS mev_txs,
  AVG(gas_price) AS avg_gas_price,
  SUM(mev_profit_usd) AS total_profit,
  AVG(token_price_volatility) AS avg_volatility
FROM mev.transactions
JOIN market_stats USING (hour)
WHERE block_time > now() - interval '30 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

## 🧰 Technical Challenges in MEV Analysis

Accurate MEV analysis requires:

- **Transaction trace data** (not just successful swaps)
- **Gas price and fee analysis**
- **Pool reserves at specific blocks**
- **Knowledge of MEV-specific patterns**

---

## 🔮 The Future of MEV Analytics

As MEV evolves, analysts will need to track:

- **Cross-domain MEV** (spanning multiple DEXs or chains)
- **L2-specific extraction patterns**
- **Regulatory and economic impacts**
- **Builder and searcher competition dynamics**

---

## 🧠 Conclusion: Why MEV Matters

MEV is a direct window into blockchain market efficiency. By quantifying it, you can:

- Evaluate the actual cost of trading on different protocols
- Assess builder and validator competition
- Measure the effectiveness of MEV mitigation strategies
- Understand the true economics of DeFi

For onchain analysts, MEV represents one of the most technically fascinating areas of study—where game theory, market microstructure, and blockchain mechanics intersect.

---

**Next: 11. Uniswap Multichain Analytics — Comparing Deployments Across Chains**
`
  },
  {
    number: 11,
    title: "Uniswap Multichain Analytics — Comparing Deployments Across Chains",
    pdfPath: "/Onchain Manifesto/11_Uniswap_Multichain_Analytics_Comparing_Deployments_Across_Chains.pdf",
    mdContent: `# **11. Uniswap Multichain Analytics — Comparing Deployments Across Chains**

Uniswap started on Ethereum, but it didn't stay there.

Today, the protocol is deployed across multiple EVM chains—Arbitrum, Optimism, Polygon, Base, BNB Chain, and more. Each chain has different users, liquidity conditions, gas costs, and activity levels.

As an onchain analyst, comparing these deployments side by side is a powerful exercise. It tells us where growth is happening, where liquidity is sticky, and how Uniswap adapts to each ecosystem.

In this article, we'll show how to do cross-chain Uniswap analysis using Dune.

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

\`\`\`sql
spellbook.uniswap_v3.swaps
\`\`\`

This table combines swaps from all supported chains into one schema with a \`blockchain\` field.

### Example: Daily Volume per Chain

\`\`\`sql
SELECT 
  blockchain,
  DATE_TRUNC('day', block_time) AS day,
  SUM(amount_usd) AS daily_volume
FROM spellbook.uniswap_v3.swaps
WHERE block_time > NOW() - INTERVAL '30 days'
GROUP BY 1, 2
ORDER BY 2, 1
\`\`\`

Visualize this as a line chart grouped by \`blockchain\`.

📈 You'll quickly see trends—who's growing, who's stagnating.

---

## 💸 LP Fee Revenue by Chain

Want to see where LPs are earning the most?

Just query the \`fee_amount_usd\` field:

\`\`\`sql
SELECT 
  blockchain,
  SUM(fee_amount_usd) AS total_fees
FROM spellbook.uniswap_v3.swaps
WHERE block_time > NOW() - INTERVAL '30 days'
GROUP BY 1
ORDER BY total_fees DESC
\`\`\`

You may be surprised—some chains punch above their weight.

---

## 🧠 Analyzing User Behavior

Do wallets act the same across chains?

Use:

\`\`\`sql
SELECT 
  blockchain,
  COUNT(DISTINCT sender) AS unique_swappers
FROM spellbook.uniswap_v3.swaps
WHERE block_time > NOW() - INTERVAL '7 days'
GROUP BY 1
ORDER BY unique_swappers DESC
\`\`\`

Or track individual wallets:

\`\`\`sql
SELECT 
  sender,
  COUNT(DISTINCT blockchain) AS chains_active
FROM spellbook.uniswap_v3.swaps
GROUP BY 1
HAVING chains_active > 1
\`\`\`

This shows cross-chain Uniswap power users.

---

## 🧰 Dashboard Design Ideas

Here's what you can include in a multichain Uniswap dashboard:

- Daily volume by chain
- Fee revenue per chain
- LP wallet overlap across chains
- Top pairs per chain
- Average trade size comparison
- TVL (using \`uniswap_v3.pool_day_data\`)
- Protocol revenue (e.g. 0.05% of fees if fee switch is on)

Bonus: Add dropdown filters by chain, pair, or token.

---

## 🧱 Infrastructure Tips

Use these tables from Spellbook:

- \`spellbook.uniswap_v3.swaps\`
- \`spellbook.uniswap_v3.pool_day_data\`
- \`spellbook.uniswap_v3.liquidity_positions\`
- \`prices.usd\` (for USD conversions)

Remember:

✅ Always filter by \`block_time\`  
✅ Use \`blockchain\` in the GROUP BY  
✅ Join with price tables when needed

---

## 🎯 Why It Matters

Multichain analytics is no longer optional.

Uniswap's future (and most protocols') is cross-chain:

- LPs chase yield across ecosystems
- Protocols deploy governance experiments by chain
- Users follow gas fees, incentives, and latency

Understanding these differences lets you:

- Advise protocols on deployment strategies
- Surface which chains drive core usage
- Detect liquidity fragmentation risks
- Compare user retention across environments

It's not just about volume—it's about context.

---

## 🚀 Final Thought

Uniswap multichain analytics puts your SQL to the test—but the insights are worth it.

When you can analyze a protocol across 6+ ecosystems and surface trends in volume, usage, and earnings—you've crossed the line from dashboard builder to full-stack DeFi analyst.

**Next: 12. Useful Metrics Every Analyst Should Track**
`
  },
  {
    number: 12,
    title: "Useful Metrics Every Analyst Should Track",
    pdfPath: "/Onchain Manifesto/12_Useful_Metrics_Every_Analyst_Should_Track.pdf",
    mdContent: `# 12. Useful Metrics Every Analyst Should Track

In the ocean of onchain data, metrics are your compass.

But with thousands of contracts, wallets, and token flows, where do you start?

This article compiles essential metrics that every onchain analyst should have in their toolbox—metrics that tell you whether a protocol is growing, if liquidity is sticky, how users behave, and when risk is emerging.

Think of this as your cheat sheet for DeFi, NFT, DAO, and token analytics.

---

## 🔒 TVL (Total Value Locked)

TVL measures how much value users have deposited into a protocol.

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(amount_usd) AS tvl
FROM dex_protocol.deposits
WHERE block_time > now() - interval '90 days'
GROUP BY 1
ORDER BY 1
\`\`\`

---

### 💧 Liquidity Depth

Liquidity isn't just about total deposits—it's about **where** and **how** that liquidity is deployed.

For AMMs like Uniswap, analyze:

- Tick distribution (for concentrated liquidity)
- Slippage for standard trade sizes
- Range efficiency (% time spent in active tick range)

\`\`\`sql
SELECT 
  pool,
  tick_lower,
  tick_upper,
  SUM(amount_usd) AS liquidity_usd,
  AVG(time_in_range_pct) AS efficiency
FROM uniswap_v3.positions
WHERE block_time > now() - interval '30 days'
GROUP BY 1, 2, 3
ORDER BY 4 DESC
\`\`\`

---

### 📊 Volume vs. TVL Ratio

A high volume/TVL ratio indicates capital efficiency—how much trading volume a protocol generates per dollar of liquidity.

\`\`\`sql
SELECT 
  date_trunc('day', day) AS day,
  trading_volume / tvl AS capital_efficiency
FROM (
  SELECT 
    date_trunc('day', block_time) AS day,
    SUM(amount_usd) AS trading_volume 
  FROM dex.trades 
  GROUP BY 1
) t1
JOIN (
  SELECT 
    date_trunc('day', block_time) AS day,
    AVG(tvl) AS tvl 
  FROM dex.tvl 
  GROUP BY 1
) t2 USING (day)
\`\`\`

---

### 🧪 Incentive Analysis

Many protocols incentivize TVL with token rewards. But are these incentives effective or wasteful?

Calculate the **cost per dollar of TVL**:

\`\`\`sql
SELECT 
  date_trunc('day', block_time) AS day,
  SUM(incentive_amount_usd) / AVG(tvl) AS cost_per_dollar_tvl
FROM protocol.incentives
JOIN protocol.tvl USING (day)
GROUP BY 1
ORDER BY 1
\`\`\`

---

## 🔍 DeFi Anti-Patterns to Watch For

Healthy DeFi protocols show some common patterns:

- **Balanced user distribution** (not whale-dominated)
- **Sustainable yield curves** (not entirely from token emissions)
- **Rational TVL growth** (not purely incentive-chasing)

Here's how to spot potential issues:

### Whale Concentration

\`\`\`sql
SELECT 
  COUNT(DISTINCT address) AS wallets,
  SUM(CASE WHEN balance_usd > 100000 THEN balance_usd ELSE 0 END) / SUM(balance_usd) AS whale_concentration
FROM protocol.balances
WHERE block_time = '2023-06-01'
\`\`\`

### TVL/Market Cap Ratio

\`\`\`sql
SELECT 
  date_trunc('day', day) AS day,
  TVL / token_marketcap AS tvl_mcap_ratio
FROM protocol_metrics
WHERE day > now() - interval '90 days'
\`\`\`

A TVL/MCAP ratio below 1 often indicates overvaluation or unsustainable incentives.

---

## 🧰 Building DeFi Dashboards in Dune

Effective DeFi dashboards should show:

1. **Protocol Totals**: TVL, unique users, protocol revenue
2. **User Segments**: Retail vs. whales, new vs. existing
3. **Incentive Analysis**: Reward distribution, cost of acquisition
4. **Comparative View**: Performance vs. competitors

Remember to include:

- **Daily, weekly, monthly trends**
- **USD normalization** for all token values
- **Divergence indicators** for correlated metrics

---

## 📚 Examples to Learn From

- Curve Gauge Voting Analytics
- Uniswap LP Profitability Dashboard
- Aave Liquidation Monitor
- Lido Staking Concentration Analysis

---

## 🧠 Final Thoughts

DeFi analytics gives you superpowers. While TradFi operates behind closed doors, DeFi exposes its inner workings.

This transparency enables you to spot opportunities and risks that would be completely hidden in traditional finance.

Whether you're analyzing a new yield farming protocol, tracking liquidity shifts across DEXs, or evaluating governance decisions—the data is there, waiting to be queried.

---

**Next: 13. MEV on Uniswap — Understanding and Quantifying Extracted Value**
`
  },
  {
    number: 13,
    title: "BTC Coin Days Destroyed — What HODLers Tell Us About the Market",
    pdfPath: "/Onchain Manifesto/13_BTC_Coin_Days_Destroyed_What_HODLers_Tell_Us_About_the_Market.pdf",
    mdContent: `# 13. BTC Coin Days Destroyed — What HODLers Tell Us About the Market

Bitcoin may be pseudonymous, but it's far from opaque.

One of the most powerful behavioral signals in Bitcoin's onchain world is **Coin Days Destroyed (CDD)**—a metric that goes deeper than simple transaction volume by factoring in the *age* of coins being moved.

This article explains how CDD works, why it matters, how to build a dashboard for it on Dune, and what it tells us about long-term holders and market shifts.

---

## 🧠 What Is Coin Days Destroyed?

Coin Days Destroyed measures the *weighted activity* of Bitcoin based on how long coins have been held.

**Formula:**

Coin Day = 1 BTC * 1 day held
 CDD = Coin Days accumulated by coins * destroyed when those coins are spent

- If 10 BTC sit untouched for 100 days, they accumulate **1,000 Coin Days**.
- If they are then moved in a transaction, those 1,000 Coin Days are **destroyed**.

Thus, a large CDD spike signals that **older, dormant BTC has moved**—often interpreted as early investors or long-term holders taking action.

---

## 🧭 Why CDD Matters

- **Smart Money Signal:** Long-term holders are considered more informed. When they move, it may indicate shifts in conviction.
- **Market Timing Insight:** Historical CDD spikes often align with local tops or trend reversals.
- **Liquidity Pressure:** Coins moving to exchanges (combined with CDD) can signal sell-side pressure.
- **Activity with Context:** Instead of raw transaction volume, CDD tells you *who is moving*—short-term or long-term holders.

---

## 🔢 CDD vs Transaction Volume

| Metric              | Measures                  | Insight Type       |
| ------------------- | ------------------------- | ------------------ |
| Transaction Volume  | Total BTC moved           | Activity level     |
| Coin Days Destroyed | Volume × holding duration | Behavioral quality |

---

## ⚙️ How BTC Works: UTXO Refresher

To understand CDD, you need to understand Bitcoin's UTXO model:

- BTC doesn't have balances—only **Unspent Transaction Outputs (UTXOs)**.
- When a wallet spends BTC, it consumes one or more UTXOs as inputs and creates new UTXOs as outputs.
- CDD is calculated from the *inputs* of each transaction: how long the consumed UTXOs had been sitting idle.

---

## 🔍 CDD Dashboard Design on Dune

### Key Tables:
- \`bitcoin.inputs\` — where the BTC came from (used to calculate CDD)
- \`bitcoin.outputs\` — where the BTC went

### Key Fields:
- \`value\` — amount of BTC in the UTXO
- \`block_time\` — when the input/output occurred
- \`spent_tx_id\` — helps trace UTXOs back to their origin

### Basic Steps to Calculate CDD:
1. For each input (spent UTXO), calculate how many days it was held since creation.
2. Multiply that duration by the BTC value.
3. Sum over all inputs in a day.

---

## 📈 Sample SQL (Simplified Concept)

\`\`\`sql
SELECT
  DATE_TRUNC('day', inputs.block_time) AS day,
  SUM(inputs.value * DATE_DIFF('day', outputs.block_time, inputs.block_time)) AS coin_days_destroyed
FROM bitcoin.inputs AS inputs
JOIN bitcoin.outputs AS outputs
  ON inputs.spent_tx_id = outputs.tx_id
WHERE inputs.block_time > NOW() - INTERVAL '90 days'
GROUP BY 1
ORDER BY 1
\`\`\`

> This assumes one-to-one mapping of spent outputs—real queries may need deduplication and finer handling.

------

## 🧰 Dashboard Modules to Include

### ✅ Historical Trend (all-time or past 365 days)

- Shows long-term CDD movement
- Identify macro market turning points

### ✅ Recent Spikes (past 7 days)

- Catch short-term anomalies or distribution events

### ✅ Hourly Breakdown (last 24 hours)

- Analyze intraday activity and sudden large movements

### ✅ By Initiating Wallet Address

- Helps attribute large CDD movements to specific actors

### ✅ By Transaction ID

- Verifies unusual CDD events by inspecting on-chain txs

------

## 🔧 Advanced Decomposition Ideas

- **Target address analysis:** Are old coins moving to exchanges or to cold wallets?
- **Wallet type analysis:** Are the senders labeled as long-term investors, miners, or OTC desks?
- **Probability modeling:** Assign weights to wallets based on past behavior after CDD spikes—did they lead to selling?

------

## 📊 Full Dashboard

You can find a full implementation of this logic in the dashboard by Sixdegree here:

👉 [Bitcoin Coin Days Destroyed Matrix](https://dune.com/sixdegree/bitcoin-coin-day-destroyed-matrix)

------

## 💡 Interpreting CDD

- 📉 **High CDD → Bearish?** Large amounts of old coins moving can precede sell-offs.
- 📈 **Low CDD → Bullish?** Dormant coins staying put while short-term coins churn may show conviction.
- ⚠️ **But not always.** Not all coin movement = selling. Some may be custody reshuffling, internal cold wallet ops, or wrapped BTC conversions.

------

## 📚 Key Takeaways

- Coin Days Destroyed is one of Bitcoin's most important native behavioral metrics.
- It surfaces hidden activity by tracking the *age* of BTC being moved.
- Analysts use CDD to understand the conviction, profit-taking, and psychological state of long-term holders.
- You can track, chart, and segment CDD on Dune using \`bitcoin.inputs\` and \`outputs\`.

------

## ➡️ Coming Up Next

We've now explored how to monitor HODLer behavior with Bitcoin's CDD.

In the next few articles, we move into **infrastructure-level tooling**—starting with how to write reusable models using **Spellbook**, the shared analytics layer that powers Dune's most scalable queries.

**Next: 14. Building with Spellbook — How to Contribute Reusable Models to the Community**
`
  },
  {
    number: 14,
    title: "Building with Spellbook — How to Contribute Reusable Models to the Community",
    pdfPath: "/Onchain Manifesto/14_Building_with_Spellbook_How_to_Contribute_Reusable_Models_to_the_Community.pdf",
    mdContent: `# 14. Building with Spellbook — How to Contribute Reusable Models to the Community

In the fast-growing world of onchain analytics, building once and reusing often is the key to scaling insights. That's where **Spellbook** comes in.

In this article, we'll explore how Dune's Spellbook enables analysts to turn queries into community-maintained models—so everyone can benefit from shared logic, clean data, and modular SQL.

---

## 🪄 What Is Spellbook?

Spellbook is the **open-source data modeling layer** behind DuneSQL.

Think of it as a **GitHub for reusable queries**, built using [dbt](https://www.getdbt.com/), the industry standard in data transformation. With Spellbook, you can:

- Standardize messy onchain data into clean views
- Build abstractions across protocols, contracts, and versions
- Make your SQL easier to write, maintain, and scale
- Help the entire Dune community by contributing shared models

---

## 🧱 Why Use Spellbook?

Without Spellbook:

- Your queries are long, repetitive, and hard to debug.
- Every analyst writes their own logic for the same events.
- Protocol upgrades break older dashboards unless manually updated.

With Spellbook:

- Common logic (like Uniswap swaps or NFT mints) lives in one place.
- Models are version-controlled, tested, and composable.
- Updates to source contracts only require a single model fix.

---

## 🔍 A Real Example: Space ID on BNB Chain

Let's say you're tracking domain name registrations from the Space ID project. But Space ID has upgraded their contracts multiple times—V3 to V9.

Rather than querying seven separate event tables and manually unioning them in every dashboard, you can build a **Spell**:

\`\`\`sql
SELECT
  'v3' as version,
  evt_block_time as block_time,
  name,
  owner,
  cost,
  tx_hash
FROM {{ source('spaceid_bnb', 'BNBRegistrarControllerV3_evt_NameRegistered') }}

UNION ALL

-- repeat for v4 to v9
\`\`\`

Now, **any analyst** can query from \`spellbook.spaceid_bnb_registrations\` and always get the latest data—regardless of contract changes.

------

## 🛠️ How to Build a Spell

### 1. Set Up Your Environment

Follow the guide here: [Set Up Spellbook dbt Locally](https://github.com/duneanalytics/spellbook)

You'll need:

- GitHub account
- Python + pipenv
- dbt installed
- The forked \`spellbook\` repo cloned locally

### 2. Create Your Folder Structure

\`\`\`bash
models/
  spaceid/
    bnb/
      spaceid_bnb_sources.yml
      spaceid_bnb_schema.yml
      spaceid_bnb_registrations.sql
\`\`\`

### 3. Define Your Sources

Inside \`spaceid_bnb_sources.yml\`, declare which raw tables your spell pulls from:

\`\`\`yaml
version: 2

sources:
  - name: spaceid_bnb
    tables:
      - name: BNBRegistrarControllerV3_evt_NameRegistered
        loaded_at_field: evt_block_time
      - name: BNBRegistrarControllerV4_evt_NameRegistered
        loaded_at_field: evt_block_time
\`\`\`

### 4. Write Your Spell (SQL)

In \`spaceid_bnb_registrations.sql\`:

\`\`\`sql
{{ config(materialized='view', alias='registrations') }}

SELECT
  'v3' as version,
  evt_block_time as block_time,
  name,
  owner,
  cost,
  evt_tx_hash as tx_hash
FROM {{ source('spaceid_bnb', 'BNBRegistrarControllerV3_evt_NameRegistered') }}

UNION ALL

-- etc...
\`\`\`

Use \`{{ source(...) }}\` to dynamically reference raw tables.

### 5. Add Schema and Metadata

In \`spaceid_bnb_schema.yml\`:

\`\`\`yaml
models:
  - name: spaceid_bnb_registrations
    description: "Combined registrations from V3–V9 Space ID contracts"
    columns:
      - name: name
        description: "Domain name registered"
        tests:
          - unique
\`\`\`

Add contributors, tags, and other metadata.

### 6. Compile and Test

Use dbt to make sure everything works:

\`\`\`bash
pipenv shell
dbt compile
\`\`\`

Test locally in Dune by pasting the compiled SQL into the DuneSQL editor.

------

## ✅ Contributing to the Community

Once your model works:

1. Commit your code in a new Git branch
2. Push it to your GitHub repo
3. Create a Pull Request (PR) to the [main Spellbook repo](https://github.com/duneanalytics/spellbook)
4. Follow the checklist and wait for review
5. Once merged, your spell is live!

Now every analyst on Dune can benefit from your work.

------

## 📐 Best Practices

- Keep models **narrow and reusable**
- Add tests (e.g., uniqueness of key fields)
- Document thoroughly (especially with evolving contracts)
- Use incremental materialization for large datasets
- Use \`dbt_utils\` where possible (e.g., for date handling)

------

## 🔮 Why It Matters

Spellbook is more than a tool—it's a shared analytics layer for decentralized data.

By contributing models, you:

- Help protocols build better metrics
- Help the next generation of analysts skip redundant work
- Shape the standards for how we measure onchain activity

------

## 🧙 Want to See Real Spells?

Explore hundreds of models already live in the Spellbook repo:

👉 https://github.com/duneanalytics/spellbook

You'll find models for:

- Uniswap v2/v3 swaps
- OpenSea mints and trades
- ERC4337 user operations
- NFT projects
- DAO proposals
- Lido staking and more

------

## 🧭 Up Next

Now that you've seen how to create reusable models, we'll turn our attention to the **Dune API**—where you'll learn how to bring onchain data into full applications with real-time query execution and alerting.

Next: 15. How to Build an Onchain App Using the Dune API
`
  },
  {
    number: 15,
    title: "How to Build an Onchain App Using the Dune API",
    pdfPath: "/Onchain Manifesto/15_How_to_Build_an_Onchain_App_Using_the_Dune_API.pdf",
    mdContent: `# 15. How to Build an Onchain App Using the Dune API

Onchain analysts aren't just dashboard builders. They're increasingly becoming **backend architects**—powering real-time applications, alerts, and user-facing data tools.

With Dune's public API, you can build apps that pull directly from live blockchain queries. This article walks you through how to use the Dune API to turn your dashboards into apps.

---

## 🧠 What You'll Learn

- What the Dune API can do
- The lifecycle of a query execution
- How to build a frontend app that monitors blockchain activity
- Real-world example: **Uniswap Pool Watcher**

---

## 🔌 Dune API Basics

Dune recently opened its API to **all users**, including free-tier accounts.

The API is centered around **query execution**, not just static dashboards. That means your apps can:

- Run saved SQL queries
- Get the latest blockchain data
- Monitor changes and respond dynamically

To get started, grab your API key from [Dune API Settings](https://dune.com/docs/api/).

---

## ⚙️ The API Workflow

Every Dune API integration follows the same 3-step pattern:

1. **Execute a query**
2. **Check execution status**
3. **Fetch results**

Here's what each step looks like:

### 1. Execute

\`\`\`bash
POST https://api.dune.com/api/v1/query/<query_id>/execute
\`\`\`

Pass in your API key and any required parameters.

### 2. Check Status

\`\`\`bash
GET https://api.dune.com/api/v1/execution/<execution_id>/status
\`\`\`

Poll this endpoint until status is \`completed\`.

### 3. Fetch Results

\`\`\`bash
GET https://api.dune.com/api/v1/execution/<execution_id>/results
\`\`\`

This returns the result set of your SQL query in JSON format.

------

## 🛠 Example Project: Uniswap Pool Watcher

Let's say you want to build a frontend that:

- Tracks newly created Uniswap V3 pools
- Lets users pick a pool and see the latest swaps
- Sends alerts for large transactions (e.g., >$10k)

Here's the architecture we'd use:

**Frontend:**

- Next.js
- Tailwind
- Axios (for API requests)
- Dexie (for local storage)

**Backend:**

- Prisma + SQLite (to store execution IDs & cache data)

**API:**

- Dune's public API, with 3 queries:
  - New Pools: \`https://dune.com/queries/2056212\`
  - Latest Swaps: \`https://dune.com/queries/2056310\`
  - Large Swaps: \`https://dune.com/queries/2056547\`

------

## 🧑‍💻 Code Snippets

Here's a basic function to execute a Dune query:

\`\`\`ts
export const executeQuery = async (id: string, params: any) => {
  const res = await axios.post(
    \`https://api.dune.com/api/v1/query/\${id}/execute\`,
    { parameters: params },
    { headers: { 'x-dune-api-key': YOUR_API_KEY } }
  );
  return res.data.execution_id;
};
\`\`\`

Then check the execution status:

\`\`\`ts
export const getStatus = async (execution_id: string) => {
  const res = await axios.get(
    \`https://api.dune.com/api/v1/execution/\${execution_id}/status\`,
    { headers: { 'x-dune-api-key': YOUR_API_KEY } }
  );
  return res.data.state;
};
\`\`\`

And finally, fetch the results:

\`\`\`ts
export const getResults = async (execution_id: string) => {
  const res = await axios.get(
    \`https://api.dune.com/api/v1/execution/\${execution_id}/results\`,
    { headers: { 'x-dune-api-key': YOUR_API_KEY } }
  );
  return res.data.result.rows;
};
\`\`\`

------

## 🧩 Features You Can Add

- Re-run queries every 5 mins for fresh data
- Alert users with toasts or push notifications
- Save favorite pools to local storage
- Graph swap activity over time
- Add login, permissions, and dashboards

------

## ⚠️ Caching and Limits

- Execution IDs are valid for **24 hours**
- Avoid unnecessary API calls—cache recent executions
- If you rerun the same query too often, you'll hit rate limits (especially on free plans)

Use a local DB (like SQLite or Dexie) to store execution IDs and prevent duplicate runs.

------

## 🌐 Deploying Your App

The final stack can be deployed like any full-stack JS app:

- Vercel or Netlify for frontend
- Railway or Supabase for backend
- GitHub for version control

------

## 🧠 Why This Matters

Dashboards are great. But **applications drive action**.

With the Dune API, onchain analysts can:

- Build analytics tools for DAOs
- Create investor dashboards
- Send real-time DeFi alerts
- Monitor NFT mints and wash trading

You're not limited to charts. You can ship full products.

------

## 🧭 Next: ERC-4337 and the Rise of Account Abstraction

Now that you've built apps on top of blockchain data, let's dive deeper into **how new forms of user accounts are reshaping onchain behavior**—and what you need to know to analyze them effectively.

**Next: 16. Account Abstraction — Why It Matters for Wallet UX and Analysts**
`
  },
  {
    number: 16,
    title: "Account Abstraction: Why It Matters for Wallet UX and Analysts",
    pdfPath: "/Onchain Manifesto/16_Account_Abstraction_Why_It_Matters_for_Wallet_UX_and_Analysts.pdf",
    mdContent: `# 16. Account Abstraction: Why It Matters for Wallet UX and Analysts

In crypto, the wallet is the interface to everything. It's your bank, your identity, your passport, and your remote control. But today's wallet UX is broken: confusing seed phrases, complex gas fees, and risky self-custody.

**Account Abstraction (AA)** aims to fix that—and it introduces powerful new onchain behaviors that analysts must understand.

---

## 🧠 What Is Account Abstraction?

Traditionally, Ethereum has two types of accounts:

- **EOA (Externally Owned Account)** — Controlled by private keys (e.g., MetaMask)
- **Contract Account (CA)** — Smart contracts, but they can't initiate transactions

This split causes problems. EOAs are inflexible, and contract accounts can't act without being triggered.

Account Abstraction **blends the two** by turning wallets into programmable smart contracts.

The leading implementation of AA is [ERC-4337](https://eips.ethereum.org/EIPS/eip-4337), which upgrades Ethereum without changing the base protocol. It introduces a new execution layer using *UserOperations*, *Bundlers*, and a central *EntryPoint* contract.

---

## 🚀 Why It's a Big Deal

AA unlocks features like:

- **Gas abstraction** — Let someone else pay your gas (like a dApp or sponsor)
- **Multisig and social recovery** — Native, without Gnosis Safe hacks
- **Session keys** — Temporary permissions for games or apps
- **Automated transactions** — Scheduled or conditional sends
- **Biometric login** — Use Web2 logins with smart wallets

For analysts, this means **a new data layer emerges**—one with new behaviors, new actors, and new risks.

---

## ⚙️ Key Components of ERC-4337

Here's how a typical flow works:

1. A user signs a **UserOperation** (like a meta-transaction)
2. A **Bundler** packages multiple UserOps and submits them to the blockchain
3. The **EntryPoint** contract processes the batch
4. A **Paymaster** may sponsor the gas fee
5. A **Wallet Factory** may deploy a new smart wallet

This is all recorded onchain.

---

## 📊 What Analysts Need to Track

New entities = new metrics.

### 🔵 EntryPoint Contract

ERC-4337 wallets **interact with one global EntryPoint**, which emits useful logs:

- \`UserOperationEvent\` — One per operation
- \`AccountDeployed\` — When a smart wallet is created
- \`BeforeExecution\`, \`Withdrawn\`, \`Deposited\`, etc.

Use these to track usage, success rates, gas consumption, and more.

### 🟠 Bundlers

Bundlers are EOAs that submit UserOps.

- Who are the top bundlers?
- Are they profitable? (op_fee - tx_fee)
- Which protocols use custom bundlers?

### 🟣 Paymasters

Paymasters sponsor gas fees for users.

- How many ops does each paymaster cover?
- What's their total spend?
- Are any exploiting the system?

### 🧱 Wallet Factories

Track wallet creation by factory.

- How many wallets per protocol?
- Which chains have the most AA adoption?
- What's the retention or activity rate?

---

## 🧰 Tables to Use on Dune

ERC-4337 logs are decoded and available in Spellbook or native Dune schemas.

Examples:

\`\`\`sql
-- Count daily UserOps
SELECT date_trunc('day', evt_block_time) AS day, COUNT(*) AS ops
FROM erc4337_polygon.EntryPoint_v0_6_evt_UserOperationEvent
GROUP BY 1
ORDER BY 1;

-- Wallet creation
SELECT factory, COUNT(*) AS wallet_created
FROM erc4337_polygon.EntryPoint_v0_6_evt_AccountDeployed
GROUP BY 1
ORDER BY 2 DESC;
\`\`\`

Multichain data is available in:

- \`account_abstraction_erc4337.userops\`
- \`account_abstraction_erc4337.account_deployed\`

------

## 💡 Use Cases for Analysts

With AA, new behaviors emerge:

- **Sponsored DeFi onboarding** — Track how many users are using paymasters
- **Bundler economics** — Are bundlers subsidizing or profiting from ops?
- **Adoption curves** — Which dApps are launching smart wallets?
- **New attack surfaces** — Botnet-style spam, griefing paymasters, or wallet exploits

This is a new dataset. And **you** get to be the first to map it.

------

## 🔮 AA Is the New Primitive

As wallets shift from EOAs to smart contract wallets, analysts must:

- Learn how to query AA-specific tables
- Understand protocol-level abstractions like EntryPoint, Paymasters, Factories
- Build dashboards that monitor gas abstraction, wallet deployment, and bundler behavior

Account Abstraction isn't just about UX. It's a fundamental upgrade to **how users behave onchain**.

------

## ➡️ Next Up: Analyze the ERC-4337 Ecosystem at Scale

In the next article, we'll explore how to use **Dune's aggregated AA tables** across all EVM chains to track adoption, model bundler revenue, and surface wallet deployment patterns—without writing chain-specific queries.

Next: 17. ERC-4337 Aggregated Tables Across EVM Chains
`
  },
  {
    number: 17,
    title: "ERC-4337 Aggregated Tables Across EVM Chains: Unified Analytics at Scale",
    pdfPath: "/Onchain Manifesto/17_ERC-4337_Aggregated_Tables_Across_EVM_Chains_Unified_Analytics_at_Scale.pdf",
    mdContent: `# 17. ERC-4337 Aggregated Tables Across EVM Chains: Unified Analytics at Scale

Account Abstraction isn't happening on just one chain—it's rolling out across the entire EVM ecosystem.

To understand its impact, we need to look across networks. That's where **Dune's ERC-4337 Aggregated Tables** come in. These spellbook-powered views give you a unified lens on wallet deployment, user operations, bundler behavior, and paymaster activity—**across nine chains**, with just one query.

Let's explore how they work—and what you can do with them.

---

## 🌍 What Chains Are Covered?

The aggregated Spellbook tables combine AA data from:

- Ethereum
- Polygon
- Optimism
- Arbitrum
- BNB Chain
- Base
- Avalanche
- Gnosis
- Celo

Both **EntryPoint v0.5 and v0.6** are supported.

---

## 🔧 The Two Key Tables

### 1. \`account_abstraction_erc4337.userops\`

Each row = one \`UserOperationEvent\`

Fields include:

- \`blockchain\`: chain name
- \`version\`: EntryPoint version
- \`block_time\`, \`block_month\`: timestamps
- \`entrypoint_contract\`: contract address
- \`userop_hash\`: unique op ID
- \`sender\`: the smart wallet
- \`paymaster\`: sponsor address (if any)
- \`bundler\`: EOA that submitted the batch
- \`op_fee\`, \`op_fee_usd\`: gas paid for the op
- \`tx_fee\`, \`tx_fee_usd\`: total gas cost of the bundler
- \`beneficiary\`: who received the gas refund

> 💡 Use this table for: adoption trends, bundler profitability, paymaster spend, chain-by-chain usage, gas modeling

---

### 2. \`account_abstraction_erc4337.account_deployed\`

Each row = one smart wallet created via \`AccountDeployed\`

Fields include:

- \`blockchain\`, \`version\`, \`block_time\`
- \`userop_hash\`, \`tx_hash\`
- \`sender\`: the new wallet
- \`factory\`: wallet factory contract
- \`paymaster\`: sponsor (if any)
- \`entrypoint_contract\`

> 💡 Use this table for: wallet growth trends, factory tracking, protocol-level adoption metrics

---

## 🔍 Sample Queries

### 🚀 Wallet Growth by Chain

\`\`\`sql
SELECT 
  blockchain,
  COUNT(*) AS wallets_created
FROM account_abstraction_erc4337.account_deployed
GROUP BY 1
ORDER BY 2 DESC
\`\`\`

### 💸 Bundler Revenue

\`\`\`sql
WITH ops AS (
  SELECT
    tx_hash,
    SUM(op_fee_usd) AS op_usd,
    SUM(tx_fee_usd) AS tx_usd
  FROM account_abstraction_erc4337.userops
  GROUP BY tx_hash
),
profit AS (
  SELECT
    tx_hash,
    op_usd - tx_usd AS bundler_profit_usd
  FROM ops
)
SELECT 
  COUNT(*) AS txs_analyzed,
  SUM(bundler_profit_usd) AS total_profit_usd,
  AVG(bundler_profit_usd) AS avg_per_tx
FROM profit
\`\`\`

### 📈 Daily User Operations

\`\`\`sql
SELECT 
  DATE_TRUNC('day', block_time) AS day,
  COUNT(*) AS ops
FROM account_abstraction_erc4337.userops
GROUP BY 1
ORDER BY 1
\`\`\`

------

## 📊 What You Can Analyze

These tables open the door to rich, cross-chain analytics:

- **Adoption heatmaps** — Which chains and factories are growing fastest?
- **Bundler performance** — Who's making money? Who's subsidizing?
- **Paymaster usage** — Which protocols are funding users?
- **Protocol-level tracking** — Who's deploying wallets, and how are they used?

You can also **filter by EntryPoint version** to compare performance pre- and post-v0.6.

------

## 🧠 Why Aggregated Views Matter

Without these tables, analysts would need to manually join decoded event logs across 9+ chains. Every dashboard would require redundant logic.

With Spellbook models, Dune abstracts that pain away.

You get:

- Uniform schemas
- Consistent field naming
- Pre-joined price and transaction data
- Scalable multichain insights

And because these are **dbt-backed models**, they update automatically.

------

## 🛠 Bonus Tip: Label Your Entities

Bundlers, paymasters, and wallet factories are just addresses.

If you want real-world context, consider joining with public labeling tables (like community spreadsheets or Flipside address tags) to show:

- Protocol names (e.g., zkSync, ZeroDev)
- dApp usage (e.g., CyberConnect wallets vs Stackup wallets)
- Role classification (e.g., relayer, factory, exploit address)

------

## 🧪 Dashboard Inspiration

Looking to build something? Here are ideas:

- **Daily Smart Wallet Adoption Tracker** (across all chains)
- **Bundler Leaderboard by Profitability**
- **Paymaster Subsidy Heatmap**
- **Factory Growth Comparison (e.g., Argent vs Biconomy vs Safe)**

The beauty of Spellbook is that you only need to build it once.

------

## ➡️ Next: Bringing It All Together

Account Abstraction is just one frontier.

Whether you're analyzing NFTs, DeFi, or wallets—onchain analysts are the ones decoding behavior, quantifying risk, and building the data tools that power decentralized systems.

In the next (and final) article, we'll zoom out and ask: **Why is this all so important?**

**Next: 18. Why the Future Belongs to Onchain Analysts**
`
  },
  {
    number: 18,
    title: "Why the Future Belongs to Onchain Analysts",
    pdfPath: "/Onchain Manifesto/18_Why_the_Future_Belongs_to_Onchain_Analysts.pdf",
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

**The future belongs to onchain analysts.**
`
  }
]
