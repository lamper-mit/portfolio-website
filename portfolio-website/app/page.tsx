import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
// import Blog from './components/Blog';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        {/* <Blog /> */}
        <Contact />
      </main>

      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2026 Mitchell Lamper. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
