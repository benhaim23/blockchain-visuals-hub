// Fixed imports and component usage
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
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
          {/* Contact Form */}
          <div className="px-6 py-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" placeholder="Your Name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Your Email" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your Message" rows={4} />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="px-6 py-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5" />
                <a href="mailto:markbenhaim@gmail.com">markbenhaim@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5" />
                <a href="tel:+15146687877">+1 (514) 668-7877</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Montreal, Canada</span>
              </div>
              {/* Social Media Links - Example */}
              {/* <div className="flex justify-center gap-4 mt-4">
                <a href="#" className="hover:text-primary"><Facebook className="h-6 w-6" /></a>
                <a href="#" className="hover:text-primary"><Twitter className="h-6 w-6" /></a>
                <a href="#" className="hover:text-primary"><LinkedIn className="h-6 w-6" /></a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
