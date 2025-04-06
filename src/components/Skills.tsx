
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
  <Card className={cn("glass-card h-full group transition-all duration-300 hover:shadow-lg", className)}>
    <CardHeader className="flex flex-row items-start space-x-4 pb-2">
      <div className="p-2.5 rounded-md bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">{icon}</div>
      <div className="space-y-1.5">
        <CardTitle className="group-hover:text-primary transition-colors duration-300">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div 
            key={skill.name} 
            className="space-y-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="font-medium text-primary py-1.5">{skill.name}</Badge>
              {skill.keywords?.map((keyword, idx) => (
                <Badge 
                  key={idx} 
                  variant="secondary" 
                  className="text-xs opacity-80 hover:opacity-100 transition-opacity duration-200"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          </motion.div>
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
    <section id="skills" className="section-container py-20">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div 
          className="badge badge-primary inline-block mb-3 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Expertise
        </motion.div>
        <motion.h2 
          className="section-title text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Skills & Proficiencies
        </motion.h2>
        <motion.p 
          className="section-subtitle text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          With a diverse skill set spanning operations, product development, research, and data analytics,
          I bring specialized expertise to navigate the complexities of the crypto ecosystem and NFT space.
        </motion.p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={item}
            className="h-full"
          >
            <SkillCategory
              title={category.title}
              description={category.description}
              icon={category.icon}
              skills={category.skills}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-12 bg-primary/30"></div>
          <h3 className="text-2xl font-semibold text-center inline-flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Certifications & Education
          </h3>
          <div className="h-px w-12 bg-primary/30"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certifications Card */}
          <motion.div
            className="glass-card rounded-xl overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 h-full"
            whileHover={{ y: -5 }}
          >
            <div className="p-6 bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 backdrop-blur-md">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold">Certifications</h4>
                  <p className="text-muted-foreground text-sm">Professional qualifications</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <motion.ul 
                className="space-y-4"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {certificationsList.map((cert) => (
                  <motion.li 
                    key={cert.id} 
                    className={cn(
                      "flex items-center gap-4 p-3 rounded-lg group transition-all duration-300",
                      theme === 'dark' 
                        ? "hover:bg-primary/10" 
                        : "hover:bg-primary/5"
                    )}
                    variants={item}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-white font-medium transition-all duration-300",
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
            className="glass-card rounded-xl overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 h-full"
            whileHover={{ y: -5 }}
          >
            <div className="p-6 bg-gradient-to-r from-primary/5 to-transparent">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 backdrop-blur-md">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold">Education</h4>
                  <p className="text-muted-foreground text-sm">Academic background</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <motion.ul 
                className="space-y-8"
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
                    <div className="space-y-1.5">
                      <div className="font-semibold text-xl">{edu.degree}</div>
                      <div className="text-muted-foreground">{edu.school}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="bg-primary/5 py-1">
                          {edu.period}
                        </Badge>
                      </div>
                      {edu.honors && (
                        <div className="text-xs text-muted-foreground flex items-center gap-1.5 mt-2">
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
      </motion.div>
    </section>
  );
};

export default Skills;
