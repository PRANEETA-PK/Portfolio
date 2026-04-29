export function Skills() {
  const skillCategories = [
    {
      category: 'Programming',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'SQL', level: 80 },
        { name: 'C (Intermediate)', level: 70 },
      ],
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 88 },
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 88 },
      ],
    },
    {
      category: 'UI/UX Design',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Framer', level: 82 },
        { name: 'Canva', level: 85 },
      ],
    },
    {
      category: 'CS Fundamentals',
      skills: [
        { name: 'Computer Networks', level: 85 },
        { name: 'Operating Systems', level: 83 },
        { name: 'DBMS', level: 87 },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'GitHub', level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive set of technical skills acquired through education and hands-on experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-900 border-2 border-pink-500/30 p-8 rounded-2xl shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:border-pink-500 transition-all duration-200"
            >
              <h3 className="text-2xl font-bold text-pink-500 mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-pink-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-pink-600 to-pink-400 h-2.5 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-pink-500/50"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
