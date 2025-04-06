
import React from 'react';
import { Mail, MapPin, Clock, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ContactInfo: React.FC = () => {
  return (
    <Card className="glass-card shadow-lg h-full">
      <CardHeader className="bg-primary/5 border-b border-primary/10">
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-primary" />
          Contact Information
        </CardTitle>
        <CardDescription>
          Ways to reach me directly
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 flex flex-col justify-between h-[calc(100%-76px)] min-h-[350px]">
        <div className="space-y-6">
          <div className="flex items-start space-x-3">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">Email</p>
              <a href="mailto:markbenhaim0@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                markbenhaim0@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">Location</p>
              <p className="text-muted-foreground">Montreal, Quebec, Canada</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">Availability</p>
              <p className="text-muted-foreground">Monday-Friday, 9AM-5PM EST</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-5 border-t border-primary/10">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Download className="h-4 w-4 text-primary" />
            Resume
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            View my full resume to learn more about my experience, projects, and qualifications.
          </p>
          <Button
            className="w-full bg-primary hover:bg-primary/90 transition-colors shadow-sm mb-5"
            onClick={() => window.open('/images/misc/Mark_Benhaim_Resume.pdf', '_blank')}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
