import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Send, Mail, Github, Linkedin } from 'lucide-react';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const SocialLink = ({ icon: Icon, href, text, className = "" }: { icon: React.ElementType, href: string, text: string, className?: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className={cn("px-4 py-2 flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-300 group", className)}
  >
    <Icon size={20} className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
    <span className="text-slate-700 dark:text-slate-300">{text}</span>
  </a>
);

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log(values);
      toast({
        title: "Message sent!",
        description: "Your message has been successfully submitted.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "There was an error submitting your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white/90 dark:bg-card/80 backdrop-blur-sm border-2 border-blue-200 dark:border-slate-700 shadow-lg transition-all duration-300 hover:shadow-xl dark:hover:border-primary/40 hover:border-blue-300">
      <CardHeader>
        <CardTitle className="text-2xl text-indigo-800 dark:text-indigo-300">Contact Me</CardTitle>
        <CardDescription className="text-slate-600 dark:text-muted-foreground">
          Feel free to reach out for collaborations, questions, or just a friendly hello!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormDescription>
                    What should we call you?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    How can we reach you back?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us more..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    What's on your mind?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Submitting..." : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col items-center space-y-2 sm:flex-row sm:justify-between">
        <div className="text-sm text-slate-500 dark:text-slate-400">
          Or connect with me on social media:
        </div>
        <div className="flex gap-2">
          <SocialLink icon={Mail} href="mailto:your-email@example.com" text="Email" />
          <SocialLink icon={Github} href="https://github.com/your-github" text="GitHub" />
          <SocialLink icon={Linkedin} href="https://linkedin.com/in/your-linkedin" text="LinkedIn" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default Contact;
