import React from 'react';
import { ExternalLink, Github, Clock, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Coming Soon',
      status: 'Coming Soon',
      tags: ['AI', 'Machine Learning'],
      featured: true,
      comingSoon: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Exciting projects are in development. Stay tuned for innovative AI solutions 
              and creative coding experiments.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-1 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden h-64 bg-gradient-to-br from-blue-900/20 to-black/40">
                  {/* Project Preview Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center border border-blue-400/30">
                        <Sparkles className="text-blue-400" size={32} />
                      </div>
                      <p className="text-blue-300 font-semibold">Project Preview</p>
                    </div>
                  </div>
                  
                  {/* Coming Soon Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                      <Clock size={16} />
                      Coming Soon
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <button
                      disabled
                      className="flex items-center gap-2 bg-gray-700 text-gray-400 px-6 py-3 rounded-lg font-semibold cursor-not-allowed opacity-50"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </button>
                    <button
                      disabled
                      className="flex items-center gap-2 border-2 border-gray-600 text-gray-400 px-6 py-3 rounded-lg font-semibold cursor-not-allowed opacity-50"
                    >
                      <Github size={18} />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-sm">
              <Sparkles className="text-blue-400 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-white mb-4">More Projects Coming Soon!</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm currently working on several exciting AI and programming projects. 
                Check back soon to see my latest innovations and creative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;