import React from 'react';
import { ArrowDown, Download, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-blue-700 p-1 shadow-2xl shadow-blue-500/25">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center border-2 border-blue-500/20">
                <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">RC</span>
              </div>
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="text-blue-400 animate-pulse" size={24} />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Raanan
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Chowdhury
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-300 mb-8 leading-relaxed font-light">
            Student & AI Enthusiast
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about Artificial Intelligence and exploring the future of technology. 
            Building innovative projects and learning cutting-edge concepts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Download size={20} />
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-blue-400" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;