
import { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    const mailtoLink = `mailto:thekhuchaks786@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Email Client Opened!",
      description: "Your default email client should open with the message pre-filled.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Send Me a Message</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            placeholder="Project Discussion / Internship Opportunity"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={6}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Tell me about your project or opportunity..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
        >
          <Send size={20} />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
