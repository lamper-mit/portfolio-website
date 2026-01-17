'use client';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-24 relative flex items-center">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-300 mb-12 text-center">
            Interested in collaborating on AI/ML projects or discussing prompt engineering? Let's connect!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="https://www.linkedin.com/in/mitchell-lamper"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-purple-500/20"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
                  <p className="text-gray-400 text-sm">Connect professionally</p>
                </div>
              </div>
            </a>

            <a
              href="mailto:lamper.mit@gmail.com"
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-pink-500 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-pink-500/20"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-pink-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-gray-400 text-sm break-all">lamper.mit@gmail.com</p>
                </div>
              </div>
            </a>

            <a
              href="tel:+17163972757"
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-blue-500/20"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <p className="text-gray-400 text-sm">(716) 397-2757</p>
                </div>
              </div>
            </a>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">Based in New York, NY</p>
          </div>
        </div>
      </div>
    </section>
  );
}
