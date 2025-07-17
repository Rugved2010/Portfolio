import ScrollReveal from "./ScrollReveal";
import { Mail, Linkedin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">About Me</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a dedicated Software Engineer and IT Specialist with a Master's in Computer Science from California State University Sacramento. With expertise spanning from cloud infrastructure to full-stack development, I thrive on solving complex technical challenges.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My experience ranges from automating enterprise infrastructure for 2000+ users to developing ML-powered applications that achieve 97% accuracy. I'm passionate about creating efficient, scalable solutions that make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:rugvedrecharla@gmail.com"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <Mail size={20} className="mr-2" />
                rugvedrecharla@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/rugvedrecharla"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <Linkedin size={20} className="mr-2" />
                LinkedIn Profile
              </a>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-xl font-medium text-gray-900">M.S. in Computer Science</h4>
                  <p className="text-gray-600">California State University Sacramento</p>
                  <p className="text-sm text-gray-500">August 2022 - December 2024</p>
                </div>
                <div className="border-l-4 border-gray-300 pl-6">
                  <h4 className="text-xl font-medium text-gray-900">B.Tech in Computer Science and Engineering</h4>
                  <p className="text-gray-600">Jawaharlal Nehru Technological University</p>
                  <p className="text-sm text-gray-500">August 2017 - June 2021</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
