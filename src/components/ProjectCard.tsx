
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Handle image loading errors
  const handleImageError = () => {
    console.error(`Failed to load image for project: ${project.title}`, project.image);
    setImageError(true);
    setImageLoaded(true); // We mark it as loaded to remove the skeleton
  };

  // Determine if the image is an external URL or a local path
  const imageSrc = project.image.startsWith('http') 
    ? project.image 
    : project.image;

  // For debugging purposes
  useEffect(() => {
    console.log(`Loading image for ${project.title}:`, imageSrc);
  }, [project.title, imageSrc]);

  return (
    <div
      className="animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Card className="glass-card h-full overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg">
        <div className="overflow-hidden">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            {!imageLoaded && <Skeleton className="absolute inset-0 z-10" />}
            {imageError ? (
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <p className="text-muted-foreground text-sm">Image not available</p>
                <p className="text-muted-foreground text-xs mt-1">{imageSrc}</p>
              </div>
            ) : (
              <img 
                src={imageSrc} 
                alt={project.title}
                crossOrigin="anonymous" 
                className={cn(
                  "w-full h-full object-cover transition-transform duration-500 hover:scale-110",
                  !imageLoaded && "opacity-0"
                )}
                onLoad={() => setImageLoaded(true)}
                onError={handleImageError}
              />
            )}
          </AspectRatio>
        </div>
        <CardHeader className="flex-grow">
          <CardTitle className="mt-2">{project.title}</CardTitle>
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
  );
};

export default ProjectCard;
