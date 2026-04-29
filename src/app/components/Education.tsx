import { GraduationCap, Award } from 'lucide-react';

export function Education() {
  const education = [
    {
      title: 'Bachelor of Engineering in Computer Science',
      institution: 'Bannari Amman Institute of Technology, Tamil Nadu',
      period: '2021 - 2025',
      description: 'CGPA: 8.64 (up to 5th semester)',
      details: 'Currently pursuing B.E in Computer Science and Engineering with a strong focus on software development, algorithms, and modern web technologies.',
    },
    {
      title: '12th Grade - Higher Secondary',
      institution: 'Sree Saravana Niketan Matric Higher Secondary School, Erode',
      period: '2020 - 2021',
      description: 'Percentage: 95.92%',
      details: 'Completed higher secondary education with distinction, focusing on Computer Science and Mathematics.',
    },
    {
      title: '10th Grade - Secondary',
      institution: 'Sree Saravana Niketan Matric Higher Secondary School, Erode',
      period: '2018 - 2019',
      description: 'Percentage: 96.8%',
      details: 'Completed secondary education with outstanding academic performance.',
    },
  ];

  const certifications = [
    {
      title: 'Problem Solving through Programming in Java',
      issuer: 'NPTEL',
      date: 'October 2025',
    },
    {
      title: 'Object-Oriented Programming',
      issuer: 'Various Platforms',
      date: 'Ongoing',
    },
    {
      title: 'Problem Solving and Logical Thinking',
      issuer: 'Various Platforms',
      date: 'Ongoing',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center shadow-lg shadow-pink-500/50">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-pink-500/30 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-pink-600 rounded-full shadow-lg shadow-pink-500/50"></div>
                  <div className="bg-black border-2 border-pink-500/30 p-6 rounded-xl hover:shadow-lg hover:shadow-pink-500/30 hover:border-pink-500 transition-all duration-200">
                    <span className="inline-block px-3 py-1 bg-pink-600 text-white text-sm rounded-full mb-3 shadow-lg shadow-pink-500/50">
                      {edu.period}
                    </span>
                    <h4 className="text-xl font-bold text-white mb-1">{edu.title}</h4>
                    <p className="text-pink-500 font-medium mb-2">{edu.institution}</p>
                    <p className="text-pink-400 font-semibold mb-2">{edu.description}</p>
                    <p className="text-gray-400">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center shadow-lg shadow-pink-500/50">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-pink-500/30 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-pink-600 rounded-full shadow-lg shadow-pink-500/50"></div>
                  <div className="bg-black border-2 border-pink-500/30 p-6 rounded-xl hover:shadow-lg hover:shadow-pink-500/30 hover:border-pink-500 transition-all duration-200">
                    <span className="inline-block px-3 py-1 bg-pink-600 text-white text-sm rounded-full mb-3 shadow-lg shadow-pink-500/50">
                      {cert.date}
                    </span>
                    <h4 className="text-xl font-bold text-white mb-1">{cert.title}</h4>
                    <p className="text-pink-500 font-medium">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Area of Interest */}
            <div className="mt-12 bg-black border-2 border-pink-500/30 p-8 rounded-xl hover:shadow-lg hover:shadow-pink-500/30 hover:border-pink-500 transition-all duration-200">
              <h4 className="text-2xl font-bold text-pink-500 mb-4">Area of Interest</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-pink-600 text-white rounded-lg shadow-lg shadow-pink-500/50">
                  Software Development
                </span>
                <span className="px-4 py-2 bg-pink-600 text-white rounded-lg shadow-lg shadow-pink-500/50">
                  Web Development
                </span>
                <span className="px-4 py-2 bg-pink-600 text-white rounded-lg shadow-lg shadow-pink-500/50">
                  UI/UX Design
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
