
import React from 'react';
import { PieChart, Braces, TrendingUp, Database, BarChart, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon, title, description, className }) => (
  <Card className={cn("glass-card h-full", className)}>
    <CardContent className="flex flex-col items-start space-y-4 p-6">
      <div className="p-2 rounded-md bg-primary/10">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const About: React.FC = () => {
  const expertiseAreas = [
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: "Operations Management",
      description: "Crafting robust evaluation frameworks and orchestrating cross-functional collaboration for data-driven business strategies and workflow optimization.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Trading & Fund Management",
      description: "Executing arbitrage and hedging strategies across exchanges with 675% YoY growth while developing custom trading dashboards and automation tools.",
    },
    {
      icon: <PieChart className="h-6 w-6 text-primary" />,
      title: "Data Analytics",
      description: "Leveraging Python, SQL, and visualization tools to extract meaningful insights from blockchain data, identifying market trends and investment opportunities.",
    },
    {
      icon: <Braces className="h-6 w-6 text-primary" />,
      title: "NFT Development",
      description: "Co-founded and scaled an NFT studio, leading a 20-person team and launching innovative projects generating over $4M USD in first-year revenue.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Predictive Modeling",
      description: "Developing end-to-end pipelines with cutting-edge algorithms for crypto price predictions and market analysis to inform trading strategies.",
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Blockchain Research",
      description: "Analyzing on-chain data and DeFi protocols to identify opportunities and risks, creating comprehensive analytical reports on blockchain financial mechanisms.",
    },
  ];

  return (
    <section id="about" className="section-container">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="badge badge-primary inline-block mb-2">About Me</div>
        <h2 className="section-title">Expertise in the Crypto Ecosystem</h2>
        <p className="section-subtitle">
          With experience spanning operations, trading, analytics, and development in the blockchain space,
          I bring a comprehensive skill set to navigate the complexities of the crypto landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseAreas.map((area, index) => (
          <div
            key={index}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ExpertiseCard
              icon={area.icon}
              title={area.title}
              description={area.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
