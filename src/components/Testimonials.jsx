import React from 'react';

const testimonials = [
  {
    quote:
      'The first time our team actually used a wellbeing service. Utilization tripled because people felt truly seen.',
    author: 'VP People, Series B SaaS',
  },
  {
    quote:
      'Students reported a calmer environment and better peer support after the workshops. Sensitive, effective, human.',
    author: 'Dean of Students, University',
  },
  {
    quote:
      'Leadership sessions helped managers respond with empathy while staying outcome-focused. Culture shifted.',
    author: 'Business Unit Head, Manufacturing',
  },
];

function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Evidence, gently told</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <blockquote className="text-gray-800 leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-gray-600">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-8 text-center">
          <div className="flex-1">
            <div className="text-3xl font-semibold text-gray-900">3x</div>
            <div className="text-gray-600">Average utilization</div>
          </div>
          <div className="flex-1">
            <div className="text-3xl font-semibold text-gray-900">94%</div>
            <div className="text-gray-600">Satisfaction</div>
          </div>
          <div className="flex-1">
            <div className="text-3xl font-semibold text-gray-900">+32%</div>
            <div className="text-gray-600">Engagement impact</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
