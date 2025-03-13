
import React, { useState } from 'react';
import { ExternalLink, Code, Database, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image: string;
  category: 'development' | 'trading' | 'analytics';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'NFT Studio & Marketplace',
    description: 'Co-founded and scaled an NFT studio that generated over $4M USD in first-year revenue, leading a 20-person team across engineering, marketing, and creative domains.',
    tags: ['NFT Development', 'Team Leadership', 'Revenue Generation'],
    link: 'https://github.com/benhaim23',
    image: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="560" height="320" viewBox="0 0 560 320" fill="none"%3E%3Crect width="560" height="320" fill="%230066CC" fill-opacity="0.05"/%3E%3Cpath d="M280 160m-50 0a50 50 0 1 0 100 0a50 50 0 1 0 -100 0" stroke="%230066CC" stroke-width="2" stroke-dasharray="4 4"/%3E%3Cpath d="M280 120L330 190H230L280 120Z" stroke="%230066CC" stroke-width="2"/%3E%3C/svg%3E',
    category: 'development',
  },
  {
    id: 2,
    title: 'Dune Analytics Dashboard',
    description: 'Crafted robust evaluation frameworks using Dune Analytics, Python, and SQL to convert complex on-chain data into critical insights that informed lending strategies.',
    tags: ['Dune Analytics', 'Data Visualization', 'On-Chain Data'],
    link: 'https://github.com/benhaim23',
    image: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="560" height="320" viewBox="0 0 560 320" fill="none"%3E%3Crect width="560" height="320" fill="%2300AA88" fill-opacity="0.05"/%3E%3Cpath d="M140 220L230 160L280 200L350 120L420 180" stroke="%2300AA88" stroke-width="2"/%3E%3Ccircle cx="140" cy="220" r="5" fill="%2300AA88"/%3E%3Ccircle cx="230" cy="160" r="5" fill="%2300AA88"/%3E%3Ccircle cx="280" cy="200" r="5" fill="%2300AA88"/%3E%3Ccircle cx="350" cy="120" r="5" fill="%2300AA88"/%3E%3Ccircle cx="420" cy="180" r="5" fill="%2300AA88"/%3E%3C/svg%3E',
    category: 'analytics',
  },
  {
    id: 3,
    title: 'Arbitrage Trading System',
    description: 'Executed arbitrage and hedging strategies using 15 exchanges, spot trading pairs, and perpetual futures to identify market inefficiencies and optimize returns with 675% YoY growth.',
    tags: ['Arbitrage', 'Hedging', 'Trading Algorithms'],
    link: 'https://github.com/benhaim23',
    image: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="560" height="320" viewBox="0 0 560 320" fill="none"%3E%3Crect width="560" height="320" fill="%23AA00AA" fill-opacity="0.05"/%3E%3Cpath d="M140 140H420" stroke="%23AA00AA" stroke-width="2" stroke-dasharray="6 6"/%3E%3Cpath d="M140 180H420" stroke="%23AA00AA" stroke-width="2" stroke-dasharray="6 6"/%3E%3Cpath d="M140 100v120" stroke="%23AA00AA" stroke-width="2" stroke-dasharray="6 6"/%3E%3Cpath d="M420 100v120" stroke="%23AA00AA" stroke-width="2" stroke-dasharray="6 6"/%3E%3Cpath d="M280 120L330 180H230L280 120Z" fill="%23AA00AA" fill-opacity="0.2" stroke="%23AA00AA" stroke-width="2"/%3E%3C/svg%3E',
    category: 'trading',
  },
  {
    id: 4,
    title: 'Bitcoin Sentiment Analysis',
    description: 'Architected a sophisticated analytical model merging social media sentiment evaluation with financial metrics on Bitcoin performance to identify primary market volatility factors.',
    tags: ['Sentiment Analysis', 'Financial Metrics', 'Market Volatility'],
    link: 'https://github.com/benhaim23',
    image: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="560" height="320" viewBox="0 0 560 320" fill="none"%3E%3Crect width="560" height="320" fill="%23CC4400" fill-opacity="0.05"/%3E%3Ccircle cx="280" cy="160" r="70" stroke="%23CC4400" stroke-width="2" stroke-dasharray="8 8"/%3E%3Ccircle cx="280" cy="160" r="40" stroke="%23CC4400" stroke-width="2"/%3E%3Cpath d="M260 140L300 180M260 180L300 140" stroke="%23CC4400" stroke-width="2"/%3E%3C/svg%3E',
    category: 'analytics',
  },
  {
    id: 5,
    title: 'BTC LSTM Prediction Model',
    description: 'Innovated an end-to-end pipeline featuring cutting-edge long short-term memory algorithms focused on refining crypto price predictions to inform trading decisions.',
    tags: ['Machine Learning', 'Time Series', 'Price Prediction'],
    link: 'https://github.com/benhaim23',
    image: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="560" height="320" viewBox="0 0 560 320" fill="none"%3E%3Crect width="560" height="320" fill="%23AAAA00" fill-opacity="0.05"/%3E%3Crect x="200" y="120" width="160" height="100" rx="10" stroke="%23AAAA00" stroke-width="2"/%3E%3Cpath d="M230 140l20 20m0-20l-20 20" stroke="%23AAAA00" stroke-width="2"/%3E%3Cpath d="M310 140l20 20m0-20l-20 20" stroke="%23AAAA00" stroke-width="2"/%3E%3Cpath d="M250 180h60" stroke="%23AAAA00" stroke-width="2"/%3E%3C/svg%3E',
    category: 'analytics',
  },
  {
    id: 6,
    title: 'Crypto Market Research Reports',
    description: 'Developed comprehensive analytical reports on blockchain financial mechanisms, including detailed analyses of token economics, protocol incentives, and market trends.',
    tags: ['Market Research', 'Token Economics', 'Financial Analysis'],
    link: 'https://github.com/benhaim23',
    image: 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="560" height="320" viewBox="0 0 560 320" fill="none"%3E%3Crect width="560" height="320" fill="%230088AA" fill-opacity="0.05"/%3E%3Cpath d="M200 120h160m-160 40h160m-160 40h160m-160 40h80" stroke="%230088AA" stroke-width="2" stroke-dasharray="4 4"/%3E%3Crect x="180" y="100" width="200" height="140" rx="5" stroke="%230088AA" stroke-width="2"/%3E%3C/svg%3E',
    category: 'analytics',
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
          spanning development, trading systems, and data analytics.
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
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
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
