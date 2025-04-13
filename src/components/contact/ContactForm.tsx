
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { LucideIcon, Mail, MessageSquare, User } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

// Define a custom input field component that correctly handles the icon prop
interface InputFieldProps {
  icon: LucideIcon;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  control: any;
}

const InputField = ({ icon: Icon, name, label, placeholder, type = "text", control }: InputFieldProps) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <div className="relative">
            <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input type={type} placeholder={placeholder} {...field} className="pl-10" />
          </div>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would normally integrate with an API or email service
    // For demo purposes, we'll just show a success toast
    toast({
      title: "Message sent!",
      description: "Thank you for contacting me. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <InputField 
          icon={User} 
          name="name" 
          label="Your Name" 
          placeholder="Enter your name" 
          control={form.control} 
        />
        
        <InputField 
          icon={Mail} 
          name="email" 
          label="Your Email" 
          placeholder="Enter your email" 
          type="email" 
          control={form.control} 
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
                  <Textarea placeholder="Enter your message" className="pl-10 min-h-[120px]" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </Form>
  );
};

export default ContactForm;
