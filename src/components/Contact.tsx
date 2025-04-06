
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const Contact: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto text-center">
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-muted-foreground">Get in touch or just say hello!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Send a Message Column */}
          <div className="bg-background/20 backdrop-blur-sm border border-border/10 rounded-lg px-6 py-8 shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-center">Send a Message</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <div className="text-left">Name</div>
                <Input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-background/30 border-border/30 text-base py-6"
                />
              </div>
              
              <div className="space-y-2">
                <div className="text-left">Email</div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-background/30 border-border/30 text-base py-6"
                />
              </div>
              
              <div className="space-y-2">
                <div className="text-left">Message</div>
                <Textarea 
                  placeholder="Your Message" 
                  rows={6} 
                  className="bg-background/30 border-border/30 text-base min-h-[120px]"
                />
              </div>
              
              <Button className="w-full py-6 bg-blue-500 hover:bg-blue-600 text-base font-medium">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information Column */}
          <div className="bg-background/20 backdrop-blur-sm border border-border/10 rounded-lg px-6 py-8 shadow-md flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-10 text-center">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-foreground/90 text-lg">
                <Mail className="h-5 w-5 text-foreground/80" />
                <a href="mailto:markbenhaim@gmail.com" className="hover:text-primary transition-colors">
                  markbenhaim@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-foreground/90 text-lg">
                <Phone className="h-5 w-5 text-foreground/80" />
                <a href="tel:+15146687877" className="hover:text-primary transition-colors">
                  +1 (514) 668-7877
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-foreground/90 text-lg">
                <MapPin className="h-5 w-5 text-foreground/80" />
                <span>Montreal, Canada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
