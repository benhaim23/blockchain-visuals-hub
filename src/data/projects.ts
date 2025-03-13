
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
    image: 'https://i.seadn.io/gcs/files/8e05a7b4b112a3dc8b6c72dc7d305d86.png',
    category: 'development',
  },
  {
    id: 2,
    title: 'Strategic NFT Collaborations',
    description: 'Orchestrated collaborations with major NFT projects including Bored Ape Yacht Club and Doodles, building strategic partnerships that expanded community reach across Instagram, Twitter, and Discord.',
    tags: ['Partnership Development', 'Influencer Marketing', 'Community Building'],
    link: 'https://www.wooshi.world/',
    image: 'https://i.seadn.io/gcs/files/d0afe44c103cc4c24bcaaf0dcfab19fa.jpg',
    category: 'development',
  },
  {
    id: 3,
    title: 'Dune Analytics Dashboard',
    description: 'Crafted robust evaluation frameworks using Dune Analytics, Python, and SQL to convert complex on-chain data into critical insights that informed lending strategies.',
    tags: ['Dune Analytics', 'Data Visualization', 'On-Chain Data'],
    link: 'https://github.com/benhaim23',
    image: 'https://dune.com/assets/poster.png',
    category: 'analytics',
  },
  {
    id: 4,
    title: 'Arbitrage Trading System',
    description: 'Executed arbitrage and hedging strategies using 15 exchanges, spot trading pairs, and perpetual futures to identify market inefficiencies and optimize returns with 675% YoY growth.',
    tags: ['Arbitrage', 'Hedging', 'Trading Algorithms'],
    link: 'https://github.com/benhaim23',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    category: 'trading',
  },
  {
    id: 5,
    title: 'Bitcoin Sentiment Analysis',
    description: 'Architected a sophisticated analytical model merging social media sentiment evaluation with financial metrics on Bitcoin performance to identify primary market volatility factors.',
    tags: ['Sentiment Analysis', 'Financial Metrics', 'Market Volatility'],
    link: 'https://github.com/benhaim23',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    category: 'analytics',
  },
  {
    id: 6,
    title: 'Multiversal Walkers NFT',
    description: 'Led the successful launch of the Multiversal Walkers NFT project, coordinating creative development, marketing strategy, community building, and technical implementation.',
    tags: ['NFT Launch', 'Community Growth', 'Project Management'],
    link: 'https://multiversalwalkers.com/multipaper',
    image: 'public/lovable-uploads/53557887-64a6-4193-9e46-f70b4d5397f3.png',
    category: 'development',
  },
  {
    id: 7,
    title: 'Wooshi World NFT',
    description: 'Directed the launch of Wooshi World, a successful NFT collection with robust community engagement strategies that drove significant growth across social media platforms.',
    tags: ['NFT Launch', 'Community Management', 'Creative Direction'],
    link: 'https://www.wooshi.world/',
    image: 'public/lovable-uploads/5b2709de-fbb4-4346-8075-3174c5497f06.png',
    category: 'development',
  },
  {
    id: 8,
    title: 'On1Force NFT',
    description: 'Managed the On1Force NFT project launch, overseeing marketing strategy, community development, and partnerships that positioned it as a leading project in the NFT space.',
    tags: ['NFT Project', 'Marketing Strategy', 'Community Building'],
    link: 'https://www.0n1force.com/',
    image: 'public/lovable-uploads/8eef8d55-7210-4a49-9781-a8a3e5dc1bf8.png',
    category: 'development',
  },
];
