
import React from 'react';
import { BarChart, PieChart, AreaChart, Users, Megaphone, Briefcase, Code, Database, Network, Shield, Search, FlaskConical } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface SkillCategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; keywords?: string[] }>;
  className?: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  description,
  icon,
  skills,
  className,
}) => (
  <Card className={cn("glass-card h-full", className)}>
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
            <div className="flex flex-wrap gap-1.5">
              <Badge variant="outline" className="font-medium text-primary">{skill.name}</Badge>
              {skill.keywords?.map((keyword, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">{keyword}</Badge>
              ))}
            </div>
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
        { name: "Data Processing", keywords: ["Python", "SQL", "Tableau", "ETL"] },
        { name: "Statistical Analysis", keywords: ["Time Series", "Forecasting", "Regression"] },
        { name: "Data Libraries", keywords: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"] },
        { name: "Cloud Solutions", keywords: ["AWS", "Snowflake", "Google Cloud"] },
      ],
    },
    {
      title: "Product & Business Development",
      description: "Building and scaling products and businesses",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Project Management", keywords: ["NFT", "Web3", "Agile"] },
        { name: "Leadership", keywords: ["Cross-functional", "Strategy", "Team Building"] },
        { name: "Business Growth", keywords: ["Partnerships", "Scaling", "Market Entry"] },
        { name: "Revenue Strategy", keywords: ["Monetization", "Market Fit", "Pricing Models"] },
      ],
    },
    {
      title: "Marketing & Community",
      description: "Building engaged communities and brand presence",
      icon: <Megaphone className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Community Building", keywords: ["Engagement", "Retention", "Discord"] },
        { name: "Influencer Marketing", keywords: ["Campaigns", "Outreach", "Partnerships"] },
        { name: "Social Strategy", keywords: ["Content", "Analytics", "Growth Hacking"] },
        { name: "Collaborations", keywords: ["Cross-Project", "Co-Marketing", "Events"] },
      ],
    },
    {
      title: "Blockchain & Crypto",
      description: "Expertise in blockchain technologies",
      icon: <BarChart className="h-6 w-6 text-primary" />,
      skills: [
        { name: "DeFi Expertise", keywords: ["Tokenization", "Protocols", "Yield Farming"] },
        { name: "Smart Contracts", keywords: ["Evaluation", "Integration", "Security Audits"] },
        { name: "Onchain Analysis", keywords: ["Transaction Data", "Metrics", "Flow Analysis"] },
        { name: "Analytics Tools", keywords: ["Dune", "Etherscan", "Nansen", "Messari"] },
      ],
    },
    {
      title: "Trading & Analytics",
      description: "Trading systems and market analysis",
      icon: <PieChart className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Trading Strategies", keywords: ["Arbitrage", "Hedging", "Spot/Futures"] },
        { name: "Quantitative Models", keywords: ["Predictive", "Risk", "Backtesting"] },
        { name: "Risk Management", keywords: ["Portfolio", "Exposure", "Position Sizing"] },
        { name: "Market Analysis", keywords: ["Trends", "Forecasting", "Technical Analysis"] },
      ],
    },
    {
      title: "Team & Project Management",
      description: "Leading teams and executing complex projects",
      icon: <Users className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Project Lifecycle", keywords: ["End-to-End", "Delivery", "Sprints"] },
        { name: "Creative Direction", keywords: ["Vision", "Execution", "Branding"] },
        { name: "Technical Coordination", keywords: ["Engineering", "Design", "QA"] },
        { name: "Stakeholder Management", keywords: ["Alignment", "Communication", "Reporting"] },
      ],
    },
    {
      title: "Technical Skills",
      description: "Programming and data tools",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Python", keywords: ["Data Analysis", "Jupyter", "Machine Learning"] },
        { name: "Version Control", keywords: ["Git", "GitHub"] },
        { name: "SQL", keywords: ["Queries", "Data Extraction", "MySQL"] },
        { name: "Data Tools", keywords: ["Excel", "Google Sheets", "Tableau"] },
      ],
    },
    {
      title: "Data Fundamentals",
      description: "Working with data and infrastructure",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Database Basics", keywords: ["MySQL", "SQL Queries", "Data Models"] },
        { name: "Data Extraction", keywords: ["APIs", "ETL", "CSV/JSON"] },
        { name: "Analytics", keywords: ["Dashboards", "Reporting", "KPIs"] },
        { name: "Visualization", keywords: ["Charts", "Graphs", "Presentation"] },
      ],
    },
    {
      title: "Research & Analysis",
      description: "In-depth investigation and strategic insights",
      icon: <Search className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Market Research", keywords: ["Competitive Analysis", "Trends", "Opportunities"] },
        { name: "Crypto Ecosystems", keywords: ["L1/L2", "NFT Markets", "GameFi"] },
        { name: "Protocol Analysis", keywords: ["Technical", "Tokenomics", "Security"] },
        { name: "Investment Research", keywords: ["Due Diligence", "Risk Assessment", "Valuation"] },
      ],
    },
  ];

  return (
    <section id="skills" className="section-container">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="badge badge-primary inline-block mb-2">My Expertise</div>
        <h2 className="section-title">Skills & Proficiencies</h2>
        <p className="section-subtitle">
          With a diverse skill set spanning operations, product development, research, and data analytics,
          I bring specialized expertise to navigate the complexities of the crypto ecosystem and NFT space.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <li>Tableau Desktop Specialist</li>
              <li>Python for Trading - Quantinsti</li>
              <li>IBM Professional Certificate for Data Science</li>
              <li>Brainstation Data Science Bootcamp</li>
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
