
import React from 'react';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';

const Contact: React.FC = () => {
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
            <ContactForm />
          </div>
          
          <div className="animate-fade-in-up">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
