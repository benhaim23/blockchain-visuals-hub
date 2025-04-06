
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
    mdPath: "" 
  },
  { 
    number: 4, 
    title: "Understanding Tables — Ethereum, Bitcoin, NFTs, ERC4337, and More", 
    pdfPath: "/Onchain Manifesto/04. Understanding Tables — Ethereum, Bitcoin, NFTs, ERC4337, and More.pdf",
    mdPath: "" 
  },
  { 
    number: 5, 
    title: "SQL Basics for Blockchain Analytics", 
    pdfPath: "/Onchain Manifesto/05. SQL Basics for Blockchain Analytics.pdf",
    mdPath: "" 
  },
  { 
    number: 6, 
    title: "Useful Queries — From Token Transfers to Whale Watching", 
    pdfPath: "/Onchain Manifesto/06. Useful Queries — From Token Transfers to Whale Watching.pdf",
    mdPath: "" 
  },
  { 
    number: 7, 
    title: "NFT Analysis — Wash Trading, Mint Trends, and Market Health", 
    pdfPath: "/Onchain Manifesto/07. NFT Analysis — Wash Trading, Mint Trends, and Market Health.pdf",
    mdPath: "" 
  },
  { 
    number: 8, 
    title: "Lending Protocols — Risk, Liquidations, and User Behavior", 
    pdfPath: "/Onchain Manifesto/08. Lending Protocols — Risk, Liquidations, and User Behavior.pdf",
    mdPath: "" 
  },
  { 
    number: 9, 
    title: "DeFi Analysis — Liquidity, Incentives, and TVL Dynamics", 
    pdfPath: "/Onchain Manifesto/09. DeFi Analysis — Liquidity, Incentives, and TVL Dynamics.pdf",
    mdPath: "" 
  },
  { 
    number: 10, 
    title: "MEV on Uniswap — Understanding and Quantifying Extracted Value", 
    pdfPath: "/Onchain Manifesto/10. MEV on Uniswap — Understanding and Quantifying Extracted Value.pdf",
    mdPath: "" 
  },
  { 
    number: 11, 
    title: "Uniswap Multichain Analytics — Comparing Deployments Across Chains", 
    pdfPath: "/Onchain Manifesto/11. Uniswap Multichain Analytics — Comparing Deployments Across Chains.pdf",
    mdPath: "" 
  },
  { 
    number: 12, 
    title: "Useful Metrics Every Analyst Should Track", 
    pdfPath: "/Onchain Manifesto/12. Useful Metrics Every Analyst Should Track.pdf",
    mdPath: "" 
  },
  { 
    number: 13, 
    title: "BTC Coin Days Destroyed — What HODLers Tell Us About the Market", 
    pdfPath: "/Onchain Manifesto/13. BTC Coin Days Destroyed — What HODLers Tell Us About the Market.pdf",
    mdPath: "" 
  },
  { 
    number: 14, 
    title: "Building with Spellbook — How to Contribute Reusable Models to the Community", 
    pdfPath: "/Onchain Manifesto/14. Building with Spellbook — How to Contribute Reusable Models to the Community.pdf",
    mdPath: "" 
  },
  { 
    number: 15, 
    title: "How to Build an Onchain App Using the Dune API", 
    pdfPath: "/Onchain Manifesto/15. How to Build an Onchain App Using the Dune API.pdf",
    mdPath: "" 
  },
  { 
    number: 16, 
    title: "Account Abstraction — Why It Matters for Wallet UX and Analysts", 
    pdfPath: "/Onchain Manifesto/16. Account Abstraction- Why It Matters for Wallet UX and Analysts.pdf",
    mdPath: "" 
  },
  { 
    number: 17, 
    title: "ERC-4337 Aggregated Tables Across EVM Chains — Unified Analytics at Scale", 
    pdfPath: "/Onchain Manifesto/17. ERC-4337 Aggregated Tables Across EVM Chains- Unified Analytics at Scale.pdf",
    mdPath: "" 
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

