import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    title: "Software Engineer – IT Specialist",
    company: "The Cottonwood School",
    period: "May 2025 – Present",
    location: "El Dorado Hills, CA",
    color: "bg-blue-600",
    logo: (
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
        <span className="text-blue-600 font-bold text-sm">TCS</span>
      </div>
    ),
    achievements: [
      "Built custom license management tool integrating APIs from Zoom, Clever, and Grammarly",
      "Led website migration from third-party vendor to in-house platform",
      "Managed Google Workspace for Education supporting 3000+ staff and students"
    ]
  },
  {
    title: "Software Engineer Intern – Infrastructure and Operations",
    company: "California Department of Fish and Wildlife",
    period: "May 2024 - March 2025",
    location: "Sacramento, CA",
    color: "bg-green-600",
    logo: (
      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
        <span className="text-green-600 font-bold text-xs">CDFW</span>
      </div>
    ),
    achievements: [
      "Automated server and cloud infrastructure tasks using PowerShell in Azure",
      "Managed user onboarding and license allocation supporting 2000+ users",
      "Collaborated with DevOps teams on CI/CD-aligned infrastructure workflows"
    ]
  },
  {
    title: "IT Developer",
    company: "California State University, Sacramento",
    period: "Jun 2023 – Dec 2024",
    location: "Sacramento, CA",
    color: "bg-purple-600",
    logo: (
      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
        <span className="text-purple-600 font-bold text-xs">CSUS</span>
      </div>
    ),
    achievements: [
      "Provided front-line IT support to 15 departments and 500+ users",
      "Utilized ServiceNow, SnipeIT, JAMF, Active Directory for ticketing and management",
      "Re-imaged Windows and MacOS devices to meet campus standards"
    ]
  },
  {
    title: "Transaction Risk Investigator",
    company: "Amazon",
    period: "Aug 2021 – Jul 2022",
    location: "Hyderabad, India",
    color: "bg-orange-600",
    logo: (
      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-orange-600">
          <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 8.004 3.157 12.395 2.865 4.081-.271 7.814-1.344 10.367-3.029.153-.101.28-.094.352.022.071.116-.003.29-.156.391-2.699 1.783-6.54 2.896-10.849 3.18-4.653.307-9.191-.651-12.809-2.785-.153-.101-.22-.275-.148-.391v-.231zm23.209-4.516c-.093.146-.232.161-.414.045-4.074-2.605-10.719-3.389-15.84-1.859-.192.057-.355-.001-.412-.129-.058-.127.01-.283.202-.34 5.402-1.613 12.461-.787 16.87 2.139.182.116.252.288.159.434l-.365.71z"/>
        </svg>
      </div>
    ),
    achievements: [
      "Identified fraudulent patterns using data analysis techniques",
      "Led beta testing and launch of internal production tool",
      "Improved quality metrics by 10% through process optimization",
      "Mentored team of four new hires to meet quality standards"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Viacom18 Media Private Limited",
    period: "August 2019 – December 2020",
    location: "Hyderabad, India",
    color: "bg-pink-600",
    logo: (
      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-pink-600">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>
    ),
    achievements: [
      "Developed responsive web interfaces using HTML, CSS, and JavaScript, integrating APIs for dynamic content",
      "Optimized UI components for cross-browser compatibility and performance, ensuring seamless user experience",
      "Assisted in debugging and enhancing application features, improving overall performance and usability",
      "Conducted technical research and created detailed documentation, including user guides and process workflows"
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Professional Experience</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {/* A journey through diverse roles in software engineering, IT infrastructure, and system administration. */}
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.title} delay={index * 200}>
              <div className="group relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    {/* Left side: Main content */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-4 h-4 rounded-full ${exp.color} mt-2 flex-shrink-0`}></div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                          <p className="text-xl text-blue-600 font-semibold mb-1">{exp.company}</p>
                          <p className="text-gray-500 font-medium">{exp.period} | {exp.location}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700 leading-relaxed">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Right side: Visual elements */}
                    <div className="lg:w-80 flex flex-col items-center gap-6">
                      {/* Company logo */}
                      <div className="transform transition-transform duration-300 group-hover:scale-110">
                        {exp.logo}
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="relative w-full h-32 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
                        <div className="absolute top-4 right-4 w-8 h-8 bg-white/30 rounded-full"></div>
                        <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/40 rounded-full"></div>
                        <div className="absolute top-8 left-1/2 w-4 h-4 bg-white/25 rounded-full transform -translate-x-1/2"></div>
                        
                        {/* Experience-specific decorative icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          {index === 0 && ( // IT Specialist
                            <svg className="w-16 h-16 text-blue-400/40" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20 3H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h3l-1 2v1h12v-1l-1-2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM4 14V5h16v9H4z"/>
                            </svg>
                          )}
                          {index === 1 && ( // IT Intern
                            <svg className="w-16 h-16 text-green-400/40" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          )}
                          {index === 2 && ( // IT Technician
                            <svg className="w-16 h-16 text-purple-400/40" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                            </svg>
                          )}
                          {index === 3 && ( // Software Engineer
                            <svg className="w-16 h-16 text-pink-400/40" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                            </svg>
                          )}
                          {index === 4 && ( // Amazon
                            <svg className="w-16 h-16 text-orange-400/40" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                            </svg>
                          )}
                        </div>
                      </div>
                      
                      {/* Skills/Technologies tags */}
                      <div className="flex flex-wrap gap-2 justify-center">
                        {index === 0 && (
                          <>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">APIs</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Google Workspace</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">License Management</span>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">PowerShell</span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Azure</span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">CI/CD</span>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">ServiceNow</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">JAMF</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Active Directory</span>
                          </>
                        )}
                        {index === 3 && (
                          <>
                            <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">JavaScript</span>
                            <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">HTML/CSS</span>
                            <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">APIs</span>
                          </>
                        )}
                        {index === 4 && (
                          <>
                            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">Data Analysis</span>
                            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">Process Optimization</span>
                            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">Leadership</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
