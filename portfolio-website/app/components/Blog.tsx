'use client';

export default function Blog() {
  const articles = [
    {
      title: 'Achieving 96% Similarity in Diffusion Model Fine-Tuning',
      excerpt: 'Deep dive into the techniques I used to achieve 96% similarity scores on custom avatars using LoRA fine-tuning, including optimal learning rates, batch sizes, and the role of IP Adapter.',
      date: 'Jan 12, 2026',
      category: 'Generative AI',
      readTime: '10 min read',
      link: '#'
    },
    {
      title: 'Building Auto Prompt Optimizers: From Concept to Production',
      excerpt: 'How I developed a prompt optimization workflow at Kroll that analyzes clarity, conciseness, and hallucination risk. Learn the framework for systematically improving LLM outputs.',
      date: 'Jan 8, 2026',
      category: 'Prompt Engineering',
      readTime: '8 min read',
      link: '#'
    },
    {
      title: 'RLHF in Practice: Training Multi-Modal Models',
      excerpt: 'Practical insights from training multi-modal LLMs using Reinforcement Learning from Human Feedback. Explore loss patterns, evaluation rubrics, and instruction following metrics.',
      date: 'Jan 3, 2026',
      category: 'Machine Learning',
      readTime: '12 min read',
      link: '#'
    },
    {
      title: 'Synthetic Training Data: Using LLMs to Train Diffusion Models',
      excerpt: 'How I created an automatic prompt generation pipeline that uses LLMs to create synthetic training data for fine-tuning diffusion models, dramatically improving dataset quality.',
      date: 'Dec 28, 2025',
      category: 'Computer Vision',
      readTime: '9 min read',
      link: '#'
    },
    {
      title: 'Optimizing Diffusion Models: Learning Rate, Alpha, and Dimensions',
      excerpt: 'A comprehensive guide to the hyperparameters that matter most in LoRA fine-tuning. Learn how to systematically optimize performance through parameter tuning.',
      date: 'Dec 20, 2025',
      category: 'Model Optimization',
      readTime: '11 min read',
      link: '#'
    },
    {
      title: 'Multi-Modal LLMs for Image Regularization',
      excerpt: 'Using multi-modal language models to automatically determine regularization classes and scrape appropriate images for diffusion model training at scale.',
      date: 'Dec 15, 2025',
      category: 'Computer Vision',
      readTime: '7 min read',
      link: '#'
    }
  ];

  return (
    <section id="blog" className="min-h-screen py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Blog & Articles
          </span>
        </h2>

        <div className="max-w-5xl mx-auto space-y-6">
          {articles.map((article, idx) => (
            <a
              key={idx}
              href={article.link}
              className="block group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 md:p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-blue-600/20 border border-blue-500 rounded-full text-sm font-medium text-blue-400 mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                    {article.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
                <span className="ml-auto text-blue-400 group-hover:text-purple-400 font-semibold transition-colors">
                  Read More →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-4 border-2 border-blue-400 rounded-full font-semibold text-lg hover:bg-blue-400/10 transition-all duration-200"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}
