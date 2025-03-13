
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image: string;
  category: 'development' | 'trading' | 'analytics' | 'community';
}

export const projects: Project[] = [
  {
    id: 8,
    title: '0n1Force',
    description: 'Managed the 0n1Force project launch, overseeing marketing strategy, community development, and partnerships that positioned it as a leading project in the NFT space.',
    tags: ['Marketing Strategy', 'Community Building', 'Partnership Development'],
    link: 'https://www.0n1force.com/',
    image: '/images/projects/0n1force.jpeg',
    category: 'development',
  },
  {
    id: 9,
    title: '3iQ Research & Development',
    description: 'Worked within the Research and Development department at 3iQ, building project initiatives in Real World Asset Tokenization and DeFi treasury management. Conducted in-depth analysis of DeFi protocols and blockchain financial mechanisms to identify investment opportunities and risks.',
    tags: ['RWA Tokenization', 'DeFi Treasury', 'Blockchain Research', 'Investment Analysis'],
    link: 'https://3iq.io/',
    image: '/images/projects/3iQ.jpeg',
    category: 'analytics',
  },
  {
    id: 5,
    title: 'Bitcoin Sentiment Analysis',
    description: 'Architected a sophisticated analytical model merging social media sentiment evaluation with financial metrics on Bitcoin performance to identify primary market volatility factors.',
    tags: ['Sentiment Analysis', 'Financial Metrics', 'Market Volatility'],
    link: 'https://github.com/benhaim23',
    image: '/images/projects/bitcoin_price_forecast_and_sentiment_tool.jpeg',
    category: 'analytics',
  },
  {
    id: 3,
    title: 'Dune Analytics Dashboard',
    description: 'Crafted robust evaluation frameworks using Dune Analytics, Python, and SQL to convert complex on-chain data into critical insights that informed lending strategies.',
    tags: ['Dune Analytics', 'Data Visualization', 'On-Chain Data'],
    link: 'https://github.com/benhaim23',
    image: '/images/projects/dune_analytics.jpeg',
    category: 'analytics',
  },
  {
    id: 4,
    title: 'GMB Capital - Arbitrage Trading',
    description: 'Executed arbitrage and hedging strategies at GMB Capital using 15 exchanges, spot trading pairs, and perpetual futures to identify market inefficiencies and optimize returns with 675% YoY growth.',
    tags: ['Arbitrage', 'Hedging', 'Trading Algorithms', 'Fund Management'],
    link: 'https://github.com/benhaim23',
    image: '/images/projects/GMB_Capital.jpeg',
    category: 'trading',
  },
  {
    id: 6,
    title: 'Multiversal Walkers',
    description: 'Led the successful launch of the Multiversal Walkers project, coordinating creative development, marketing strategy, community building, and technical implementation. Managed project planning, creative direction, and marketing campaigns from concept to execution.',
    tags: ['Project Management', 'Creative Direction', 'Marketing Strategy', 'Community Growth'],
    link: 'https://multiversalwalkers.com/multipaper',
    image: '/images/projects/multiversal_walkers.jpeg',
    category: 'development',
  },
  {
    id: 1,
    title: 'Toshiverse Studio',
    description: 'Led operations at Toshiverse L4bs, managing end-to-end project launches for Wooshi World, On1Force, and Multiversal Walkers. Orchestrated collaborations with major NFT projects including Bored Ape Yacht Club and Doodles, building strategic partnerships that expanded community reach across social platforms.',
    tags: ['Operations Management', 'NFT Development', 'Team Leadership', 'Partnership Development', 'Influencer Marketing'],
    link: 'https://toshiverse.io/',
    image: '/images/projects/Toshiverse_L4bs.jpeg',
    category: 'development',
  },
  {
    id: 7,
    title: 'Wooshi World',
    description: 'Directed the launch of Wooshi World, managing project timelines, creative direction, and marketing strategy. Implemented robust community engagement initiatives that drove significant growth across social media platforms.',
    tags: ['Project Management', 'Creative Direction', 'Marketing Strategy', 'Community Management'],
    link: 'https://www.wooshi.world/',
    image: '/images/projects/wooshi_world.jpeg',
    category: 'development',
  },
];
