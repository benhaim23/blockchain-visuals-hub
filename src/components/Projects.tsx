
import React, { useState } from 'react';
import { Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

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
            variant={filter === "analytics" ? "default" : "outline"}
            className="rounded-full text-sm"
            onClick={() => setFilter("analytics")}
          >
            Analytics
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
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
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
