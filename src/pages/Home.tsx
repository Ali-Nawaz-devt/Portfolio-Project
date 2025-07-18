
import { ArrowRight, Code, Laptop, Users, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Content */}
            <div className="mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-8 animate-fade-in font-inter">
                <Code size={16} className="mr-2" />
                Software Developer
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in font-poppins">
                Ali <span className="text-blue-600">Nawaz</span>
              </h1>
              
              <div className="text-2xl md:text-4xl font-light text-gray-600 mb-8 animate-fade-in font-inter">
                Turning <span className="text-gray-900 font-medium">Logic</span> Into{' '}
                <span className="text-blue-600 font-medium">Code</span>
              </div>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in font-inter">
               Specializing in Python development, along with experience in Java, React, and WordPress.
Creating efficient solutions for desktop and web applications with a focus on quality and innovation.              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in">
              <Link
                to="/projects"
                className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3 justify-center text-lg font-inter"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg font-inter"
              >
                Let's Connect
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <ChevronDown size={24} className="text-gray-400 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-poppins">
                What I Bring to Your Project
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter">
                Combining technical expertise with creative problem-solving to deliver exceptional results
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-blue-200">
                <div className="w-20 h-20 bg-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/20 transition-colors">
                  <Code className="text-blue-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 font-poppins">Full-Stack Development</h3>
                <p className="text-gray-600 text-lg leading-relaxed font-inter">
                  From JavaFX desktop applications to modern React web apps, I build complete solutions that scale.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-blue-200">
                <div className="w-20 h-20 bg-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/20 transition-colors">
                  <Laptop className="text-blue-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 font-poppins">Modern Technologies</h3>
                <p className="text-gray-600 text-lg leading-relaxed font-inter">
                  Expertise in Java, React, Python automation, and exploring cutting-edge Salesforce development.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-blue-200">
                <div className="w-20 h-20 bg-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/20 transition-colors">
                  <Users className="text-blue-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 font-poppins">Client-Focused</h3>
                <p className="text-gray-600 text-lg leading-relaxed font-inter">
                  Available for freelance projects and internship opportunities with unwavering commitment to quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-poppins">Ready to Work Together?</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-inter">
              Whether you need a custom application, web development, or automation solutions, 
              I'm here to help transform your ideas into reality.
            </p>
            <Link
              to="/contact"
              className="group bg-blue-600 text-white px-10 py-5 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-3 text-lg font-inter"
            >
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
