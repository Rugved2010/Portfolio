import TypewriterText from "./TypewriterText";
import ScrollReveal from "./ScrollReveal";
import { ChevronDown } from "lucide-react";

const roles = [
  "Software Engineer",
  "IT Specialist",
  "Full Stack Developer",
  "Cloud Infrastructure Expert"
];

export default function HeroSection() {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsClick = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Rugved Recharla
          </h1>
          <div className="text-2xl md:text-4xl text-gray-600 mb-8 h-16 flex items-center justify-center">
            <TypewriterText texts={roles} />
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about building scalable solutions, automating infrastructure, and creating seamless user experiences through innovative technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContactClick}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
            </button>
            <button
              onClick={handleProjectsClick}
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105"
            >
              View My Work
            </button>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={800}>
          <div className="mt-16">
            <div className="flex justify-center">
              <div className="animate-bounce">
                <ChevronDown className="text-blue-600 text-2xl" size={32} />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
