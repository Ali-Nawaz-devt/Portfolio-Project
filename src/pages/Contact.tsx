
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import SocialLinks from '@/components/SocialLinks';
import Availability from '@/components/Availability';

const Contact = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground animate-fade-in">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Ready to discuss your project or explore internship opportunities? 
              I'd love to hear from you and explore how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info & Social Links */}
            <div className="space-y-8">
              <ContactInfo />
              <SocialLinks />
              <Availability />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
