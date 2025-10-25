import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-white">MIS Realty · Philadelphia</h3>
          <p className="mt-3 text-slate-400 max-w-sm">
            Helping buyers and sellers across the Greater Philadelphia area make confident real estate decisions.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-slate-400" />
              <span>123 Liberty Plaza, Suite 400, Philadelphia, PA 19103</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-slate-400" />
              <a href="tel:(215)555-0100" className="hover:text-white">(215) 555-0100</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-slate-400" />
              <a href="mailto:hello@misrealty.com" className="hover:text-white">hello@misrealty.com</a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Quick links</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#listings" className="text-slate-300 hover:text-white">Listings</a></li>
                <li><a href="#team" className="text-slate-300 hover:text-white">Our Team</a></li>
                <li><a href="#top" className="text-slate-300 hover:text-white">Top</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wide uppercase">Send a message</h4>
              <form className="mt-4 grid grid-cols-1 gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input type="text" placeholder="Your name" className="w-full rounded-md bg-slate-800 text-slate-100 placeholder-slate-400 border border-slate-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500" />
                  <input type="email" placeholder="Email" className="w-full rounded-md bg-slate-800 text-slate-100 placeholder-slate-400 border border-slate-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500" />
                </div>
                <textarea rows="4" placeholder="How can we help you?" className="w-full rounded-md bg-slate-800 text-slate-100 placeholder-slate-400 border border-slate-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500" />
                <button type="button" className="inline-flex justify-center rounded-md bg-white text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-slate-100 w-max">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between text-xs text-slate-400">
          <p>© {new Date().getFullYear()} MIS Realty. All rights reserved.</p>
          <p>Brokered in PA • Equal Housing Opportunity</p>
        </div>
      </div>
    </footer>
  );
}
