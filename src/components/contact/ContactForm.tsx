
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/components/ui/use-toast';
import { Mail, Send } from "lucide-react";

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulated submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setSubmitting(false);
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center space-x-2">
        <Mail className="h-5 w-5 text-indigo-500" />
        <h3 className="text-xl font-medium text-indigo-700 dark:text-indigo-300">Send me a message</h3>
      </div>
      
      <Input
        type="text"
        placeholder="Your Name"
        required
        className="bg-white/80 dark:bg-slate-800/80 border-blue-200 dark:border-slate-700"
      />
      
      <Input
        type="email"
        placeholder="Your Email"
        required
        className="bg-white/80 dark:bg-slate-800/80 border-blue-200 dark:border-slate-700"
      />
      
      <Input
        type="text"
        placeholder="Subject"
        required
        className="bg-white/80 dark:bg-slate-800/80 border-blue-200 dark:border-slate-700"
      />
      
      <Textarea
        placeholder="Your Message"
        required
        className="min-h-[150px] bg-white/80 dark:bg-slate-800/80 border-blue-200 dark:border-slate-700"
      />
      
      <Button 
        type="submit" 
        disabled={submitting} 
        className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors"
      >
        {submitting ? "Sending..." : "Send Message"}
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
};

export default ContactForm;
