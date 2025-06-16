
import { Download, Mail, MapPin, Phone } from 'lucide-react';

const Resume = () => {
  const experience = [
    {
      title: 'Personal Projects & Learning',
      company: 'Self-Directed',
      period: '2023 - Present',
      description: [
        'Developed multiple JavaFX desktop applications including algorithm visualizers and quiz systems',
        'Built responsive web applications using React and modern JavaScript',
        'Created Python automation scripts for web scraping and data processing',
        'Currently learning Salesforce development and custom solutions'
      ]
    }
  ];

  const education = [
    {
      degree: 'Computer Science Studies',
      institution: 'University',
      period: 'In Progress',
      description: 'Focusing on software development, algorithms, and data structures'
    }
  ];

  const skills = {
    'Programming Languages': ['Java', 'JavaScript', 'Python', 'SQL'],
    'Frameworks & Libraries': ['JavaFX', 'React', 'Node.js', 'Express'],
    'Tools & Technologies': ['Git', 'VS Code', 'IntelliJ IDEA', 'Salesforce'],
    'Other Skills': ['Web Scraping', 'Algorithm Design', 'UI/UX Design', 'Problem Solving']
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground animate-fade-in">
              Resume
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
              Software Developer with expertise in Java, React, and Python
            </p>
            
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto animate-fade-in">
              <Download size={20} />
              Download PDF Resume
            </button>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Mail className="text-primary" size={20} />
                <span className="text-muted-foreground">Available upon request</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary" size={20} />
                <span className="text-muted-foreground">Available upon request</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary" size={20} />
                <span className="text-muted-foreground">Available for remote work</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Professional Summary</h2>
            <p className="text-muted-foreground leading-relaxed">
              Dedicated and detail-oriented software developer with a strong foundation in both frontend and backend technologies. 
              Experienced in Java, JavaFX, JavaScript, React, and Python web scraping. Currently expanding expertise in Salesforce development. 
              Proven ability to deliver high-quality solutions through academic and personal projects. 
              Strong problem-solving skills and commitment to continuous learning. Open to freelance work and internship opportunities.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h3 className="font-semibold text-foreground mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Experience</h2>
            {experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-primary/20 pl-6 pb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-primary/20 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">{edu.period}</span>
                </div>
                <p className="text-muted-foreground">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Key Projects</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground">Searching Algorithms Visualizer (JavaFX)</h3>
                <p className="text-muted-foreground text-sm">Interactive desktop application for algorithm visualization and performance comparison</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Interactive Quiz Application (Java/JavaFX)</h3>
                <p className="text-muted-foreground text-sm">Desktop quiz system with admin panel and progress tracking</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Modern Course Website (React)</h3>
                <p className="text-muted-foreground text-sm">Responsive web platform with enrollment system and user authentication</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">University Website (React)</h3>
                <p className="text-muted-foreground text-sm">Comprehensive university portal with department information and news updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
