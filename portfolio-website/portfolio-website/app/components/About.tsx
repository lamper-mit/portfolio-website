'use client';

export default function About() {
  const skills = [
    { category: 'Generative AI', items: ['Stable Diffusion', 'Flux', 'Multi-Modal Diffusion', 'LoRA Fine-tuning', 'IP Adapter'] },
    { category: 'ML Frameworks', items: ['PyTorch', 'TensorFlow', 'CUDA', 'NumPy', 'Pandas'] },
    { category: 'LLMs & Prompting', items: ['Multi-Modal LLMs', 'Prompt Engineering', 'RLHF', 'Chain-of-Thought'] },
    { category: 'Cloud & DevOps', items: ['Docker', 'Kubernetes', 'GCP', 'Modal', 'Vercel'] },
    { category: 'Languages & Data', items: ['Python', 'SQL', 'R Studio', 'PostgreSQL'] },
    { category: 'Computer Vision', items: ['Image Classification', 'CNNs', 'Image Captioning', 'Synthetic Data Generation'] }
  ];

  return (
    <section id="about" className="min-h-screen py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="mb-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700 shadow-xl">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              I'm a Machine Learning Engineer and AI Consultant based in New York, specializing in
              generative AI, multi-modal diffusion models, and prompt engineering. With a Master's
              in Data Science with a concentration in Machine Learning from Eastern University (4.0 GPA) and a background in Chemical Engineering,
              I bring both technical depth and creative problem-solving to AI challenges.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              My most recent consulting contract was with Kroll Bond Rating Agency (KBRA), where I developed an internal prompt optimizer, built a prompt comparison tool, and evaluated the company's library of over 500 custom GPTs. Currently, I have an ongoing contract with Scale AI/Outlier as a Senior Prompt Engineer, where I craft evaluation benchmarks and train multi-modal models through RLHF frameworks, assessing them on instruction following, accuracy, and quality.

            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              My expertise spans fine-tuning diffusion models (achieving 96% similarity scores on
              custom avatars), developing synthetic training data pipelines, and optimizing model
              parameters for peak performance. My experience across multiple AI startups has required versatility and self-reliance,independently identifying and resolving technical challenges across the full machine learning lifecycle, from dataset creation to model fine-tuning and inference optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-400">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium text-gray-300 border border-gray-600 hover:border-pink-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
