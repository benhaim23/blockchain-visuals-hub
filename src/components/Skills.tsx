
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
      title: "Data Analysis & Visualization",
      description: "Tools and techniques for extracting insights",
      icon: <AreaChart className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Python, SQL, Tableau", level: 92 },
        { name: "Time Series Analysis", level: 90 },
        { name: "NumPy, Pandas, Matplotlib", level: 88 },
        { name: "Data Warehousing (AWS, Snowflake)", level: 85 },
      ],
    },
    {
      title: "Blockchain & Crypto",
      description: "Expertise in blockchain technologies",
      icon: <BarChart className="h-6 w-6 text-primary" />,
      skills: [
        { name: "DeFi Strategies & Tokenization", level: 94 },
        { name: "Smart Contract Evaluation", level: 89 },
        { name: "Onchain Data Analysis", level: 92 },
        { name: "Dune Analytics", level: 86 },
      ],
    },
    {
      title: "Trading & Analytics",
      description: "Trading systems and market analysis",
      icon: <PieChart className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Arbitrage & Hedging Strategies", level: 95 },
        { name: "Quantitative & Predictive Modeling", level: 88 },
        { name: "Risk Management", level: 90 },
        { name: "Crypto Market Forecasting", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-container">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="badge badge-primary inline-block mb-2">My Expertise</div>
        <h2 className="section-title">Skills & Proficiencies</h2>
        <p className="section-subtitle">
          With a diverse skill set spanning data science, blockchain technologies, and trading strategies,
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

      <div className="mt-12 glass-card p-8 animate-fade-in-up">
        <h3 className="text-xl font-semibold mb-6 text-center">Certifications & Education</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-lg mb-4">Certifications</h4>
            <ul className="space-y-2 list-disc pl-5">
              <li>AWS Certified Data Engineer Associate (in progress)</li>
              <li>Tableau Desktop Specialist (in progress)</li>
              <li>SnowPro Core Certification (in progress)</li>
              <li>Python for Trading - Quantinsti</li>
              <li>IBM Professional Certificate for Data Science</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Education</h4>
            <ul className="space-y-4">
              <li>
                <div className="font-medium">Master's in Applied Data Science</div>
                <div className="text-sm text-muted-foreground">University of Michigan, 2023 - Present</div>
              </li>
              <li>
                <div className="font-medium">Master's in Blockchain & Digital Currency</div>
                <div className="text-sm text-muted-foreground">University of Nicosia, 2018 - 2019</div>
              </li>
              <li>
                <div className="font-medium">Bachelor of Commerce (Accounting)</div>
                <div className="text-sm text-muted-foreground">Concordia University, John Molson School of Business, 2015 - 2018</div>
                <div className="text-xs text-muted-foreground">Honors: Ernst & Young Scholarship, Beta Gamma Sigma, Dean's Honor List</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
