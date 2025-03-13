
import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Download, MapPin, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Add the recipient email directly
    const mailtoData = {
      ...data,
      to: 'markbenhaim0@gmail.com',
    };
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Create a mailto link to open in the user's mail client
      const mailtoUrl = `mailto:markbenhaim0@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`)}`;
      window.open(mailtoUrl, '_blank');
      
      toast({
        title: "Message ready to send!",
        description: "Your default email app has been opened with your message.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error preparing message",
        description: "Please try again or contact directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="badge badge-primary inline-block mb-2">Get in Touch</div>
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">
          Interested in discussing blockchain projects, data analytics solutions, or collaboration opportunities?
          I'd love to hear from you. Fill out the form below, and I'll get back to you promptly.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="glass-card shadow-lg animate-fade-in-up h-full">
              <CardHeader className="bg-primary/5 border-b border-primary/10">
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Send a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below to get in touch with me
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Enter your name"
                                className="bg-background/50 border-border/50 focus-visible:ring-primary/40"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                placeholder="Enter your email"
                                className="bg-background/50 border-border/50 focus-visible:ring-primary/40"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter subject"
                              className="bg-background/50 border-border/50 focus-visible:ring-primary/40"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              placeholder="Enter your message"
                              className="min-h-[150px] bg-background/50 border-border/50 focus-visible:ring-primary/40"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full button-glow transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <MessageSquare className="mr-2 h-4 w-4 animate-pulse" />
                          Preparing...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-fade-in-up">
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
              <CardContent className="p-6 flex flex-col justify-between h-[calc(100%-76px)]">
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
                
                <div className="mt-8 pt-6 border-t border-primary/10">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Download className="h-4 w-4 text-primary" />
                    Resume
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    View my full resume to learn more about my experience, projects, and qualifications.
                  </p>
                  <Button
                    className="w-full hover:bg-primary/90 transition-colors"
                    onClick={() => window.open('/images/misc/Mark_Benhaim_Resume.pdf', '_blank')}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
