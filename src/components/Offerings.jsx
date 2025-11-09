import React from 'react';

const cards = [
  {
    title: 'For Organizations',
    body: 'Hyper-personalized EAP, leadership wellbeing, and adaptive engagement plans that grow with your culture.',
    cta: 'Request Proposal',
    href: '#contact',
  },
  {
    title: 'For Colleges & Schools',
    body: 'Student counseling ecosystem, resilience workshops, crisis support, and a campus-safe confidentiality model.',
    cta: 'Talk to Our Team',
    href: '#contact',
  },
];

function Offerings() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Paths that meet you where you are</h2>
        <p className="mt-2 text-gray-700">Every team and campus is different. Choose a path to explore how we adapt.</p>
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="group relative overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 hover:bg-emerald-50 transition">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-emerald-100 to-sky-100 rounded-full blur-2xl opacity-60 pointer-events-none" aria-hidden="true" />
              <h3 className="text-xl font-medium text-gray-900">{c.title}</h3>
              <p className="mt-2 text-gray-700 leading-relaxed">{c.body}</p>
              <a href={c.href} className="mt-6 inline-flex text-emerald-700 hover:text-emerald-800 font-medium">
                {c.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offerings;
