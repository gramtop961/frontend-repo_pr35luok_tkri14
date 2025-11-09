import React from 'react';
import Hero from './components/Hero';
import Offerings from './components/Offerings';
import Testimonials from './components/Testimonials';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-[conic-gradient(at_0%_0%,#f8fafc, #f7f8f5, #eefcf6)] text-gray-900">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-emerald-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-gray-900">Unravel Minds</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#solutions" className="text-gray-700 hover:text-gray-900">Solutions</a>
            <a href="#find-therapist" className="text-gray-700 hover:text-gray-900">Find a Therapist</a>
            <a href="#resources" className="text-gray-700 hover:text-gray-900">Resources</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-full bg-emerald-600 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-700">Book a Demo</a>
        </div>
      </header>

      <main>
        <Hero />
        <section id="solutions">
          <Offerings />
        </section>
        <section aria-label="Testimonials and outcomes">
          <Testimonials />
        </section>
        <FooterCTA />
      </main>

      <footer className="py-8 border-t border-emerald-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Unravel Minds. Every mind is different. Support should be too.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Accessibility</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
