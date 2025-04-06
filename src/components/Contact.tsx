
import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Download, MapPin, Clock, File, X } from 'lucide-react';
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

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword", 
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
  "image/gif"
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  attachments: z.array(
    z.instanceof(File)
      .refine(file => file.size <= MAX_FILE_SIZE, `Max file size is 5MB`)
      .refine(
        file => ACCEPTED_FILE_TYPES.includes(file.type),
        "Only PDF, DOC, DOCX, JPG, PNG, and GIF files are accepted"
      )
  ).optional()
});

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      attachments: []
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      
      const validFiles = fileArray.filter(file => {
        const isValidSize = file.size <= MAX_FILE_SIZE;
        const isValidType = ACCEPTED_FILE_TYPES.includes(file.type);
        
        if (!isValidSize) {
          toast({
            title: "File too large",
            description: `${file.name} exceeds the 5MB limit`,
            variant: "destructive",
          });
        }
        
        if (!isValidType) {
          toast({
            title: "Invalid file type",
            description: `${file.name} is not an accepted file type`,
            variant: "destructive",
          });
        }
        
        return isValidSize && isValidType;
      });
      
      setSelectedFiles(prev => [...prev, ...validFiles]);
      form.setValue('attachments', [...selectedFiles, ...validFiles]);
    }
  };

  const removeFile = (index: number) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
    form.setValue('attachments', updatedFiles);
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('subject', data.subject);
      formData.append('message', data.message);
      
      selectedFiles.forEach(file => {
        formData.append('attachments', file);
      });
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      form.reset();
      setSelectedFiles([]);
      
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error sending message",
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
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <FormLabel>Attachments</FormLabel>
                        <p className="text-xs text-muted-foreground">Max size: 5MB per file</p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <label 
                          htmlFor="file-upload" 
                          className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                        >
                          <File className="h-4 w-4" />
                          <span>Select Files</span>
                          <input
                            id="file-upload"
                            type="file"
                            multiple
                            onChange={handleFileChange}
                            className="hidden"
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                          />
                        </label>
                        
                        <p className="text-sm text-muted-foreground">
                          PDF, DOC, DOCX, JPG, PNG, GIF
                        </p>
                      </div>
                      
                      {selectedFiles.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Files to upload ({selectedFiles.length})</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedFiles.map((file, index) => (
                              <div 
                                key={`${file.name}-${index}`}
                                className="flex items-center gap-2 bg-secondary/50 rounded-md px-3 py-1.5 text-sm"
                              >
                                <span className="truncate max-w-[180px]">{file.name}</span>
                                <button
                                  type="button"
                                  onClick={() => removeFile(index)}
                                  className="text-muted-foreground hover:text-destructive"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full button-glow transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <MessageSquare className="mr-2 h-4 w-4 animate-pulse" />
                          Sending...
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
