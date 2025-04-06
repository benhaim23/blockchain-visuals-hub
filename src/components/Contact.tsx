
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Twitter, 
  Linkedin, 
  MessageSquare,
  GitHub, 
  Instagram, 
  ExternalLink
} from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-slate-800 dark:text-white">Let's Connect</h2>
        <p className="text-xl text-center mb-8 text-slate-600 dark:text-slate-400">Get in touch for opportunities or just to say hi</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">Send a Message</h3>
            <p className="mb-6 text-slate-600 dark:text-slate-400">
              I'm always open to discussing crypto analytics, design work, or potential projects.
            </p>
            
            <div className="space-y-4">
              <ContactMethod 
                icon={Mail} 
                label="Email" 
                value="mark@benhaim.io" 
                link="mailto:mark@benhaim.io" 
                type="email"
              />
              <ContactMethod 
                icon={Twitter} 
                label="Twitter" 
                value="@Mark_Benhaim" 
                link="https://twitter.com/Mark_Benhaim" 
                type="social"
              />
              <ContactMethod 
                icon={MessageSquare} 
                label="Telegram" 
                value="@markbenhaim" 
                link="https://t.me/markbenhaim" 
                type="social"
              />
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">Find Me Online</h3>
            <p className="mb-6 text-slate-600 dark:text-slate-400">
              Check out my work and profiles across the web.
            </p>
            
            <div className="space-y-4">
              <ContactMethod 
                icon={Linkedin} 
                label="LinkedIn" 
                value="Mark Benhaim" 
                link="https://www.linkedin.com/in/markbenhaim/" 
                type="social"
              />
              <ContactMethod 
                icon={GitHub} 
                label="GitHub" 
                value="markbenhaim" 
                link="https://github.com/markbenhaim" 
                type="social"
              />
              <ContactMethod 
                icon={Instagram} 
                label="Instagram" 
                value="@markbenhaim" 
                link="https://www.instagram.com/markbenhaim/" 
                type="social"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactMethodProps {
  icon: React.FC<{ size?: number, className?: string }>;
  label: string;
  value: string;
  link: string;
  type: "email" | "phone" | "social";
}

const ContactMethod: React.FC<ContactMethodProps> = ({ icon: Icon, label, value, link, type }) => {
  return (
    <div className="flex items-center justify-between group">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3">
          <Icon size={20} className="text-indigo-600 dark:text-indigo-400" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
          <p className="text-slate-800 dark:text-white">{value}</p>
        </div>
      </div>
      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity" 
        onClick={() => window.open(link, '_blank')}
      >
        <ExternalLink size={16} className="text-indigo-600 dark:text-indigo-400" />
      </Button>
    </div>
  );
};

export default Contact;
