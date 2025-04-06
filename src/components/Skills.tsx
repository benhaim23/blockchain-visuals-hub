import React from 'react';
import { BarChart, PieChart, AreaChart, Users, Megaphone, Briefcase, Code, Database, Network, Shield, Search, FlaskConical, Award, GraduationCap, CheckCircle, Bookmark, Medal, FileCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

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
  const { theme } = useTheme();
  const skillCategories = [
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
      title: "Research & Analysis",
      description: "In-depth investigation and strategic insights",
      icon: <Search className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Market Research", keywords: ["Competitive Analysis", "Trends", "Opportunities"] },
        { name: "Crypto Ecosystems", keywords: ["L1/L2", "NFT Markets", "GameFi", "Omnichain", "DEX", "DeFi"] },
        { name: "Protocol Analysis", keywords: ["Technical", "Tokenomics", "Security"] },
        { name: "Investment Research", keywords: ["Due Diligence", "Risk Assessment", "Valuation"] },
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
  ];

  const certificationsList = [
    { id: 1, name: "Blockchain and Digital Currencies - UNIC", icon: <Database className="h-4 w-4" /> },
    { id: 2, name: "Brainstation Data Science Bootcamp", icon: <Code className="h-4 w-4" /> },
    { id: 3, name: "IBM Professional Certificate for Data Science", icon: <BarChart className="h-4 w-4" /> },
    { id: 4, name: "Python for Trading - Quantinsti", icon: <PieChart className="h-4 w-4" /> },
    { id: 5, name: "Tableau Desktop Specialist", icon: <AreaChart className="h-4 w-4" /> }
  ];

  const educationList = [
    {
      degree: "Master's in Applied Data Science",
      school: "University of Michigan",
      period: "2023 - Present"
    },
    {
      degree: "Master's in Blockchain & Digital Currency",
      school: "University of Nicosia",
      period: "2018 - 2019"
    },
    {
      degree: "Bachelor of Commerce (Accounting)",
      school: "Concordia University, John Molson School of Business",
      period: "2015 - 2018",
      honors: "Ernst & Young Scholarship, Beta Gamma Sigma, Dean's Honor List"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

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

      <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
        <h3 className="text-xl font-semibold mb-6 text-center inline-flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" />
          Certifications & Education
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Certifications Card */}
          <motion.div
            className="glass-card rounded-xl overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="p-5 bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-primary/10 backdrop-blur-md">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Certifications</h4>
                  <p className="text-muted-foreground text-sm">Professional qualifications</p>
                </div>
              </div>
            </div>
            <div className="p-5">
              <motion.ul 
                className="space-y-3"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {certificationsList.map((cert) => (
                  <motion.li 
                    key={cert.id} 
                    className={cn(
                      "flex items-center gap-3 p-2.5 rounded-lg group transition-all duration-300",
                      theme === 'dark' 
                        ? "hover:bg-primary/10" 
                        : "hover:bg-primary/5"
                    )}
                    variants={item}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-white font-medium transition-all duration-300",
                      theme === 'dark' 
                        ? "bg-primary/30 group-hover:bg-primary/50" 
                        : "bg-primary/20 group-hover:bg-primary/40"
                    )}>
                      {cert.id}
                    </div>
                    <span className="font-medium group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                      {cert.name}
                      {cert.icon}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
          
          {/* Education Card */}
          <motion.div 
            className="glass-card rounded-xl overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="p-5 bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-primary/10 backdrop-blur-md">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Education</h4>
                  <p className="text-muted-foreground text-sm">Academic background</p>
                </div>
              </div>
            </div>
            <div className="p-5">
              <motion.ul 
                className="space-y-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {educationList.map((edu, index) => (
                  <motion.li 
                    key={index} 
                    variants={item}
                    className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300 py-1"
                  >
                    <div className="space-y-1">
                      <div className="font-semibold text-lg">{edu.degree}</div>
                      <div className="text-muted-foreground">{edu.school}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <Badge variant="outline" className="bg-primary/5">
                          {edu.period}
                        </Badge>
                      </div>
                      {edu.honors && (
                        <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                          <Medal className="h-3.5 w-3.5 text-amber-400" />
                          <span>{edu.honors}</span>
                        </div>
                      )}
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
