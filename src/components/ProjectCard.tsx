
import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
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
  const [isHovering, setIsHovering] = useState(false);

  // Handle image loading errors
  const handleImageError = () => {
    console.error(`Failed to load image for project: ${project.title}`, project.image);
    setImageError(true);
    setImageLoaded(true); // We mark it as loaded to remove the skeleton
  };

  // Reset state when project changes
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [project.image]);

  // For debugging purposes
  useEffect(() => {
    console.log(`Loading image for ${project.title}:`, project.image);
  }, [project.title, project.image]);

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
              <div className="w-full h-full flex flex-col items-center justify-center bg-muted p-4">
                <p className="text-muted-foreground text-sm">Image could not be loaded</p>
                <p className="text-muted-foreground text-xs mt-1 text-center truncate max-w-full">{project.image}</p>
              </div>
            ) : (
              <img 
                src={project.image} 
                alt={project.title}
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
          <CardFooter className="pt-2 pb-5">
            <Button 
              variant="default" 
              size="sm"
              interactive={true}
              className="rounded-full pl-4 pr-3 bg-primary/80 hover:bg-primary shadow-sm"
              onClick={() => window.open(project.link, '_blank')}
            >
              View Details <ExternalLink className="h-4 w-4 ml-1" />
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default ProjectCard;
