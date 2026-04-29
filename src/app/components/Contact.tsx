import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'praneeta.cs23@bitsathy.ac.in',
      link: 'mailto:praneeta.cs23@bitsathy.ac.in',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '9080851295',
      link: 'tel:+919080851295',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Salem, Tamil Nadu',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.link}
                className="bg-black border-2 border-pink-500/30 p-8 rounded-2xl hover:shadow-lg hover:shadow-pink-500/50 hover:border-pink-500 transition-all duration-200 text-center group"
              >
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-pink-500/50">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                <p className="text-gray-400">{info.value}</p>
              </a>
            );
          })}
        </div>

        <div className="bg-black border-2 border-pink-500/30 p-8 md:p-12 rounded-3xl shadow-lg shadow-pink-500/20">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-pink-500/30 text-white focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 outline-none transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-pink-500/30 text-white focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 outline-none transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-pink-500/30 text-white focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 outline-none transition-all duration-200"
                placeholder="How can I help you?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-pink-500/30 text-white focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 outline-none transition-all duration-200 resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all duration-200 font-medium flex items-center justify-center gap-2 group shadow-lg shadow-pink-500/50"
            >
              <span>Send Message</span>
              <Send size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
