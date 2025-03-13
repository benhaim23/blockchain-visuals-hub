
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
    id: 1,
    title: 'Toshiverse NFT Studio',
    description: 'Led operations at Toshiverse L4bs, managing end-to-end project launches for Wooshi World, On1Force, and Multiversal Walkers across community development, marketing, engineering, and creative direction.',
    tags: ['Operations Management', 'NFT Development', 'Team Leadership'],
    link: 'https://toshiverse.io/',
    image: '/images/projects/toshiverse.png', // Update with actual image when uploaded
    category: 'development',
  },
  {
    id: 2,
    title: 'Strategic NFT Collaborations',
    description: 'Orchestrated collaborations with major NFT projects including Bored Ape Yacht Club and Doodles, building strategic partnerships that expanded community reach across Instagram, Twitter, and Discord.',
    tags: ['Partnership Development', 'Influencer Marketing', 'Community Building'],
    link: 'https://www.wooshi.world/',
    image: '/images/projects/nft-collaborations.png', // Update with actual image when uploaded
    category: 'development',
  },
  {
    id: 3,
    title: 'Dune Analytics Dashboard',
    description: 'Crafted robust evaluation frameworks using Dune Analytics, Python, and SQL to convert complex on-chain data into critical insights that informed lending strategies.',
    tags: ['Dune Analytics', 'Data Visualization', 'On-Chain Data'],
    link: 'https://github.com/benhaim23',
    image: '/images/analytics/dune-dashboard.png', // Update with actual image when uploaded
    category: 'analytics',
  },
  {
    id: 4,
    title: 'Arbitrage Trading System',
    description: 'Executed arbitrage and hedging strategies using 15 exchanges, spot trading pairs, and perpetual futures to identify market inefficiencies and optimize returns with 675% YoY growth.',
    tags: ['Arbitrage', 'Hedging', 'Trading Algorithms'],
    link: 'https://github.com/benhaim23',
    image: '/lovable-uploads/85726000-8e73-4eb5-923d-753655ddee88.png', // Keep this existing image
    category: 'trading',
  },
  {
    id: 5,
    title: 'Bitcoin Sentiment Analysis',
    description: 'Architected a sophisticated analytical model merging social media sentiment evaluation with financial metrics on Bitcoin performance to identify primary market volatility factors.',
    tags: ['Sentiment Analysis', 'Financial Metrics', 'Market Volatility'],
    link: 'https://github.com/benhaim23',
    image: '/images/analytics/bitcoin-sentiment.png', // Update with actual image when uploaded
    category: 'analytics',
  },
  {
    id: 6,
    title: 'Multiversal Walkers NFT',
    description: 'Led the successful launch of the Multiversal Walkers NFT project, coordinating creative development, marketing strategy, community building, and technical implementation.',
    tags: ['NFT Launch', 'Community Growth', 'Project Management'],
    link: 'https://multiversalwalkers.com/multipaper',
    image: '/images/projects/multiversal-walkers.png', // Update with actual image when uploaded
    category: 'development',
  },
  {
    id: 7,
    title: 'Wooshi World NFT',
    description: 'Directed the launch of Wooshi World, a successful NFT collection with robust community engagement strategies that drove significant growth across social media platforms.',
    tags: ['NFT Launch', 'Community Management', 'Creative Direction'],
    link: 'https://www.wooshi.world/',
    image: '/images/projects/wooshi-world.png', // Update with actual image when uploaded
    category: 'development',
  },
  {
    id: 8,
    title: '0n1Force NFT',
    description: 'Managed the 0n1Force NFT project launch, overseeing marketing strategy, community development, and partnerships that positioned it as a leading project in the NFT space.',
    tags: ['NFT Project', 'Marketing Strategy', 'Community Building'],
    link: 'https://www.0n1force.com/',
    image: '/images/projects/0n1force.png', // Update with actual image when uploaded
    category: 'development',
  },
];
