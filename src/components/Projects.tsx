
import React, { useState } from 'react';
import { ExternalLink, Code, Database, ArrowRight, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image: string;
  category: 'development' | 'trading' | 'analytics' | 'community';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Toshiverse NFT Studio',
    description: 'Led operations at Toshiverse L4bs, managing end-to-end project launches for Wooshi World, On1Force, and Multiversal Walkers across community development, marketing, engineering, and creative direction.',
    tags: ['Operations Management', 'NFT Development', 'Team Leadership'],
    link: 'https://toshiverse.io/',
    image: '/placeholder.svg',
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
    image: 'https://i.seadn.io/gcs/files/de2b7d6fa1c95c94c37cd238a14c2c50.gif',
    category: 'development',
  },
  {
    id: 7,
    title: 'Wooshi World NFT',
    description: 'Directed the launch of Wooshi World, a successful NFT collection with robust community engagement strategies that drove significant growth across social media platforms.',
    tags: ['NFT Launch', 'Community Management', 'Creative Direction'],
    link: 'https://www.wooshi.world/',
    image: 'https://i.seadn.io/gcs/files/6d83fc15d76ea34fa95e4dd85620e5b8.gif',
    category: 'development',
  },
  {
    id: 8,
    title: 'On1Force NFT',
    description: 'Managed the On1Force NFT project launch, overseeing marketing strategy, community development, and partnerships that positioned it as a leading project in the NFT space.',
    tags: ['NFT Project', 'Marketing Strategy', 'Community Building'],
    link: 'https://www.0n1force.com/',
    image: 'https://pbs.twimg.com/media/E_MoK6TXsAUlNdl?format=jpg&name=large',
    category: 'development',
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredProjects = filter 
    ? projects.filter(project => project.category === filter)
    : projects;

  return (
    <section id="projects" className="section-container">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="badge badge-primary inline-block mb-2">My Work</div>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of my contributions to the blockchain and cryptocurrency ecosystem,
          spanning development, trading systems, data analytics, and community building.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          <Button
            variant={filter === null ? "default" : "outline"}
            className="rounded-full text-sm"
            onClick={() => setFilter(null)}
          >
            All Projects
          </Button>
          <Button
            variant={filter === "development" ? "default" : "outline"}
            className="rounded-full text-sm"
            onClick={() => setFilter("development")}
          >
            Development
          </Button>
          <Button
            variant={filter === "trading" ? "default" : "outline"}
            className="rounded-full text-sm"
            onClick={() => setFilter("trading")}
          >
            Trading
          </Button>
          <Button
            variant={filter === "analytics" ? "default" : "outline"}
            className="rounded-full text-sm"
            onClick={() => setFilter("analytics")}
          >
            Analytics
          </Button>
          <Button
            variant={filter === "community" ? "default" : "outline"}
            className="rounded-full text-sm"
            onClick={() => setFilter("community")}
          >
            Community
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card className="glass-card h-full overflow-hidden flex flex-col">
              <div className="overflow-hidden">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  />
                </AspectRatio>
              </div>
              <CardHeader className="flex-grow">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              {project.link && (
                <CardFooter>
                  <Button 
                    variant="ghost" 
                    className="text-primary px-0 flex items-center gap-1 hover:gap-2 transition-all"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              )}
            </Card>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button 
          variant="outline" 
          className="rounded-full"
          onClick={() => window.open('https://github.com/benhaim23', '_blank')}
        >
          <Code className="mr-2 h-4 w-4" />
          View More on GitHub
        </Button>
      </div>
    </section>
  );
};

export default Projects;
