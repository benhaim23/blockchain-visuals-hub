
import React, { useState } from 'react';
import { Filter, Code, Home, Briefcase, FileText, BarChartBig } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { projects } from '@/data/projects';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredProjects = filter 
    ? projects.filter(project => project.category === filter)
    : projects;

  const filterItems = [
    { name: 'All Projects', url: '#', icon: Home, value: null },
    { name: 'Analytics', url: '#', icon: BarChartBig, value: 'analytics' },
    { name: 'Development', url: '#', icon: Code, value: 'development' },
    { name: 'Trading', url: '#', icon: Briefcase, value: 'trading' },
  ];

  const activeItem = filter === null ? 'All Projects' : 
                     filter === 'analytics' ? 'Analytics' :
                     filter === 'development' ? 'Development' : 'Trading';

  const handleFilterChange = (name: string) => {
    const selectedFilter = filterItems.find(item => item.name === name);
    setFilter(selectedFilter?.value || null);
  };

  return (
    <section id="projects" className="section-container">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="badge badge-primary inline-block mb-2">My Work</div>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of my contributions to the blockchain and cryptocurrency ecosystem,
          spanning development, trading systems, data analytics, and community building.
        </p>
        
        <div className="flex justify-center mt-8">
          <NavBar 
            items={filterItems} 
            activeItem={activeItem}
            onItemClick={handleFilterChange}
            className="mx-auto"
          />
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
          interactive={true}
          onClick={() => window.open('https://github.com/benhaim23', '_blank')}
        >
          <Code className="h-4 w-4" /> View More on GitHub
        </Button>
      </div>
    </section>
  );
};

export default Projects;
