import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t-2 border-pink-500/30 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-pink-500">Praneeta P K</h3>
            <p className="text-gray-400 mb-4">
              Software Developer & UI/UX Designer passionate about creating innovative digital solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-500">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-pink-500 transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="block text-gray-400 hover:text-pink-500 transition-colors duration-200">
                About
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-pink-500 transition-colors duration-200">
                Skills
              </a>
              <a href="#education" className="block text-gray-400 hover:text-pink-500 transition-colors duration-200">
                Education
              </a>
              <a href="#portfolio" className="block text-gray-400 hover:text-pink-500 transition-colors duration-200">
                Portfolio
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-pink-500 transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-500">Connect With Me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/PRANEETA-PK"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200 shadow-lg shadow-pink-500/30"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/praneeta-p-k-a2b58228b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200 shadow-lg shadow-pink-500/30"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:praneeta.cs23@bitsathy.ac.in"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200 shadow-lg shadow-pink-500/30"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-500/30 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-pink-500" /> by Praneeta P K © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
