
import React from 'react';
import { BarChart, PieChart, AreaChart } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SkillCategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; level: number }>;
  className?: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  description,
  icon,
  skills,
  className,
}) => (
  <Card className={cn("glass-card", className)}>
    <CardHeader className="flex flex-row items-start space-x-4 pb-2">
      <div className="p-2 rounded-md bg-primary/10">{icon}</div>
      <div className="space-y-1">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      description: "Development and implementation expertise",
      icon: <AreaChart className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Blockchain Development", level: 90 },
        { name: "Smart Contract Auditing", level: 85 },
        { name: "DeFi Protocol Integration", level: 80 },
        { name: "Web3 Frontend Development", level: 75 },
      ],
    },
    {
      title: "Trading & Investment",
      description: "Market analysis and investment strategies",
      icon: <BarChart className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Technical Analysis", level: 92 },
        { name: "Risk Management", level: 88 },
        { name: "Algorithmic Trading", level: 82 },
        { name: "Portfolio Optimization", level: 85 },
      ],
    },
    {
      title: "Data & Analytics",
      description: "Research and data-driven insights",
      icon: <PieChart className="h-6 w-6 text-primary" />,
      skills: [
        { name: "On-Chain Data Analysis", level: 87 },
        { name: "Market Sentiment Analysis", level: 83 },
        { name: "Financial Modeling", level: 80 },
        { name: "Data Visualization", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-container">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="badge badge-primary inline-block mb-2">My Expertise</div>
        <h2 className="section-title">Skills & Proficiencies</h2>
        <p className="section-subtitle">
          With a diverse skill set spanning technical development, trading strategies, and data analytics,
          I bring comprehensive expertise to navigate the complexities of the crypto ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <SkillCategory
              title={category.title}
              description={category.description}
              icon={category.icon}
              skills={category.skills}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
