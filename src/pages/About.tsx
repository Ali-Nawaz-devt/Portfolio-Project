
import { Award, Code2, Coffee, GraduationCap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Java', level: 90, color: 'bg-blue-500' },
    { name: 'JavaFX', level: 85, color: 'bg-blue-400' },
    { name: 'JavaScript', level: 80, color: 'bg-yellow-500' },
    { name: 'React', level: 75, color: 'bg-cyan-500' },
    { name: 'Python', level: 70, color: 'bg-green-500' },
    { name: 'Salesforce', level: 60, color: 'bg-indigo-500' },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground animate-fade-in">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Passionate about creating efficient, scalable solutions through clean code and innovative thinking.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-4 text-foreground">My Story</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Hello, I'm Ali Nawaz, a dedicated and detail-oriented software developer with a strong foundation in both frontend and backend technologies. I specialize in Java, JavaFX, JavaScript, React, and Python web scraping, and I'm also gaining experience in Salesforce development.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I've worked on various academic and personal projects that have strengthened my problem-solving abilities and deepened my understanding of real-world application development. I began with Java and built interactive desktop apps using JavaFX, such as a Searching Algorithms Visualizer and a Quiz App. Later, I expanded into web technologies with JavaScript and React, developing a course website and a university website.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I value professional growth and continuous learning. I'm currently exploring Salesforce and enhancing my backend capabilities through Python automation and scraping projects.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My portfolio reflects my ability to think critically, learn quickly, and deliver high-quality solutions. I'm open to both freelance work and internship roles.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl text-center">
                  <Code2 className="text-primary mx-auto mb-3" size={32} />
                  <h3 className="font-semibold text-foreground">Clean Code</h3>
                  <p className="text-sm text-muted-foreground mt-1">Maintainable & Scalable</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl text-center">
                  <Coffee className="text-green-600 mx-auto mb-3" size={32} />
                  <h3 className="font-semibold text-foreground">Continuous Learning</h3>
                  <p className="text-sm text-muted-foreground mt-1">Always Growing</p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Technical Skills</h2>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl text-center">
                  <Award className="text-purple-600 mx-auto mb-3" size={32} />
                  <h3 className="text-2xl font-bold text-foreground">10+</h3>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl text-center">
                  <GraduationCap className="text-orange-600 mx-auto mb-3" size={32} />
                  <h3 className="text-2xl font-bold text-foreground">6+</h3>
                  <p className="text-sm text-muted-foreground">Technologies Mastered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
