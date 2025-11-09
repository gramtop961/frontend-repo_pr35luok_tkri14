import React from 'react';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-emerald-100/70 to-sky-100/60 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-sky-100/70 to-emerald-100/60 blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-40" role="img" aria-label="decorative thread lines">
          <defs>
            <linearGradient id="thread" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a7f3d0" />
              <stop offset="100%" stopColor="#bae6fd" />
            </linearGradient>
          </defs>
          <path d="M0,120 C200,60 400,180 600,120 C800,60 1000,180 1200,120" fill="none" stroke="url(#thread)" strokeWidth="1.5" />
          <path d="M0,200 C220,140 420,260 620,200 C820,140 1020,260 1220,200" fill="none" stroke="url(#thread)" strokeWidth="1" />
          <path d="M0,280 C180,220 420,340 600,280 C820,220 1040,340 1240,280" fill="none" stroke="url(#thread)" strokeWidth="0.75" />
        </svg>
      </div>
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <p className="text-sm tracking-wide text-emerald-700/80 uppercase">Calm, personal, science-informed</p>
          <h1 className="mt-3 text-4xl sm:text-5xl leading-tight font-semibold text-gray-900">
            India’s First Hyper-Personalized Wellbeing Solution
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            No two minds are the same. Your care shouldn’t be either. Every mind is different. Support should be too.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-emerald-700 transition">
              Book a Demo
            </a>
            <a href="#find-therapist" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-emerald-700 font-medium ring-1 ring-emerald-300/70 hover:bg-emerald-50 transition">
              Find a Therapist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
