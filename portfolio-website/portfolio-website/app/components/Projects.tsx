'use client';

export default function Projects() {
  const projects = [
    {
      title: 'Auto Prompt Optimizer Workflow',
      description: 'Developed an intelligent prompt optimization system at Kroll Bond Rating Agency focused on clarity, conciseness, hallucination risk, and determinism. Engineered a Prompt Comparison Tool that decomposes and cross-references instructions between prompts.',
      tech: ['Multi-Modal LLMs', 'Python', 'Prompt Engineering', 'AI Evaluation'],
      gradient: 'from-purple-600 to-blue-600',
      link: '#',
      company: 'Kroll Bond Rating Agency'
    },
    {
      title: 'Custom Avatar Generation System',
      description: 'Achieved 96% similarity scores on personalized avatars using fine-tuned diffusion LoRAs at Mood Magic. Continually optimized learning rate, alpha, dimensions, and batch sizes. Implemented IP Adapter and Adetalier for enhanced consistency.',
      tech: ['PyTorch', 'Stable Diffusion', 'Flux', 'CUDA', 'LoRA Fine-tuning'],
      gradient: 'from-pink-600 to-orange-600',
      link: '#',
      company: 'Mood Magic'
    },
    {
      title: 'Synthetic Training Data Pipeline',
      description: 'Developed an automatic prompt creation pipeline using LLMs to generate synthetic training data for fine-tuning diffusion models. Created a Similarity Score tool to evaluate generated outputs and ensure quality consistency.',
      tech: ['LLMs', 'Python', 'Pandas', 'Stable Diffusion', 'Kubernetes'],
      gradient: 'from-blue-600 to-purple-600',
      link: '#',
      company: 'Mood Magic'
    },
    {
      title: 'Multi-Modal LLM Training & Evaluation',
      description: 'Crafted unique prompts similar to HumanEval-Python and BigCodeBench to induce loss patterns in multi-modal models. Used RLHF framework to correct and reinforce models, assessing on instruction following, truthfulness, and quality.',
      tech: ['Chain-of-Thought', 'RLHF', 'Python', 'Model Evaluation'],
      gradient: 'from-orange-600 to-pink-600',
      link: '#',
      company: 'Outlier'
    },
    {
      title: 'Automated Image Captioning & Regularization',
      description: 'Implemented automatic image captioning for training data at Wand. Enhanced regularization by leveraging multi-modal LLMs to determine proper regularization classes and scraped images accordingly. Built synthetic prompt generation pipeline.',
      tech: ['Multi-Modal LLMs', 'PyTorch', 'CUDA', 'Modal', 'GCP'],
      gradient: 'from-purple-600 to-pink-600',
      link: '#',
      company: 'Wand'
    },
    {
      title: 'CNN Image Classifier for Architecture',
      description: 'Built a convolutional neural network for multi-class image classification of room and building types using TensorFlow and NumPy. Achieved high accuracy through careful architecture design and data preprocessing.',
      tech: ['TensorFlow', 'Python', 'NumPy', 'CNN', 'Computer Vision'],
      gradient: 'from-blue-600 to-orange-600',
      link: '#',
      company: 'Eastern University'
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className="mb-3">
                  <span className="text-sm font-semibold text-blue-400">{project.company}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 rounded-lg text-sm font-medium text-purple-300 border border-gray-600"
                    >
                      {tech}
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
