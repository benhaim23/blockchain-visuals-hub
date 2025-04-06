
import React from 'react';

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
    title: "The Onchain Analyst: Decoding the Transparent Economy",
    pdfPath: "/Onchain Manifesto/00. Executive Summary.pdf",
    mdPath: "/Onchain Manifesto/The Onchain Analyst Decoding the Transparent Economy.md"
  },
  { 
    number: 1,
    title: "What Does an Onchain Data Analyst Do?",
    pdfPath: "/Onchain Manifesto/01. Why Onchain Data Matters.pdf",
    mdPath: "/Onchain Manifesto/01. What Does an Onchain Data Analyst Do.md"
  },
  { 
    number: 2,
    title: "The Onchain Stack SQL, Spellbook, and Decoding UTXOs",
    pdfPath: "/Onchain Manifesto/02. Dune Analytics 101.pdf",
    mdPath: "/Onchain Manifesto/02. The Onchain Stack SQL, Spellbook, and Decoding UTXOs.md"
  },
  { 
    number: 3,
    title: "The Dune Platform A Gateway to Onchain Transparency",
    pdfPath: "/Onchain Manifesto/03. DuneSQL and Spellbook.pdf",
    mdPath: "/Onchain Manifesto/03. The Dune Platform A Gateway to Onchain Transparency.md"
  },
  { 
    number: 4,
    title: "Understanding Tables — Ethereum, Bitcoin, NFTs, ERC4337, and More",
    pdfPath: "/Onchain Manifesto/04. Onchain Data Structure.pdf",
    mdPath: "/Onchain Manifesto/04. Understanding Tables — Ethereum, Bitcoin, NFTs, ERC4337, and More.md"
  },
  { 
    number: 5,
    title: "SQL Basics for Blockchain Analytics",
    pdfPath: "/Onchain Manifesto/05. SQL Basics for Blockchain Analytics.pdf",
    mdPath: "/Onchain Manifesto/05. SQL Basics for Blockchain Analytics.md"
  },
  { 
    number: 6,
    title: "Useful Queries — From Token Transfers to Whale Watching",
    pdfPath: "/Onchain Manifesto/06. Useful Queries — From Token Transfers to Whale Watching.pdf",
    mdPath: "/Onchain Manifesto/06. Useful Queries — From Token Transfers to Whale Watching.md"
  },
  { 
    number: 7,
    title: "NFT Analysis — Wash Trading, Mint Trends, and Market Health",
    pdfPath: "/Onchain Manifesto/07. NFT Analysis — Wash Trading, Mint Trends, and Market Health.pdf",
    mdPath: "/Onchain Manifesto/07. NFT Analysis — Wash Trading, Mint Trends, and Market Health.md"
  },
  { 
    number: 8,
    title: "Lending Protocols — Risk, Liquidations, and User Behavior",
    pdfPath: "/Onchain Manifesto/08. Lending Protocols — Risk, Liquidations, and User Behavior.pdf",
    mdPath: "/Onchain Manifesto/08. Lending Protocols — Risk, Liquidations, and User Behavior.md"
  },
  { 
    number: 9,
    title: "DeFi Analysis — Liquidity, Incentives, and TVL Dynamics",
    pdfPath: "/Onchain Manifesto/09. DeFi Analysis — Liquidity, Incentives, and TVL Dynamics.pdf",
    mdPath: "/Onchain Manifesto/09. DeFi Analysis — Liquidity, Incentives, and TVL Dynamics.md"
  },
  { 
    number: 10,
    title: "MEV on Uniswap — Understanding and Quantifying Extracted Value",
    pdfPath: "/Onchain Manifesto/10. MEV on Uniswap — Understanding and Quantifying Extracted Value.pdf",
    mdPath: "/Onchain Manifesto/10. MEV on Uniswap — Understanding and Quantifying Extracted Value.md"
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
    mdPath: "/Onchain Manifesto/12. Useful Metrics Every Analyst Should Track.md"
  },
  { 
    number: 13,
    title: "Wallet Analysis — Clustering, Labeling, and Activity Tracking",
    pdfPath: "/Onchain Manifesto/13. Wallet Analysis — Clustering, Labeling, and Activity Tracking.pdf",
    mdPath: "/Onchain Manifesto/13. Wallet Analysis — Clustering, Labeling, and Activity Tracking.md"
  },
  { 
    number: 14,
    title: "L2s and the Rise of Modular Blockchains",
    pdfPath: "/Onchain Manifesto/14. L2s and the Rise of Modular Blockchains.pdf",
    mdPath: "/Onchain Manifesto/14. L2s and the Rise of Modular Blockchains.md"
  },
  { 
    number: 15,
    title: "How to Build an Onchain App Using the Dune API",
    pdfPath: "/Onchain Manifesto/15. How to Build an Onchain App Using the Dune API.pdf",
    mdPath: "/Onchain Manifesto/15. How to Build an Onchain App Using the Dune API.md"
  },
  { 
    number: 16,
    title: "Account Abstraction: Why It Matters for Wallet UX and Analysts",
    pdfPath: "/Onchain Manifesto/16. Account Abstraction Why It Matters for Wallet UX and Analysts.pdf",
    mdPath: "/Onchain Manifesto/16. Account Abstraction Why It Matters for Wallet UX and Analysts.md"
  },
  { 
    number: 17,
    title: "ERC-4337 Aggregated Tables Across EVM Chains: Unified Analytics at Scale",
    pdfPath: "/Onchain Manifesto/17. ERC-4337 Aggregated Tables Across EVM Chains Unified Analytics at Scale.pdf",
    mdPath: "/Onchain Manifesto/17. ERC-4337 Aggregated Tables Across EVM Chains Unified Analytics at Scale.md"
  },
  { 
    number: 18, 
    title: "Why the Future Belongs to Onchain Analysts", 
    pdfPath: "/Onchain Manifesto/18. Why the Future Belongs to Onchain Analysts.pdf"
  }
];
