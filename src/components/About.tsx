
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
      title: "Project Management",
      description: "Leading blockchain projects from conception to delivery, ensuring seamless coordination and timely execution.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Trading Strategies",
      description: "Developing and implementing sophisticated crypto trading strategies with proven track records.",
    },
    {
      icon: <PieChart className="h-6 w-6 text-primary" />,
      title: "Fund Management",
      description: "Managing crypto portfolios with strategic asset allocation and risk management to maximize returns.",
    },
    {
      icon: <Braces className="h-6 w-6 text-primary" />,
      title: "Development",
      description: "Overseeing technical implementations and smart contract development for blockchain applications.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Operations",
      description: "Streamlining processes and operations for crypto ventures to ensure efficiency and scalability.",
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Data Analytics",
      description: "Extracting valuable insights from blockchain data to inform strategic decisions and identify opportunities.",
    },
  ];

  return (
    <section id="about" className="section-container">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="badge badge-primary inline-block mb-2">About Me</div>
        <h2 className="section-title">Expertise in the Crypto Ecosystem</h2>
        <p className="section-subtitle">
          With extensive experience across the blockchain industry, I bring a comprehensive skill set
          to help projects navigate the complex crypto landscape and achieve sustainable success.
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
