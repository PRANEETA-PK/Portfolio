import { Github, Linkedin, Mail, Download } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-pink-500 font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Praneeta P K
              </h1>
              <p className="text-2xl md:text-3xl text-pink-300">
                Software Developer & UI/UX Designer
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              An enthusiastic and reliable individual who thrives in dynamic environments,
              works well both independently and within teams, and has a strong passion for technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all duration-200 font-medium shadow-lg shadow-pink-500/50"
              >
                Get In Touch
              </a>
              <a
                href="/src/imports/PRANEETA_P_K_~.pdf"
                download
                className="px-8 py-3 border-2 border-pink-600 text-pink-500 rounded-lg hover:bg-pink-600 hover:text-white transition-all duration-200 font-medium flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/PRANEETA-PK"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 text-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-200 shadow-lg shadow-pink-500/30"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/praneeta-p-k-a2b58228b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 text-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-200 shadow-lg shadow-pink-500/30"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:praneeta.cs23@bitsathy.ac.in"
                className="w-12 h-12 bg-gray-800 text-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-200 shadow-lg shadow-pink-500/30"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-pink-500/30 border-4 border-pink-500">
              <img
                src="/src/imports/image.png"
                alt="Praneeta P K"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-600 rounded-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-400 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
