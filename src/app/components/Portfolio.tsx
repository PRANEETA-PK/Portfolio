import { ExternalLink, Github } from 'lucide-react';

export function Portfolio() {
  const projects = [
    {
      title: 'Student Performance Tracker Dashboard',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      description: 'Dashboard to track and analyze student performance using graphical and bar chart visualizations with role-based login for Admin, Faculty, and Students.',
      tags: ['React', 'Node.js', 'Charts', 'Analytics'],
      github: 'https://github.com/PRANEETA-PK/Training_performance_tracker_dashboard_main',
    },
    {
      title: 'Skill-Based Freelance Matching Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
      description: 'Platform that connects freelancers with suitable projects. Built responsive and reusable UI components focusing on clean design and intuitive navigation.',
      tags: ['React', 'UI/UX', 'Frontend'],
      github: 'https://github.com/PRANEETA-PK/Skill-Based-Freelance-Matching-Platform',
    },
    {
      title: 'Vehicle Rental Management System',
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800',
      description: 'User interface for a vehicle rental platform to display available vehicles. Created responsive pages ensuring smooth user interaction and usability.',
      tags: ['React', 'Spring Boot', 'Java', 'REST API'],
      github: 'https://github.com/PRANEETA-PK/KBT-Rentals',
    },
    {
      title: 'Smart Academic KPI Dashboard',
      category: 'Dashboard',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      description: 'Academic performance tracking system with key performance indicators and analytics for educational institutions.',
      tags: ['TypeScript', 'Analytics', 'Dashboard'],
      github: 'https://github.com/PRANEETA-PK/Smart-Academic-KPI-Dashboard',
    },
    {
      title: 'ShadowFox Java Projects',
      category: 'Programming',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
      description: 'Collection of Java programming projects demonstrating object-oriented programming concepts and problem-solving skills.',
      tags: ['Java', 'OOP', 'Algorithms'],
      github: 'https://github.com/PRANEETA-PK/ShadowFox',
    },
    {
      title: 'Medisense AI',
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
      description: 'AI-powered medical assistance system using Python for healthcare applications.',
      tags: ['Python', 'AI', 'Healthcare'],
      github: 'https://github.com/PRANEETA-PK/medisense-ai',
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border-2 border-pink-500/30 rounded-2xl overflow-hidden shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:border-pink-500 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-200 shadow-lg shadow-pink-500/50"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-200 shadow-lg shadow-pink-500/50"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-pink-600 text-white text-sm rounded-full mb-3 shadow-lg shadow-pink-500/50">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-black border border-pink-500/30 text-pink-300 text-sm rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
