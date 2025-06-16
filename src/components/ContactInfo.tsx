
import { Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h2>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Mail className="text-primary" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Email</h3>
            <p className="text-muted-foreground">thekhuchaks786@gmail.com</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <MapPin className="text-green-600" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Location</h3>
            <p className="text-muted-foreground">Available for remote work worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
