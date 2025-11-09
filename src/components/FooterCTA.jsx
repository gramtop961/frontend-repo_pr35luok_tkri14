import React from 'react';

function FooterCTA() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Ready to breathe easier?</h2>
        <p className="mt-3 text-gray-700">Talk to our team about a plan that adapts to your people. Don’t solve, evolve.</p>
        <form className="mt-8 grid sm:grid-cols-2 gap-4 text-left">
          <input type="text" name="name" required placeholder="Full name" className="w-full rounded-xl border border-emerald-200/70 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-300" />
          <input type="email" name="email" required placeholder="Work email" className="w-full rounded-xl border border-emerald-200/70 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-300" />
          <input type="text" name="org" placeholder="Organization / Institute" className="w-full rounded-xl border border-emerald-200/70 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-300 sm:col-span-2" />
          <textarea name="message" rows="4" placeholder="What would you like to explore?" className="w-full rounded-xl border border-emerald-200/70 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-300 sm:col-span-2" />
          <button type="submit" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-emerald-700 transition sm:col-span-2">
            Book a Discovery Call
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">We respect your privacy. Your details are kept confidential.</p>
      </div>
    </section>
  );
}

export default FooterCTA;
