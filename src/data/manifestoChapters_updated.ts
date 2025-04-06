
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
    mdPath: "/Onchain Manifesto/The_Onchain_Analyst_Decoding_the_Transparent_Economy.md"
  },
  { 
    number: 1, 
    title: "What Does an Onchain Data Analyst Do?", 
    pdfPath: "/Onchain Manifesto/01_What_Does_an_Onchain_Data_Analyst_Do.pdf",
    mdPath: "/Onchain Manifesto/01_What_Does_an_Onchain_Data_Analyst_Do.md"
  },
  { 
    number: 2, 
    title: "The Onchain Stack — SQL, Spellbook, and Decoding UTXOs", 
    pdfPath: "/Onchain Manifesto/02_The_Onchain_Stack_SQL_Spellbook_and_Decoding_UTXOs.pdf",
    mdPath: "/Onchain Manifesto/02_The_Onchain_Stack_SQL_Spellbook_and_Decoding_UTXOs.md"
  },
  { 
    number: 3, 
    title: "The Dune Platform — A Gateway to Onchain Transparency", 
    pdfPath: "/Onchain Manifesto/03_The Dune _Platform_A_Gateway_to_Onchain_Transparent_Economy.pdf",
    mdPath: "/Onchain Manifesto/03_The Dune _Platform_A_Gateway_to_Onchain_Transparent_Economy.md"
  },
  { 
    number: 4, 
    title: "Understanding Tables — Ethereum, Bitcoin, NFTs, ERC4337, and More", 
    pdfPath: "/Onchain Manifesto/04_Understanding_Tables_Ethereum_Bitcoin_NFTs_ERC4337_and_More.pdf",
    mdPath: "/Onchain Manifesto/04_Understanding_Tables_Ethereum_Bitcoin_NFTs_ERC4337_and_More.md"
  },
  { 
    number: 5, 
    title: "SQL Basics for Blockchain Analytics", 
    pdfPath: "/Onchain Manifesto/05_SQL_Basics_for_Blockchain_Analytics.pdf",
    mdPath: "/Onchain Manifesto/05_SQL_Basics_for_Blockchain_Analytics.md"
  },
  { 
    number: 6, 
    title: "Useful Queries — From Token Transfers to Whale Watching", 
    pdfPath: "/Onchain Manifesto/06_Useful_Queries_From_Token_Transfers_to_Whale_Watching.pdf",
    mdPath: "/Onchain Manifesto/06_Useful_Queries_From_Token_Transfers_to_Whale_Watching.md"
  },
  { 
    number: 7, 
    title: "NFT Analysis — Wash Trading, Mint Trends, and Market Health", 
    pdfPath: "/Onchain Manifesto/07_NFT_Analysis_Wash_Trading_Mint_Trends_and_Market_Health.pdf",
    mdPath: "/Onchain Manifesto/07_NFT_Analysis_Wash_Trading_Mint_Trends_and_Market_Health.md"
  },
  { 
    number: 8, 
    title: "Lending Protocols — Risk, Liquidations, and User Behavior", 
    pdfPath: "/Onchain Manifesto/08_Lending_Protocols_Risk_Liquidations_and_User_Behavior.pdf",
    mdPath: "/Onchain Manifesto/08_Lending_Protocols_Risk_Liquidations_and_User_Behavior.md"
  },
  { 
    number: 9, 
    title: "DeFi Analysis — Liquidity, Incentives, and TVL Dynamics", 
    pdfPath: "/Onchain Manifesto/09_DeFi Analysis_Liquidity_Incentives_and_TVL_Dynamics.pdf",
    mdPath: "/Onchain Manifesto/09_DeFi Analysis_Liquidity_Incentives_and_TVL_Dynamics.md"
  },
  { 
    number: 10, 
    title: "MEV on Uniswap — Understanding and Quantifying Extracted Value", 
    pdfPath: "/Onchain Manifesto/10_MEV_on_Uniswap_Understanding_and_Quantifying_Extracted_Value.pdf",
    mdPath: "/Onchain Manifesto/10_MEV_on_Uniswap_Understanding_and_Quantifying_Extracted_Value.md"
  },
  { 
    number: 11, 
    title: "Uniswap Multichain Analytics — Comparing Deployments Across Chains", 
    pdfPath: "/Onchain Manifesto/11_Uniswap_Multichain_Analytics_Comparing_Deployments_Across_Chains.pdf",
    mdPath: "/Onchain Manifesto/11_Uniswap_Multichain_Analytics_Comparing_Deployments_Across_Chains.md"
  },
  { 
    number: 12, 
    title: "Useful Metrics Every Analyst Should Track", 
    pdfPath: "/Onchain Manifesto/12_Useful_Metrics_Every_Analyst_Should_Track.pdf",
    mdPath: "/Onchain Manifesto/12_Useful_Metrics_Every_Analyst_Should_Track.md" 
  },
  {
    number: 13,
    title: "BTC Coin Days Destroyed — What HODLers Tell Us About the Market",
    pdfPath: "/Onchain Manifesto/13_BTC_Coin_Days_Destroyed_What_HODLers_Tell_Us_About_the_Market.pdf",
    mdPath: "/Onchain Manifesto/13_BTC_Coin_Days_Destroyed_What_HODLers_Tell_Us_About_the_Market.md"
  },
  {
    number: 14,
    title: "Building with Spellbook — How to Contribute Reusable Models to the Community",
    pdfPath: "/Onchain Manifesto/14_Building_with_Spellbook_How_to_Contribute_Reusable_Models_to_the_Community.pdf",
    mdPath: "/Onchain Manifesto/14_Building_with_Spellbook_How_to_Contribute_Reusable_Models_to_the_Community.md"
  },
  {
    number: 15,
    title: "How to Build an Onchain App Using the Dune API",
    pdfPath: "/Onchain Manifesto/15_How_to_Build_an_Onchain_App_Using_the_Dune_API.pdf",
    mdPath: "/Onchain Manifesto/15_How_to_Build_an_Onchain_App_Using_the_Dune_API.md"
  },
  {
    number: 16,
    title: "Account Abstraction Why It Matters for Wallet UX and Analysts",
    pdfPath: "/Onchain Manifesto/16_Account_Abstraction_Why_It_Matters_for_Wallet_UX_and_Analysts.pdf",
    mdPath: "/Onchain Manifesto/16_Account_Abstraction_Why_It_Matters_for_Wallet_UX_and_Analysts.md"
  },
  {
    number: 17,
    title: "ERC-4337 Aggregated Tables Across EVM Chains Unified Analytics at Scale",
    pdfPath: "/Onchain Manifesto/17_ERC-4337_Aggregated_Tables_Across_EVM Chains_Unified_Analytics_at_Scale.pdf",
    mdPath: "/Onchain Manifesto/17_ERC-4337_Aggregated_Tables_Across_EVM Chains_Unified_Analytics_at_Scale.md"
  },
  {
    number: 18,
    title: "Why the Future Belongs to Onchain Analysts",
    pdfPath: "/Onchain Manifesto/18_Why_the_Future_Belongs_to_Onchain_Analysts.pdf",
    mdPath: "/Onchain Manifesto/18_Why_the_Future_Belongs_to_Onchain_Analysts.md"
  }
];
