
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    // Simple validation
    if (!email || !subject || !message) {
      alert('Please fill out all fields');
      return;
    }
    
    // Construct mailto URL
    const mailtoUrl = `mailto:markbenhaim0@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0A%0A${encodeURIComponent('From: ' + email)}`;
    
    // Open the user's mail client
    window.location.href = mailtoUrl;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Input 
          type="email" 
          name="email" 
          placeholder="Your email address" 
          className="bg-background/50 border-border/50"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Input 
          type="text" 
          name="subject" 
          placeholder="Subject" 
          className="bg-background/50 border-border/50"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Textarea 
          name="message" 
          placeholder="Your message" 
          className="min-h-32 bg-background/50 border-border/50" 
          required
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full crypto-gradient-bg" 
      >
        <Send className="h-4 w-4 mr-2" />
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
