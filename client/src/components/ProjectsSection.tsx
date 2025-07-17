import ScrollReveal from "./ScrollReveal";
import { Github, ExternalLink, FileText, Clock, Plus } from "lucide-react";

const projects = [
  {
    title: "Personalized Drug Safety & Healthcare Recommendation",
    description: "Developed a comprehensive ML-powered system achieving 97% accuracy on 250k+ medicine dataset. Features NLP-based symptom mapping and geolocation-based doctor recommendations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "Machine Learning", "React", "NLP", "Google Places API"],
    highlight: "97% Accuracy Achieved",
    highlightColor: "text-green-600"
  },
  {
    title: "AI-Powered Appointment Scheduler",
    description: "Intelligent chatbot system using ChatGPT API integrated with Google Calendar and Docs. Automatically analyzes notes and schedules meetings based on availability.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["ChatGPT API", "Google Calendar API", "GCP APIs", "Automation"],
    highlight: "Automated Workflow",
    highlightColor: "text-blue-600"
  },
  {
    title: "Video-Based Mask Detection System",
    description: "Computer vision system for real-time mask detection using deep learning techniques. Published research paper in International Journal of Research in Engineering and Science Management.",
    image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Computer Vision", "Deep Learning", "OpenCV", "Research"],
    highlight: "Published Research",
    highlightColor: "text-purple-600",
    paperUrl: "https://journal.ijresm.com/index.php/ijresm/article/view/841"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Innovative solutions combining machine learning, automation, and user-centric design.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 200}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`font-semibold ${project.highlightColor}`}>
                      {project.highlight}
                    </span>
                    <div className="flex space-x-3">
                      {project.paperUrl && (
                        <a
                          href={project.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                        >
                          <FileText size={20} />
                        </a>
                      )}
                      <button className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                        <Github size={20} />
                      </button>
                      <button className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Coming Soon Project */}
          <ScrollReveal delay={600}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                <div className="text-center">
                  <Plus className="mx-auto text-6xl text-blue-400 mb-4" size={64} />
                  <p className="text-xl font-semibold text-gray-600">More Projects Coming Soon</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Next Innovation</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Currently working on exciting new projects involving cloud automation, AI integration, and scalable web applications. Stay tuned for updates!
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                    In Development
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                    Coming Soon
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-semibold">Stay Tuned</span>
                  <div className="text-blue-600">
                    <Clock size={20} />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
