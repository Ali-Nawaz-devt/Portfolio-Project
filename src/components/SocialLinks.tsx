
import { Github, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Connect With Me</h2>
      <div className="space-y-4">
        <a
          href="https://www.linkedin.com/in/ali-nawaz-51a35a36b"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
            <Linkedin className="text-blue-600" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">LinkedIn</h3>
            <p className="text-muted-foreground text-sm">Professional network & experience</p>
          </div>
        </a>

        <a
          href="https://github.com/Ali-Nawaz-devt"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
        >
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
            <Github className="text-gray-700" size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">GitHub</h3>
            <p className="text-muted-foreground text-sm">Source code & projects</p>
          </div>
        </a>

        <a
          href="#"
          className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
        >
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
            <div className="w-6 h-6 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
              U
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Upwork</h3>
            <p className="text-muted-foreground text-sm">Freelance profile & reviews</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
