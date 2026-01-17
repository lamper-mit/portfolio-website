'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 animate-gradient opacity-20"></div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-full animate-pulse opacity-75"></div>
              <div className="absolute inset-1 bg-black rounded-full overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Mitchell Lamper"
                  width={384}
                  height={384}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Mitchell Lamper
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-xl md:text-2xl font-semibold">
              <span className="text-purple-400">Machine Learning Engineer</span>
              <span className="text-gray-400">•</span>
              <span className="text-pink-400">Senior Prompt Engineer</span>
              <span className="text-gray-400">•</span>
              <span className="text-blue-400">AI Consultant</span>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Specializing in generative AI, multi-modal diffusion models, and prompt optimization.
            From fine-tuning diffusion models to optimizing LLMs, to creating AI workflows, to testing and reinforcing models.  I have experience in almost all facets of generative AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-pink-500/50"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold text-lg hover:bg-purple-400/10 transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
    </section>
  );
}
