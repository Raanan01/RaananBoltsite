import React from 'react';
import { Brain, Lightbulb, Target, Cpu } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="text-blue-400" size={24} />,
      title: 'AI Enthusiast',
      description: 'Passionate about machine learning and artificial intelligence technologies'
    },
    {
      icon: <Cpu className="text-blue-500" size={24} />,
      title: 'Tech Enthusiast',
      description: 'Fascinated by emerging technologies and their potential to transform the world'
    },
    {
      icon: <Lightbulb className="text-blue-300" size={24} />,
      title: 'Innovation',
      description: 'Always exploring new ideas and innovative solutions'
    },
    {
      icon: <Target className="text-blue-600" size={24} />,
      title: 'Goal Oriented',
      description: 'Focused on continuous learning and skill development'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(59,130,246,0.1)_50%,transparent_65%)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Hi! I'm Raanan, I'm a student and I'm enthusiastic about Artificial Intelligence and Technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-4">
                  My Journey
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    As a student, I've discovered my passion for Artificial Intelligence 
                    and the incredible possibilities it offers. I'm constantly learning about 
                    machine learning, neural networks, and how AI can solve real-world problems.
                  </p>
                  <p>
                    My curiosity drives me to explore programming languages, work on creative 
                    projects, and understand how technology shapes our future. I believe that 
                    starting young gives me a unique perspective on innovation.
                  </p>
                  <p>
                    When I'm not studying or coding, I enjoy researching the latest AI 
                    breakthroughs and thinking about how they might change the world.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center bg-gradient-to-b from-blue-500/10 to-transparent p-4 rounded-xl border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-400">Student</div>
                  <div className="text-gray-400">Status</div>
                </div>
                <div className="text-center bg-gradient-to-b from-blue-500/10 to-transparent p-4 rounded-xl border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-400">AI</div>
                  <div className="text-gray-400">Focus</div>
                </div>
                <div className="text-center bg-gradient-to-b from-blue-500/10 to-transparent p-4 rounded-xl border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-400">Future</div>
                  <div className="text-gray-400">Ready</div>
                </div>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm"
                >
                  <div className="mb-4 p-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg w-fit">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;