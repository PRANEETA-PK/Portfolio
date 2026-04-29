import { Code, Palette, Zap, Users } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Building robust applications with React, Node.js, and Spring Boot.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces using Figma, Framer, and Canva.',
    },
    {
      icon: Zap,
      title: 'Problem Solving',
      description: 'Strong logical thinking and problem-solving skills with Java and SQL.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Working effectively in teams with initiative and enthusiasm.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              I'm a Creative Developer & Designer
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              An enthusiastic and reliable Computer Science Engineering student with a passion for creating
              seamless digital experiences. I combine technical expertise with creative design thinking to
              build innovative solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and creating designs that not only look
              great but also solve real problems. Every project is an opportunity to learn something
              new and push the boundaries of what's possible.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="text-pink-500 font-semibold mb-1">Email:</p>
                <p className="text-gray-300 text-sm">praneeta.cs23@bitsathy.ac.in</p>
              </div>
              <div>
                <p className="text-pink-500 font-semibold mb-1">Phone:</p>
                <p className="text-gray-300">9080851295</p>
              </div>
              <div>
                <p className="text-pink-500 font-semibold mb-1">Location:</p>
                <p className="text-gray-300">Salem, Tamil Nadu</p>
              </div>
              <div>
                <p className="text-pink-500 font-semibold mb-1">CGPA:</p>
                <p className="text-gray-300">8.64</p>
              </div>
            </div>
          </div>

         
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-black border-2 border-pink-500/30 p-8 rounded-xl hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-200"
              >
                <div className="w-14 h-14 bg-pink-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-pink-500/50">
                  <Icon className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
