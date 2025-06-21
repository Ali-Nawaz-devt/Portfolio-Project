import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Searching Algorithms Visualizer',
      description: 'Interactive JavaFX application that visualizes various searching algorithms including binary search, linear search, and more. Features real-time visualization and performance comparison.',
      technologies: ['Java', 'JavaFX', 'Algorithms'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      category: 'Desktop Application',
      status: 'Completed',
      githubUrl: 'https://github.com/Ali-Nawaz-devt/JavaFx-Search-Algorithm-Project.git',
      liveUrl: null,
    },
    {
      id: 2,
      title: 'Interactive Quiz Application',
      description: 'Desktop quiz application built with JavaFX featuring multiple question types, scoring system, and user progress tracking. Includes admin panel for quiz management.',
      technologies: ['Java', 'JavaFX', 'SQLite'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      category: 'Desktop Application',
      status: 'Completed',
      githubUrl: '#',
      liveUrl: null,
    },
    {
      id: 3,
      title: 'Modern Course Website',
      description: 'Responsive course platform built with React featuring course listings, enrollment system, and user authentication. Clean UI with modern design principles.',
      technologies: ['React', 'JavaScript', 'CSS3', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      category: 'Web Application',
      status: 'Completed',
      githubUrl: 'https://github.com/Ali-Nawaz-devt/Course-learning-Website-cousera-clone-.git',
      liveUrl: 'https://course-learning-website-cousera-clo-red.vercel.app/',
    },
    {
      id: 4,
      title: 'University Website',
      description: 'Comprehensive university website with React featuring department information, faculty profiles, admission details, and news updates. Fully responsive design.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      category: 'Web Application',
      status: 'Completed',
      githubUrl: 'https://github.com/Ali-Nawaz-devt/The-Shaikh-Ayaz-University-Website.git',
      liveUrl: 'https://shikah-ayaz-university-shikarpur.vercel.app',
    },
   

    {
      id: 5,
      title: 'TimesJobs Web Scraper',
      description: 'Python script to scrape job listings from TimesJobs website. Extracts job title, company, location, experience, salary, skills, and job links. Delivers data in Excel, CSV, or JSON format. Efficient, customizable, and suitable for job tracking, data analysis, or lead generation.',
      technologies: ['Python', 'Beautiful Soup', 'Selenium', 'Pandas', 'Web Scraping'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      category: 'Automation',
      status: 'Completed',
      githubUrl: 'https://github.com/Ali-Nawaz-devt/WebScraper-TimesJobs.git',
      liveUrl: null,
    },
    {
      id: 6,
      title: 'Salesforce Custom Solution',
      description: 'Custom Salesforce development project focusing on workflow automation and custom object management. Learning and implementing Salesforce best practices.',
      technologies: ['Salesforce', 'Apex', 'Lightning Web Components'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      category: 'CRM Development',
      status: 'Learning',
      githubUrl: '#',
      liveUrl: null,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Learning':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground animate-fade-in">
              My Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              A showcase of my technical skills through various applications, from desktop software to modern web solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Interested in Working Together?</h2>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects and opportunities.
            </p>
            <a
              href="/contact"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 inline-block"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
